import {
  GitHubLogoIcon,
  InstagramLogoIcon,
  LinkedInLogoIcon,
} from '@radix-ui/react-icons'
import { Notebook } from 'lucide-react'
import Link from 'next/link'

import { TextareaLogic } from '@/components/textarea-logic'
import { Button } from '@/components/ui/button'

export default function Home() {
  return (
    <main className="flex min-h-screen w-full flex-col items-center font-sans">
      <header className="flex w-full select-none flex-col items-center justify-center gap-1 p-2 pt-8">
        <h1 className="flex items-center justify-center text-3xl font-medium tracking-tighter text-foreground">
          <Notebook className="h-8 w-8 text-sky-600" /> report-formatter
        </h1>
        <Button variant="link" className="font-normal hover:text-sky-700">
          &copy; Developed by Júlio Rarick
        </Button>
      </header>
      <section className="flex h-full w-full flex-col items-center justify-center px-6">
        <article className="container select-none">
          <p className="text-center text-sm text-gray-500 lg:text-lg">
            Formate seus relatórios para a publicação no i-Educar
          </p>
        </article>
        <TextareaLogic />
      </section>
      <footer className="flex h-full w-full flex-col items-center justify-center">
        <article className="flex items-center justify-center gap-3">
          <Link
            href="https://"
            className="rounded-md p-2 hover:bg-gray-200 dark:hover:bg-gray-800"
          >
            <InstagramLogoIcon className="h-6 w-6 text-foreground" />
          </Link>
          <Link
            href="https://"
            className="rounded-md p-2 hover:bg-gray-200 dark:hover:bg-gray-800"
          >
            <LinkedInLogoIcon className="h-6 w-6 text-foreground" />
          </Link>
          <Link
            href="https://"
            className="rounded-md p-2 hover:bg-gray-200 dark:hover:bg-gray-800"
          >
            <GitHubLogoIcon className="h-6 w-6 text-foreground" />
          </Link>
        </article>
        <h3 className="pt-4 text-lg font-semibold tracking-tighter text-sky-700">
          open source project
        </h3>
      </footer>
    </main>
  )
}
