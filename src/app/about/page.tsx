import Image from 'next/image'
import { Container } from '@/app/components/Container'

import AboutProfilePic from '@/images/about-profile-pic.png'
import PLLogo from '@/images/about/pl-logo.png'
import SmLogo from '@/images/about/sm-logo.png'
import BoxCastLogo from '@/images/about/boxcast-logo.png'

function WorkExperiences() {
  const workExperiences = [
    {
      Logo: PLLogo,
      alt: 'Logo for Paul Le Grand',
      employer: 'Self-Employed',
      positions: [
        {
          title: 'Software Engineer Contractor',
          dates: '2022 - Present',
        },
      ],
    },
    {
      Logo: BoxCastLogo,
      alt: 'Logo for BoxCast',
      employer: 'BoxCast',
      positions: [
        {
          title: 'Product Owner',
          dates: '2022',
        },
        {
          title: 'Software Engineer',
          dates: '2020 - 2022',
        },
      ],
    },
    {
      Logo: SmLogo,
      alt: 'Logo for Stream Monkey',
      employer: 'Stream Monkey',
      positions: [
        {
          title: 'Software Engineer',
          dates: '2016 - 2020',
        },
      ],
    },
  ]

  return (
    <>
      {workExperiences.map((experience) => (
        <div className="flex flex-row" key={experience.employer}>
          <Image
            src={experience.Logo}
            alt={experience.alt}
            className="mr-2 h-12 w-12"
          />
          <div className="flex w-full flex-col gap-1">
            <h3>{experience.employer}</h3>
            {experience.positions.map((position, i, arr) => (
              <>
                <div
                  className="flex justify-between text-sm"
                  key={experience.employer + position.dates}
                >
                  <p className="mr-1">{position.title}</p>
                  <p className="text-right">{position.dates}</p>
                </div>
                {arr.length - 1 !== i && (
                  <hr className="mx-1 border-neutral-600" />
                )}
              </>
            ))}
          </div>
        </div>
      ))}
    </>
  )
}

export default function About() {
  return (
    <main>
      <Container>
        <div className="mb-8 flex w-full flex-col justify-between gap-8 md:flex-row">
          <div className="flex w-full flex-col gap-8 md:w-3/5">
            {/* Mobile avatar image */}
            <Image
              src={AboutProfilePic}
              className="h-24 w-24 self-end md:hidden"
              alt="Another picture of Paul Le Grand, near an alpine lake in the mountains of Colorado"
            />
            <h1>
              I&apos;m Paul Le Grand. I live in Denver, where I build software
              and enjoy time outside.
            </h1>
            <p>
              I&apos;ve loved solving problems for as long as I can remember,
              and enjoy taking turning large projects into manageable steps. My
              Dad makes wire puzzles out of stainless steel wire, which
              I&apos;ve been solving since before I could walk; one of his
              puzzles is even featured in the{' '}
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
              (Who&apos;s emailing a six-year-old anyway?)
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
              Today, I&apos;m a professional software engineer, who&apos;s
              fascinated by how technology can easily scale to impact so many
              people. I love to build beautiful, elegant, and lovable software
              that improves the lives of those using it.
            </p>
          </div>
          <div className="flex w-full flex-col gap-8 md:w-2/5">
            <Image
              src={AboutProfilePic}
              className="mx-auto hidden md:block"
              alt="Another picture of Paul Le Grand, near an alpine lake in the mountains of Colorado"
            />
            <div className="rounded-[40px] border border-neutral-400">
              <div className="mx-4 flex flex-col gap-4 py-4">
                <h3 className="ml-2 uppercase text-teal-300">Work</h3>
                {WorkExperiences()}
              </div>
            </div>
          </div>
        </div>
      </Container>
    </main>
  )
}
