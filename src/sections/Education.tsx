import uiLogo from '../assets/ui.png'
import { BulletList } from '../components/BulletList'
import { SectionHeader } from '../components/SectionHeader'
import { InstitutionHeader } from '../components/InstitutionHeader'
import content from '../data/content.json'

export const Education = () => {
  const { university, publication, activities, teachingAssistant } = content.education;

  return (
    <section id="experience" className="flex items-center">
      <div className="max-w-3xl mx-auto px-8 w-full">
        <div className="space-y-8">
          <div>
            <InstitutionHeader
              logo={uiLogo}
              name={university.name}
              period={university.period}
              degree={university.degree}
            />
          </div>

          <div className="space-y-4">
            <SectionHeader title="Publication" />
            <div>
              <h5 className="font-medium text-gray-900 mb-3">
                {publication.title}
              </h5>
              <p className="text-gray-600 mb-3">
                {publication.role} • {publication.conference}
              </p>
              <a 
                href={`https://doi.org/${publication.doi}`} 
                target="_blank" 
                rel="noopener noreferrer" 
                className="text-amber-600 hover:text-amber-700 text-sm inline-flex items-center"
              >
                DOI: {publication.doi}
              </a>
            </div>
          </div>

          <div className="space-y-4">
            <SectionHeader title="Activities and Societies" />
            <BulletList items={activities} />
          </div>

          <div className="space-y-4">
            <SectionHeader title="Teaching Assistant" />
            <BulletList items={teachingAssistant} />
          </div>
        </div>
      </div>
    </section>
  );
}; 