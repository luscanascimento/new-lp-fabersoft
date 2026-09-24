import React, { useEffect, useState } from 'react';
import { useTypewriter } from '../../hooks/useTypewriter';

const codeSnippets = [
  "const cluster = new K8sCluster('prod-env', { nodes: 12 });\nawait cluster.deploy({ service: 'ai-agent', replicas: 3 });",
  "function optimizeOEE(data: IoTStream): number {\n  return data.availability * data.performance * data.quality;\n}",
  "async function syncERP(payload: OrderData) {\n  const res = await api.post('/v1/erp/sync', payload);\n  if (res.status === 201) log.info('Synced!');\n}",
  "type MachineStatus = 'RUNNING' | 'IDLE' | 'SETUP' | 'ERROR';\nexport interface MESNode { id: string; status: MachineStatus; }",
  "// Initializing neural network parameters\nmodel.compile({ optimizer: 'adam', loss: 'mse' });\nmodel.fit(dataset, { epochs: 100 });",
  "import { Factory } from '@fabersoft/core';\nconst node = new Factory.Node('CNC_01');",
  "interface APIResponse {\n  success: boolean;\n  data: Payload;\n}",
  "function detectAnomaly(sensorData) {\n  return ai.analyze(sensorData).score > 0.8;\n}"
];

const AnimatedSnippet: React.FC<{ initialCode: string, top: string, left: string, initialDelay: number }> = ({ initialCode, top, left, initialDelay }) => {
  const [code, setCode] = useState(initialCode);
  const [delay, setDelay] = useState(initialDelay);
  const [key, setKey] = useState(0);
  const { displayedText, isComplete } = useTypewriter(code, 20, delay);

  useEffect(() => {
    if (isComplete) {
      const timer = setTimeout(() => {
        // Change code and restart typing
        setCode(codeSnippets[Math.floor(Math.random() * codeSnippets.length)]);
        setDelay(1000 + Math.random() * 3000);
        setKey(prev => prev + 1);
      }, 4000 + Math.random() * 4000); // Wait before fading out/typing new
      return () => clearTimeout(timer);
    }
  }, [isComplete]);

  return (
    <pre 
      key={key}
      className={`absolute font-mono text-[10px] sm:text-xs text-faber-blue-royal/20 whitespace-pre-wrap transition-opacity duration-1000 ${isComplete ? 'opacity-10' : 'opacity-30'}`}
      style={{
        top: top,
        left: left,
        transform: 'rotate(-5deg) scale(0.9)',
      }}
    >
      {displayedText}
      {!isComplete && <span className="animate-pulse">_</span>}
    </pre>
  );
};

export const BackgroundCode: React.FC = () => {
  const [lines, setLines] = useState<{ id: number; code: string; top: string; left: string; delay: number }[]>([]);

  useEffect(() => {
    const newLines = Array.from({ length: 8 }).map((_, i) => ({
      id: i,
      code: codeSnippets[Math.floor(Math.random() * codeSnippets.length)],
      top: `${10 + Math.random() * 80}%`,
      left: `${10 + Math.random() * 80}%`,
      delay: Math.random() * 5000,
    }));
    setLines(newLines);
  }, []);

  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none z-0" aria-hidden="true">
      {lines.map(line => (
        <AnimatedSnippet key={line.id} initialCode={line.code} top={line.top} left={line.left} initialDelay={line.delay} />
      ))}
    </div>
  );
};
