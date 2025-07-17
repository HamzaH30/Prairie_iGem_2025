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
import { Figure } from '../components/ui/Figure'

// Laboratory safety protocols and biosafety documentation page
export function SafetyPage() {
  return (
    <div>
      {/* Biosafety level classification and lab protocols */}
      <Section id="biosafety-level" title="Biosafety Level">
        <div className="bg-pink-primary/10 border-l-4 border-pink-primary p-6 rounded-r-lg mb-6">
          <h3 className="text-xl font-semibold mb-2">BSL-1</h3>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua.
          </p>
        </div>

        <p className="mb-4">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <h3 className="text-lg font-semibold mb-3">
              Laboratory Safety Measures
            </h3>
            <ul className="list-disc pl-5 space-y-2">
              <li>Lorem ipsum dolor sit amet</li>
              <li>Lorem ipsum dolor sit amet</li>
              <li>Lorem ipsum dolor sit amet</li>
              <li>Lorem ipsum dolor sit amet</li>
              <li>Lorem ipsum dolor sit amet</li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-3">
              Personal Protective Equipment
            </h3>
            <ul className="list-disc pl-5 space-y-2">
              <li>Lorem ipsum dolor sit amet</li>
              <li>Lorem ipsum dolor sit amet</li>
              <li>Lorem ipsum dolor sit amet</li>
              <li>Lorem ipsum dolor sit amet</li>
              <li>Lorem ipsum dolor sit amet</li>
            </ul>
          </div>
        </div>
      </Section>

      {/* Genetic modification containment strategies */}
      <Section id="gmo-containment" title="GMO Containment">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div>
            <h3 className="text-lg font-semibold mb-3">Genetic Safeguards</h3>
            <ul className="list-disc pl-5 space-y-2 mb-6">
              <li>Lorem ipsum dolor sit amet</li>
              <li>Lorem ipsum dolor sit amet</li>
              <li>Lorem ipsum dolor sit amet</li>
              <li>Lorem ipsum dolor sit amet</li>
              <li>Lorem ipsum dolor sit amet</li>
            </ul>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua.
            </p>
          </div>

          <Figure
            alt="Diagram of genetic containment mechanisms"
            caption="Figure 1: Lorem ipsum dolor sit amet, consectetur adipiscing elit."
          />
        </div>
      </Section>

      {/* Comprehensive risk assessment with mitigation strategies */}
      <Section id="risk-assessment" title="Risk Assessment Matrix">
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead>Risk</TableHead>
              <TableHead>Likelihood</TableHead>
              <TableHead>Impact</TableHead>
              <TableHead>Mitigation Strategy</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            <TableRow>
              <TableCell>Horizontal gene transfer</TableCell>
              <TableCell>Very Low</TableCell>
              <TableCell>High</TableCell>
              <TableCell>Lorem ipsum dolor sit amet</TableCell>
            </TableRow>
            <TableRow>
              <TableCell>Environmental persistence</TableCell>
              <TableCell>Very Low</TableCell>
              <TableCell>Medium</TableCell>
              <TableCell>Lorem ipsum dolor sit amet</TableCell>
            </TableRow>
            <TableRow>
              <TableCell>Immune reaction</TableCell>
              <TableCell>Low</TableCell>
              <TableCell>Medium</TableCell>
              <TableCell>Lorem ipsum dolor sit amet</TableCell>
            </TableRow>
            <TableRow>
              <TableCell>Microbiome disruption</TableCell>
              <TableCell>Low</TableCell>
              <TableCell>Medium</TableCell>
              <TableCell>Lorem ipsum dolor sit amet</TableCell>
            </TableRow>
            <TableRow>
              <TableCell>Lab exposure</TableCell>
              <TableCell>Low</TableCell>
              <TableCell>Low</TableCell>
              <TableCell>Lorem ipsum dolor sit amet</TableCell>
            </TableRow>
          </TableBody>
        </Table>
      </Section>

      {/* Detailed waste disposal protocols and procedures */}
      <Section id="waste-disposal" title="Waste Disposal SOP">
        <div className="bg-white dark:bg-[#482f48]/80 border border-gray-200 dark:border-gray-700 rounded-lg p-6">
          <h3 className="text-xl font-semibold mb-4">
            Standard Operating Procedure for Waste Disposal
          </h3>

          <div className="space-y-6">
            <div>
              <h4 className="font-semibold mb-2">1. Liquid Waste</h4>
              <p className="mb-2">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua.
              </p>
              <ol className="list-decimal pl-5 space-y-1">
                <li>Lorem ipsum dolor sit amet</li>
                <li>Lorem ipsum dolor sit amet</li>
                <li>Lorem ipsum dolor sit amet</li>
                <li>Lorem ipsum dolor sit amet</li>
              </ol>
            </div>

            <div>
              <h4 className="font-semibold mb-2">2. Solid Waste</h4>
              <p className="mb-2">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua.
              </p>
              <ol className="list-decimal pl-5 space-y-1">
                <li>Lorem ipsum dolor sit amet</li>
                <li>Lorem ipsum dolor sit amet</li>
                <li>Lorem ipsum dolor sit amet</li>
                <li>Lorem ipsum dolor sit amet</li>
              </ol>
            </div>

            <div>
              <h4 className="font-semibold mb-2">3. Sharps</h4>
              <p className="mb-2">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua.
              </p>
              <ol className="list-decimal pl-5 space-y-1">
                <li>Lorem ipsum dolor sit amet</li>
                <li>Lorem ipsum dolor sit amet</li>
                <li>Lorem ipsum dolor sit amet</li>
                <li>Lorem ipsum dolor sit amet</li>
              </ol>
            </div>
          </div>

          {/* SOP download button */}
          <div className="mt-8 flex justify-center">
            <button className="bg-pink-primary hover:bg-pink-primary/90 text-violet-text px-4 py-2 rounded-md flex items-center gap-2">
              <span>Download Complete SOP (PDF)</span>
              <svg
                width="16"
                height="16"
                viewBox="0 0 16 16"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M8 12L3 7L4.4 5.55L7 8.15V0H9V8.15L11.6 5.55L13 7L8 12ZM0 16V11H2V14H14V11H16V14C16 14.5304 15.7893 15.0391 15.4142 15.4142C15.0391 15.7893 14.5304 16 14 16H2C1.46957 16 0.960859 15.7893 0.585786 15.4142C0.210714 15.0391 0 14.5304 0 14V16Z"
                  fill="currentColor"
                />
              </svg>
            </button>
          </div>
        </div>
      </Section>
    </div>
  )
}
