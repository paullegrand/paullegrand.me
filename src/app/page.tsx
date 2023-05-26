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
import Link from 'next/link'

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
        <div className="mb-8 flex w-full flex-row justify-between">
          <div className="flex flex-1 flex-col">
            <h1 className="mb-8">
              Software engineer, problem solver, and outdoors enthusiast.
            </h1>
            <p className="mb-8">
              I&#39;m Paul, a software Engineer with over 6 years of experience
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
          <Avatar />
        </div>

        {/* Images */}
        <div className="flex w-full">
          <div className="w-[840px] flex-col">
            <Image
              src={Image1}
              priority
              alt="Backpacking on the Appalachian Trail"
            />
            <div className="flex h-[448px] flex-row">
              <Image src={Image3} className="w-[244px]" alt="" />
              <Image src={Image4} className="w-[596px]" alt="" />
            </div>
          </div>
          <div className="flex h-full w-[420px] flex-col">
            <div className="h-[560px">
              <Image src={Image2} alt="Backpacking on the Appalachian Trail" />
            </div>
            <div className="h-[560px]">
              <Image src={Image5} alt="" />
            </div>
          </div>
        </div>
      </Container>
    </main>
  )
}
