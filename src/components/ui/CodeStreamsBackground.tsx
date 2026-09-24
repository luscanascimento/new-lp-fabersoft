import React, { useEffect, useRef } from 'react';

interface CodeToken {
  text: string;
  color: string;
  bold?: boolean;
}

interface ColumnState {
  x: number;
  width: number;
  scrollY: number;
  driftSpeed: number;
  typedGlobalChar: number;
  lastTypeTime: number;
  typeSpeedMs: number;
}

export const CodeStreamsBackground: React.FC<{ className?: string }> = ({ className = '' }) => {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d', { alpha: true });
    if (!ctx) return;

    let animId: number;
    let isVisible = true;
    let width = 0;
    let height = 0;
    let dpr = 1;
    const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

    // FaberSoft brand colors for code highlighting
    const COLORS = {
      keyword: '#2448BC', // faber-blue-denim
      string: '#10B981',  // emerald-500
      punctuation: '#FAFAFA', // lotion
      number: '#DEBD54',  // faber-gold
      comment: '#434343', // faber-charcoal
      function: '#4366DB',// faber-blue-royal
    };

    const codeTemplates: CodeToken[][] = [
      [
        { text: 'import ', color: COLORS.keyword, bold: true },
        { text: '{ Injectable, Middleware } ', color: COLORS.punctuation },
        { text: 'from ', color: COLORS.keyword, bold: true },
        { text: '"@fabersoft/core";', color: COLORS.string },
      ],
      [
        { text: 'import ', color: COLORS.keyword, bold: true },
        { text: '{ Telemetry } ', color: COLORS.punctuation },
        { text: 'from ', color: COLORS.keyword, bold: true },
        { text: '"@fabersoft/observability";', color: COLORS.string },
      ],
      [
        { text: '', color: COLORS.punctuation },
      ],
      [
        { text: '@Injectable()', color: COLORS.function },
      ],
      [
        { text: 'export ', color: COLORS.keyword, bold: true },
        { text: 'class ', color: COLORS.keyword },
        { text: 'AIAgentOrchestrator ', color: COLORS.function },
        { text: '{', color: COLORS.punctuation },
      ],
      [
        { text: '  private ', color: COLORS.keyword },
        { text: 'readonly maxRetries = ', color: COLORS.punctuation },
        { text: '3;', color: COLORS.number },
      ],
      [
        { text: '  async ', color: COLORS.keyword },
        { text: 'resolveDependency(ctx: ', color: COLORS.punctuation },
        { text: 'Context', color: COLORS.function },
        { text: ') {', color: COLORS.punctuation },
      ],
      [
        { text: '    const ', color: COLORS.keyword },
        { text: 'plan = ', color: COLORS.punctuation },
        { text: 'await ', color: COLORS.keyword },
        { text: 'LLMEngine.generate({ model: ', color: COLORS.function },
        { text: '"fabersoft-v4", ', color: COLORS.string },
        { text: 'temperature: ', color: COLORS.punctuation },
        { text: '0.1 });', color: COLORS.number },
      ],
      [
        { text: '    await ', color: COLORS.keyword },
        { text: 'Telemetry.record({ latencyMs: ', color: COLORS.function },
        { text: '14.2, ', color: COLORS.number },
        { text: 'status: ', color: COLORS.punctuation },
        { text: '"SUCCESS" });', color: COLORS.string },
      ],
      [
        { text: '    return ', color: COLORS.keyword, bold: true },
        { text: 'Result.ok(plan);', color: COLORS.punctuation },
      ],
      [
        { text: '  }', color: COLORS.punctuation },
      ],
      [
        { text: '}', color: COLORS.punctuation },
      ],
      [
        { text: '// Enterprise Resource Planning Core Engine', color: COLORS.comment },
      ],
      [
        { text: 'export ', color: COLORS.keyword, bold: true },
        { text: 'const ', color: COLORS.keyword },
        { text: 'syncTransaction = (', color: COLORS.function },
        { text: 'payload: ', color: COLORS.punctuation },
        { text: 'OrderPayload', color: COLORS.function },
        { text: ') => {', color: COLORS.punctuation },
      ],
      [
        { text: '  const ', color: COLORS.keyword },
        { text: 'transaction = ', color: COLORS.punctuation },
        { text: 'new ', color: COLORS.keyword },
        { text: 'FinancialLedger.Transaction(payload);', color: COLORS.function },
      ],
      [
        { text: '  db.setTransaction(', color: COLORS.punctuation },
        { text: '"ISOLATION_LEVEL", ', color: COLORS.string },
        { text: '"SERIALIZABLE");', color: COLORS.string },
      ],
      [
        { text: '  transaction.commit();', color: COLORS.function },
      ],
      [
        { text: '};', color: COLORS.punctuation },
      ],
      [
        { text: 'const ', color: COLORS.keyword },
        { text: 'vitals = ', color: COLORS.punctuation },
        { text: 'await ', color: COLORS.keyword },
        { text: 'auditCoreWebVitals({ lcp: ', color: COLORS.function },
        { text: '"0.8s", ', color: COLORS.string },
        { text: 'cls: ', color: COLORS.punctuation },
        { text: '0.00, ', color: COLORS.number },
        { text: 'inp: ', color: COLORS.punctuation },
        { text: '"18ms" });', color: COLORS.string },
      ],
      [
        { text: 'export ', color: COLORS.keyword, bold: true },
        { text: 'default ', color: COLORS.keyword, bold: true },
        { text: 'FactoryMESController;', color: COLORS.function },
      ],
    ];

    const templateLengths = codeTemplates.map(t => t.map(tk => tk.text).join('').length);

    let columns: ColumnState[] = [];

    const initStreams = () => {
      const parent = canvas.parentElement;
      if (!parent) return;

      dpr = Math.min(window.devicePixelRatio || 1, 2);
      width = parent.clientWidth;
      height = parent.clientHeight || 1200;

      canvas.width = width * dpr;
      canvas.height = height * dpr;
      canvas.style.width = `${width}px`;
      canvas.style.height = `${height}px`;

      ctx.setTransform(1, 0, 0, 1, 0, 0);
      ctx.scale(dpr, dpr);

      const isMobile = width < 768;
      const numCols = isMobile ? 1 : width < 1280 ? 2 : 3;
      const colWidth = width / numCols;

      columns = [];

      for (let c = 0; c < numCols; c++) {
        // Start each stream at a different depth so the code fills the hero
        // vertically while the active cursor remains visible further down.
        const initialTypedLines = 18 + c * 5;
        let initialChars = 0;
        for (let i = 0; i < initialTypedLines; i++) {
          initialChars += templateLengths[i % templateLengths.length];
        }

        columns.push({
          x: c * colWidth + (isMobile ? 14 : 28),
          width: colWidth - (isMobile ? 20 : 40),
          scrollY: 0,
          driftSpeed: 0.022 + c * 0.006,
          typedGlobalChar: initialChars,
          lastTypeTime: performance.now(),
          typeSpeedMs: 22 + Math.random() * 15,
        });
      }
    };

    initStreams();
    window.addEventListener('resize', initStreams);

    let lastTime = performance.now();

    const render = (now: number) => {
      if (!isVisible) {
        lastTime = now;
        animId = requestAnimationFrame(render);
        return;
      }

      const delta = now - lastTime;
      lastTime = now;

      ctx.clearRect(0, 0, width, height);

      const lineHeight = 24;
      const font = '13px "Fira Code", ui-monospace, SFMono-Regular, monospace';

      columns.forEach((col) => {
        if (!reduceMotion) col.scrollY += delta * col.driftSpeed;

        if (!reduceMotion && now - col.lastTypeTime > col.typeSpeedMs) {
          col.lastTypeTime = now;
          col.typedGlobalChar += 1;
        }

        ctx.font = font;
        ctx.textBaseline = 'middle';

        const minLineIdx = Math.max(0, Math.floor((col.scrollY - 40) / lineHeight));
        const maxLineIdx = Math.ceil((col.scrollY + height + 60) / lineHeight);

        let cumulativeChars = 0;
        for (let i = 0; i < minLineIdx; i++) {
          cumulativeChars += templateLengths[i % templateLengths.length];
        }

        for (let lineIdx = minLineIdx; lineIdx <= maxLineIdx; lineIdx++) {
          const y = lineIdx * lineHeight - col.scrollY;
          const template = codeTemplates[lineIdx % codeTemplates.length];
          const lineLength = templateLengths[lineIdx % templateLengths.length];

          const lineStartChar = cumulativeChars;
          const lineEndChar = lineStartChar + lineLength;
          cumulativeChars = lineEndChar;

          const typedInThisLine = Math.max(0, Math.min(lineLength, col.typedGlobalChar - lineStartChar));

          if (typedInThisLine <= 0 && lineIdx * lineHeight > col.scrollY + 200) {
            continue;
          }

          // Higher contrast on the right side keeps the typing legible behind glass cards.
          let alpha = 0.38;
          if (y < 80) alpha = Math.max(0.05, y / 80) * 0.38;
          if (y > height - 30) alpha = Math.max(0.1, (height - y) / 30) * 0.38;

          // 1. Line Number
          ctx.fillStyle = '#1E2D58';
          ctx.globalAlpha = alpha * 0.6;
          const displayNum = (lineIdx % 99) + 1;
          const numStr = displayNum < 10 ? `0${displayNum}` : `${displayNum}`;
          ctx.fillText(numStr, col.x, y);

          // 2. Syntax tokens
          let drawnSoFar = 0;
          let textX = col.x + 34;

          for (const token of template) {
            if (drawnSoFar >= typedInThisLine) break;

            const remaining = typedInThisLine - drawnSoFar;
            const chunk = token.text.slice(0, remaining);

            ctx.fillStyle = token.color;
            ctx.globalAlpha = alpha;
            ctx.fillText(chunk, textX, y);

            textX += ctx.measureText(chunk).width;
            drawnSoFar += chunk.length;
          }

          // 3. Blinking Cursor
          if (typedInThisLine > 0 && typedInThisLine < lineLength) {
            const isBlink = Math.floor(now / 240) % 2 === 0;
            if (isBlink) {
              ctx.fillStyle = COLORS.function;
              ctx.globalAlpha = alpha * 1.8;
              ctx.fillRect(textX + 2, y - 6, 6, 14);
            }
          }
        }
      });

      if (!reduceMotion) animId = requestAnimationFrame(render);
    };

    animId = requestAnimationFrame(render);

    const observer = new IntersectionObserver(
      ([entry]) => {
        isVisible = entry.isIntersecting;
      },
      { threshold: 0.01 }
    );

    if (canvas.parentElement) {
      observer.observe(canvas.parentElement);
    }

    return () => {
      cancelAnimationFrame(animId);
      observer.disconnect();
      window.removeEventListener('resize', initStreams);
    };
  }, []);

  return (
    <div className={`absolute inset-0 pointer-events-none overflow-hidden select-none z-0 ${className}`}>
      <canvas
        ref={canvasRef}
        className="w-full h-full opacity-75 drop-shadow-[0_0_6px_rgba(36,72,188,0.18)]"
      />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-transparent via-[#060B1A]/20 to-[#060B1A]/80 pointer-events-none" />
    </div>
  );
};
