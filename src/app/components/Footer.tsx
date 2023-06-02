import { Container } from './Container'

export default function Footer() {
  return (
    <>
      <Container>
        <footer className="absolute bottom-0 left-0 mb-4 w-full text-center text-neutral-400">
          &copy; {new Date().getFullYear()} Paul Le Grand, all rights reserved
        </footer>
      </Container>
    </>
  )
}
