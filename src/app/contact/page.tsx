import type { Metadata } from "next";
import Link from "next/link";
import { Icon } from "@/components/icons";
import { SiteHeader } from "@/components/site-header";
import data from "@/data/portfolio.json";

export const metadata: Metadata = {
  title: "Contact | Addyson Campbell",
  description: "Get in touch with Addyson Campbell by email, phone, or LinkedIn.",
};

export default function ContactPage() {
  const { profile } = data;

  return <>
    <SiteHeader />
    <main className="contact-page">
      <section className="contact-hero">
        <div className="contact-heading">
          <p className="eyebrow"><span /> LET’S CONNECT</p>
          <h1>Have an engineering<br /><em>challenge to solve?</em></h1>
          <p>I’m always glad to talk about engineering opportunities, collaborative projects, or the work featured on this site.</p>
          <Link className="back-link" href="/"><Icon name="arrow" size={17} /> Back to portfolio</Link>
        </div>

        <div className="contact-details" aria-label="Contact details">
          <a className="contact-detail" href={`mailto:${profile.email}`}>
            <span className="contact-detail-icon"><Icon name="mail" size={22} /></span>
            <span><small>EMAIL</small><strong>{profile.email}</strong></span>
            <Icon name="arrow" />
          </a>
          <a className="contact-detail" href={`tel:${profile.phoneLink}`}>
            <span className="contact-detail-icon"><Icon name="phone" size={22} /></span>
            <span><small>PHONE</small><strong>{profile.phone}</strong></span>
            <Icon name="arrow" />
          </a>
          <a className="contact-detail" href={profile.linkedin} target="_blank" rel="noreferrer">
            <span className="contact-detail-icon"><Icon name="linkedin" size={22} /></span>
            <span><small>LINKEDIN</small><strong>Connect with me</strong></span>
            <Icon name="external" />
          </a>
        </div>
      </section>
    </main>
  </>;
}
