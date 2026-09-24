import { useState, useEffect } from 'react';

export function useTypewriter(htmlString: string, speed: number = 30, delay: number = 0) {
  const [displayedText, setDisplayedText] = useState('');
  const [isTyping, setIsTyping] = useState(false);
  const [isComplete, setIsComplete] = useState(false);

  useEffect(() => {
    let timeoutId: NodeJS.Timeout;
    setDisplayedText('');
    setIsComplete(false);

    if (!htmlString) {
      setIsComplete(true);
      return;
    }

    // Parse HTML string into tokens: tags and text characters
    const tokens: string[] = [];
    let i = 0;
    while (i < htmlString.length) {
      if (htmlString[i] === '<') {
        let tag = '';
        while (i < htmlString.length && htmlString[i] !== '>') {
          tag += htmlString[i];
          i++;
        }
        tag += '>';
        tokens.push(tag);
        i++;
      } else if (htmlString[i] === '&') {
        let entity = '';
        while (i < htmlString.length && htmlString[i] !== ';') {
          entity += htmlString[i];
          i++;
        }
        entity += ';';
        tokens.push(entity);
        i++;
      } else {
        tokens.push(htmlString[i]);
        i++;
      }
    }

    let currentIdx = 0;
    let currentHtml = '';

    const typeChar = () => {
      if (currentIdx < tokens.length) {
        let isTag = tokens[currentIdx].startsWith('<');
        
        currentHtml += tokens[currentIdx];
        currentIdx++;
        
        // If it's a tag, append all consecutive tags without delay
        while(currentIdx < tokens.length && tokens[currentIdx].startsWith('<')) {
           currentHtml += tokens[currentIdx];
           currentIdx++;
        }
        
        setDisplayedText(currentHtml);
        
        timeoutId = setTimeout(typeChar, speed + (Math.random() * speed * 0.5));
      } else {
        setIsTyping(false);
        setIsComplete(true);
      }
    };

    timeoutId = setTimeout(() => {
      setIsTyping(true);
      typeChar();
    }, delay);

    return () => clearTimeout(timeoutId);
  }, [htmlString, speed, delay]);

  return { displayedText, isTyping, isComplete };
}
