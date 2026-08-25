import type { ReactNode } from 'react'

export function Section({
  id,
  label,
  title,
  children,
}: {
  id: string
  label: string
  title: string
  children: ReactNode
}) {
  return (
    <section id={id} className="border-b border-border" aria-labelledby={`${id}-title`}>
      <div className="mx-auto max-w-3xl px-6 py-14 md:py-20">
        <p className="mb-3 font-mono text-xs tracking-widest text-primary uppercase">{label}</p>
        <h2
          id={`${id}-title`}
          className="mb-8 text-2xl font-semibold tracking-tight text-balance md:text-3xl"
        >
          {title}
        </h2>
        {children}
      </div>
    </section>
  )
}
