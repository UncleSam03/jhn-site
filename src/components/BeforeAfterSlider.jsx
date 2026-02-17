import React, { useState, useRef, useEffect } from 'react';

const BeforeAfterSlider = ({ before, after }) => {
  const [sliderPos, setSliderPos] = useState(50);
  const containerRef = useRef(null);

  const handleMove = (e) => {
    if (!containerRef.current) return;
    const rect = containerRef.current.getBoundingClientRect();
    const x = (e.pageX || e.touches[0].pageX) - rect.left;
    const pos = Math.max(0, Math.min(100, (x / rect.width) * 100));
    setSliderPos(pos);
  };

  const handleMouseDown = () => {
    window.addEventListener('mousemove', handleMove);
    window.addEventListener('mouseup', handleMouseUp);
  };

  const handleMouseUp = () => {
    window.removeEventListener('mousemove', handleMove);
    window.removeEventListener('mouseup', handleMouseUp);
  };

  const handleTouchStart = () => {
    window.addEventListener('touchmove', handleMove);
    window.addEventListener('touchend', handleTouchEnd);
  };

  const handleTouchEnd = () => {
    window.removeEventListener('touchmove', handleMove);
    window.removeEventListener('touchend', handleTouchEnd);
  };

  return (
    <div 
      className="slider-container" 
      ref={containerRef}
      onMouseDown={handleMouseDown}
      onTouchStart={handleTouchStart}
    >
      <img src={after} alt="After" className="slider-image slider-after" />
      <div 
        className="slider-image slider-before" 
        style={{ clipPath: `inset(0 ${100 - sliderPos}% 0 0)` }}
      >
        <img src={before} alt="Before" className="slider-image" />
      </div>
      <div 
        className="slider-handle" 
        style={{ left: `${sliderPos}%` }}
      />
      <div className="slider-label before-label" style={{ opacity: sliderPos > 10 ? 1 : 0 }}>Before</div>
      <div className="slider-label after-label" style={{ opacity: sliderPos < 90 ? 1 : 0 }}>After</div>
      
      <style>{`
        .slider-label {
          position: absolute;
          top: 10px;
          background: rgba(0,0,0,0.5);
          color: white;
          padding: 4px 12px;
          border-radius: 4px;
          font-size: 0.8rem;
          font-weight: 600;
          pointer-events: none;
          z-index: 4;
          transition: opacity 0.3s;
        }
        .before-label { left: 10px; }
        .after-label { right: 10px; }
      `}</style>
    </div>
  );
};

export default BeforeAfterSlider;
