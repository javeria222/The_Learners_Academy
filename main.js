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

// Current year in footer
const yearEl = document.getElementById('year')
if (yearEl) yearEl.textContent = String(new Date().getFullYear())
