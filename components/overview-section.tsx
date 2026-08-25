import { Section } from '@/components/section'

const metrics = [
  { label: 'Execution time', value: '~2 hours', detail: 'Build to first booked event' },
  {
    label: 'Core architecture',
    value: 'Trigger-based AI Agent',
    detail: 'Chat trigger → agent → tool',
  },
  { label: 'Integration target', value: 'Google Calendar API', detail: 'OAuth2 event creation' },
]

export function OverviewSection() {
  return (
    <Section id="overview" label="01 / Overview" title="What this project does">
      <div className="flex flex-col gap-5 text-base leading-relaxed text-muted-foreground">
        <p>
          Scheduling is small work that eats real time: read a request, check whether the slot is
          free, translate it into a start and end timestamp, then create the event. I wanted that
          entire loop handled by a single message, so I built it in n8n rather than writing a
          service from scratch.
        </p>
        <p>
          The workflow starts with an <em className="text-foreground not-italic">On chat message</em>{' '}
          trigger. That message is passed to an AI Agent node running a ChatGPT chat model, which
          interprets relative language like &ldquo;tomorrow 2pm&rdquo;, decides whether it should
          book, and calls the Google Calendar tool with the timestamps it derived. The model does the
          reasoning; n8n does the wiring and the auth.
        </p>
      </div>

      <dl className="mt-10 grid gap-4 sm:grid-cols-3">
        {metrics.map((m) => (
          <div key={m.label} className="rounded-lg border border-border bg-card p-5">
            <dt className="font-mono text-xs tracking-wide text-muted-foreground uppercase">
              {m.label}
            </dt>
            <dd className="mt-2 text-lg leading-snug font-semibold text-card-foreground">
              {m.value}
            </dd>
            <dd className="mt-1 text-sm leading-relaxed text-muted-foreground">{m.detail}</dd>
          </div>
        ))}
      </dl>
    </Section>
  )
}
