import Image from 'next/image'
import { Container } from '@/app/components/Container'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons'

import avatar from '@/images/avatar.png'
import Image1 from '@/images/home/image1.png'
import Image2 from '@/images/home/image2.png'
import Image3 from '@/images/home/image3.png'
import Image4 from '@/images/home/image4.png'
import Image5 from '@/images/home/image5.png'

function Avatar(props: { isMobile: boolean }) {
  const sizeClasses = props.isMobile ? 'h-20 w-20' : 'h-96 w-96'
  return (
    <div
      className={`relative mt-1 flex items-center justify-center rounded-full shadow-md shadow-zinc-800/5 ring-1 ring-zinc-900/5 ${sizeClasses}`}
    >
      <Image src={avatar} alt="Avatar image for Paul Le Grand" />
    </div>
  )
}

export default function Home() {
  return (
    <main>
      <Container>
        <div className="mb-8 flex w-full flex-row justify-between">
          <div className="xs:w-full flex flex-col md:w-2/3 md:pr-6">
            {/* Mobile avatar */}
            <div className="mb-8 self-end md:hidden">
              <Avatar isMobile />
            </div>
            <h1 className="mb-8">
              Software engineer, problem solver, and outdoors enthusiast.
            </h1>
            <p className="mb-8">
              I&apos;m Paul, a software Engineer with over 6 years of experience
              based in Denver. I love to solve complex problems and build
              elegant solutions.
            </p>
            <div className="flex flex-row gap-4">
              <a
                href="https://github.com/paullegrand"
                target="blank"
                className="h-6 w-6 text-neutral-400 hover:text-neutral-200"
              >
                <FontAwesomeIcon icon={faGithub} />
              </a>
              <a
                href="https://linkedin.com/in/paul-le-grand"
                target="blank"
                className="h-6 w-6 text-neutral-400 hover:text-neutral-200"
              >
                <FontAwesomeIcon icon={faLinkedin} />
              </a>
            </div>
          </div>
          <div className="hidden md:block">
            <Avatar isMobile={false} />
          </div>
        </div>

        {/* Images */}
        <div className="mb-8 flex">
          <div className="h-full w-2/3">
            <Image
              src={Image1}
              priority
              alt="Backpacking on the Appalachian Trail"
            />
            <div className="flex w-full flex-row">
              <Image
                src={Image3}
                className="w-1/3 grow"
                alt="Standing in a garden outside of Maastricht, Netherlands"
              />
              <Image
                src={Image4}
                className="w-2/3 object-cover"
                alt="My cat, Greg, sleeping in his bed"
              />
            </div>
          </div>
          <div className="flex w-1/3 flex-col justify-between">
            <Image
              src={Image2}
              className="grow"
              alt="Sitting on a wall on the side of the road with my partner Bailey, overlooking Granada, Spain"
            />
            <Image
              src={Image5}
              className="grow"
              alt="Standing on the side of Rialto Bridge in Italy"
            />
          </div>
        </div>
      </Container>
    </main>
  )
}
