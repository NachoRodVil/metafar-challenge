"use client";

import { useState } from 'react';
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";


import { ReactNode } from 'react';

interface ProviderProps {
    children: ReactNode;
}

export const QueryProvider = ({ children }: ProviderProps) => {
    const [client] = useState(new QueryClient())

    return <QueryClientProvider client={client}>{children}</QueryClientProvider>
} 