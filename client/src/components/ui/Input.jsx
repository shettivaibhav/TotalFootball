import React from 'react';

export const Input = React.forwardRef(({ className = '', type, ...props }, ref) => {
  return (
    <input
      type={type}
      className={`
        flex h-10 w-full rounded-md border border-zinc-200 
        bg-white px-3 py-2 text-sm ring-offset-white 
        file:border-0 file:bg-transparent file:text-sm file:font-medium 
        placeholder:text-zinc-500 focus-visible:outline-none 
        focus-visible:ring-2 focus-visible:ring-zinc-950 
        focus-visible:ring-offset-2 disabled:cursor-not-allowed 
        disabled:opacity-50 ${className}
      `}
      ref={ref}
      {...props}
    />
  );
});
Input.displayName = 'Input';