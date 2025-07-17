import { useLocation } from 'react-router-dom'
import { ChevronRight, X } from 'lucide-react'

// Props for controlling sidebar visibility
interface SidebarProps {
  isOpen: boolean
  toggleSidebar: () => void
}

// Context-aware sidebar showing page sections for navigation
export function Sidebar({ isOpen, toggleSidebar }: SidebarProps) {
  const location = useLocation()

  // Generate dynamic sidebar links based on current page
  const getSidebarLinks = () => {
    const path = location.pathname

    // Page-specific section mappings
    const links: Record<string, { title: string; id: string }[]> = {
      '/': [
        { title: 'Hero', id: 'hero' },
        { title: 'Why It Matters', id: 'why-it-matters' },
        { title: 'At-a-Glance Metrics', id: 'metrics' },
        { title: 'Quick Links', id: 'quick-links' },
        { title: 'Latest Updates', id: 'updates' },
      ],

      '/design': [
        { title: 'Project Goal', id: 'project-goal' },
        { title: 'Chassis Overview', id: 'chassis-overview' },
        { title: 'Target Pathogens & Adhesins', id: 'targets' },
        { title: 'Genetic Circuit Diagram', id: 'circuit-diagram' },
        { title: 'Protein Inhibitor Gallery', id: 'inhibitor-gallery' },
        { title: 'Delivery Strategy', id: 'delivery-strategy' },
        { title: 'Risk Mitigation', id: 'risk-mitigation' },
      ],

      '/experiments': [
        { title: 'Wet-Lab Pipeline', id: 'wet-lab-pipeline' },
        { title: 'Assay Panels', id: 'assay-panels' },
        { title: 'Results Synopsis', id: 'results-synopsis' },
        { title: 'Protocols', id: 'protocols' },
        { title: 'Raw Data Access', id: 'raw-data' },
      ],

      '/modeling': [
        { title: 'RF Diffusion Workflow', id: 'rf-diffusion' },
        { title: 'Binding Energy Heatmap', id: 'binding-energy' },
        { title: 'Molecular Dynamics Summary', id: 'molecular-dynamics' },
        { title: 'Predictive Population Model', id: 'population-model' },
      ],

      '/human-practices': [
        { title: 'Stakeholder Engagement', id: 'stakeholder-engagement' },
        { title: 'Community Survey', id: 'community-survey' },
        { title: 'Regulatory Landscape', id: 'regulatory-landscape' },
        { title: 'Ethical & DEI Considerations', id: 'ethical-considerations' },
      ],

      '/entrepreneurship': [
        { title: 'Problem–Solution Fit', id: 'problem-solution' },
        { title: 'Market Size & TAM/SAM/SOM', id: 'market-size' },
        { title: 'Business Roadmap', id: 'business-roadmap' },
        { title: 'Funding', id: 'funding' },
      ],

      '/team': [{ title: 'Team Members', id: 'team-members' }],

      '/notebook': [{ title: 'Weekly Entries', id: 'weekly-entries' }],

      '/safety': [
        { title: 'Biosafety Level', id: 'biosafety-level' },
        { title: 'GMO Containment', id: 'gmo-containment' },
        { title: 'Risk Assessment Matrix', id: 'risk-assessment' },
        { title: 'Waste Disposal SOP', id: 'waste-disposal' },
      ],

      '/parts': [{ title: 'Parts Registry', id: 'parts-registry' }],

      '/references': [
        { title: 'References', id: 'references' },
        { title: 'Attributions', id: 'attributions' },
      ],
    }

    return links[path] || []
  }

  const sidebarLinks = getSidebarLinks()

  // Collapsed sidebar state - show expand button only
  if (!isOpen) {
    return (
      <div className="hidden md:flex items-center justify-center w-10 border-r border-gray-200 dark:border-gray-700">
        <button
          className="p-2 text-gray-500 hover:text-violet-text"
          onClick={toggleSidebar}
          aria-label="Open sidebar"
        >
          <ChevronRight size={20} />
        </button>
      </div>
    )
  }

  // Full sidebar with page navigation
  return (
    <aside className="w-64 border-r border-gray-200 dark:border-gray-700 hidden md:block overflow-y-auto">
      <div className="p-4">
        {/* Sidebar header with close button */}
        <div className="flex items-center justify-between mb-4">
          <h2 className="text-lg font-semibold">On This Page</h2>
        </div>

        {/* Page section navigation links */}
        <nav>
          <ul className="space-y-1">
            {sidebarLinks.map((link) => (
              <li key={link.id}>
                <a
                  href={`#${link.id}`}
                  className="flex items-center gap-2 px-3 py-2 rounded-md hover:bg-pink-primary/20 text-sm"
                >
                  <ChevronRight size={16} />
                  {link.title}
                </a>
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </aside>
  )
}
