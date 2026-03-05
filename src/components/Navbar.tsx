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
        <li className={styles.dropdown}>
          <a href="#">About</a>
          <ul className={styles.dropdownContent}>
            <li><Link href="/about/about-hstu-research-society">About HSTU Research Society</Link></li>
            <li><Link href="/about/vision-mission">Vision & Mission</Link></li>
            <li><Link href="/about/history">History</Link></li>
            <li><Link href="/about/constitution-charter">Constitution / Charter</Link></li>
            <li><Link href="/about/message-from-advisor-president">Message from Advisor / President</Link></li>
          </ul>
        </li>
        <li className={styles.dropdown}>
          <a href="#">Committee</a>
          <ul className={styles.dropdownContent}>
            <li><Link href="/committee/advisory-board">Advisory Board</Link></li>
            <li><Link href="/committee/executive-committee">Executive Committee</Link></li>
            <li><Link href="/committee/mentor-panel">Mentor Panel</Link></li>
            <li><Link href="/committee/alumni-committee">Alumni Committee</Link></li>
          </ul>
        </li>
        <li className={styles.dropdown}>
          <a href="#">Research</a>
          <ul className={styles.dropdownContent}>
            <li><Link href="/research/publications">Publications</Link></li>
            <li><Link href="/research/research-projects">Research Projects</Link></li>
            <li><Link href="/research/collaboration-board">Collaboration Board</Link></li>
          </ul>
        </li>
        <li className={styles.dropdown}>
          <a href="#">Magazine</a>
          <ul className={styles.dropdownContent}>
            <li><Link href="/magazine/current-issue">Current Issue</Link></li>
            <li><Link href="/magazine/issue-archive">Issue Archive</Link></li>
            <li><Link href="/magazine/article">Article</Link></li>
          </ul>
        </li>
        <li className={styles.dropdown}>
          <a href="#">Library</a>
          <ul className={styles.dropdownContent}>
            <li><Link href="/library/books">Books</Link></li>
            <li><Link href="/library/research-papers">Research Papers</Link></li>
            <li><Link href="/library/lecture-notes">Lecture Notes</Link></li>
            <li><Link href="/library/thesis-repository">Thesis Repository</Link></li>
            <li><Link href="/library/downloads">Downloads</Link></li>
          </ul>
        </li>
        <li className={styles.dropdown}>
          <a href="#">Opportunities</a>
          <ul className={styles.dropdownContent}>
            <li><Link href="/opportunities/scholarships">Scholarships</Link></li>
            <li><Link href="/opportunities/internships">Internships</Link></li>
            <li><Link href="/opportunities/fellowships">Fellowships</Link></li>
            <li><Link href="/opportunities/conferences">Conferences</Link></li>
            <li><Link href="/opportunities/competitions">Competitions</Link></li>
          </ul>
        </li>
        <li className={styles.dropdown}>
          <a href="#">Events</a>
          <ul className={styles.dropdownContent}>
            <li><Link href="/events/upcoming-events">Upcoming Events</Link></li>
            <li><Link href="/events/past-events">Past Events</Link></li>
          </ul>
        </li>
        <li className={styles.dropdown}>
          <a href="#">Blog</a>
          <ul className={styles.dropdownContent}>
            <li><Link href="/blog/research-articles">Research Articles</Link></li>
            <li><Link href="/blog/tutorials">Tutorials</Link></li>
            <li><Link href="/blog/technology-insights">Technology Insights</Link></li>
            <li><Link href="/blog/post">Post</Link></li>
          </ul>
        </li>
        <li className={styles.dropdown}>
          <a href="#">Gallery</a>
          <ul className={styles.dropdownContent}>
            <li><Link href="/gallery/event-albums">Event Albums</Link></li>
            <li><Link href="/gallery/photos">Photos</Link></li>
            <li><Link href="/gallery/videos">Videos</Link></li>
          </ul>
        </li>
        <li className={styles.dropdown}>
          <a href="#">Partnerships</a>
          <ul className={styles.dropdownContent}>
            <li><Link href="/partnerships/partner-organizations">Partner Organizations</Link></li>
            <li><Link href="/partnerships/associate-institutions">Associate Institutions</Link></li>
          </ul>
        </li>
        <li className={styles.dropdown}>
          <a href="#">Achievements</a>
          <ul className={styles.dropdownContent}>
            <li><Link href="/achievements/awards">Awards</Link></li>
            <li><Link href="/achievements/research-success-stories">Research Success Stories</Link></li>
            <li><Link href="/achievements/competition-winners">Competition Winners</Link></li>
          </ul>
        </li>
        <li><Link href="/notices">Notices</Link></li>
        <li className={styles.dropdown}>
          <a href="#">Volunteer</a>
          <ul className={styles.dropdownContent}>
            <li><Link href="/volunteer/call">Call</Link></li>
            <li><Link href="/volunteer/application">Application</Link></li>
          </ul>
        </li>
        <li className={styles.dropdown}>
          <a href="#">Verification</a>
          <ul className={styles.dropdownContent}>
            <li><Link href="/verification/membership">Membership</Link></li>
            <li><Link href="/verification/certificate">Certificate</Link></li>
            <li><Link href="/verification/volunteership">Volunteership</Link></li>
          </ul>
        </li>
        <li><Link href="/contact">Contact</Link></li>
      </ul>
    </nav>
  );
};

export default Navbar;
