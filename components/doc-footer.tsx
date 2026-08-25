import { Code2, Share2 } from 'lucide-react'
import { ThemeToggle } from '@/components/theme-toggle'

export function DocFooter() {
  return (
    <footer className="mx-auto max-w-3xl px-6 py-12">
      <div className="flex flex-col gap-6 sm:flex-row sm:items-center sm:justify-between">
        <p className="text-sm leading-relaxed text-muted-foreground">
          Project documentation by{' '}
          <span className="font-medium text-foreground">Rossler Boquiren</span> — August 2026
        </p>

        <nav aria-label="Project links" className="flex flex-wrap items-center gap-2">
          <a
            href="https://www.linkedin.com/feed/"
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-2 rounded-md bg-primary px-3 py-1.5 text-sm font-medium text-primary-foreground transition-opacity hover:opacity-90"
          >
            <Share2 className="size-4" aria-hidden="true" />
            Share on LinkedIn
          </a>
          <a
            href="https://github.com/"
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-2 rounded-md border border-border px-3 py-1.5 text-sm transition-colors hover:bg-muted"
          >
            <Code2 className="size-4" aria-hidden="true" />
            Repository
          </a>
          <ThemeToggle />
        </nav>
      </div>
    </footer>
  )
}
