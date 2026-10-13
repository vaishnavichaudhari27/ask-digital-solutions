import { useCallback, useState } from 'react'
import { Link, Route, Routes, useNavigate } from 'react-router-dom'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import SocialSidebar from './components/SocialSidebar'
import ScrollToTop from './components/ScrollToTop'
import IntroVideo from './components/IntroVideo'
import Home from './pages/Home'
import About from './pages/About'
import Services from './pages/Services'
import Blog from './pages/Blog'
import Contact from './pages/Contact'
import ServiceDetail from './pages/ServiceDetail'
import BlogArticle from './pages/BlogArticle'
import LegalPage from './pages/LegalPage'
import { SERVICES_DATA, LEGAL_PAGES } from './data/sourceSiteData'
import { BLOG_POSTS } from './data/blogData'

function NotFound() {
  return (
    <main className="grid min-h-[70vh] place-items-center bg-[#070a11] px-5 pt-32 text-center">
      <div>
        <p className="text-xs uppercase tracking-[0.24em] text-[#dfc27f]">404 — Page not found</p>
        <h1 className="mt-4 font-display text-4xl text-[#f3f0e9]">This page isn’t here.</h1>
        <Link to="/" className="mt-7 inline-flex rounded-full bg-[#dfc27f] px-6 py-3 text-sm font-semibold text-[#11141b]">Return Home</Link>
      </div>
    </main>
  )
}

function SiteRoutes() {
  const navigate = useNavigate()
  const openContact = () => navigate('/contact')

  return (
    <>
      <ScrollToTop />
      <SocialSidebar />
      <Navbar onOpenQuote={openContact} />
      <main className="w-full flex-1">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/services" element={<Services />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/contact" element={<Contact />} />
          {SERVICES_DATA.flatMap((service) => [service.path, service.legacyPath].map((path) => ({ path, service }))).map(({ path, service }) => (
            <Route key={path} path={path} element={<ServiceDetail service={service} />} />
          ))}
          {BLOG_POSTS.flatMap((post) => [post.path, post.legacyPath].map((path) => ({ path, post }))).map(({ path, post }) => (
            <Route key={path} path={path} element={<BlogArticle article={post} />} />
          ))}
          {Object.entries(LEGAL_PAGES).flatMap(([slug, policy]) => [`/${slug}`, `/${slug}.php`].map((path) => ({ path, policy }))).map(({ path, policy }) => (
            <Route key={path} path={path} element={<LegalPage policy={policy} />} />
          ))}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </main>
      <Footer onOpenQuote={openContact} />
    </>
  )
}

export default function App() {
  const [introComplete, setIntroComplete] = useState(false)
  const handleIntroComplete = useCallback(() => setIntroComplete(true), [])

  return (
    <div className="relative flex min-h-screen flex-col bg-[#070910] font-sans text-[#F8F7F4] selection:bg-[#E4C16B] selection:text-[#070910]">
      <IntroVideo onComplete={handleIntroComplete} />
      <div
        aria-hidden={!introComplete}
        inert={!introComplete}
        className={`flex min-h-screen flex-col transition-opacity duration-[650ms] ease-out ${introComplete ? 'opacity-100' : 'opacity-0'}`}
      >
        <SiteRoutes />
      </div>
    </div>
  )
}
