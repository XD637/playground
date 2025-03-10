"use client";
import "xenconnect/dist/tailwind.css";

import { XenConnectProvider } from "xenconnect"; // Import XenConnectProvider
import { QueryClient, QueryClientProvider } from "@tanstack/react-query"; // Import QueryClient
import "./globals.css";

const queryClient = new QueryClient(); // Create a QueryClient instance

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <QueryClientProvider client={queryClient}> {/* ✅ Wrap with QueryClientProvider */}
          <XenConnectProvider projectId="6d265c3d6947690ba8372a55d61a8005" appName="XenConnect">
            {children}
          </XenConnectProvider>
        </QueryClientProvider>
      </body>
    </html>
  );
}
