import { Container } from './Container'

export default function Header() {
  return (
    <>
      <Container>
        <header className="pointer-events-none relative mx-auto flex flex-row justify-between text-gray-100">
          <div className="nunito text-lg font-bold">Paul Le Grand</div>
          <div className="flex gap-8 text-right">
            <div>About</div>
            <div>Tools</div>
            <div>Contact</div>
          </div>
        </header>
      </Container>
    </>
  )
}
