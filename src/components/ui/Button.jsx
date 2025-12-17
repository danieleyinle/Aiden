import React, { useEffect } from 'react';
import './Button.css';

const Button = ({ 
  children, 
  variant = 'primary', 
  onClick, 
  icon: Icon,
  iconPosition = 'right',
  disabled = false,
  fullWidth = false,
  size = 'medium',
  type = 'button',
  className = ''
}) => {
  
  // Mouse glow effect
  useEffect(() => {
    const handleMouseMove = (e) => {
      const buttons = document.querySelectorAll('.btn-glow-effect');
      buttons.forEach(button => {
        const rect = button.getBoundingClientRect();
        const x = e.clientX - rect.left;
        const y = e.clientY - rect.top;
        
        button.style.setProperty('--mouse-x', `${x}px`);
        button.style.setProperty('--mouse-y', `${y}px`);
      });
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  const buttonClasses = `
    btn-glow-effect
    btn-base
    btn-${variant}
    btn-${size}
    ${fullWidth ? 'btn-full-width' : ''}
    ${disabled ? 'btn-disabled' : ''}
    ${className}
  `.trim().replace(/\s+/g, ' ');

  return (
    <button
      type={type}
      className={buttonClasses}
      onClick={onClick}
      disabled={disabled}
    >
      <div className="btn-glow-layer"></div>
      <span className="btn-content-wrapper">
        {Icon && iconPosition === 'left' && (
          <Icon className="btn-icon btn-icon-left" />
        )}
        <span className="btn-text">{children}</span>
        {Icon && iconPosition === 'right' && (
          <Icon className="btn-icon btn-icon-right" />
        )}
      </span>
    </button>
  );
};

export default Button;