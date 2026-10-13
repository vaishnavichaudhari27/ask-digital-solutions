import { ArrowLeft } from 'lucide-react'
import { Link } from 'react-router-dom'
import BlogCover from '../components/BlogCover'

export default function BlogArticle({ article }) {
  return (
    <main className="relative min-h-screen overflow-hidden bg-[#070a11] pb-24 pt-36 md:pb-32 md:pt-44">
      <article className="relative mx-auto max-w-4xl px-5 sm:px-8">
        <Link to="/blog" className="inline-flex items-center gap-2 text-sm text-[#dfc27f] hover:text-white">
          <ArrowLeft className="h-4 w-4" /> Back to Blog
        </Link>
        <header className="mt-10 border-b border-white/10 pb-10">
          <p className="text-xs uppercase tracking-[0.22em] text-[#dfc27f]">{article.category}</p>
          <h1 className="mt-5 font-display text-4xl font-medium leading-tight text-[#f3f0e9] sm:text-5xl">{article.title}</h1>
          <p className="mt-5 text-lg leading-8 text-[#b9bec8]">{article.summary}</p>
        </header>
        <div className="group mt-10 aspect-[16/9] max-h-[32rem] overflow-hidden">
          <BlogCover type={article.coverType} title={article.title} />
        </div>
        <div className="mt-12 space-y-10">
          {article.sections.map((section) => (
            <section key={section.title}>
              <h2 className="font-display text-2xl text-white">{section.title}</h2>
              <div className="mt-4 space-y-4">
                {section.paragraphs.map((paragraph, index) => (
                  <p key={`${section.title}-${index}`} className="text-base leading-8 text-[#b9bec8]">{paragraph}</p>
                ))}
              </div>
            </section>
          ))}
        </div>
      </article>
    </main>
  )
}
