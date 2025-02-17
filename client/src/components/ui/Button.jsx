import React from 'react';

export const Button = React.forwardRef(({ 
  className = '', 
  variant = 'default', 
  size = 'default', 
  ...props 
}, ref) => {
  const baseStyles = 'inline-flex items-center justify-center rounded-md text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-zinc-950 focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50';
  
  const variants = {
    default: 'bg-zinc-900 text-zinc-50 hover:bg-zinc-900/90',
    outline: 'border border-zinc-200 bg-white hover:bg-zinc-100 hover:text-zinc-900',
    ghost: 'hover:bg-zinc-100 hover:text-zinc-900'
  };
  
  const sizes = {
    default: 'h-10 px-4 py-2',
    sm: 'h-9 rounded-md px-3',
    lg: 'h-11 rounded-md px-8'
  };

  return (
    <button
      className={`
        ${baseStyles}
        ${variants[variant]}
        ${sizes[size]}
        ${className}
      `}
      ref={ref}
      {...props}
    />
  );
});
Button.displayName = 'Button';