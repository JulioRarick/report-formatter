import {
  GitHubLogoIcon,
  InstagramLogoIcon,
  LinkedInLogoIcon,
} from '@radix-ui/react-icons'
import { Notebook } from 'lucide-react'
import Link from 'next/link'

import { ContainerThemeToggle } from '@/components/container-theme-toggle'
import { TextareaLogic } from '@/components/textarea-logic'
import { Button } from '@/components/ui/button'

export default function Home() {
  return (
    <main className="flex min-h-screen w-full flex-col items-center font-sans">
      <header className="flex w-full select-none flex-col items-center justify-center gap-1 p-2 pt-8">
        <h1 className="flex items-center justify-center text-xl font-medium tracking-tighter text-foreground lg:text-3xl">
          <Notebook className="h-6 w-6 text-sky-600 lg:h-8 lg:w-8" />{' '}
          report-formatter
        </h1>
        <Button
          variant="link"
          className="font-normal hover:text-sky-700"
          asChild
        >
          <Link href="https://www.juliorarick.tech" target="_blank">
            &copy; Developed by Júlio Rarick
          </Link>
        </Button>
      </header>
      <section className="flex h-full w-full flex-col items-center justify-center px-6">
        <article className="container select-none">
          <p className="text-center text-sm text-gray-500 dark:text-gray-300 lg:text-lg">
            Formate seus relatórios para a publicação no i-Educar
          </p>
        </article>
        <TextareaLogic />
      </section>
      <footer className="flex h-full w-full select-none flex-col items-center justify-center pt-6">
        <article className="flex items-center justify-center gap-3">
          <Link
            href="https://"
            className="rounded-md p-2 hover:bg-gray-200 dark:hover:bg-gray-800"
          >
            <InstagramLogoIcon className="h-6 w-6 text-foreground" />
          </Link>
          <Link
            href="https://linkedin.com/in/juliorarick"
            target="_blank"
            className="rounded-md p-2 hover:bg-gray-200 dark:hover:bg-gray-800"
          >
            <LinkedInLogoIcon className="h-6 w-6 text-foreground" />
          </Link>
          <Link
            href="https://github.com/JulioRarick/report-formatter"
            target="_blank"
            className="rounded-md p-2 hover:bg-gray-200 dark:hover:bg-gray-800"
          >
            <GitHubLogoIcon className="h-6 w-6 text-foreground" />
          </Link>
        </article>
        <h3 className="pb-4 pt-4 text-lg font-semibold tracking-tighter text-sky-700 dark:text-sky-400">
          open source project
        </h3>
      </footer>
      <ContainerThemeToggle />
    </main>
  )
}
