'use client'

import Link from 'next/link'
import { Container } from './Container'
import { usePathname } from 'next/navigation'

interface NavLink {
  name: string
  href: string
}

export default function Footer() {
  return (
    <>
      <Container>
        <footer className="relative mx-auto text-center text-neutral-500">
          &copy; {new Date().getFullYear()} Paul Le Grand, all rights reserved
        </footer>
      </Container>
    </>
  )
}
