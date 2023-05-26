import Image from 'next/image'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBuilding } from '@fortawesome/free-solid-svg-icons'
import { Container } from '@/app/components/Container'
import AboutProfilePic from '@/images/about-profile-pic.png'

export default function About() {
  return (
    <main>
      <Container>
        <div className="mb-8 flex w-full flex-row justify-between gap-16">
          <div className="flex w-2/3 flex-col gap-8">
            <h1>
              I’m Paul Le Grand. I live in Denver, where I build software and
              enjoy time outside.
            </h1>
            <p>
              I’ve loved solving problems for as long as I can remember, and
              enjoy taking turning large projects into manageable steps. My Dad
              makes wire puzzles out of stainless steel wire, which I’ve been
              solving since before I could walk; one of his puzzles is even
              featured in the{' '}
              <a
                className="underline"
                href="https://www.puzzlemuseum.com/month/picm11/2011-10-tricycles.htm"
              >
                Puzzle Museum
              </a>
              .
            </p>
            <p>
              I got my first computer when I was six years old, and made every
              excuse I could to spend time on it. I asked to “check my email”
              almost every day, just so I could spend more time learning
              everything my computer could do and exploring every crevice of it.
              (Who’s emailing a six-year-old anyway?)
            </p>
            <p>
              My first projects with software started with exploiting my Wii so
              I could play movies on it, writing firmware tweaks for Android
              phones, creating small programs with Arduinos and Raspberry Pis,
              and programming robots in RobotC. My first professional job was at
              Stream Monkey when I was 17, where I was fortunate to write code
              run by millions of users watching video streams through their
              platform.
            </p>
            <p>
              Today, I’m a professional software engineer, who’s fascinated by
              how technology can easily scale to impact so many people. I love
              to build beautiful, elegant, and lovable software that improves
              the lives of those using it.
            </p>
          </div>
          <div className="flex w-1/3 flex-col gap-8">
            <Image
              src={AboutProfilePic}
              alt="Another picture of Paul Le Grand, in the mountains of Colorado"
            />
            <div className="rounded-full border border-neutral-400">
              <div className="mx-8 grid grid-cols-4 py-4">
                <FontAwesomeIcon
                  icon={faBuilding}
                  className="h-4 w-4 text-neutral-100"
                />
                <h3 className="col-span-3 uppercase text-teal-300">Work</h3>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </main>
  )
}
