'use client';

import React, { useState } from 'react';
import { DoaItem } from '@/types';

interface DoaProps {
  singleDoa: DoaItem;
}

const Doa: React.FC<DoaProps> = ({ singleDoa }) => {
  const { serial, title, description, arabic_doa, transliteration, translate, translate_bn } = singleDoa;
  const [copied, setCopied] = useState(false);

  const handleCopy = async () => {
    try {
      const textToCopy = `${title}\n\n${arabic_doa}\n\nTransliteration:\n${transliteration}\n\nTranslation:\n${translate}${translate_bn ? `\n\nবাংলা অনুবাদ:\n${translate_bn}` : ''}`;
      await navigator.clipboard.writeText(textToCopy);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch {
      // Fallback
    }
  };

  return (
    <div className='single-doa'>
      <div className="doa-header">
        <div className="doa-title-group">
          <span className="doa-badge">Dua #{serial}</span>
          <h3 className='title'>{title}</h3>
        </div>
        <button
          onClick={handleCopy}
          className={`copy-button ${copied ? 'copied' : ''}`}
          title="Copy Dua text"
          aria-label="Copy Dua text"
        >
          {copied ? (
            <>
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                <polyline points="20 6 9 17 4 12"></polyline>
              </svg>
              <span>Copied!</span>
            </>
          ) : (
            <>
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <rect x="9" y="9" width="13" height="13" rx="2" ry="2"></rect>
                <path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1"></path>
              </svg>
              <span>Copy</span>
            </>
          )}
        </button>
      </div>

      <p className='description'>{description}</p>

      {/* Arabic Calligraphy Container */}
      <div className="arabic-box">
        <p className='arabic-doa' dir="rtl">{arabic_doa}</p>
      </div>

      {/* Transliteration */}
      <div className="doa-section-block">
        <span className="section-label">Transliteration</span>
        <p className="transliteration-text">{transliteration}</p>
      </div>

      {/* Translation */}
      <div className="doa-section-block">
        <span className="section-label">Meaning</span>
        <p className="translate-en">"{translate}"</p>
        {translate_bn && (
          <p className="translate-bn">{translate_bn}</p>
        )}
      </div>
    </div>
  );
};

export default Doa;
