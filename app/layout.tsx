import Link from 'next/link'
import './globals.css'
import './reset.css'
import { Inter } from 'next/font/google'
import PageHead from './head/head'

const inter = Inter({ subsets: ['latin'] })


export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <PageHead title="HOME PAGE" description={"HOME PAGE DESC"} keywords="next,app,keywords" />
      <body className={inter.className}>
        {children}
        <Link href={'/'}>
          <button className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded">
            Go Home
          </button>
        </Link>
        <Link href={'/login'}>
          <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
            Go Login
          </button>
        </Link>

        <Link href={'/register'}>
          <button className="bg-yellow-500 hover:bg-yellow-700 text-white font-bold py-2 px-4 rounded">
            Go Register
          </button>
        </Link>


      </body>
    </html>
  )
}
