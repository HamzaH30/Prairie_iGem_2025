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

// Experimental methodology and results documentation page
export function ExperimentsPage() {
  // Timeline data for wet lab activities
  const pipelineSteps = [
    {
      title: 'Cloning',
      date: 'June - July 2025',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
    },
    {
      title: 'Expression',
      date: 'July - August 2025',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
    },
    {
      title: 'Purification',
      date: 'August 2025',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
    },
    {
      title: 'Assays',
      date: 'September - October 2025',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
    },
  ]

  // Protocol documentation data
  const protocols = [
    {
      name: 'Cloning Protocol',
      description: 'Lorem ipsum dolor sit amet',
      link: '#',
    },
    {
      name: 'Protein Expression',
      description: 'Lorem ipsum dolor sit amet',
      link: '#',
    },
    {
      name: 'Adhesion Assay',
      description: 'Lorem ipsum dolor sit amet',
      link: '#',
    },
    {
      name: 'Competition Assay',
      description: 'Lorem ipsum dolor sit amet',
      link: '#',
    },
    {
      name: 'Survival Assay',
      description: 'Lorem ipsum dolor sit amet',
      link: '#',
    },
  ]

  return (
    <div>
      {/* Chronological experimental workflow with timeline visualization */}
      <Section id="wet-lab-pipeline" title="Wet-Lab Pipeline">
        <div className="relative">
          {/* Vertical timeline line */}
          <div className="absolute left-6 h-full w-0.5 bg-pink-primary"></div>

          <div className="space-y-12">
            {pipelineSteps.map((item, index) => (
              <div key={index} className="relative pl-16">
                {/* Timeline marker */}
                <div className="absolute left-3.5 -translate-x-1/2 h-12 w-12 rounded-full bg-pink-primary flex items-center justify-center text-white font-bold">
                  {index + 1}
                </div>

                <h3 className="text-xl font-semibold mb-1">{item.title}</h3>
                <p className="text-sm text-gray-600 dark:text-gray-400 mb-2">
                  {item.date}
                </p>
                <p>{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </Section>

      {/* Experimental assay results with visualizations */}
      <Section id="assay-panels" title="Assay Panels">
        <div className="space-y-8">
          <div>
            <h3 className="text-xl font-semibold mb-4">
              Adhesion-blocking ELISA
            </h3>
            <Figure
              alt="Graph showing adhesion-blocking ELISA results"
              caption="Figure 1: Lorem ipsum dolor sit amet, consectetur adipiscing elit."
            />
          </div>

          <div>
            <h3 className="text-xl font-semibold mb-4">
              Competition in Vaginal Simulation Media
            </h3>
            <Figure
              alt="Bar chart showing competition assay results"
              caption="Figure 2: Lorem ipsum dolor sit amet, consectetur adipiscing elit."
            />
          </div>

          <div>
            <h3 className="text-xl font-semibold mb-4">
              pH & Bile-salt Tolerance
            </h3>
            <Figure
              alt="Line chart showing pH and bile-salt tolerance"
              caption="Figure 3: Lorem ipsum dolor sit amet, consectetur adipiscing elit."
            />
          </div>
        </div>
      </Section>

      {/* Key performance metrics and success indicators */}
      <Section id="results-synopsis" title="Results Synopsis">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-center">
          <div className="bg-pink-primary/20 rounded-lg p-6">
            <div className="text-4xl font-bold mb-2">92%</div>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit</p>
          </div>

          <div className="bg-gray-secondary/30 rounded-lg p-6">
            <div className="text-4xl font-bold mb-2">4.3×</div>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit</p>
          </div>

          <div className="bg-celeste/30 rounded-lg p-6">
            <div className="text-4xl font-bold mb-2">87%</div>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit</p>
          </div>
        </div>
      </Section>

      {/* Downloadable protocol documentation */}
      <Section id="protocols" title="Protocols">
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead>Protocol</TableHead>
              <TableHead>Description</TableHead>
              <TableHead>Link</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {protocols.map((item, index) => (
              <TableRow key={index}>
                <TableCell>{item.name}</TableCell>
                <TableCell>{item.description}</TableCell>
                <TableCell>
                  <a
                    href={item.link}
                    className="text-pink-primary hover:underline"
                  >
                    PDF
                  </a>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </Section>
    </div>
  )
}
