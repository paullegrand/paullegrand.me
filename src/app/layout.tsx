import './globals.css'
import Header from './components/Header'
import { Nunito } from 'next/font/google'

const nunito = Nunito({ subsets: ['latin'] })

export const metadata = {
  title:
    'Paul Le Grand - Software Engineer, problem solver, and outdoors enthusiast',
  description:
    "I'm Paul, a software Engineer with over 6 years of experience based in Denver. I love to solve complex problems and build elegant solutions.",
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={`flex h-full flex-col bg-plg-blue ${nunito.className}`}>
        <div className="fixed right-[-30%] top-0 flex justify-center sm:px-8">
          <div
            className="h-[600px] w-[600px] rounded-full filter"
            style={{
              backgroundColor: '#00FF66',
              opacity: '30%',
              filter: 'blur(120px)',
            }}
          />
        </div>
        <div className="fixed left-[-30%] top-96 flex justify-center sm:px-8">
          <div
            className="h-[600px] w-[600px] rounded-full filter"
            style={{
              backgroundColor: '#2BDFF8',
              opacity: '30%',
              filter: 'blur(120px)',
            }}
          />
        </div>
        <div className="relative">
          <Header />
          {children}
        </div>
      </body>
    </html>
  )
}
