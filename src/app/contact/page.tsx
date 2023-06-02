import { Container } from '@/app/components/Container'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEnvelope, faPhone } from '@fortawesome/free-solid-svg-icons'
import { faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons'

function Contacts() {
  const contacts = [
    {
      icon: faEnvelope,
      href: 'mailto:paul@paullegrand.me',
      text: 'paul@paullegrand.me',
    },
    {
      icon: faPhone,
      href: 'tel:4079006037',
      text: '+1 (407) 900-6037',
    },
    {
      icon: faGithub,
      href: 'https://github.com/paullegrand',
      text: 'github.com/paullegrand',
    },
    {
      icon: faLinkedin,
      href: 'https://linkedin.com/in/paul-le-grand',
      text: 'linkedin.com/in/paul-le-grand',
    },
  ]

  return (
    <div className="flex flex-col gap-4 text-sm">
      {contacts.map((contact) => (
        <div key={contact.href} className="flex flex-row">
          <FontAwesomeIcon
            icon={contact.icon}
            className="mr-4 h-5 text-neutral-300"
          />
          <a href={contact.href}>{contact.text}</a>
        </div>
      ))}
    </div>
  )
}

export default function About() {
  return (
    <main>
      <Container>
        <div className="flex flex-row flex-wrap">
          <div className="mb-8 w-full pr-0 md:w-3/5 md:pr-20">
            <h1 className="mb-8">Let&apos;s get in touch.</h1>
            <p>
              Have questions? Want to chat about something? Shoot me an email or
              give me a call, and I&apos;ll get back to you as soon as I can.
            </p>
          </div>
          <div>{Contacts()}</div>
        </div>
      </Container>
    </main>
  )
}
