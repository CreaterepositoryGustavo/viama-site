import React from 'react';
export function Card({ className='', children }) {return <div className={`bg-white/90 border rounded-2xl shadow-sm ${className}`}>{children}</div>;}
export function CardHeader({ children, className='' }) {return <div className={`p-5 border-b ${className}`}>{children}</div>;}
export function CardTitle({ children, className='' }) {return <h3 className={`font-semibold text-lg ${className}`}>{children}</h3>;}
export function CardContent({ children, className='' }) {return <div className={`p-5 ${className}`}>{children}</div>;}
