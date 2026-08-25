import { Section } from '@/components/section'

type Shot = { src: string; alt: string; caption: string }

type Step = {
  n: string
  title: string
  body: string[]
  code?: string
  shots: Shot[]
}

const steps: Step[] = [
  {
    n: '01',
    title: 'Workspace and trigger setup',
    body: [
      'I started in a fresh n8n workspace and added an On chat message received trigger, which gives the workflow a built-in chat panel for testing. Running it once confirms the shape of the payload the rest of the workflow depends on: an action, a sessionId, and the chatInput string typed by the user.',
    ],
    shots: [
      {
        src: '/images/n8n-homepage.png',
        alt: 'n8n marketing site showing an example AI agent workflow on a canvas',
        caption: 'n8n — the visual automation canvas this project is built on.',
      },
      {
        src: '/images/chat-trigger-output.png',
        alt: 'n8n execution log showing chat trigger output with action, sessionId and chatInput columns',
        caption: 'First execution: the trigger emits action, sessionId and chatInput.',
      },
    ],
  },
  {
    n: '02',
    title: 'AI Agent and chat model',
    body: [
      'Next I connected an AI Agent node to the trigger. The agent has three sub-connectors — Chat Model, Memory and Tool — and it stays in an error state until a chat model is attached, which makes the required wiring obvious.',
      'I attached an OpenAI Chat Model node using the free credit pool, and pointed the agent prompt at the incoming message with an expression so it always reads live input instead of a hardcoded string.',
    ],
    code: "{{ $json.chatInput }}",
    shots: [
      {
        src: '/images/n8n-editor-canvas.png',
        alt: 'n8n canvas with the chat trigger connected to an AI Agent node',
        caption: 'Chat trigger → AI Agent, with Chat Model, Memory and Tool ports.',
      },
      {
        src: '/images/chat-model-node.png',
        alt: 'n8n OpenAI chat model node parameters with credential and model selection',
        caption: 'The chat model node supplies the reasoning behind the agent.',
      },
    ],
  },
  {
    n: '03',
    title: 'Google Calendar tool integration',
    body: [
      'I authorised a Google Calendar OAuth2 credential and added the node twice: once standalone to verify the connection with {{ $now }} and {{ $now.plus(1, "hour") }}, then as a tool on the agent so the model can call it.',
      'As a tool, the start and end fields switch to $fromAI() expressions. That is the handoff point — the agent decides the values, and the node turns them into a real calendar event.',
    ],
    code: "{{ $fromAI('start_time') }}   {{ $fromAI('end_time') }}",
    shots: [
      {
        src: '/images/calendar-credential.png',
        alt: 'n8n Google Calendar node with the OAuth2 credential dropdown open',
        caption: 'Standalone test first: credential plus fixed $now timestamps.',
      },
      {
        src: '/images/calendar-tool-node.png',
        alt: 'n8n Google Calendar tool node with start and end fields set to $fromAI expressions',
        caption: 'As a tool, timestamps come from the agent via $fromAI().',
      },
    ],
  },
  {
    n: '04',
    title: 'System prompting and personality',
    body: [
      'The last step was the system message. It tells the agent it is a calendar assistant, that it should check availability before booking, and that it should only create an event once the slot is confirmed free.',
      'To prove the prompt was genuinely steering behaviour, I added deliberately odd constraints — only book on even-numbered days, only at prime-numbered minutes, and confirm the user\u2019s mood first. The reply came back applying every rule, which is a clear signal the system message is in control rather than the model\u2019s defaults.',
    ],
    shots: [
      {
        src: '/images/system-message.png',
        alt: 'n8n AI Agent options panel with a calendar assistant system message',
        caption: 'The system message defines the assistant and its booking rules.',
      },
      {
        src: '/images/constrained-response.png',
        alt: 'Chat reply applying custom rules about even days, prime minutes and a mood check',
        caption: 'Custom rules honoured: even day, prime minutes, mood check.',
      },
      {
        src: '/images/calendar-confirmation.png',
        alt: 'Google Calendar event created by the workflow shown in the calendar UI',
        caption: 'End result — an event written straight into Google Calendar.',
      },
    ],
  },
]

export function BuildSteps() {
  return (
    <Section id="build" label="03 / Build" title="Step-by-step architecture">
      <ol className="flex flex-col gap-14">
        {steps.map((step) => (
          <li key={step.n} className="relative pl-10 md:pl-14">
            <span
              aria-hidden="true"
              className="absolute top-1 left-0 flex size-7 items-center justify-center rounded-full bg-primary font-mono text-xs font-semibold text-primary-foreground"
            >
              {step.n}
            </span>
            <span
              aria-hidden="true"
              className="absolute top-10 bottom-0 left-3.5 w-px bg-border"
            />

            <h3 className="mb-4 text-xl font-semibold tracking-tight">{step.title}</h3>

            <div className="flex flex-col gap-4">
              {step.body.map((p) => (
                <p key={p.slice(0, 24)} className="leading-relaxed text-pretty text-muted-foreground">
                  {p}
                </p>
              ))}
            </div>

            {step.code ? (
              <pre className="mt-5 overflow-x-auto rounded-md border border-border bg-card px-4 py-3 font-mono text-sm text-card-foreground">
                <code>{step.code}</code>
              </pre>
            ) : null}

            <div className="mt-6 flex flex-col gap-6">
              {step.shots.map((shot) => (
                <figure key={shot.src} className="flex flex-col gap-2">
                  <div className="overflow-hidden rounded-lg border border-border bg-card">
                    <img
                      src={shot.src || '/placeholder.svg'}
                      alt={shot.alt}
                      className="block h-auto w-full"
                    />
                  </div>
                  <figcaption className="font-mono text-xs leading-relaxed text-muted-foreground">
                    {shot.caption}
                  </figcaption>
                </figure>
              ))}
            </div>
          </li>
        ))}
      </ol>
    </Section>
  )
}
