import type { Metadata } from 'next'
import { PageShell } from '@/components/site/page-shell'
import { PageHero } from '@/components/site/page-hero'
import { Curriculum } from '@/components/site/curriculum'

export const metadata: Metadata = {
  title: 'Subjects',
  description:
    'All subjects, all classes, all boards. From Maths and Science to languages and commerce, we have the right tutor for every student.',
}

export default function SubjectsPage() {
  return (
    <PageShell>
      <PageHero
        eyebrow="Subjects"
        title="All subjects, all classes, all boards"
        description="Whatever the subject or grade, we have the right tutor to help your child succeed."
      />
      <Curriculum />
    </PageShell>
  )
}
