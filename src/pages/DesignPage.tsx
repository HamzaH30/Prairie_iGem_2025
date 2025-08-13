import React from 'react'
import { Section } from '../components/ui/Section'
import {
  Table,
  TableHeader,
  TableBody,
  TableRow,
  TableHead,
  TableCell,
} from '../components/ui/Table'
import { Card, CardContent } from '../components/ui/Card'
import { Figure } from '../components/ui/Figure'
import { Tabs, Tab } from '../components/ui/Tabs'
import { Accordion, AccordionItem } from '../components/ui/Accordion'

// Engineering design page showcasing project architecture and technical approach
export function DesignPage() {
  return (
    <div>
      {/* Project overview and main goals */}
      <Section id="project-goal" title="Project Goal">
        <div className="bg-pink-primary/10 border-l-4 border-pink-primary p-6 rounded-r-lg">
          <p className="text-lg italic">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit.{' '}
            <em>Lactobacillus crispatus</em> vitae justo eget magna fermentum
            iaculis eu non diam phasellus.
          </p>
        </div>
      </Section>

      {/* Bacterial strain comparison and selection rationale */}
      <Section id="chassis-overview" title="Chassis Overview">
        <Table variant="striped">
          <TableHeader>
            <TableRow>
              <TableHead>Strain</TableHead>
              <TableHead>Purpose</TableHead>
              <TableHead>Characteristics</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            <TableRow>
              <TableCell>IL1403</TableCell>
              <TableCell>Cloning</TableCell>
              <TableCell>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit
              </TableCell>
            </TableRow>
            <TableRow>
              <TableCell>WCFS1</TableCell>
              <TableCell>Characterisation</TableCell>
              <TableCell>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit
              </TableCell>
            </TableRow>
            <TableRow>
              <TableCell>
                <em>L. crispatus</em>
              </TableCell>
              <TableCell>Final chassis</TableCell>
              <TableCell>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit
              </TableCell>
            </TableRow>
          </TableBody>
        </Table>
      </Section>

      {/* Target pathogen cards with key information */}
      <Section id="targets" title="Target Pathogens & Adhesins">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <Card>
            <CardContent>
              <h3 className="text-xl font-semibold mb-3">Lorem Ipsum Dolor</h3>
              <p className="mb-3">Lorem ipsum: Sit amet</p>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore.
              </p>
            </CardContent>
          </Card>

          <Card>
            <CardContent>
              <h3 className="text-xl font-semibold mb-3">
                Consectetur Adipiscing
              </h3>
              <p className="mb-3">Lorem ipsum: Elit sed</p>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore.
              </p>
            </CardContent>
          </Card>

          <Card>
            <CardContent>
              <h3 className="text-xl font-semibold mb-3">Eiusmod Tempor</h3>
              <p className="mb-3">Lorem ipsum: Incididunt ut</p>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore.
              </p>
            </CardContent>
          </Card>
        </div>
      </Section>

      {/* Genetic engineering circuit visualization */}
      <Section id="circuit-diagram" title="Genetic Circuit Diagram">
        <Figure
          alt="Genetic Circuit Diagram of LacThera"
          caption="Figure 1: Lorem ipsum dolor sit amet, consectetur adipiscing elit."
        />
      </Section>

      {/* Interactive protein gallery with detailed mechanisms */}
      <Section id="inhibitor-gallery" title="Protein Inhibitor Gallery">
        <Tabs>
          <Tab title="FimH Inhibitor">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <Figure
                  alt="3D model of FimH inhibitor protein"
                  caption="Figure 2: Lorem ipsum dolor sit amet, consectetur adipiscing elit."
                />
              </div>
              <div>
                <h4 className="text-xl font-semibold mb-3">
                  FimH Binding Mechanism
                </h4>
                <p className="mb-4">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                  Ut enim ad minim veniam, quis nostrud exercitation ullamco.
                </p>
                <ul className="list-disc pl-5 space-y-2">
                  <li>Lorem ipsum dolor sit amet: Kd = 15 nM</li>
                  <li>Lorem ipsum dolor sit amet (3.8-4.5)</li>
                  <li>Lorem ipsum dolor sit amet</li>
                </ul>
              </div>
            </div>
          </Tab>

          <Tab title="MrkD Inhibitor">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <Figure
                  alt="3D model of MrkD inhibitor protein"
                  caption="Figure 3: Lorem ipsum dolor sit amet, consectetur adipiscing elit."
                />
              </div>
              <div>
                <h4 className="text-xl font-semibold mb-3">
                  MrkD Binding Mechanism
                </h4>
                <p className="mb-4">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                </p>
                <ul className="list-disc pl-5 space-y-2">
                  <li>Lorem ipsum dolor sit amet: Kd = 22 nM</li>
                  <li>Lorem ipsum dolor sit amet: 42°C</li>
                  <li>Lorem ipsum dolor sit amet</li>
                </ul>
              </div>
            </div>
          </Tab>

          <Tab title="Vaginolysin">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <Figure
                  alt="3D model of Vaginolysin inhibitor protein"
                  caption="Figure 4: Lorem ipsum dolor sit amet, consectetur adipiscing elit."
                />
              </div>
              <div>
                <h4 className="text-xl font-semibold mb-3">
                  Vaginolysin Neutralization
                </h4>
                <p className="mb-4">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                </p>
                <ul className="list-disc pl-5 space-y-2">
                  <li>Lorem ipsum dolor sit amet: &gt;85% in vitro</li>
                  <li>Lorem ipsum dolor sit amet</li>
                  <li>Lorem ipsum dolor sit amet</li>
                </ul>
              </div>
            </div>
          </Tab>

          <Tab title="AipA">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <Figure
                  alt="3D model of AipA inhibitor protein"
                  caption="Figure 5: Lorem ipsum dolor sit amet, consectetur adipiscing elit."
                />
              </div>
              <div>
                <h4 className="text-xl font-semibold mb-3">
                  AipA Inhibition Strategy
                </h4>
                <p className="mb-4">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                </p>
                <ul className="list-disc pl-5 space-y-2">
                  <li>Lorem ipsum dolor sit amet</li>
                  <li>Lorem ipsum dolor sit amet</li>
                  <li>Lorem ipsum dolor sit amet</li>
                </ul>
              </div>
            </div>
          </Tab>
        </Tabs>
      </Section>

      {/* Delivery method comparison with pros/cons analysis */}
      <Section id="delivery-strategy" title="Delivery Strategy">
        <Accordion>
          <AccordionItem title="Oral Capsule" defaultOpen>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <div>
                <h4 className="font-semibold mb-2">Pros</h4>
                <ul className="list-disc pl-5 space-y-1">
                  <li>Lorem ipsum dolor sit amet</li>
                  <li>Lorem ipsum dolor sit amet</li>
                  <li>Lorem ipsum dolor sit amet</li>
                </ul>
              </div>
              <div>
                <h4 className="font-semibold mb-2">Cons</h4>
                <ul className="list-disc pl-5 space-y-1">
                  <li>Lorem ipsum dolor sit amet</li>
                  <li>Lorem ipsum dolor sit amet</li>
                  <li>Lorem ipsum dolor sit amet</li>
                </ul>
              </div>
              <div>
                <h4 className="font-semibold mb-2">Regulatory Notes</h4>
                <ul className="list-disc pl-5 space-y-1">
                  <li>Lorem ipsum dolor sit amet</li>
                  <li>Lorem ipsum dolor sit amet</li>
                  <li>Lorem ipsum dolor sit amet</li>
                </ul>
              </div>
            </div>
          </AccordionItem>

          <AccordionItem title="Suppository">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <div>
                <h4 className="font-semibold mb-2">Pros</h4>
                <ul className="list-disc pl-5 space-y-1">
                  <li>Lorem ipsum dolor sit amet</li>
                  <li>Lorem ipsum dolor sit amet</li>
                  <li>Lorem ipsum dolor sit amet</li>
                </ul>
              </div>
              <div>
                <h4 className="font-semibold mb-2">Cons</h4>
                <ul className="list-disc pl-5 space-y-1">
                  <li>Lorem ipsum dolor sit amet</li>
                  <li>Lorem ipsum dolor sit amet</li>
                  <li>Lorem ipsum dolor sit amet</li>
                </ul>
              </div>
              <div>
                <h4 className="font-semibold mb-2">Regulatory Notes</h4>
                <ul className="list-disc pl-5 space-y-1">
                  <li>Lorem ipsum dolor sit amet</li>
                  <li>Lorem ipsum dolor sit amet</li>
                  <li>Lorem ipsum dolor sit amet</li>
                </ul>
              </div>
            </div>
          </AccordionItem>

          <AccordionItem title="Hydrogel">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <div>
                <h4 className="font-semibold mb-2">Pros</h4>
                <ul className="list-disc pl-5 space-y-1">
                  <li>Lorem ipsum dolor sit amet</li>
                  <li>Lorem ipsum dolor sit amet</li>
                  <li>Lorem ipsum dolor sit amet</li>
                </ul>
              </div>
              <div>
                <h4 className="font-semibold mb-2">Cons</h4>
                <ul className="list-disc pl-5 space-y-1">
                  <li>Lorem ipsum dolor sit amet</li>
                  <li>Lorem ipsum dolor sit amet</li>
                  <li>Lorem ipsum dolor sit amet</li>
                </ul>
              </div>
              <div>
                <h4 className="font-semibold mb-2">Regulatory Notes</h4>
                <ul className="list-disc pl-5 space-y-1">
                  <li>Lorem ipsum dolor sit amet</li>
                  <li>Lorem ipsum dolor sit amet</li>
                  <li>Lorem ipsum dolor sit amet</li>
                </ul>
              </div>
            </div>
          </AccordionItem>
        </Accordion>
      </Section>

      {/* Safety measures and risk management strategies */}
      <Section id="risk-mitigation" title="Risk Mitigation">
        <ul className="space-y-4">
          <li className="flex items-start">
            <div className="bg-pink-primary/20 rounded-full p-1 mr-3 mt-1">
              <div className="w-4 h-4 bg-pink-primary rounded-full"></div>
            </div>
            <div>
              <h4 className="font-semibold mb-1">Kill-switch Plasmid</h4>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore.
              </p>
            </div>
          </li>

          <li className="flex items-start">
            <div className="bg-pink-primary/20 rounded-full p-1 mr-3 mt-1">
              <div className="w-4 h-4 bg-pink-primary rounded-full"></div>
            </div>
            <div>
              <h4 className="font-semibold mb-1">Antibiotic-free Selection</h4>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore.
              </p>
            </div>
          </li>

          <li className="flex items-start">
            <div className="bg-pink-primary/20 rounded-full p-1 mr-3 mt-1">
              <div className="w-4 h-4 bg-pink-primary rounded-full"></div>
            </div>
            <div>
              <h4 className="font-semibold mb-1">Off-target BLAST Checks</h4>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore.
              </p>
            </div>
          </li>

          <li className="flex items-start">
            <div className="bg-pink-primary/20 rounded-full p-1 mr-3 mt-1">
              <div className="w-4 h-4 bg-pink-primary rounded-full"></div>
            </div>
            <div>
              <h4 className="font-semibold mb-1">Biocontainment Strategy</h4>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore.
              </p>
            </div>
          </li>
        </ul>
      </Section>
    </div>
  )
}
