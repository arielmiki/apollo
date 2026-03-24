import uiLogo from '../assets/ui.png'
import { BulletList } from '../components/BulletList'
import { SectionHeader } from '../components/SectionHeader'
import { InstitutionHeader } from '../components/InstitutionHeader'
import { AnimatedSection } from '../components/AnimatedSection'
import content from '../data/content.json'

export const Education = () => {
  const { university, publication, activities, teachingAssistant } = content.education;

  return (
    <section id="experience" className="flex items-center">
      <div className="max-w-3xl mx-auto px-8 w-full">
        <div className="space-y-8">
          <AnimatedSection>
            <InstitutionHeader
              logo={uiLogo}
              name={university.name}
              period={university.period}
              degree={university.degree}
            />
          </AnimatedSection>

          <AnimatedSection delay={100}>
            <div className="space-y-4">
              <SectionHeader title="Publication" />
              <div className="bg-slate-50 dark:bg-slate-900/50 rounded-lg p-4 border border-slate-100 dark:border-slate-800">
                <h5 className="font-medium text-slate-900 dark:text-slate-100 mb-2">
                  {publication.title}
                </h5>
                <p className="text-slate-600 dark:text-slate-400 mb-3 text-sm">
                  {publication.role} • {publication.conference}
                </p>
                <a
                  href={`https://doi.org/${publication.doi}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-amber-600 dark:text-amber-400 hover:text-amber-700 dark:hover:text-amber-300 text-sm inline-flex items-center transition-colors"
                >
                  DOI: {publication.doi}
                </a>
              </div>
            </div>
          </AnimatedSection>

          <AnimatedSection delay={200}>
            <div className="space-y-4">
              <SectionHeader title="Activities and Societies" />
              <BulletList items={activities} />
            </div>
          </AnimatedSection>

          <AnimatedSection delay={300}>
            <div className="space-y-4">
              <SectionHeader title="Teaching Assistant" />
              <BulletList items={teachingAssistant} />
            </div>
          </AnimatedSection>
        </div>
      </div>
    </section>
  );
};
