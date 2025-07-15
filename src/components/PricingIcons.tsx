import React from 'react';
import { CircleCheck, CircleX } from 'lucide-react';

// Reusable icon components using Lucide
export const CircleCheckIcon = () => <CircleCheck size={20} />;
export const CircleXIcon = () => <CircleX size={20} />;

// Helper function to create feature objects
export const createFeature = (text: string, included: boolean = true) => ({
  icon: included ? <CircleCheckIcon /> : <CircleXIcon />,
  text,
  included
}); 