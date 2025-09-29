// src/app/layout.tsx
import './globals.css';
import type { ReactNode } from 'react';
import AuthProvider from './AuthProvider';
import Image from 'next/image'; 

export const metadata = {
  title: 'MiTiendaGPT',
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="es">
      <body className="flex h-screen bg-gray-50">
        <AuthProvider>
          <aside className="w-64 bg-neutral-900 text-white p-4 text-xl font-semibold">
            <div className="flex flex-col items-center gap-4">
         
              <div className="text-center">
                <h1 className="text-xl font-semibold">Agente AI Cotizador</h1>
                {/* 3. Añade tu eslogan aquí */}
                <p className="text-xs text-neutral-400 mt-1">
                  Tu cotización en segundos.
                </p>
              </div>
            </div>
          </aside>
          <main className="flex-1 overflow-auto bg-gray-100 p-6">
            {children}
          </main>
        </AuthProvider>
      </body>
    </html>
  );
}
