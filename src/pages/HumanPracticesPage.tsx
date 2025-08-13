import React from 'react'
import { Section } from '../components/ui/Section'
import { Card, CardContent } from '../components/ui/Card'
import { Figure } from '../components/ui/Figure'
import { Accordion, AccordionItem } from '../components/ui/Accordion'

// Human practices page covering stakeholder engagement and ethical considerations
export function HumanPracticesPage() {
  // Key stakeholder interviews and feedback
  const stakeholders = [
    {
      name: 'Dr. Marie Berard',
      title: 'Lorem ipsum dolor sit amet',
      quote:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
    },
    {
      name: 'Dr. James Lajoie',
      title: 'Lorem ipsum dolor sit amet',
      quote:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
    },
    {
      name: 'Sarah Thompson',
      title: 'Lorem ipsum dolor sit amet',
      quote:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
    },
    {
      name: 'Dr. Priya Sharma',
      title: 'Lorem ipsum dolor sit amet',
      quote:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
    },
  ]

  return (
    <div>
      {/* Expert interviews and professional feedback */}
      <Section id="stakeholder-engagement" title="Stakeholder Engagement">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {stakeholders.map((stakeholder, index) => (
            <Card key={index}>
              <CardContent>
                <div className="flex flex-col items-center text-center">
                  <div className="image-placeholder w-20 h-20 rounded-full min-h-0 mb-4">
                    {stakeholder.name[0]}
                  </div>
                  <h3 className="text-xl font-semibold">{stakeholder.name}</h3>
                  <p className="text-sm text-gray-600 dark:text-gray-400 mb-4">
                    {stakeholder.title}
                  </p>
                  <blockquote className="italic border-l-4 border-pink-primary pl-4 text-left">
                    "{stakeholder.quote}"
                  </blockquote>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </Section>

      {/* Community survey results and methodology */}
      <Section id="community-survey" title="Community Survey">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div>
            <Figure
              alt="Lorem ipsum dolor sit amet"
              caption="Figure 1: Lorem ipsum dolor sit amet, consectetur adipiscing elit."
            />
          </div>
          <div>
            <Figure
              alt="Lorem ipsum dolor sit amet"
              caption="Figure 2: Lorem ipsum dolor sit amet, consectetur adipiscing elit."
            />
          </div>
        </div>

        <div className="mt-8 bg-gray-100 dark:bg-gray-800 p-6 rounded-md">
          <h3 className="text-xl font-semibold mb-4">Methodology</h3>
          <p className="mb-4">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat.
          </p>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat.
          </p>
        </div>
      </Section>

      {/* Regulatory landscape comparison across regions */}
      <Section id="regulatory-landscape" title="Regulatory Landscape">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <Card>
            <CardContent>
              <div className="flex justify-between items-center mb-4">
                <h3 className="text-xl font-semibold">Canada</h3>
                <span className="bg-green-100 text-green-800 px-2 py-1 rounded text-xs">
                  Most Favorable
                </span>
              </div>
              <ul className="list-disc pl-5 space-y-2">
                <li>Lorem ipsum dolor sit amet</li>
                <li>Lorem ipsum dolor sit amet</li>
                <li>Lorem ipsum dolor sit amet</li>
                <li>Lorem ipsum dolor sit amet</li>
              </ul>
            </CardContent>
          </Card>

          <Card>
            <CardContent>
              <div className="flex justify-between items-center mb-4">
                <h3 className="text-xl font-semibold">United States</h3>
                <span className="bg-yellow-100 text-yellow-800 px-2 py-1 rounded text-xs">
                  Moderate
                </span>
              </div>
              <ul className="list-disc pl-5 space-y-2">
                <li>Lorem ipsum dolor sit amet</li>
                <li>Lorem ipsum dolor sit amet</li>
                <li>Lorem ipsum dolor sit amet</li>
                <li>Lorem ipsum dolor sit amet</li>
              </ul>
            </CardContent>
          </Card>

          <Card>
            <CardContent>
              <div className="flex justify-between items-center mb-4">
                <h3 className="text-xl font-semibold">European Union</h3>
                <span className="bg-orange-100 text-orange-800 px-2 py-1 rounded text-xs">
                  Complex
                </span>
              </div>
              <ul className="list-disc pl-5 space-y-2">
                <li>Lorem ipsum dolor sit amet</li>
                <li>Lorem ipsum dolor sit amet</li>
                <li>Lorem ipsum dolor sit amet</li>
                <li>Lorem ipsum dolor sit amet</li>
              </ul>
            </CardContent>
          </Card>
        </div>
      </Section>

      {/* Ethical frameworks and DEI considerations */}
      <Section id="ethical-considerations" title="Ethical & DEI Considerations">
        <Accordion>
          <AccordionItem title="Affordability" defaultOpen>
            <p className="mb-4">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation.
            </p>
            <ul className="list-disc pl-5 space-y-2 mb-4">
              <li>Lorem ipsum dolor sit amet consectetur adipiscing</li>
              <li>Lorem ipsum dolor sit amet consectetur adipiscing</li>
              <li>Lorem ipsum dolor sit amet consectetur adipiscing</li>
            </ul>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua.
            </p>
          </AccordionItem>

          <AccordionItem title="Access">
            <p className="mb-4">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua:
            </p>
            <ul className="list-disc pl-5 space-y-2 mb-4">
              <li>Lorem ipsum dolor sit amet consectetur adipiscing</li>
              <li>Lorem ipsum dolor sit amet consectetur adipiscing</li>
              <li>Lorem ipsum dolor sit amet consectetur adipiscing</li>
              <li>Lorem ipsum dolor sit amet consectetur adipiscing</li>
            </ul>
          </AccordionItem>

          <AccordionItem title="Informed Consent">
            <p className="mb-4">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit:
            </p>
            <ul className="list-disc pl-5 space-y-2 mb-4">
              <li>Lorem ipsum dolor sit amet consectetur adipiscing</li>
              <li>Lorem ipsum dolor sit amet consectetur adipiscing</li>
              <li>Lorem ipsum dolor sit amet consectetur adipiscing</li>
              <li>Lorem ipsum dolor sit amet consectetur adipiscing</li>
            </ul>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua.
            </p>
          </AccordionItem>

          <AccordionItem title="Inclusivity in Research">
            <p className="mb-4">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit:
            </p>
            <ul className="list-disc pl-5 space-y-2 mb-4">
              <li>Lorem ipsum dolor sit amet consectetur adipiscing</li>
              <li>Lorem ipsum dolor sit amet consectetur adipiscing</li>
              <li>Lorem ipsum dolor sit amet consectetur adipiscing</li>
              <li>Lorem ipsum dolor sit amet consectetur adipiscing</li>
            </ul>
          </AccordionItem>
        </Accordion>
      </Section>
    </div>
  )
}
