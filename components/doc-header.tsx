export function DocHeader() {
  return (
    <header className="border-b border-border">
      <div className="mx-auto flex max-w-3xl flex-col gap-6 px-6 py-16 md:py-24">
        <span className="inline-flex w-fit items-center gap-2 rounded-full border border-primary/30 bg-accent px-3 py-1 font-mono text-xs tracking-wide text-accent-foreground uppercase">
          <span className="size-1.5 rounded-full bg-primary" aria-hidden="true" />
          No-Code AI Automation
        </span>

        <h1 className="text-4xl leading-tight font-semibold tracking-tight text-balance md:text-5xl">
          AI Workflow Automation using n8n and ChatGPT model
        </h1>

        <p className="text-base leading-relaxed text-muted-foreground">
          By <span className="font-medium text-foreground">Rossler Boquiren</span>
          <span className="px-2 text-border">/</span>
          August 2026
        </p>

        <p className="max-w-2xl text-lg leading-relaxed text-pretty text-muted-foreground">
          A project walkthrough of an n8n workflow where a chat trigger hands plain-language
          requests to an AI Agent, which reasons over them and writes real events into Google
          Calendar — no glue code required.
        </p>
      </div>
    </header>
  )
}
