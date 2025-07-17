import { Section } from '../components/ui/Section'
import { Figure } from '../components/ui/Figure'

// Business strategy and commercialization roadmap page
export function EntrepreneurshipPage() {
  return (
    <div>
      {/* Problem-solution alignment and value proposition */}
      <Section id="problem-solution" title="Problem–Solution Fit">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div>
            <h3 className="text-xl font-semibold mb-4">Problem</h3>
            <div className="bg-pink-primary/10 border border-pink-primary/30 rounded-lg p-6">
              <ul className="list-disc pl-5 space-y-3">
                <li>Lorem ipsum dolor sit amet, consectetur adipiscing elit</li>
                <li>Lorem ipsum dolor sit amet, consectetur adipiscing elit</li>
                <li>Lorem ipsum dolor sit amet, consectetur adipiscing elit</li>
                <li>Lorem ipsum dolor sit amet, consectetur adipiscing elit</li>
                <li>Lorem ipsum dolor sit amet, consectetur adipiscing elit</li>
              </ul>
            </div>
          </div>

          <div>
            <h3 className="text-xl font-semibold mb-4">Solution</h3>
            <div className="bg-gray-secondary/20 border border-gray-secondary/30 rounded-lg p-6">
              <ul className="list-disc pl-5 space-y-3">
                <li>Lorem ipsum dolor sit amet, consectetur adipiscing elit</li>
                <li>Lorem ipsum dolor sit amet, consectetur adipiscing elit</li>
                <li>Lorem ipsum dolor sit amet, consectetur adipiscing elit</li>
                <li>Lorem ipsum dolor sit amet, consectetur adipiscing elit</li>
                <li>Lorem ipsum dolor sit amet, consectetur adipiscing elit</li>
              </ul>
            </div>
          </div>
        </div>

        <Figure
          alt="Value proposition canvas for LacThera"
          caption="Figure 1: Lorem ipsum dolor sit amet, consectetur adipiscing elit."
          className="mt-8"
        />
      </Section>

      {/* Market opportunity analysis with TAM/SAM/SOM breakdown */}
      <Section id="market-size" title="Market Size & TAM/SAM/SOM">
        <Figure
          alt="Bar chart showing TAM/SAM/SOM market analysis"
          caption="Figure 2: Lorem ipsum dolor sit amet, consectetur adipiscing elit."
        />

        <div className="mt-8 grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="bg-pink-primary/10 p-6 rounded-lg">
            <h3 className="text-xl font-semibold mb-2">TAM</h3>
            <div className="text-3xl font-bold mb-2">$$$</div>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit</p>
          </div>

          <div className="bg-gray-secondary/20 p-6 rounded-lg">
            <h3 className="text-xl font-semibold mb-2">SAM</h3>
            <div className="text-3xl font-bold mb-2">$$$</div>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit</p>
          </div>

          <div className="bg-celeste/20 p-6 rounded-lg">
            <h3 className="text-xl font-semibold mb-2">SOM</h3>
            <div className="text-3xl font-bold mb-2">$$$</div>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit</p>
          </div>
        </div>
      </Section>

      {/* Three-phase development and commercialization timeline */}
      <Section id="business-roadmap" title="Business Roadmap">
        <div className="overflow-x-auto">
          <div className="min-w-[800px]">
            <div className="grid grid-cols-3 gap-4">
              {/* Phase 1: Research and Development */}
              <div>
                <div className="bg-pink-primary/30 p-4 rounded-t-lg">
                  <h3 className="font-semibold text-center">
                    Phase 1: Development
                  </h3>
                  <p className="text-sm text-center">2025-2026</p>
                </div>
                <div className="border border-pink-primary/30 rounded-b-lg p-4 space-y-3">
                  <div className="flex items-center gap-2">
                    <div className="w-4 h-4 bg-pink-primary rounded-full"></div>
                    <p>Lorem ipsum dolor sit amet</p>
                  </div>
                  <div className="flex items-center gap-2">
                    <div className="w-4 h-4 bg-pink-primary rounded-full"></div>
                    <p>Lorem ipsum dolor sit amet</p>
                  </div>
                  <div className="flex items-center gap-2">
                    <div className="w-4 h-4 bg-pink-primary rounded-full"></div>
                    <p>Lorem ipsum dolor sit amet</p>
                  </div>
                  <div className="flex items-center gap-2">
                    <div className="w-4 h-4 bg-pink-primary rounded-full"></div>
                    <p>Lorem ipsum dolor sit amet</p>
                  </div>
                  <div className="flex items-center gap-2">
                    <div className="w-4 h-4 bg-pink-primary rounded-full"></div>
                    <p>Lorem ipsum dolor sit amet</p>
                  </div>
                </div>
              </div>

              {/* Phase 2: Clinical Testing */}
              <div>
                <div className="bg-gray-secondary/30 p-4 rounded-t-lg">
                  <h3 className="font-semibold text-center">
                    Phase 2: Clinical Validation
                  </h3>
                  <p className="text-sm text-center">2026-2028</p>
                </div>
                <div className="border border-gray-secondary/30 rounded-b-lg p-4 space-y-3">
                  <div className="flex items-center gap-2">
                    <div className="w-4 h-4 bg-gray-secondary rounded-full"></div>
                    <p>Lorem ipsum dolor sit amet</p>
                  </div>
                  <div className="flex items-center gap-2">
                    <div className="w-4 h-4 bg-gray-secondary rounded-full"></div>
                    <p>Lorem ipsum dolor sit amet</p>
                  </div>
                  <div className="flex items-center gap-2">
                    <div className="w-4 h-4 bg-gray-secondary rounded-full"></div>
                    <p>Lorem ipsum dolor sit amet</p>
                  </div>
                  <div className="flex items-center gap-2">
                    <div className="w-4 h-4 bg-gray-secondary rounded-full"></div>
                    <p>Lorem ipsum dolor sit amet</p>
                  </div>
                  <div className="flex items-center gap-2">
                    <div className="w-4 h-4 bg-gray-secondary rounded-full"></div>
                    <p>Lorem ipsum dolor sit amet</p>
                  </div>
                </div>
              </div>

              {/* Phase 3: Market Launch */}
              <div>
                <div className="bg-celeste/30 p-4 rounded-t-lg">
                  <h3 className="font-semibold text-center">
                    Phase 3: Commercialization
                  </h3>
                  <p className="text-sm text-center">2028-2030</p>
                </div>
                <div className="border border-celeste/30 rounded-b-lg p-4 space-y-3">
                  <div className="flex items-center gap-2">
                    <div className="w-4 h-4 bg-celeste rounded-full"></div>
                    <p>Lorem ipsum dolor sit amet</p>
                  </div>
                  <div className="flex items-center gap-2">
                    <div className="w-4 h-4 bg-celeste rounded-full"></div>
                    <p>Lorem ipsum dolor sit amet</p>
                  </div>
                  <div className="flex items-center gap-2">
                    <div className="w-4 h-4 bg-celeste rounded-full"></div>
                    <p>Lorem ipsum dolor sit amet</p>
                  </div>
                  <div className="flex items-center gap-2">
                    <div className="w-4 h-4 bg-celeste rounded-full"></div>
                    <p>Lorem ipsum dolor sit amet</p>
                  </div>
                  <div className="flex items-center gap-2">
                    <div className="w-4 h-4 bg-celeste rounded-full"></div>
                    <p>Lorem ipsum dolor sit amet</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Section>

      {/* Sponsor showcase and funding acknowledgments */}
      <Section id="funding" title="Funding">
        <div className="bg-white dark:bg-[#482f48]/80 border border-gray-200 dark:border-gray-700 rounded-lg p-6">
          <h3 className="text-xl font-semibold mb-6 text-center">
            Our Sponsors & Partners
          </h3>

          {/* Sponsor logo grid */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {Array.from({ length: 8 }).map((_, index) => (
              <div key={index} className="flex justify-center">
                <div className="image-placeholder w-32 h-32 min-h-0">
                  Sponsor Logo
                </div>
              </div>
            ))}
          </div>

          <p className="mt-8 text-center text-sm text-gray-600 dark:text-gray-400">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua.
          </p>
        </div>
      </Section>
    </div>
  )
}
