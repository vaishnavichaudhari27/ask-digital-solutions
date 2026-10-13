import { Link } from 'react-router-dom'

export default function LegalPage({ policy }) {
  return (
    <main className="min-h-screen bg-[#070a11] pb-24 pt-36 md:pb-32 md:pt-44">
      <article className="mx-auto max-w-4xl px-5 sm:px-8">
        <nav className="mb-10 text-xs uppercase tracking-[0.18em] text-[#9ea6b5]">
          <Link to="/" className="hover:text-white">Home</Link>
          <span className="mx-3">/</span>
          <span className="text-[#dfc27f]">{policy.title}</span>
        </nav>
        <header className="border-b border-white/10 pb-8">
          <p className="text-xs uppercase tracking-[0.22em] text-[#dfc27f]">ASK Digital Solution</p>
          <h1 className="mt-4 font-display text-4xl font-medium text-[#f3f0e9] sm:text-5xl">{policy.title}</h1>
          {policy.updated && <p className="mt-4 text-sm text-[#929baa]">Last updated: {policy.updated}</p>}
          {policy.introduction && <p className="mt-6 text-base leading-8 text-[#b9bec8]">{policy.introduction}</p>}
        </header>
        <div className="mt-10 space-y-10">
          {policy.sections.map((section, index) => (
            <section key={`${section.title}-${index}`}>
              <h2 className="font-display text-2xl text-white">{section.title}</h2>
              <div className="mt-4 space-y-4">
                {section.paragraphs.map((paragraph, paragraphIndex) => (
                  <p key={`${section.title}-${paragraphIndex}`} className="whitespace-pre-line text-base leading-8 text-[#b9bec8]">{paragraph}</p>
                ))}
              </div>
            </section>
          ))}
        </div>
      </article>
    </main>
  )
}
