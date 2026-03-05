import React from 'react';
import Link from 'next/link';
import styles from './Navbar.module.css';

const Navbar = () => {
  return (
    <nav className={styles.navbar}>
      <div className={styles.logo}>
        <Link href="/">HSTU RS</Link>
      </div>
      <ul className={styles.navLinks}>
        {/* Home */}
        <li><Link href="/">Home</Link></li>

        {/* About */}
        <li className={styles.dropdown}>
          <a href="#">About</a>
          <ul className={styles.dropdownContent}>
            <li><Link href="/about/overview">Overview</Link></li>
            <li><Link href="/about/vision-mission">Vision & Mission</Link></li>
            <li><Link href="/about/history">History</Link></li>
            <li><Link href="/about/constitution">Constitution</Link></li>
            <li className={styles.nestedDropdown}>
              <a href="#" className={styles.arrow}>Leadership</a>
              <ul className={styles.nestedDropdownContent}>
                <li><Link href="/about/leadership/advisory-board">Advisory Board</Link></li>
                <li><Link href="/about/leadership/executive-committee">Executive Committee</Link></li>
                <li><Link href="/about/leadership/mentor-panel">Mentor Panel</Link></li>
                <li><Link href="/about/leadership/alumni">Alumni</Link></li>
              </ul>
            </li>
            <li className={styles.nestedDropdown}>
              <a href="#" className={styles.arrow}>Achievements</a>
              <ul className={styles.nestedDropdownContent}>
                <li><Link href="/about/achievements/awards">Awards</Link></li>
                <li><Link href="/about/achievements/competition-winners">Competition Winners</Link></li>
                <li><Link href="/about/achievements/research-success">Research Success</Link></li>
              </ul>
            </li>
          </ul>
        </li>

        {/* Research */}
        <li className={styles.dropdown}>
          <a href="#">Research</a>
          <ul className={styles.dropdownContent}>
            <li><Link href="/research/publications">Publications</Link></li>
            <li className={styles.nestedDropdown}>
              <a href="#" className={styles.arrow}>Projects</a>
              <ul className={styles.nestedDropdownContent}>
                <li><Link href="/research/projects/ongoing">Ongoing</Link></li>
                <li><Link href="/research/projects/completed">Completed</Link></li>
              </ul>
            </li>
            <li className={styles.nestedDropdown}>
              <a href="#" className={styles.arrow}>Magazine</a>
              <ul className={styles.nestedDropdownContent}>
                <li><Link href="/research/magazine/current-issue">Current Issue</Link></li>
                <li><Link href="/research/magazine/archive">Archive</Link></li>
              </ul>
            </li>
            <li><Link href="/research/collaboration">Collaboration Board</Link></li>
          </ul>
        </li>

        {/* Resources */}
        <li className={styles.dropdown}>
          <a href="#">Resources</a>
          <ul className={styles.dropdownContent}>
            <li className={styles.nestedDropdown}>
              <a href="#" className={styles.arrow}>Library</a>
              <ul className={styles.nestedDropdownContent}>
                <li><Link href="/resources/library/books">Books</Link></li>
                <li><Link href="/resources/library/research-papers">Research Papers</Link></li>
                <li><Link href="/resources/library/lecture-notes">Lecture Notes</Link></li>
                <li><Link href="/resources/library/thesis-repository">Thesis Repository</Link></li>
              </ul>
            </li>
            <li className={styles.nestedDropdown}>
              <a href="#" className={styles.arrow}>Opportunities</a>
              <ul className={styles.nestedDropdownContent}>
                <li><Link href="/resources/opportunities/scholarships">Scholarships</Link></li>
                <li><Link href="/resources/opportunities/internships">Internships</Link></li>
                <li><Link href="/resources/opportunities/fellowships">Fellowships</Link></li>
                <li><Link href="/resources/opportunities/conferences">Conferences</Link></li>
                <li><Link href="/resources/opportunities/competitions">Competitions</Link></li>
              </ul>
            </li>
            <li><Link href="/resources/downloads">Downloads</Link></li>
          </ul>
        </li>

        {/* Events */}
        <li className={styles.dropdown}>
          <a href="#">Events</a>
          <ul className={styles.dropdownContent}>
            <li><Link href="/events/upcoming">Upcoming Events</Link></li>
            <li><Link href="/events/past">Past Events</Link></li>
            <li><Link href="/events/reports">Event Reports</Link></li>
          </ul>
        </li>

        {/* Media */}
        <li className={styles.dropdown}>
          <a href="#">Media</a>
          <ul className={styles.dropdownContent}>
            <li className={styles.nestedDropdown}>
              <a href="#" className={styles.arrow}>Blog</a>
              <ul className={styles.nestedDropdownContent}>
                <li><Link href="/media/blog/research-articles">Research Articles</Link></li>
                <li><Link href="/media/blog/tutorials">Tutorials</Link></li>
                <li><Link href="/media/blog/technology-insights">Technology Insights</Link></li>
              </ul>
            </li>
            <li className={styles.nestedDropdown}>
              <a href="#" className={styles.arrow}>Gallery</a>
              <ul className={styles.nestedDropdownContent}>
                <li><Link href="/media/gallery/albums">Albums</Link></li>
                <li><Link href="/media/gallery/photos">Photos</Link></li>
                <li><Link href="/media/gallery/videos">Videos</Link></li>
              </ul>
            </li>
          </ul>
        </li>

        {/* Community */}
        <li className={styles.dropdown}>
          <a href="#">Community</a>
          <ul className={styles.dropdownContent}>
            <li className={styles.nestedDropdown}>
              <a href="#" className={styles.arrow}>Volunteer</a>
              <ul className={styles.nestedDropdownContent}>
                <li><Link href="/community/volunteer/call">Call</Link></li>
                <li><Link href="/community/volunteer/application">Application</Link></li>
              </ul>
            </li>
            <li className={styles.nestedDropdown}>
              <a href="#" className={styles.arrow}>Partnerships</a>
              <ul className={styles.nestedDropdownContent}>
                <li><Link href="/community/partnerships/partner-organizations">Partner Organizations</Link></li>
                <li><Link href="/community/partnerships/associate-institutions">Associate Institutions</Link></li>
              </ul>
            </li>
            <li><Link href="/community/notices">Notices</Link></li>
          </ul>
        </li>

        {/* Verification */}
        <li className={styles.dropdown}>
          <a href="#">Verification</a>
          <ul className={styles.dropdownContent}>
            <li><Link href="/verification/membership">Membership</Link></li>
            <li><Link href="/verification/certificate">Certificate</Link></li>
            <li><Link href="/verification/volunteership">Volunteership</Link></li>
          </ul>
        </li>

        {/* Contact */}
        <li className={styles.dropdown}>
          <a href="#">Contact</a>
          <ul className={styles.dropdownContent}>
            <li><Link href="/contact/contact-form">Contact Form</Link></li>
            <li><Link href="/contact/office-location">Office Location</Link></li>
            <li><Link href="/contact/faq">FAQ</Link></li>
          </ul>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
