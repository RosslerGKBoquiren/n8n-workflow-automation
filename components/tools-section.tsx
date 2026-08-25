import { Section } from '@/components/section'

const tools = [
  { name: 'n8n', note: 'Workflow automation canvas, nodes and credentials' },
  { name: 'OpenAI ChatGPT', note: 'Chat model node (gpt-4o-mini) with a system message' },
  { name: 'Google Calendar', note: 'OAuth2 credential exposed to the agent as a tool' },
]

const concepts = [
  { name: 'AI Agent nodes vs. workflows', note: 'When to let the model decide the next step' },
  { name: 'Dynamic JSON expressions', note: '{{ $json.chatInput }}, {{ $now }}, $fromAI()' },
  { name: 'Prompt engineering', note: 'System messages that constrain agent behaviour' },
  { name: 'Custom assistant personality', note: 'Rules the agent must respect before booking' },
]

export function ToolsSection() {
  return (
    <Section id="stack" label="02 / Stack" title="Tools used and concepts practiced">
      <div className="grid gap-10 md:grid-cols-2">
        <div>
          <h3 className="mb-4 text-sm font-semibold tracking-wide uppercase">Tools used</h3>
          <ul className="flex flex-col divide-y divide-border">
            {tools.map((t) => (
              <li key={t.name} className="py-3 first:pt-0">
                <p className="font-medium">{t.name}</p>
                <p className="text-sm leading-relaxed text-muted-foreground">{t.note}</p>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h3 className="mb-4 text-sm font-semibold tracking-wide uppercase">Concepts mastered</h3>
          <ul className="flex flex-col divide-y divide-border">
            {concepts.map((c) => (
              <li key={c.name} className="py-3 first:pt-0">
                <p className="font-medium">{c.name}</p>
                <p className="font-mono text-sm leading-relaxed text-muted-foreground">{c.note}</p>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </Section>
  )
}
