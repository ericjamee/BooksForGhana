import { ReactNode } from 'react';

interface CardProps {
  children: ReactNode;
  className?: string;
}

/**
 * Reusable card component
 */
export const Card = ({ children, className = '' }: CardProps) => {
  return (
    <div className={`card ${className}`}>
      {children}
    </div>
  );
};

