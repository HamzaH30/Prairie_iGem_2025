import React from 'react'
import { Section } from '../components/ui/Section'

// References and attributions page for academic citations and acknowledgments
export function ReferencesPage() {
  return (
    <div>
      {/* Academic citations in standard format */}
      <Section id="references" title="References">
        <div className="bg-white dark:bg-[#482f48]/80 border border-gray-200 dark:border-gray-700 rounded-lg p-6">
          <ol className="list-decimal pl-5 space-y-4">
            <li>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua.{' '}
              <em>Lorem ipsum dolor</em>, 128(4): 1045-1058.
            </li>
            <li>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua.{' '}
              <em>Lorem ipsum dolor</em>, 42(2): 187-195.
            </li>
            <li>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua.{' '}
              <em>Lorem ipsum dolor</em>, 136: 105325.
            </li>
            <li>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua.{' '}
              <em>Lorem ipsum dolor</em>, 32(6): 1123-1135.
            </li>
            <li>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua.{' '}
              <em>Lorem ipsum dolor</em>, 38(3): 245-259.
            </li>
            <li>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua.{' '}
              <em>Lorem ipsum dolor</em>, 39(8): 1567-1578.
            </li>
            <li>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua.{' '}
              <em>Lorem ipsum dolor</em>, 12: 45.
            </li>
            <li>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua.{' '}
              <em>Lorem ipsum dolor</em>, 33(2): 167-175.
            </li>
            <li>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua.{' '}
              <em>Lorem ipsum dolor</em>, 23(3): e3002167.
            </li>
            <li>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua.{' '}
              <em>Lorem ipsum dolor</em>.
            </li>
          </ol>
        </div>
      </Section>

      {/* Acknowledgments for advisors, tools, and resources */}
      <Section id="attributions" title="Attributions">
        <div className="bg-white dark:bg-[#482f48]/80 border border-gray-200 dark:border-gray-700 rounded-lg p-6">
          {/* Faculty and mentor acknowledgments */}
          <h3 className="text-xl font-semibold mb-4">Advisors</h3>
          <ul className="list-disc pl-5 space-y-2 mb-6">
            <li>Lorem ipsum dolor sit amet</li>
            <li>Lorem ipsum dolor sit amet</li>
            <li>Lorem ipsum dolor sit amet</li>
            <li>Lorem ipsum dolor sit amet</li>
          </ul>

          {/* Software and platform acknowledgments */}
          <h3 className="text-xl font-semibold mb-4">Tools & Resources</h3>
          <ul className="list-disc pl-5 space-y-2 mb-6">
            <li>Lorem ipsum dolor sit amet</li>
            <li>Lorem ipsum dolor sit amet</li>
            <li>Lorem ipsum dolor sit amet</li>
            <li>Lorem ipsum dolor sit amet</li>
            <li>Lorem ipsum dolor sit amet</li>
          </ul>

          {/* Image and media attributions */}
          <h3 className="text-xl font-semibold mb-4">Photo Credits</h3>
          <ul className="list-disc pl-5 space-y-2">
            <li>Lorem ipsum dolor sit amet</li>
            <li>Lorem ipsum dolor sit amet</li>
            <li>Lorem ipsum dolor sit amet</li>
            <li>Lorem ipsum dolor sit amet</li>
          </ul>
        </div>
      </Section>
    </div>
  )
}
