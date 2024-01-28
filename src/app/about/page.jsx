import Image from 'next/image'
import Link from 'next/link'
import clsx from 'clsx'

import { Container } from '@/components/Container'
import {
  GitHubIcon,
  InstagramIcon,
  LinkedInIcon,
  TwitterIcon,
} from '@/components/SocialIcons'
import portraitImage from '@/images/portrait.jpg'

function SocialLink({ className, href, children, icon: Icon }) {
  return (
    <li className={clsx(className, 'flex')}>
      <Link
        href={href}
        className="group flex text-sm font-medium text-zinc-800 transition hover:text-teal-500 dark:text-zinc-200 dark:hover:text-teal-500"
      >
        <Icon className="h-6 w-6 flex-none fill-zinc-500 transition group-hover:fill-teal-500" />
        <span className="ml-4">{children}</span>
      </Link>
    </li>
  )
}

function MailIcon(props) {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true" {...props}>
      <path
        fillRule="evenodd"
        d="M6 5a3 3 0 0 0-3 3v8a3 3 0 0 0 3 3h12a3 3 0 0 0 3-3V8a3 3 0 0 0-3-3H6Zm.245 2.187a.75.75 0 0 0-.99 1.126l6.25 5.5a.75.75 0 0 0 .99 0l6.25-5.5a.75.75 0 0 0-.99-1.126L12 12.251 6.245 7.187Z"
      />
    </svg>
  )
}

export const metadata = {
  title: 'About',
  description:
    'I’m Jonathan Beale. I live in Fort Lauderdale, where I design the future.',
}

export default function About() {
  return (
    <Container className="mt-16 sm:mt-32">
      <div className="grid grid-cols-1 gap-y-16 lg:grid-cols-2 lg:grid-rows-[auto_1fr] lg:gap-y-12">
        <div className="lg:pl-20">
          {/* <div className="max-w-xs px-2.5 lg:max-w-none">
            <Image
              src={portraitImage}
              alt=""
              sizes="(min-width: 1024px) 32rem, 20rem"
              className="aspect-square rotate-3 rounded-2xl bg-zinc-100 object-cover dark:bg-zinc-800"
            />
          </div> */}
        </div>
        <div className="lg:order-first lg:row-span-2">
          <h1 className="text-4xl font-bold tracking-tight text-zinc-800 dark:text-zinc-100 sm:text-5xl">
          Jonathan Beale: Crafting Tomorrow in Fort Lauderdale
          </h1>
          <div className="mt-6 space-y-7 text-base text-zinc-600 dark:text-zinc-400">
            <p>
            Greetings! I'm passionately drawn to the remarkable, uniquely fusing 
            my love for software engineering and AI innovation with my enthusiasm
            for Arsenal FC, the enigmatic universe of space, and the thought-provoking 
            dimensions of dystopian fiction. My journey interweaves the thrill of the 
            pitch, the intellectual challenge of technology, and the imaginative depth of novels.
            </p>
            <p>
            In the realm of technology, my heart lies with software engineering and the wonders of AI. 
            The excitement of crafting code and pioneering AI solutions is akin to an artist painting a canvas. 
            These endeavors not only resolve complex issues but also open doors to uncharted possibilities. My dedication 
            here finds a parallel in my support for Arsenal FC. The field's strategy, precision, and team dynamics reflect 
            the collaborative essence and innovation found in the tech world.
            </p>
            <p>
            My curiosity stretches to the stars with an avid interest in space exploration. Navigating the intricacies of technology 
            aligns with my fascination for space's boundless possibilities, mirroring the leaps in AI and software engineering. This 
            space interest is perfectly complemented by my affinity for dystopian literature, a genre that propels me into worlds of 
            futuristic and alternate realities, reshaping my perception of society and technology.
            </p>
            <p>
            Ultimately, I'm a fusion of a tech aficionado, football enthusiast, space explorer, and literary connoisseur. 
            Whether it's engaging in the latest AI discussions, rejoicing in an Arsenal triumph, pondering over cosmic 
            mysteries, or analyzing a dystopian narrative, I am energized by the thrill of exploration and the delight 
            in sharing and exchanging ideas on these passions.
            </p>
          </div>
        </div>
        <div className="lg:pl-20">
          <ul role="list">
            <SocialLink href="https://github.com/iconbaypark2900" icon={GitHubIcon} className="mt-4">
              Follow on GitHub
            </SocialLink>
            <SocialLink href="https://www.linkedin.com/in/jonathan-beale-99b47925a/" icon={LinkedInIcon} className="mt-4">
              Follow on LinkedIn
            </SocialLink>
            <SocialLink
              href="mailto:spencer@planetaria.tech"
              icon={MailIcon}
              className="mt-8 border-t border-zinc-100 pt-8 dark:border-zinc-700/40"
            >
              jonaston015@gmail.com
            </SocialLink>
          </ul>
        </div>
      </div>
    </Container>
  )
}
