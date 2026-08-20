import './style.css'

// Reveal-on-scroll using IntersectionObserver (no animation library)
const reveals = document.querySelectorAll('.reveal')
const io = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add('is-visible')
        io.unobserve(entry.target)
      }
    })
  },
  { threshold: 0.12, rootMargin: '0px 0px -40px 0px' }
)
reveals.forEach((el) => io.observe(el))

// Fade-out scroll effect for in-page anchor links
const scrollLinks = document.querySelectorAll('.scroll-link')
scrollLinks.forEach((link) => {
  link.addEventListener('click', (e) => {
    const href = link.getAttribute('href') || ''
    if (!href.startsWith('#')) return
    const target = document.querySelector(href)
    if (!target) return
    e.preventDefault()
    document.body.classList.add('fade-out')
    setTimeout(() => {
      document.body.classList.remove('fade-out')
      target.scrollIntoView({ behavior: 'smooth' })
    }, 400)
  })
})

// Contact form confirmation without a real submission
const contactForm = document.getElementById('contact-form')
const contactSuccess = document.getElementById('contact-success')
if (contactForm instanceof HTMLFormElement && contactSuccess) {
  contactForm.addEventListener('submit', (event) => {
    event.preventDefault()
    contactForm.reset()
    contactSuccess.classList.remove('hidden')
  })
}

// Current year in footer
const yearEl = document.getElementById('year')
if (yearEl) yearEl.textContent = String(new Date().getFullYear())
