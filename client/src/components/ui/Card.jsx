import React from 'react';

export const Card = React.forwardRef(({ className = '', children, ...props }, ref) => {
  return (
    <div
      ref={ref}
      className={`rounded-lg border border-zinc-200 bg-white text-zinc-950 shadow-sm ${className}`}
      {...props}
    >
      {children}
    </div>
  );
});
Card.displayName = 'Card';

export const CardHeader = ({ className = '', ...props }) => {
  return (
    <div
      className={`flex flex-col space-y-1.5 p-6 ${className}`}
      {...props}
    />
  );
};
CardHeader.displayName = 'CardHeader';

export const CardTitle = ({ className = '', ...props }) => {
  return (
    <h3
      className={`text-2xl font-semibold leading-none tracking-tight ${className}`}
      {...props}
    />
  );
};
CardTitle.displayName = 'CardTitle';

export const CardContent = ({ className = '', ...props }) => {
  return <div className={`p-6 pt-0 ${className}`} {...props} />;
};
CardContent.displayName = 'CardContent';