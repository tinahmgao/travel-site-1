import '../styles/styles.css'
import MobileMenu from './modules/MobileMenu'
import RevealOnScroll from './modules/RevealOnScroll'

new RevealOnScroll(document.querySelectorAll('.feature-item'), 75)
new RevealOnScroll(document.querySelectorAll('.testimonial'), 60)

let mobileMenue = new MobileMenu()

if (module.hot) {
  module.hot.accept()
}
