import Image from 'next/image'
import avatar from '@/images/avatar.png'
import { Container } from '@/app/components/Container'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons'

function Avatar() {
  return (
    <div className="relative mt-1 flex h-96 w-96 flex-1 items-center justify-center rounded-full shadow-md shadow-zinc-800/5 ring-1 ring-zinc-900/5">
      <Image src={avatar} alt="Avatar image for Paul Le Grand" />
    </div>
  )
}

export default function Home() {
  return (
    <main>
      <Container>
        <div className="flex w-full flex-row justify-between">
          <div className="space-between flex h-full flex-1 flex-col">
            <h1>Software engineer, problem solver, and outdoors enthusiast.</h1>
            <p>
              I&#39;m Paul, a software Engineer with over 6 years of experience
              based in Denver. I love to solve complex problems and build
              elegant solutions.
            </p>
            <div className="flex flex-row gap-4">
              <a
                href="https://github.com/paullegrand"
                target="blank"
                className="h-6 w-6 text-neutral-400"
              >
                <FontAwesomeIcon icon={faGithub} />
              </a>
              <a
                href="https://linkedin.com/in/paul-le-grand"
                target="blank"
                className="h-6 w-6 text-neutral-400"
              >
                <FontAwesomeIcon icon={faLinkedin} />
              </a>
            </div>
          </div>
          <Avatar />
        </div>
      </Container>
    </main>
  )
}
