import { CounterProvider } from '@/components/CounterContext';
import "./globals.css";
export default function RootLayout({ children }) {
  return (
    <html lang="pl">
      <body>
        <CounterProvider>
          {children}
        </CounterProvider>
      </body>
    </html>
  );
}