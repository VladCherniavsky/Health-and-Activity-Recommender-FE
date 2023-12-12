'use client'
import { createTheme, ThemeProvider, styled } from '@mui/material/styles';
import './globals.css'

const theme = createTheme({
});

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>
      <ThemeProvider theme={theme}>
        {children}
      </ThemeProvider>
      </body>
    </html>
  )
}
