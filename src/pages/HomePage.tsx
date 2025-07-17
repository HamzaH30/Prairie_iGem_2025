import React from 'react'
import { Section } from '../components/ui/Section'
import { Button } from '../components/ui/Button'
import { Card, CardContent } from '../components/ui/Card'

// Main landing page showcasing project overview and quick navigation
export function HomePage() {
  // Quick navigation link data
  const quickLinks = [
    {
      title: 'Engineering',
      description: 'Lorem ipsum dolor sit amet',
      link: '/design',
    },
    {
      title: 'Experiments',
      description: 'Lorem ipsum dolor sit amet',
      link: '/experiments',
    },
    {
      title: 'Modeling',
      description: 'Lorem ipsum dolor sit amet',
      link: '/modeling',
    },
    {
      title: 'Human Practices',
      description: 'Lorem ipsum dolor sit amet',
      link: '/human-practices',
    },
    {
      title: 'Entrepreneurship',
      description: 'Lorem ipsum dolor sit amet',
      link: '/entrepreneurship',
    },
    {
      title: 'Team',
      description: 'Lorem ipsum dolor sit amet',
      link: '/team',
    },
  ]

  // Recent activity timeline data
  const recentUpdates = [
    {
      date: 'October 15, 2025',
      title: 'Lorem ipsum dolor sit amet',
      type: 'Lab',
    },
    {
      date: 'October 10, 2025',
      title: 'Lorem ipsum dolor sit amet',
      type: 'Human Practices',
    },
    {
      date: 'October 5, 2025',
      title: 'Lorem ipsum dolor sit amet',
      type: 'Modeling',
    },
    {
      date: 'September 28, 2025',
      title: 'Lorem ipsum dolor sit amet',
      type: 'Outreach',
    },
  ]

  return (
    <div>
      {/* Hero section with main call-to-action */}
      <Section id="hero" title="" className="text-center py-16">
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4">
          LacThera: Next-Gen Probiotics for Women's Health
        </h1>
        <p className="lead mb-8 max-w-3xl mx-auto">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam vitae{' '}
          <em>Lactobacillus</em> felis consequat magna.
        </p>
        <div className="flex flex-wrap justify-center gap-4">
          <Button href="/design" size="lg">
            Dive into Engineering
          </Button>
          <Button href="/team" variant="secondary" size="lg">
            Meet the Team
          </Button>
        </div>
      </Section>

      {/* Problem statement and motivation */}
      <Section id="why-it-matters" title="Why It Matters">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <Card>
            <CardContent>
              <h3 className="text-xl font-semibold mb-3">
                Microbiome Imbalance
              </h3>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam.
              </p>
            </CardContent>
          </Card>

          <Card>
            <CardContent>
              <h3 className="text-xl font-semibold mb-3">Health Issues</h3>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam.
              </p>
            </CardContent>
          </Card>

          <Card>
            <CardContent>
              <h3 className="text-xl font-semibold mb-3">
                Better Solutions Needed
              </h3>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam.
              </p>
            </CardContent>
          </Card>
        </div>
      </Section>

      {/* Key project statistics and achievements */}
      <Section id="metrics" title="At-a-Glance Metrics">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-center">
          <div className="bg-pink-primary/20 rounded-lg p-6">
            <div className="text-4xl font-bold mb-2">30%</div>
            <p>Lorem ipsum dolor sit amet consectetur</p>
          </div>
          <div className="bg-gray-secondary/30 rounded-lg p-6">
            <div className="text-4xl font-bold mb-2">&gt;90%</div>
            <p>Lorem ipsum dolor sit amet consectetur</p>
          </div>
          <div className="bg-celeste/30 rounded-lg p-6">
            <div className="text-4xl font-bold mb-2">4</div>
            <p>Lorem ipsum dolor sit amet</p>
          </div>
        </div>
      </Section>

      {/* Navigation cards for main project sections */}
      <Section id="quick-links" title="Quick Links">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
          {quickLinks.map((item, index) => (
            <Card key={index} className="h-full">
              <CardContent className="h-full flex flex-col">
                <h3 className="text-xl font-semibold mb-2">{item.title}</h3>
                <p className="mb-4 flex-grow">{item.description}</p>
                <Button href={item.link} size="sm" className="mt-auto">
                  Learn More
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>
      </Section>

      {/* Activity timeline showing recent progress */}
      <Section id="updates" title="Latest Updates">
        <div className="border border-gray-200 dark:border-gray-700 rounded-lg overflow-hidden">
          <div className="bg-gray-100 dark:bg-gray-800 px-4 py-2 font-medium">
            Recent Activity
          </div>
          <div className="divide-y divide-gray-200 dark:divide-gray-700">
            {recentUpdates.map((item, index) => (
              <div key={index} className="p-4">
                <div className="flex justify-between items-start">
                  <div>
                    <h4 className="font-medium">{item.title}</h4>
                    <p className="text-sm text-gray-600 dark:text-gray-400">
                      {item.date}
                    </p>
                  </div>
                  <span className="bg-pink-primary/20 text-violet-text px-2 py-1 rounded text-xs">
                    {item.type}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </Section>
    </div>
  )
}
