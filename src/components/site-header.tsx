import Link from "next/link";
import data from "@/data/portfolio.json";

export function SiteHeader() {
  return <header className="site-header">
    <Link className="brand" href="/" aria-label={`${data.profile.name}, home`}>
      <span className="brand-mark">{data.profile.initials}</span>
      <span><strong>{data.profile.name}</strong><small>Chemical Engineer</small></span>
    </Link>
    <nav aria-label="Main navigation">
      <Link href="/#work">Work</Link><Link href="/#about">About</Link><Link href="/#skills">Skills</Link>
      <a className="nav-cta" href={`mailto:${data.profile.email}`}>Let’s talk</a>
    </nav>
  </header>;
}
