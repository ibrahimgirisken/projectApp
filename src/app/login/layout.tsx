import '@/styles/globals.css';
export const metadata = {
  title: 'Login',
  description: 'Yönetici Paneli Girişi',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}
