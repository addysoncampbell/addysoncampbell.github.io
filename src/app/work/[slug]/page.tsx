import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import data from "@/data/portfolio.json";
import { Icon } from "@/components/icons";
import { SiteHeader } from "@/components/site-header";

export function generateStaticParams() {
  return data.items.map((item) => ({ slug: item.slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  const item = data.items.find((entry) => entry.slug === slug);
  return item ? { title: `${item.title} | ${data.profile.name}`, description: item.summary } : {};
}

export default async function WorkDetail({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const item = data.items.find((entry) => entry.slug === slug);
  if (!item) notFound();
  const current = data.items.findIndex((entry) => entry.slug === slug);
  const next = data.items[(current + 1) % data.items.length];

  return <><SiteHeader/><main className="detail-page">
    <section className={`detail-hero ${item.accent}`}>
      <Link className="back-link" href="/#work">← All work</Link>
      <p className="kicker">{item.type} / {item.year}</p><h1>{item.title}</h1><p className="detail-summary">{item.summary}</p>
      <div className="tags">{item.tags.map(tag=><span key={tag}>{tag}</span>)}</div>
      <div className="detail-result"><strong>{item.result}</strong><span>{item.resultLabel}</span></div>
    </section>
    <section className="case-content">
      <aside><p>PROJECT CONTEXT</p><strong>{item.context}</strong><span>{item.year}</span></aside>
      <article><div className="case-section"><p className="kicker">01 / THE CHALLENGE</p><h2>Understanding the problem.</h2><p>{item.challenge}</p></div>
      <div className="case-section"><p className="kicker">02 / THE APPROACH</p><h2>Turning analysis into action.</h2><ol>{item.approach.map((step,index)=><li key={step}><span>0{index+1}</span><p>{step}</p></li>)}</ol></div>
      <div className="case-section outcome"><p className="kicker">03 / THE OUTCOME</p><h2>A practical result.</h2><p>{item.outcome}</p></div></article>
    </section>
    <Link className="next-case" href={`/work/${next.slug}`}><span>UP NEXT</span><strong>{next.title}</strong><Icon name="arrow" size={28}/></Link>
  </main></>;
}
