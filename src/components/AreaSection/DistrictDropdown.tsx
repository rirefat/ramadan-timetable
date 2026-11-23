'use client';

import React, { useState, useRef, useEffect, useMemo } from 'react';
import { useLocation } from '@/context/LocationContext';
import { District } from '@/data/districtsData';

interface DivisionItem {
  id: string;
  name: string;
  bn: string;
}

const DIVISIONS: DivisionItem[] = [
  { id: 'All', name: 'All', bn: 'সব' },
  { id: 'Dhaka', name: 'Dhaka', bn: 'ঢাকা' },
  { id: 'Chattogram', name: 'Chattogram', bn: 'চট্টগ্রাম' },
  { id: 'Rajshahi', name: 'Rajshahi', bn: 'রাজশাহী' },
  { id: 'Khulna', name: 'Khulna', bn: 'খুলনা' },
  { id: 'Barishal', name: 'Barishal', bn: 'বরিশাল' },
  { id: 'Sylhet', name: 'Sylhet', bn: 'সিলেট' },
  { id: 'Rangpur', name: 'Rangpur', bn: 'রংপুর' },
  { id: 'Mymensingh', name: 'Mymensingh', bn: 'ময়মনসিংহ' },
];

const DIVISION_BN_MAP: Record<string, string> = {
  Dhaka: 'ঢাকা',
  Chattogram: 'চট্টগ্রাম',
  Rajshahi: 'রাজশাহী',
  Khulna: 'খুলনা',
  Barishal: 'বরিশাল',
  Sylhet: 'সিলেট',
  Rangpur: 'রংপুর',
  Mymensingh: 'ময়মনসিংহ',
};

