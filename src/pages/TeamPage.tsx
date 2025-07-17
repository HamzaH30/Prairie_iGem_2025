import React, { useState } from 'react'
import { Section } from '../components/ui/Section'
import { Card, CardContent } from '../components/ui/Card'

// Team member showcase with filtering by department
export function TeamPage() {
  const [activeFilter, setActiveFilter] = useState('All')

  // Department filter options
  const filters = ['All', 'Wet Lab', 'Dry Lab', 'HP', 'BizDev', 'Web']

  // Team member data with roles and departments
  const teamMembers = [
    {
      name: 'John Doe',
      role: 'Team Lead',
      department: 'Wet Lab',
      bio: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor.',
    },
    {
      name: 'John Doe',
      role: 'Cloning Specialist',
      department: 'Wet Lab',
      bio: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor.',
    },
    {
      name: 'John Doe',
      role: 'Protein Engineer',
      department: 'Wet Lab',
      bio: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor.',
    },
    {
      name: 'John Doe',
      role: 'Computational Biologist',
      department: 'Dry Lab',
      bio: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor.',
    },
    {
      name: 'John Doe',
      role: 'AI Specialist',
      department: 'Dry Lab',
      bio: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor.',
    },
    {
      name: 'John Doe',
      role: 'Human Practices Lead',
      department: 'HP',
      bio: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor.',
    },
    {
      name: 'John Doe',
      role: 'Community Engagement',
      department: 'HP',
      bio: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor.',
    },
    {
      name: 'John Doe',
      role: 'Business Development',
      department: 'BizDev',
      bio: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor.',
    },
    {
      name: 'John Doe',
      role: 'Regulatory Affairs',
      department: 'BizDev',
      bio: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor.',
    },
    {
      name: 'John Doe',
      role: 'Web Developer',
      department: 'Web',
      bio: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor.',
    },
  ]

  // Filter team members based on selected department
  const filteredMembers =
    activeFilter === 'All'
      ? teamMembers
      : teamMembers.filter((member) => member.department === activeFilter)

  return (
    <div>
      {/* Team member cards with department filtering */}
      <Section id="team-members" title="Team Members">
        {/* Department filter buttons */}
        <div className="mb-8 flex flex-wrap gap-2 justify-center">
          {filters.map((filter) => (
            <button
              key={filter}
              className={`px-4 py-2 rounded-full text-sm ${
                activeFilter === filter
                  ? 'bg-pink-primary text-violet-text'
                  : 'bg-gray-200 dark:bg-gray-700 text-violet-text dark:text-white'
              }`}
              onClick={() => setActiveFilter(filter)}
            >
              {filter}
            </button>
          ))}
        </div>

        {/* Filtered team member grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredMembers.map((member, index) => (
            <Card key={index} variant="team">
              <CardContent>
                <div className="flex flex-col items-center text-center">
                  {/* Member avatar placeholder */}
                  <div className="image-placeholder w-32 h-32 rounded-full min-h-0 mb-4">
                    {member.name[0]}
                  </div>

                  <h3 className="text-xl font-semibold">{member.name}</h3>
                  <p className="text-pink-primary font-medium mb-1">
                    {member.role}
                  </p>
                  <span className="bg-gray-100 dark:bg-gray-800 text-sm px-3 py-1 rounded-full mb-4">
                    {member.department}
                  </span>
                  <p className="text-sm">{member.bio}</p>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </Section>
    </div>
  )
}
