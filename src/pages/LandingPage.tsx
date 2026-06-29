import { Header } from '@/components/layout/Header'
import { Footer } from '@/components/layout/Footer'
import { HeroSection } from '@/components/landing/HeroSection'
import { ProblemSection } from '@/components/landing/ProblemSection'
import { ScreensShowcaseSection } from '@/components/landing/ScreensShowcaseSection'
import { RolesSection } from '@/components/landing/RolesSection'
import { WorkflowSection } from '@/components/landing/WorkflowSection'
import { RoadmapSection } from '@/components/landing/RoadmapSection'
import { DevelopmentBanner } from '@/components/landing/DevelopmentBanner'

export default function LandingPage() {
  return (
    <div className="flex min-h-screen flex-col bg-white">
      <Header />
      <main className="flex-1">
        <HeroSection />
        <ProblemSection />
        <ScreensShowcaseSection />
        <RolesSection />
        <WorkflowSection />
        <RoadmapSection />
        <DevelopmentBanner />
      </main>
      <Footer />
    </div>
  )
}
