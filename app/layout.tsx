import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';

const inter = Inter({ subsets: ['latin'] });

// Stagewise Toolbar 仅在开发环境下引入
let StagewiseToolbar: React.ComponentType<{ config: any }> | null = null;
if (process.env.NODE_ENV === 'development') {
  // @ts-ignore
  StagewiseToolbar = require('@stagewise/toolbar-next').StagewiseToolbar;
}
const stagewiseConfig = { plugins: [] };

export const metadata: Metadata = {
  title: 'EdgeOne Pages AI: Utilize DeepSeek R1 for Free on the Edge.',
  description:
    'EdgeOne Pages AI offers free access to DeepSeek R1 for enhanced edge computing capabilities.',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        {children}
        {process.env.NODE_ENV === 'development' && StagewiseToolbar ? (
          <StagewiseToolbar config={stagewiseConfig} />
        ) : null}
      </body>
    </html>
  );
}
