import Link from "next/link";
import data from "@/data/portfolio.json";
import { Icon } from "@/components/icons";
import { ProcessGraphic } from "@/components/process-graphic";
import { SiteHeader } from "@/components/site-header";

export default function Home() {
  const { profile, items, metrics, skills, leadership, credentials } = data;
  return <>
    <SiteHeader />
    <main>
      <section className="hero">
        <div className="hero-copy">
          <p className="eyebrow"><span/> {profile.eyebrow}</p>
          <h1>Engineering safer,<br/><em>smarter processes.</em></h1>
          <p className="hero-intro">{profile.intro}</p>
          <div className="hero-actions"><a className="button primary" href="#work">Explore my work <Icon name="arrow"/></a><a className="button text-button" href={`mailto:${profile.email}`}>Get in touch <Icon name="arrow"/></a></div>
          <div className="status-row"><span className="status"><i/> {profile.availability}</span><span><Icon name="pin" size={16}/>{profile.location}</span></div>
        </div>
        <div className="hero-art"><ProcessGraphic/><p>PROCESS THINKING <span>—</span> PRACTICAL IMPACT</p></div>
      </section>

      <section className="work section" id="work">
        <div className="section-heading"><div><p className="kicker">SELECTED WORK</p><h2>From problem to <em>measurable impact.</em></h2></div><p>A selection of projects and experiences that show how I approach engineering challenges.</p></div>
        <div className="work-grid">{items.map((item) => <Link href={`/work/${item.slug}`} className={`work-card ${item.accent}`} key={item.slug}>
          <div className="card-top"><span>{item.number}</span><span>{item.type} · {item.year}</span></div>
          <div className="card-symbol">{item.number === "01" ? "⌁" : item.number === "02" ? "≈" : item.number === "03" ? "△" : "⌗"}</div>
          <div className="card-body"><p>{item.context}</p><h3>{item.title}</h3><p className="summary">{item.summary}</p><div className="tags">{item.tags.slice(0,2).map(tag=><span key={tag}>{tag}</span>)}</div><span className="case-link">View case study <Icon name="arrow" size={18}/></span></div>
        </Link>)}</div>
      </section>

      <section className="about section" id="about">
        <div className="about-intro"><p className="kicker">ABOUT ME</p><h2>Curious by nature.<br/><em>Rigorous by training.</em></h2></div>
        <div className="about-copy"><p>{profile.about}</p><div className="education"><span>{profile.graduation}</span><div><strong>{profile.education}</strong><small>{profile.school}</small><small>{profile.educationDetails}</small></div></div></div>
      </section>

      <section className="metrics">{metrics.map(metric=><div key={metric.label}><strong>{metric.value}</strong><span>{metric.label}</span></div>)}</section>

      <section className="skills section" id="skills">
        <div className="section-heading"><div><p className="kicker">TOOLKIT</p><h2>Technical depth.<br/><em>Built for the field.</em></h2></div></div>
        <div className="skill-grid">{skills.map((skill,index)=><div className="skill-card" key={skill.group}><span className="skill-icon"><Icon name={["flask","chart","shield"][index]}/></span><h3>{skill.group}</h3><ul>{skill.items.map(item=><li key={item}>{item}</li>)}</ul></div>)}</div>
      </section>

      <section className="credentials section">
        <div className="leadership-block"><p className="kicker">LEADERSHIP</p><h2>Leading on the field<br/>and <em>across campus.</em></h2>{leadership.map(item=><div className="leadership-row" key={item.organization}><strong>{item.role}</strong><span>{item.organization}</span></div>)}</div>
        <div className="credential-block"><p className="kicker">CERTIFICATIONS & AWARDS</p><div className="credential-list">{credentials.map(item=><span key={item}>{item}</span>)}</div></div>
      </section>

      <section className="contact"><p className="kicker">AVAILABLE SUMMER 2027</p><h2>Let’s solve an engineering<br/>challenge together.</h2><div className="contact-links"><a href={`mailto:${profile.email}`}>{profile.email} <Icon name="arrow"/></a><a href={`tel:${profile.phoneLink}`}>{profile.phone}</a></div></section>
    </main>
    <footer><div className="brand"><span className="brand-mark">{profile.initials}</span><span><strong>{profile.name}</strong><small>Chemical Engineering Student</small></span></div><p>Designed with precision. Built with purpose.</p><div><a href={profile.linkedin}>LinkedIn <Icon name="external" size={14}/></a><a href={`mailto:${profile.email}`}>Email</a></div></footer>
  </>;
}
