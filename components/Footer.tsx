"use client";

import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-[#f2f2f2]">
      <div className="max-w-screen-xl px-4 pt-16 pb-6 mx-auto sm:px-6 lg:px-8 lg:pt-24">
        <div className="grid grid-cols-1 gap-8 lg:grid-cols-3">
          {/* Logo + description + socials */}
          <div>
            <div className="flex justify-center text-black sm:justify-start">
              Tours Dubai
            </div>

            <p className="max-w-md mx-auto !mt-6 leading-relaxed text-center !text-gray-400 sm:max-w-xs sm:mx-0 sm:text-left">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Incidunt
              consequuntur amet culpa cum itaque neque.
            </p>

            <ul className="flex justify-center gap-6 !mt-8 md:gap-8 sm:justify-start">
              {/* Social links can stay <a> because they are EXTERNAL */}
              <li>
                <a
                  href="https://facebook.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="!text-black transition hover:!text-black/75"
                >
                  <span className="sr-only">Facebook</span>
                  {/* svg … */}
                </a>
              </li>
              {/* Repeat for Instagram, Twitter, GitHub, Dribbble */}
            </ul>
          </div>

          {/* Link columns */}
          <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:col-span-2 md:grid-cols-4">
            {/* About Us */}
            <div className="text-center sm:text-left">
              <p className="text-lg font-medium !text-black">About Us</p>
              <nav className="mt-8">
                <ul className="!space-y-4 text-sm">
                  <li>
                    <Link
                      href="/company-history"
                      className="!text-black transition hover:!text-black/75 no-underline"
                    >
                      Company History
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="/team"
                      className="!text-black transition hover:!text-black/75 no-underline"
                    >
                      Meet the Team
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="/employee-handbook"
                      className="!text-black transition hover:!text-black/75 no-underline"
                    >
                      Employee Handbook
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="/careers"
                      className="!text-black transition hover:!text-black/75 no-underline"
                    >
                      Careers
                    </Link>
                  </li>
                </ul>
              </nav>
            </div>

            {/* Our Services */}
            <div className="text-center sm:text-left">
              <p className="text-lg font-medium !text-black">Our Services</p>
              <nav className="mt-8">
                <ul className="!space-y-4 text-sm">
                  <li>
                    <Link
                      href="/services/web-development"
                      className="!text-black transition hover:!text-black/75 no-underline"
                    >
                      Web Development
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="/services/web-design"
                      className="!text-black transition hover:!text-black/75 no-underline"
                    >
                      Web Design
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="/services/marketing"
                      className="!text-black transition hover:!text-black/75 no-underline"
                    >
                      Marketing
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="/services/google-ads"
                      className="!text-black transition hover:!text-black/75 no-underline"
                    >
                      Google Ads
                    </Link>
                  </li>
                </ul>
              </nav>
            </div>

            {/* Helpful Links */}
            <div className="text-center sm:text-left">
              <p className="text-lg font-medium !text-black">Helpful Links</p>
              <nav className="mt-8">
                <ul className="!space-y-4 text-sm">
                  <li>
                    <Link
                      href="/faqs"
                      className="!text-black transition hover:!text-black/75 no-underline"
                    >
                      FAQs
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="/support"
                      className="!text-black transition hover:!text-black/75 no-underline"
                    >
                      Support
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="/live-chat"
                      className="flex group justify-center sm:justify-start gap-1.5 no-underline"
                    >
                      <span className="!text-black transition group-hover:!text-black/75">
                        Live Chat
                      </span>
                    </Link>
                  </li>
                </ul>
              </nav>
            </div>

            {/* Contact Us */}
            <div className="text-center sm:text-left">
              <p className="text-lg font-medium !text-black">Contact Us</p>
              <ul className="!mt-8 !space-y-4 text-sm">
                <li>
                  <a
                    href="mailto:john@doe.com"
                    className="flex items-center justify-center sm:justify-start gap-1.5 group no-underline"
                  >
                    {/* mail icon */}
                    <span className="!text-black transition group-hover:!text-black/75">
                      john@doe.com
                    </span>
                  </a>
                </li>
                <li>
                  <a
                    href="tel:0123456789"
                    className="flex items-center justify-center sm:justify-start gap-1.5 group no-underline"
                  >
                    {/* phone icon */}
                    <span className="!text-black transition group-hover:!text-black/75 ">
                      0123456789
                    </span>
                  </a>
                </li>
                <li className="flex items-start justify-center gap-1.5 sm:justify-start">
                  {/* location icon */}
                  <address className="-mt-0.5 not-italic !text-black">
                    213 Lane, Dubai
                  </address>
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="pt-6 mt-12 border-t border-gray-800">
          <div className="text-center sm:flex sm:justify-between gap-4 sm:text-left">
            <p className="text-sm !text-gray-400 flex gap-5 items-center">
              <span className="block sm:inline">All rights reserved.</span>

              <Link
                href="/terms"
                className="inline-block !text-black underline transition hover:!text-black/75"
              >
                Terms &amp; Conditions
              </Link>

              <span>&middot;</span>

              <Link
                href="/privacy"
                className="inline-block !text-black underline transition hover:!text-black/75"
              >
                Privacy Policy
              </Link>
            </p>

            <p className="mt-4 text-sm !text-gray-500 sm:order-first sm:mt-0">
              &copy; 2025 Tours Dubai
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
