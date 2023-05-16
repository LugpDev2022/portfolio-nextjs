import { createContext } from 'react';
import { ContextValues } from './types';

export const PositionsContext = createContext<ContextValues | null>(null);