const DistrictDropdown: React.FC = () => {
  const { currentDistrict, setDistrictById, allDistricts, isDetecting, detectLocation } = useLocation();
  const [isOpen, setIsOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedDivision, setSelectedDivision] = useState('All');
  const dropdownRef = useRef<HTMLDivElement>(null);
  const searchInputRef = useRef<HTMLInputElement>(null);

  // Close on click outside or Escape key
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setIsOpen(false);
      }
    };

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        setIsOpen(false);
      }
    };

    if (isOpen) {
      document.addEventListener('mousedown', handleClickOutside);
      document.addEventListener('keydown', handleKeyDown);
      // Auto-focus search input when opened
      setTimeout(() => {
        searchInputRef.current?.focus();
      }, 50);
    }

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
      document.removeEventListener('keydown', handleKeyDown);
    };
  }, [isOpen]);

  const filteredDistricts = useMemo(() => {
    return allDistricts.filter((d: District) => {
      const matchesDivision = selectedDivision === 'All' || d.division === selectedDivision;
      const q = searchQuery.toLowerCase().trim();
      const divisionBn = DIVISION_BN_MAP[d.division] || '';
      const matchesSearch =
        !q ||
        d.name.toLowerCase().includes(q) ||
        d.bnName.includes(q) ||
        d.division.toLowerCase().includes(q) ||
        divisionBn.includes(q);
      return matchesDivision && matchesSearch;
    });
  }, [allDistricts, selectedDivision, searchQuery]);

  const handleSelectDistrict = (district: District) => {
    setDistrictById(district.id);
    setIsOpen(false);
    setSearchQuery('');
  };

  const formatOffset = (val: number) => {
    return val >= 0 ? `+${val}m` : `${val}m`;
  };

  return (
    <div className="custom-district-selector" ref={dropdownRef}>
      {/* Trigger Button */}
      <div className="selector-trigger-wrapper">
        <button
          type="button"
          onClick={() => setIsOpen(!isOpen)}
          className={`selector-trigger ${isOpen ? 'active' : ''}`}
          aria-haspopup="listbox"
          aria-expanded={isOpen}
        >
          <div className="trigger-content">
            <span className="trigger-pin-icon">
              <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path>
                <circle cx="12" cy="10" r="3"></circle>
              </svg>
            </span>
            <div className="trigger-text">
              <span className="district-main-name">{currentDistrict.name}</span>
              <span className="district-bn-tag">{currentDistrict.bnName}</span>
            </div>
            <span className="trigger-offset-pill">
              {formatOffset(currentDistrict.sehriOffset)} / {formatOffset(currentDistrict.ifterOffset)}
            </span>
          </div>

          <span className={`trigger-arrow ${isOpen ? 'rotated' : ''}`}>
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
              <polyline points="6 9 12 15 18 9"></polyline>
            </svg>
          </span>
        </button>

        {/* GPS Quick Detect Button */}
        <button
          type="button"
          onClick={detectLocation}
          className={`gps-quick-btn ${isDetecting ? 'detecting' : ''}`}
          title="Auto-detect nearest district via GPS"
          aria-label="Auto-detect nearest district"
        >
          {isDetecting ? (
            <span className="radar-spinner"></span>
          ) : (
            <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
              <circle cx="12" cy="12" r="10"></circle>
              <polygon points="12 2 15 8 12 14 9 8 12 2"></polygon>
            </svg>
          )}
        </button>
      </div>

      {/* Floating Animated Dropdown Menu */}
      {isOpen && (
        <div className="dropdown-panel animate-pop-in">
          {/* Panel Header: Auto Detect Banner */}
          <div className="panel-header">
            <button
              type="button"
              onClick={() => {
                detectLocation();
                setIsOpen(false);
              }}
              className="auto-detect-card"
            >
              <div className="radar-icon-wrap">
                <span className="radar-ping"></span>
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                  <polygon points="3 11 22 2 13 21 11 13 3 11"></polygon>
                </svg>
              </div>
              <div className="auto-detect-info">
                <span className="auto-detect-title">Auto-Detect District</span>
                <span className="auto-detect-subtitle">Use GPS to calibrate timing instantly</span>
              </div>
            </button>
          </div>

          {/* Search Box */}
          <div className="panel-search-box">
            <svg className="search-icon" width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
              <circle cx="11" cy="11" r="8"></circle>
              <line x1="21" y1="21" x2="16.65" y2="16.65"></line>
            </svg>
            <input
              ref={searchInputRef}
              type="text"
              placeholder="Search district (e.g. Khulna, মাগুরা)..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="search-input"
            />
            {searchQuery && (
              <button
                type="button"
                onClick={() => setSearchQuery('')}
                className="clear-search-btn"
                title="Clear"
              >
                ✕
              </button>
            )}
          </div>

          {/* Division Filter Section */}
          <div className="division-section">
            <div className="division-section-header">
              <span className="division-section-title">Divisions of Bangladesh</span>
              {selectedDivision !== 'All' ? (
                <button
                  type="button"
                  onClick={() => setSelectedDivision('All')}
                  className="division-reset-tag"
                  title="Clear division filter"
                >
                  Show All ({allDistricts.length})
                </button>
              ) : (
                <span className="division-count-badge">8 Divisions</span>
              )}
            </div>
            <div className="division-pills-bar">
              {DIVISIONS.map((div) => {
                const isActive = selectedDivision === div.id;
                return (
                  <button
                    key={div.id}
                    type="button"
                    onClick={() => setSelectedDivision(div.id)}
                    className={`division-pill ${isActive ? 'active' : ''}`}
                    title={`${div.name} Division (${div.bn})`}
                  >
                    <span className="div-en">{div.name}</span>
                    <span className="div-bn">{div.bn}</span>
                  </button>
                );
              })}
            </div>
          </div>

          {/* District Options List */}
          <div className="district-list" role="listbox">
            {filteredDistricts.length > 0 ? (
              filteredDistricts.map((district) => {
                const isSelected = district.id === currentDistrict.id;
                return (
                  <button
                    key={district.id}
                    type="button"
                    onClick={() => handleSelectDistrict(district)}
                    className={`district-item ${isSelected ? 'selected' : ''}`}
                    role="option"
                    aria-selected={isSelected}
                  >
                    <div className="item-names">
                      <span className="item-en-name">{district.name}</span>
                      <span className="item-bn-name">({district.bnName})</span>
                      <span className="item-division-tag">{district.division}</span>
                    </div>

                    <div className="item-right">
                      <div className="item-offsets">
                        <span className="offset-badge sehri">
                          S: {formatOffset(district.sehriOffset)}
                        </span>
                        <span className="offset-badge ifter">
                          I: {formatOffset(district.ifterOffset)}
                        </span>
                      </div>
                      {isSelected && (
                        <span className="check-icon">
                          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
                            <polyline points="20 6 9 17 4 12"></polyline>
                          </svg>
                        </span>
                      )}
                    </div>
                  </button>
                );
              })
            ) : (
              <div className="no-results">
                <p>No district found matching "{searchQuery}"</p>
                <button
                  type="button"
                  onClick={() => {
                    setSearchQuery('');
                    setSelectedDivision('All');
                  }}
                  className="reset-filter-btn"
                >
                  Reset Filters
                </button>
              </div>
            )}
          </div>

          {/* Footer Info */}
          <div className="panel-footer">
            <span>Official Islamic Foundation Bangladesh timing adjustments</span>
          </div>
        </div>
      )}
    </div>
  );
};

export default DistrictDropdown;
