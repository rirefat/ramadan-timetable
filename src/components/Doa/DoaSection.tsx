'use client';

import React, { useState } from 'react';
import Doa from './Doa';
import { DoaItem } from '@/types';

interface DoaSectionProps {
  doaData: DoaItem[];
}

const DoaSection: React.FC<DoaSectionProps> = ({ doaData }) => {
  const [activeFilter, setActiveFilter] = useState<'all' | 'fasting' | 'iftar' | 'istighfar'>('all');

  const filteredDoas = activeFilter === 'all'
    ? doaData
    : doaData.filter((d) => d.tag === activeFilter);

  return (
    <div className="doa-container">
      {/* Category Pills for quick access */}
      <div className="doa-nav">
        <button
          onClick={() => setActiveFilter('all')}
          className={`doa-nav-btn ${activeFilter === 'all' ? 'active' : ''}`}
        >
          All Duas ({doaData.length})
        </button>
        <button
          onClick={() => setActiveFilter('fasting')}
          className={`doa-nav-btn ${activeFilter === 'fasting' ? 'active' : ''}`}
        >
          Sahoor (Fasting)
        </button>
        <button
          onClick={() => setActiveFilter('iftar')}
          className={`doa-nav-btn ${activeFilter === 'iftar' ? 'active' : ''}`}
        >
          Iftar
        </button>
        <button
          onClick={() => setActiveFilter('istighfar')}
          className={`doa-nav-btn ${activeFilter === 'istighfar' ? 'active' : ''}`}
        >
          Istighfar
        </button>
      </div>

      {/* Doa Cards List */}
      <div className="doa-cards-list">
        {filteredDoas.map((singleDoa) => (
          <Doa key={singleDoa.serial} singleDoa={singleDoa} />
        ))}
      </div>
    </div>
  );
};

export default DoaSection;
