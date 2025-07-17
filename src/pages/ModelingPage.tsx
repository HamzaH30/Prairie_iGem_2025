import React from 'react'
import { Section } from '../components/ui/Section'
import { Figure } from '../components/ui/Figure'
import {
  Table,
  TableHeader,
  TableBody,
  TableRow,
  TableHead,
  TableCell,
} from '../components/ui/Table'

// Computational modeling and simulation results page
export function ModelingPage() {
  // AI protein design workflow steps
  const workflowSteps = [
    {
      icon: '🧬',
      title: 'Target Selection',
      description: 'Lorem ipsum dolor sit amet',
    },
    {
      icon: '🔬',
      title: 'Structure Analysis',
      description: 'Lorem ipsum dolor sit amet',
    },
    {
      icon: '💻',
      title: 'AI Design',
      description: 'Lorem ipsum dolor sit amet',
    },
    {
      icon: '🧪',
      title: 'In Silico Testing',
      description: 'Lorem ipsum dolor sit amet',
    },
    {
      icon: '🦠',
      title: 'Expression Optimization',
      description: 'Lorem ipsum dolor sit amet',
    },
  ]

  return (
    <div>
      {/* AI-driven protein design methodology */}
      <Section id="rf-diffusion" title="RF Diffusion Workflow">
        <div className="flex flex-col md:flex-row gap-8 items-center">
          {workflowSteps.map((step, index) => (
            <div
              key={index}
              className="flex flex-col items-center text-center max-w-xs"
            >
              <div className="text-4xl mb-2">{step.icon}</div>
              <h3 className="text-lg font-semibold mb-1">{step.title}</h3>
              <p className="text-sm">{step.description}</p>
              {/* Arrow connector except for last item */}
              {index < 4 && (
                <div className="hidden md:block text-2xl my-4">→</div>
              )}
            </div>
          ))}
        </div>
      </Section>

      {/* Protein variant binding affinity analysis */}
      <Section id="binding-energy" title="Binding Energy Heatmap">
        <Figure
          alt="Heatmap showing binding energy across protein variants"
          caption="Figure 1: Lorem ipsum dolor sit amet, consectetur adipiscing elit."
        />

        <div className="mt-6 bg-gray-100 dark:bg-gray-800 p-4 rounded-md">
          <h4 className="font-semibold mb-2">Analysis Highlights</h4>
          <ul className="list-disc pl-5 space-y-2">
            <li>Lorem ipsum dolor sit amet (-12.3 kcal/mol)</li>
            <li>Lorem ipsum dolor sit amet</li>
            <li>Lorem ipsum dolor sit amet</li>
          </ul>
        </div>
      </Section>

      {/* Molecular dynamics simulation results table */}
      <Section id="molecular-dynamics" title="Molecular Dynamics Summary">
        <div className="font-mono bg-gray-100 dark:bg-gray-800 p-4 rounded-md overflow-x-auto">
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>Protein</TableHead>
                <TableHead>Target</TableHead>
                <TableHead>ΔG (kcal/mol)</TableHead>
                <TableHead>kon (M⁻¹s⁻¹)</TableHead>
                <TableHead>koff (s⁻¹)</TableHead>
                <TableHead>t½ (min)</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              <TableRow>
                <TableCell>FimH-Inh-C7</TableCell>
                <TableCell>FimH</TableCell>
                <TableCell>-12.3</TableCell>
                <TableCell>3.4×10⁶</TableCell>
                <TableCell>5.2×10⁻⁴</TableCell>
                <TableCell>22.2</TableCell>
              </TableRow>
              <TableRow>
                <TableCell>MrkD-Inh-A4</TableCell>
                <TableCell>MrkD</TableCell>
                <TableCell>-10.7</TableCell>
                <TableCell>1.8×10⁶</TableCell>
                <TableCell>7.9×10⁻⁴</TableCell>
                <TableCell>14.6</TableCell>
              </TableRow>
              <TableRow>
                <TableCell>VLY-Neut-B2</TableCell>
                <TableCell>Vaginolysin</TableCell>
                <TableCell>-11.5</TableCell>
                <TableCell>2.7×10⁶</TableCell>
                <TableCell>6.1×10⁻⁴</TableCell>
                <TableCell>18.9</TableCell>
              </TableRow>
              <TableRow>
                <TableCell>AipA-Inh-D9</TableCell>
                <TableCell>AipA</TableCell>
                <TableCell>-9.8</TableCell>
                <TableCell>9.2×10⁵</TableCell>
                <TableCell>1.2×10⁻³</TableCell>
                <TableCell>9.6</TableCell>
              </TableRow>
            </TableBody>
          </Table>
        </div>
      </Section>

      {/* Interactive population dynamics simulation */}
      <Section id="population-model" title="Predictive Population Model">
        <div className="border border-gray-200 dark:border-gray-700 rounded-lg overflow-hidden">
          {/* Simulation controls header */}
          <div className="bg-gray-100 dark:bg-gray-800 px-4 py-2 font-medium flex justify-between items-center">
            <span>Lotka-Volterra Simulation</span>
            <div className="flex gap-2">
              <button className="px-3 py-1 text-sm bg-pink-primary rounded-md">
                Run
              </button>
              <button className="px-3 py-1 text-sm bg-gray-200 dark:bg-gray-700 rounded-md">
                Reset
              </button>
            </div>
          </div>

          <div className="p-6">
            <Figure
              alt="Interactive population model simulation"
              caption="Figure 2: Lorem ipsum dolor sit amet, consectetur adipiscing elit."
            />

            {/* Parameter controls and results display */}
            <div className="mt-6 grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <h4 className="font-semibold mb-2">Parameters</h4>
                <div className="space-y-3">
                  <div>
                    <label
                      className="block text-sm mb-1"
                      htmlFor="lacthera-pop"
                    >
                      Initial LacThera Population
                    </label>
                    <input
                      id="lacthera-pop"
                      type="range"
                      className="w-full"
                      min="0"
                      max="100"
                      defaultValue="50"
                    />
                  </div>
                  <div>
                    <label
                      className="block text-sm mb-1"
                      htmlFor="pathogen-pop"
                    >
                      Initial Pathogen Population
                    </label>
                    <input
                      id="pathogen-pop"
                      type="range"
                      className="w-full"
                      min="0"
                      max="100"
                      defaultValue="20"
                    />
                  </div>
                  <div>
                    <label
                      className="block text-sm mb-1"
                      htmlFor="growth-ratio"
                    >
                      Growth Rate Ratio
                    </label>
                    <input
                      id="growth-ratio"
                      type="range"
                      className="w-full"
                      min="0"
                      max="5"
                      step="0.1"
                      defaultValue="1.5"
                    />
                  </div>
                </div>
              </div>

              <div>
                <h4 className="font-semibold mb-2">Simulation Results</h4>
                <ul className="list-disc pl-5 space-y-2">
                  <li>Lorem ipsum dolor sit amet</li>
                  <li>Lorem ipsum dolor sit amet 10⁸ CFU</li>
                  <li>Lorem ipsum dolor sit amet: 0.42 per day</li>
                  <li>Lorem ipsum dolor sit amet: 96 hours</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </Section>
    </div>
  )
}
