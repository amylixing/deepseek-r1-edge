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
  title: '先问AI',
  description: '遇事困难，先问AI',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="manifest" href="/manifest.json" />
        <meta name="theme-color" content="#3b82f6" />
        <meta name="apple-mobile-web-app-capable" content="yes" />
        <meta name="apple-mobile-web-app-status-bar-style" content="black-translucent" />
        <link rel="apple-touch-icon" href="/next.svg" />
        <link rel="apple-touch-startup-image" href="/splash-1125x2436.png" media="(device-width: 375px) and (device-height: 812px) and (-webkit-device-pixel-ratio: 3)" />
        <link rel="icon" href="/icon_192.png" type="image/png" />
      </head>
      <body className={inter.className}>
        {children}
        {process.env.NODE_ENV === 'development' && StagewiseToolbar ? (
          <StagewiseToolbar config={stagewiseConfig} />
        ) : null}
      </body>
    </html>
  );
}
