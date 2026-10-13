function updateMetaTag(selector, attribute, value) {
  let element = document.head.querySelector(selector)
  const created = !element
  if (!element) {
    element = document.createElement('meta')
    if (selector.startsWith('meta[name=')) {
      element.name = selector.match(/meta\[name="([^"]+)"\]/)[1]
    } else {
      element.setAttribute('property', selector.match(/meta\[property="([^"]+)"\]/)[1])
    }
    document.head.append(element)
  }

  const previous = element.getAttribute(attribute)
  element.setAttribute(attribute, value)
  return () => {
    if (created) {
      element.remove()
    } else if (previous === null) {
      element.removeAttribute(attribute)
    } else {
      element.setAttribute(attribute, previous)
    }
  }
}

export function updatePageMetadata({ title, description, path, type = 'website' }) {
  const previousTitle = document.title
  document.title = title

  const restoreMeta = [
    updateMetaTag('meta[name="description"]', 'content', description),
    updateMetaTag('meta[property="og:title"]', 'content', title),
    updateMetaTag('meta[property="og:description"]', 'content', description),
    updateMetaTag('meta[property="og:type"]', 'content', type),
    updateMetaTag('meta[property="og:url"]', 'content', new URL(path, window.location.origin).href)
  ]

  let canonical = document.head.querySelector('link[rel="canonical"]')
  const createdCanonical = !canonical
  if (!canonical) {
    canonical = document.createElement('link')
    canonical.rel = 'canonical'
    document.head.append(canonical)
  }
  const previousCanonical = canonical.href
  canonical.href = new URL(path, window.location.origin).href

  return () => {
    document.title = previousTitle
    restoreMeta.forEach((restore) => restore())
    if (createdCanonical) {
      canonical.remove()
    } else {
      canonical.href = previousCanonical
    }
  }
}
