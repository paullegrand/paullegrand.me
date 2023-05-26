'use client'

import Link from 'next/link'
import { Container } from './Container'
import { usePathname } from 'next/navigation'

interface NavLink {
  name: string
  href: string
}

export default function Header() {
  const pathname = usePathname()

  const navLinks: NavLink[] = [
    {
      name: 'About',
      href: '/about',
    },
    {
      name: 'Tools',
      href: '/tools',
    },
    {
      name: 'Contact',
      href: '/contact',
    },
  ]

  return (
    <>
      <Container>
        <header className="relative mx-auto flex flex-row justify-between text-neutral-300">
          <Link
            href="/"
            className="nunito hover-text-neutral-100 text-lg font-bold"
          >
            Paul Le Grand
          </Link>
          <div className="flex gap-8 text-right">
            {navLinks.map((link) => {
              let isActive = pathname.startsWith(link.href)

              return (
                <Link
                  className={isActive ? 'underline' : 'hover:text-neutral-100'}
                  href={link.href}
                  key={link.name}
                >
                  {link.name}
                </Link>
              )
            })}
          </div>
        </header>
      </Container>
    </>
  )
}
