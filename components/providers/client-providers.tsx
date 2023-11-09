"use client";

import { QueryClient } from "@tanstack/query-core";
import { QueryClientProvider } from "@tanstack/react-query";
import { FC, ReactNode } from "react";

interface LayoutProps {
    children: ReactNode;
}

const queryClient = new QueryClient();

const ClientProviders: FC<LayoutProps> = ({ children }) => {
    return (
        <QueryClientProvider client={queryClient}>{children}</QueryClientProvider>
    );
};

export default ClientProviders;
