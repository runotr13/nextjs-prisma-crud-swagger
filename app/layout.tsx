import Link from 'next/link'
import './globals.css'
import './reset.css'
import { Inter } from 'next/font/google'
import PageHead from './head/head'
import { StoreProvider } from './redux/store-provider'
import { store } from './redux/store/store'
import Header from './layouts/header'
import Footer from './layouts/footer'
import { Suspense } from 'react'
const inter = Inter({ subsets: ['latin'] })


export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" >
      <body className={inter.className}>
        <StoreProvider>
          <Header />
          <div>
            <PageHead title="HOME PAGE" description={"HOME PAGE DESC"} keywords="next,app,keywords" />
            <Suspense fallback="Loading...">
              {children}
            </Suspense>
            <div>
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
              <Link href={'/blog/2'}>
                <button className="bg-yellow-500 hover:bg-yellow-700 text-white font-bold py-2 px-4 rounded">
                  Go BLOG PAGE
                </button>
              </Link>
            </div>
          </div>
          <Footer />
        </StoreProvider>
      </body>
    </html>
  )
}
