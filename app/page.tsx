import { BuildSteps } from '@/components/build-steps'
import { DocFooter } from '@/components/doc-footer'
import { DocHeader } from '@/components/doc-header'
import { LearningsSection } from '@/components/learnings-section'
import { OverviewSection } from '@/components/overview-section'
import { ToolsSection } from '@/components/tools-section'

export default function Page() {
  return (
    <div className="min-h-screen bg-background">
      <DocHeader />
      <main>
        <OverviewSection />
        <ToolsSection />
        <BuildSteps />
        <LearningsSection />
      </main>
      <DocFooter />
    </div>
  )
}
