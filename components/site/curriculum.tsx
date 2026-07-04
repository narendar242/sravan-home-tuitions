import {
  Atom,
  Calculator,
  FlaskConical,
  Globe2,
  Landmark,
  Languages,
  Leaf,
  LineChart,
  Microscope,
  MonitorSmartphone,
  Wallet,
} from 'lucide-react'
import { ScrollReveal } from './scroll-reveal'
import { SectionHeading } from './section-heading'

const SUBJECTS = [
  { name: 'Mathematics', icon: Calculator },
  { name: 'Science', icon: Microscope },
  { name: 'Physics', icon: Atom },
  { name: 'Chemistry', icon: FlaskConical },
  { name: 'Biology', icon: Leaf },
  { name: 'English', icon: Languages },
  { name: 'Hindi', icon: Languages },
  { name: 'Telugu', icon: Languages },
  { name: 'Social Studies', icon: Globe2 },
  { name: 'Computer Science', icon: MonitorSmartphone },
  { name: 'Accounts', icon: Wallet },
  { name: 'Commerce', icon: Landmark },
  { name: 'Economics', icon: LineChart },
]

const CLASSES = [
  'LKG',
  'UKG',
  'Classes 1 – 5',
  'Classes 6 – 8',
  'Classes 9 – 10',
  'Intermediate',
  'Degree',
]

const BOARDS = [
  { name: 'CBSE', full: 'Central Board of Secondary Education' },
  { name: 'ICSE', full: 'Indian Certificate of Secondary Education' },
  { name: 'State Board', full: 'Telangana State Board' },
  { name: 'IB', full: 'International Baccalaureate' },
  { name: 'IGCSE', full: 'Cambridge International' },
]

export function Curriculum() {
  return (
    <section id="subjects" className="scroll-mt-20 bg-secondary/40 py-20 lg:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeading
          eyebrow="Subjects We Teach"
          title="All subjects, all classes, all boards"
          description="Whatever the subject or grade, we have the right tutor to help your child succeed."
          className="mx-auto"
        />

        <div className="mt-14 grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-4">
          {SUBJECTS.map((subject, i) => (
            <ScrollReveal
              key={subject.name}
              delay={(i % 4) * 60}
              className="group flex items-center gap-3 rounded-2xl border border-border bg-card p-4 shadow-sm transition-all duration-300 hover:-translate-y-0.5 hover:border-gold/50 hover:shadow-lg"
            >
              <span className="inline-flex size-10 shrink-0 items-center justify-center rounded-xl bg-brand/10 text-brand transition-colors group-hover:bg-gold group-hover:text-gold-foreground">
                <subject.icon className="size-5" />
              </span>
              <span className="text-sm font-semibold text-brand">{subject.name}</span>
            </ScrollReveal>
          ))}
        </div>

        {/* Classes + Boards */}
        <div className="mt-16 grid gap-6 lg:grid-cols-2">
          <ScrollReveal className="rounded-3xl border border-border bg-card p-8 shadow-sm">
            <h3 className="font-serif text-2xl font-semibold text-brand">Classes We Cover</h3>
            <p className="mt-1 text-sm text-muted-foreground">
              From early years to higher education.
            </p>
            <div className="mt-6 flex flex-wrap gap-3">
              {CLASSES.map((cls) => (
                <span
                  key={cls}
                  className="rounded-full border border-brand/15 bg-brand/5 px-4 py-2 text-sm font-semibold text-brand"
                >
                  {cls}
                </span>
              ))}
            </div>
          </ScrollReveal>

          <ScrollReveal delay={100} className="rounded-3xl border border-border bg-card p-8 shadow-sm">
            <h3 className="font-serif text-2xl font-semibold text-brand">Boards We Support</h3>
            <p className="mt-1 text-sm text-muted-foreground">
              Expert tutors for every major curriculum.
            </p>
            <ul className="mt-6 flex flex-col gap-3">
              {BOARDS.map((board) => (
                <li key={board.name} className="flex items-center gap-3">
                  <span className="inline-flex min-w-24 justify-center rounded-lg bg-gold/15 px-3 py-1.5 text-sm font-bold text-brand">
                    {board.name}
                  </span>
                  <span className="text-sm text-muted-foreground">{board.full}</span>
                </li>
              ))}
            </ul>
          </ScrollReveal>
        </div>
      </div>
    </section>
  )
}
