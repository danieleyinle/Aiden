import React, { useRef } from 'react';
import { AlertCircle } from 'lucide-react';
import './ReportButton.css';

const ReportButton = ({ onClick, title = 'Report Incident' }) => {
  const ref = useRef(null);

  const handlePointerMove = (e) => {
    const el = ref.current;
    if (!el) return;
    const rect = el.getBoundingClientRect();
    const clientX = e.touches ? e.touches[0].clientX : e.clientX;
    const clientY = e.touches ? e.touches[0].clientY : e.clientY;
    const x = ((clientX - rect.left) / rect.width) * 100;
    const y = ((clientY - rect.top) / rect.height) * 100;
    el.style.setProperty('--mouse-x', `${x}%`);
    el.style.setProperty('--mouse-y', `${y}%`);
  };

  const handlePointerLeave = () => {
    const el = ref.current;
    if (!el) return;
    el.style.setProperty('--mouse-x', '50%');
    el.style.setProperty('--mouse-y', '50%');
  };

  return (
    <button
      ref={ref}
      className="report-fab glow-button"
      onClick={onClick}
      onMouseMove={handlePointerMove}
      onTouchMove={handlePointerMove}
      onMouseLeave={handlePointerLeave}
      title={title}
      aria-label={title}
      type="button"
    >
      <div className="btn-glow"></div>
      <span className="btn-content">
        <AlertCircle className="fab-icon" />
        <span className="fab-text">{title}</span>
      </span>
    </button>
  );
};

export default ReportButton;