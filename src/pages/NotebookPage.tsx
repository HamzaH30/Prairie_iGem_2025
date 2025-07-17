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

// Lab notebook documenting weekly progress and activities
export function NotebookPage() {
  // Weekly activity log data
  const notebookEntries = [
    {
      week: 'Week 1',
      date: 'May 3-7, 2025',
      activities: `
* Lorem ipsum dolor sit amet
* Lorem ipsum dolor sit amet
* Lorem ipsum dolor sit amet
* Lorem ipsum dolor sit amet
      `,
    },
    {
      week: 'Week 2',
      date: 'May 10-14, 2025',
      activities: `
* Lorem ipsum dolor sit amet
* Lorem ipsum dolor sit amet
* Lorem ipsum dolor sit amet
* Lorem ipsum dolor sit amet
      `,
    },
    {
      week: 'Week 3',
      date: 'May 17-21, 2025',
      activities: `
* Lorem ipsum dolor sit amet
* Lorem ipsum dolor sit amet
* Lorem ipsum dolor sit amet
* Lorem ipsum dolor sit amet
      `,
    },
    {
      week: 'Week 4',
      date: 'May 24-28, 2025',
      activities: `
* Lorem ipsum dolor sit amet
* Lorem ipsum dolor sit amet
* Lorem ipsum dolor sit amet
* Lorem ipsum dolor sit amet
      `,
    },
    {
      week: 'Week 5',
      date: 'May 31-June 4, 2025',
      activities: `
* Lorem ipsum dolor sit amet
* Lorem ipsum dolor sit amet
* Lorem ipsum dolor sit amet
* Lorem ipsum dolor sit amet
      `,
    },
  ]

  return (
    <div>
      {/* Chronological lab activity documentation */}
      <Section id="weekly-entries" title="Weekly Entries">
        <div className="bg-white dark:bg-[#482f48]/80 border border-gray-200 dark:border-gray-700 rounded-lg overflow-hidden">
          <Table variant="striped">
            <TableHeader>
              <TableRow>
                <TableHead className="w-1/6">Week</TableHead>
                <TableHead className="w-1/6">Date</TableHead>
                <TableHead>Key Activities</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {notebookEntries.map((entry, index) => (
                <TableRow key={index}>
                  <TableCell className="font-medium">{entry.week}</TableCell>
                  <TableCell>{entry.date}</TableCell>
                  <TableCell>
                    <div className="whitespace-pre-line">
                      {entry.activities}
                    </div>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </div>
      </Section>
    </div>
  )
}
