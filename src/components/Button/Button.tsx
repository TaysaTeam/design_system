// src/components/Button/Button.tsx
import React from 'react';

type ButtonProps = {
  label: string;
  onClick?: () => void;
};

export const Button = ({ label, onClick }: ButtonProps) => (
  <button
    onClick={onClick}
    style={{
      padding: '8px 16px',
      backgroundColor: '#1E90FF',
      color: 'white',
      border: 'none',
      borderRadius: '4px',
      cursor: 'pointer',
    }}
  >
    {label}
  </button>
);
