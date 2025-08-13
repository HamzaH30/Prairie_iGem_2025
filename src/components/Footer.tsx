import { Link } from 'react-router-dom'

// Site footer with branding, navigation links, and contact information
export function Footer() {
  return (
    <footer className="bg-[#482f48] text-white py-8">
      <div className="container mx-auto px-4">
        {/* Main footer content grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Brand section with logo */}
          <div>
            <h3 className="text-xl font-bold mb-4">Prairie iGEM 2025</h3>
            <p className="mb-4">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit
            </p>
            <div className="flex items-center gap-4">
              <div className="image-placeholder w-12 h-12 rounded-full min-h-0">
                Logo
              </div>
            </div>
          </div>

          {/* Quick navigation links */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li>
                <Link to="/design" className="hover:underline">
                  Engineering Design
                </Link>
              </li>
              <li>
                <Link to="/experiments" className="hover:underline">
                  Experiments
                </Link>
              </li>
              <li>
                <Link to="/team" className="hover:underline">
                  Team
                </Link>
              </li>
              <li>
                <Link to="/references" className="hover:underline">
                  References
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact information and social links */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Contact</h4>
            <p className="mb-2">Prairie iGEM Team</p>
            <p className="mb-2">Email: [[TODO: team email]]</p>

            {/* Social media links */}
            <div className="flex gap-4 mt-4">
              <a
                href="#"
                aria-label="Twitter"
                className="hover:text-pink-primary"
              >
                <div className="image-placeholder w-6 h-6 min-h-0">T</div>
              </a>
              <a
                href="#"
                aria-label="Instagram"
                className="hover:text-pink-primary"
              >
                <div className="image-placeholder w-6 h-6 min-h-0">I</div>
              </a>
              <a
                href="#"
                aria-label="GitHub"
                className="hover:text-pink-primary"
              >
                <div className="image-placeholder w-6 h-6 min-h-0">G</div>
              </a>
            </div>
          </div>
        </div>

        {/* Copyright section */}
        <div className="border-t border-gray-600 mt-8 pt-4 text-center text-sm">
          <p>&copy; 2025 Prairie iGEM Team. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}
