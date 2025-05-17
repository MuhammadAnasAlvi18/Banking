"use client";
import { useState, useEffect } from "react";
import Head from "next/head";
import Image from "next/image";

export default function Homepage() {
  const [activeTab, setActiveTab] = useState(0);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  // CSS for mobile menu toggle
  useEffect(() => {
    // Add 'menu-open' class to body when mobile menu is open
    if (mobileMenuOpen) {
      document.body.classList.add("menu-open");
    } else {
      document.body.classList.remove("menu-open");
    }

    // Close mobile menu when window is resized to desktop size
    const handleResize = () => {
      if (window.innerWidth > 768 && mobileMenuOpen) {
        setMobileMenuOpen(false);
      }
    };

    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
      document.body.classList.remove("menu-open");
    };
  }, [mobileMenuOpen]);

  // Service tab content
  const tabContents = [
    {
      title: "Personal Banking Solutions",
      description:
        "Manage your money with confidence using our range of personal banking products and services designed to fit your lifestyle.",
      listItems: [
        "Checking and savings accounts with competitive rates",
        "Mobile and online banking with advanced features",
        "Credit and debit cards with rewards programs",
        "Personal loans with flexible repayment options",
      ],
      buttonText: "Explore Personal Banking",
      image: "/images/pb2.jpg",
      imageAlt: "Person using mobile banking",
    },
    {
      title: "Business Banking Solutions",
      description:
        "Comprehensive financial tools and services to help your business grow and succeed in today's competitive market.",
      listItems: [
        "Business checking and savings accounts",
        "Merchant services and payment processing",
        "Business loans and lines of credit",
        "Cash management solutions",
      ],
      buttonText: "Explore Business Banking",
      image: "/images/pb.jpg",
      imageAlt: "Business professionals in meeting",
    },
    {
      title: "Loans & Mortgages",
      description:
        "Flexible financing options with competitive rates to help you achieve your personal and business goals.",
      listItems: [
        "Home mortgages with various term options",
        "Home equity lines of credit",
        "Auto loans with quick approval",
        "Personal and education loans",
      ],
      buttonText: "Apply for a Loan",
      image: "/images/pb3.jpg",
      imageAlt: "Family in front of new home",
    },
    {
      title: "Wealth Management",
      description:
        "Expert guidance and personalized strategies to help you grow, protect, and transfer your wealth.",
      listItems: [
        "Investment planning and portfolio management",
        "Retirement planning and 401(k) rollovers",
        "Estate planning and trust services",
        "Tax-advantaged investment strategies",
      ],
      buttonText: "Start Wealth Planning",
      image: "/images/pb4.jpg",
      imageAlt: "Financial advisor with client",
    },
  ];

  return (
    <>
      <Head>
        <title>SecureBank - Banking that Works for You</title>
        <meta
          name="description"
          content="Secure, innovative, and personalized financial solutions to help you achieve your goals."
        />
      </Head>

      <header>
        <div className="container header-container">
          <a href="#" className="logo">
            <svg
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="M4 3h16a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2z"></path>
              <line x1="12" y1="8" x2="12" y2="16"></line>
              <line x1="8" y1="12" x2="16" y2="12"></line>
            </svg>
            SecureBank
          </a>
          <nav className={mobileMenuOpen ? "active" : ""}>
            <ul>
              <li>
                <a href="#">Home</a>
              </li>
              <li>
                <a href="#">About</a>
              </li>
              <li>
                <a href="#">Contact</a>
              </li>
            </ul>
          </nav>
          <div>
            <a href="#" className="btn">
                Signup
            </a>
            <a href="#" className="btn">
                Login
            </a>
          </div>
          <div
            className="mobile-menu"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            {mobileMenuOpen ? "✕" : "☰"}
          </div>
        </div>

        {/* Add mobile menu overlay if needed */}
        {mobileMenuOpen && (
          <div
            className="menu-overlay"
            onClick={() => setMobileMenuOpen(false)}
          ></div>
        )}
      </header>

      <section className="hero">
        <div className="container hero-content">
          <div className="hero-text">
            <h1>Banking that Works for You</h1>
            <p>
              Secure, innovative, and personalized financial solutions to help
              you achieve your goals. Experience banking that puts you first.
            </p>
            <div className="hero-buttons">
              <a href="#" className="btn">
                Open an Account
              </a>
              <a href="#" className="btn">
                Learn More
              </a>
            </div>
          </div>
          <div className="hero-image">
            <Image
              src="/images/banner.jpg"
              alt="Mobile banking app on smartphone"
              width={500}
              height={300}
            />
          </div>
        </div>
      </section>

      <section className="section features">
        <div className="container">
          <div className="section-header">
            <h2>Why Choose SecureBank</h2>
            <p>
              We combine innovative technology with personalized service to
              provide the best banking experience.
            </p>
          </div>
          <div className="features-grid">
            <div className="feature-card">
              <div className="feature-icon">
                <svg
                  width="32"
                  height="32"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path>
                  <polyline points="22 4 12 14.01 9 11.01"></polyline>
                </svg>
              </div>
              <h3>Secure Banking</h3>
              <p>
                Advanced encryption and security measures to protect your
                financial information and transactions.
              </p>
            </div>
            <div className="feature-card">
              <div className="feature-icon">
                <svg
                  width="32"
                  height="32"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M12 2v20M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6"></path>
                </svg>
              </div>
              <h3>No Hidden Fees</h3>
              <p>
                Transparent pricing with no hidden fees. Know exactly what
                you&apos;re paying for our services.
              </p>
            </div>
            <div className="feature-card">
              <div className="feature-icon">
                <svg
                  width="32"
                  height="32"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <circle cx="12" cy="12" r="10"></circle>
                  <path d="M8 14s1.5 2 4 2 4-2 4-2"></path>
                  <line x1="9" y1="9" x2="9.01" y2="9"></line>
                  <line x1="15" y1="9" x2="15.01" y2="9"></line>
                </svg>
              </div>
              <h3>24/7 Customer Support</h3>
              <p>
                Access to support whenever you need it. Our team is available
                24/7 to assist you.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="section services">
        <div className="container">
          <div className="section-header">
            <h2>Our Services</h2>
            <p>
              Comprehensive financial solutions for individuals and businesses.
            </p>
          </div>
          <div className="services-tabs">
            {[
              "Personal Banking",
              "Business Banking",
              "Loans & Mortgages",
              "Wealth Management",
            ].map((tab, index) => (
              <button
                key={index}
                className={activeTab === index ? "active" : ""}
                onClick={() => setActiveTab(index)}
              >
                {tab}
              </button>
            ))}
          </div>
          <div className="service-content">
            <div className="service-text">
              <h3>{tabContents[activeTab].title}</h3>
              <p>{tabContents[activeTab].description}</p>
              <ul>
                {tabContents[activeTab].listItems.map((item, index) => (
                  <li key={index}>{item}</li>
                ))}
              </ul>
              <a href="#" className="btn">
                {tabContents[activeTab].buttonText}
              </a>
            </div>
            <div className="service-image">
              <Image
                src={tabContents[activeTab].image}
                alt={tabContents[activeTab].imageAlt}
                width={500}
                height={300}
              />
            </div>
          </div>
        </div>
      </section>

      <section className="section testimonials">
        <div className="container">
          <div className="section-header">
            <h2>What Our Customers Say</h2>
            <p>
              Don&apos;t just take our word for it. Here&apos;s what our customers have to
              say about their SecureBank experience.
            </p>
          </div>
          <div className="testimonials-grid">
            <div className="testimonial-card">
              <div className="testimonial-content">
                <p>
                  SecureBank has transformed how I manage my finances. Their
                  mobile app is intuitive and their customer service team is
                  always ready to help.
                </p>
              </div>
              <div className="testimonial-author">
                <div className="testimonial-author-image"></div>
                <div>
                  <div className="testimonial-author-name">Sarah Johnson</div>
                  <div className="testimonial-author-position">
                    Small Business Owner
                  </div>
                </div>
              </div>
            </div>
            <div className="testimonial-card">
              <div className="testimonial-content">
                <p>
                  I&apos;ve been with SecureBank for over 5 years now. Their mortgage
                  process was smooth and their rates are competitive. Highly
                  recommend!
                </p>
              </div>
              <div className="testimonial-author">
                <div className="testimonial-author-image"></div>
                <div>
                  <div className="testimonial-author-name">Michael Torres</div>
                  <div className="testimonial-author-position">Homeowner</div>
                </div>
              </div>
            </div>
            <div className="testimonial-card">
              <div className="testimonial-content">
                <p>
                  As a student, I appreciate SecureBank&apos;s no-fee student
                  accounts and educational resources on financial literacy. It&apos;s
                  helped me build good habits early.
                </p>
              </div>
              <div className="testimonial-author">
                <div className="testimonial-author-image"></div>
                <div>
                  <div className="testimonial-author-name">Emily Chen</div>
                  <div className="testimonial-author-position">
                    Graduate Student
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="cta">
        <div className="container">
          <h2>Ready to Experience Better Banking?</h2>
          <p>
            Join thousands of satisfied customers who have switched to
            SecureBank for their financial needs.
          </p>
          <div className="cta-buttons">
            <a href="#" className="btn">
              Open an Account
            </a>
            <a href="#" className="btn">
              Contact Us
            </a>
          </div>
        </div>
      </section>

      <footer>
        <div className="container">
          <div className="footer-grid">
            <div className="footer-column">
              <h3>Personal</h3>
              <ul>
                <li>
                  <a href="#">Checking Accounts</a>
                </li>
                <li>
                  <a href="#">Savings Accounts</a>
                </li>
                <li>
                  <a href="#">Credit Cards</a>
                </li>
                <li>
                  <a href="#">Personal Loans</a>
                </li>
                <li>
                  <a href="#">Mortgages</a>
                </li>
              </ul>
            </div>
            <div className="footer-column">
              <h3>Business</h3>
              <ul>
                <li>
                  <a href="#">Business Accounts</a>
                </li>
                <li>
                  <a href="#">Business Loans</a>
                </li>
                <li>
                  <a href="#">Merchant Services</a>
                </li>
                <li>
                  <a href="#">Treasury Management</a>
                </li>
                <li>
                  <a href="#">Industry Solutions</a>
                </li>
              </ul>
            </div>
            <div className="footer-column">
              <h3>Resources</h3>
              <ul>
                <li>
                  <a href="#">Financial Education</a>
                </li>
                <li>
                  <a href="#">Calculators</a>
                </li>
                <li>
                  <a href="#">Security Center</a>
                </li>
                <li>
                  <a href="#">FAQs</a>
                </li>
                <li>
                  <a href="#">Blog</a>
                </li>
              </ul>
            </div>
            <div className="footer-column">
              <h3>About Us</h3>
              <ul>
                <li>
                  <a href="#">Our Story</a>
                </li>
                <li>
                  <a href="#">Leadership</a>
                </li>
                <li>
                  <a href="#">Careers</a>
                </li>
                <li>
                  <a href="#">Community Involvement</a>
                </li>
                <li>
                  <a href="#">Investor Relations</a>
                </li>
              </ul>
            </div>
          </div>
          <div className="footer-bottom">
            <p>
              &copy; 2025 SecureBank. All rights reserved. | Privacy Policy |
              Terms of Service
            </p>
          </div>
        </div>
      </footer>
    </>
  );
}