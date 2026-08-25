import { Section } from '@/components/section'

const learnings = [
  {
    title: 'Expressions are the real interface',
    body: 'Most of the debugging time went into expressions, not logic. {{ $json.chatInput }} keeps the agent reading live input, {{ $now }} proves a credential works before the agent is involved, and $fromAI() is what actually lets the model fill node parameters.',
  },
  {
    title: 'A tool node behaves differently than a standalone node',
    body: 'The same Google Calendar node changes shape depending on where it is attached. Testing it standalone first separated credential problems from agent-reasoning problems, which made the failure that remained much easier to read.',
  },
  {
    title: 'The system message is the product',
    body: 'Swapping in absurd constraints — even days only, prime-numbered minutes, a mood check before booking — was the cheapest way to confirm the prompt was in control. If a joke rule is obeyed, a scheduling rule will be too.',
  },
  {
    title: 'Time zones are a silent failure',
    body: 'The calendar node inherits the workflow time zone, so a request that reads correctly in chat can land an hour off in the calendar. Relative dates need to be resolved against a known zone rather than assumed.',
  },
]

export function LearningsSection() {
  return (
    <Section id="learnings" label="04 / Reflection" title="Key learnings and challenges">
      <div className="flex flex-col divide-y divide-border">
        {learnings.map((l) => (
          <article key={l.title} className="py-6 first:pt-0 last:pb-0">
            <h3 className="mb-2 font-semibold tracking-tight">{l.title}</h3>
            <p className="leading-relaxed text-pretty text-muted-foreground">{l.body}</p>
          </article>
        ))}
      </div>
    </Section>
  )
}
