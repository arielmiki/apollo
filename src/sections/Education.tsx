import uiLogo from '../assets/ui.png'
import { BulletList } from '../components/BulletList'
import { SectionHeader } from '../components/SectionHeader'
import { InstitutionHeader } from '../components/InstitutionHeader'

export const Education = () => {
  const activities = [
    <span>Head of Data Science at <a href="https://www.ristek.cs.ui.ac.id/" target="_blank" rel="noopener noreferrer" className="text-amber-600 hover:text-amber-700">RISTEK</a></span>,
    'Data Science Staff at Compfest X',
    'Bedah Kampus UI 2018'
  ];

  const teachingAssistant = [
    'Discrete Mathematics 1',
    'Discrete Mathematics 2',
    'Foundation of Programming 1',
    'Advance Programming'
  ];

  return (
    <section id="education" className="flex items-center">
      <div className="max-w-3xl mx-auto px-8 w-full">
        <div className="space-y-12">
          <div>
            <InstitutionHeader
              logo={uiLogo}
              name="Universitas Indonesia (UI)"
              period="May. 2016 - Feb. 2020"
              degree="Bachelor of Computer Science (S.Kom)"
            />
          </div>

          <div>
            <SectionHeader title="Publication" />
            <div>
              <h5 className="font-medium text-gray-900 mb-2">
                Minimal Explanations in ReLU-based Neural Network via Abduction
              </h5>
              <p className="text-gray-600 mb-2">
                First Author & Presenter • Proceedings of 2020 International Conference on Advanced Computer Science and Information System (ICACSIS)
              </p>
              <a 
                href="https://doi.org/10.1109/ICACSIS51025.2020.9263197" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="text-amber-600 hover:text-amber-700 text-sm inline-flex items-center"
              >
                DOI: 10.1109/ICACSIS51025.2020.9263197
              </a>
            </div>
          </div>
          
          <div>
            <SectionHeader title="Activities and Societies" />
            <BulletList items={activities} />
          </div>

          <div>
            <SectionHeader title="Teaching Assistant" />
            <BulletList items={teachingAssistant} />
          </div>
        </div>
      </div>
    </section>
  );
}; 