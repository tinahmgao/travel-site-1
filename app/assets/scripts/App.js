import '../styles/styles.css'
import 'lazysizes'
import MobileMenu from './modules/MobileMenu'
import RevealOnScroll from './modules/RevealOnScroll'
import StickyHeader from './modules/StickyHeader'
import ClientArea from './modules/ClientArea'

new ClientArea()
new StickyHeader()
new RevealOnScroll(document.querySelectorAll('.feature-item'), 75)
new RevealOnScroll(document.querySelectorAll('.testimonial'), 70)
new MobileMenu()
let modal

document.querySelectorAll('.open-modal').forEach(el => {
  el.addEventListener('click', e => {
    e.preventDefault()
    if (typeof modal == 'undefined') {
      import(/* webpackChunkName: 'modal' */ './modules/Modal')
        .then(x => {
          modal = new x.default()
          setTimeout(() => modal.openTheModal(), 20)
        })
        .catch(err => console.log(err))
    } else {
      modal.openTheModal()
    }
  })
})

if (module.hot) {
  module.hot.accept()
}
