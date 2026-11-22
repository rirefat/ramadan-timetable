'use client';

import { useEffect } from 'react';

const KursorEffect: React.FC = () => {
  useEffect(() => {
    const link = document.createElement('link');
    link.rel = 'stylesheet';
    link.href = 'https://unpkg.com/kursor/dist/kursor.css';
    document.head.appendChild(link);

    const script = document.createElement('script');
    script.src = 'https://cdn.jsdelivr.net/npm/kursor@0.0.14/dist/kursor.js';
    script.async = true;
    script.onload = () => {
      // @ts-expect-error kursor is loaded externally via CDN
      if (typeof window !== 'undefined' && window.kursor) {
        // @ts-expect-error kursor constructor
        new window.kursor({
          type: 1,
          removeDefaultCursor: true,
          color: '#020845',
        });
      }
    };
    document.body.appendChild(script);

    return () => {
      if (link.parentNode) link.parentNode.removeChild(link);
      if (script.parentNode) script.parentNode.removeChild(script);
    };
  }, []);

  return null;
};

export default KursorEffect;
