import type { Metadata } from "next";
import Link from "next/link";
import data from "@/data/portfolio.json";
import { Icon } from "@/components/icons";
import { SiteHeader } from "@/components/site-header";

export const metadata: Metadata = {
  title: `Contact | ${data.profile.name}`,
  description: `Contact ${data.profile.name} about process, production, plant engineering, and R&D opportunities.`,
};

export default function ContactPage() {
  const { profile } = data;

  return <>
    <SiteHeader />
    <main className="contact-page">
      <section className="contact-hero">
        <div>
          <p className="eyebrow"><span/> LET’S TALK</p>
          <h1>Let’s solve something<br/><em>worth solving.</em></h1>
          <p className="contact-intro">I’m seeking full-time R&D, process, production, or plant engineering opportunities beginning Summer 2027. If my experience could be a fit for your team, I’d be glad to connect.</p>
        </div>
        <aside className="contact-card">
          <p className="kicker">CONTACT DETAILS</p>
          <a href={`mailto:${profile.email}`}><span>Email</span><strong>{profile.email}</strong><Icon name="arrow"/></a>
          <a href={`tel:${profile.phoneLink}`}><span>Phone</span><strong>{profile.phone}</strong><Icon name="arrow"/></a>
          <a href={profile.linkedin} target="_blank" rel="noreferrer"><span>LinkedIn</span><strong>addysoncampbell4</strong><Icon name="external"/></a>
        </aside>
      </section>
      <section className="contact-note">
        <div><p className="kicker">CURRENTLY</p><strong>{profile.availability}</strong></div>
        <div><p className="kicker">BASED IN</p><strong>{profile.location}</strong></div>
        <Link href="/#work">Explore my experience <Icon name="arrow"/></Link>
      </section>
    </main>
  </>;
}
