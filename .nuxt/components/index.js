export { default as About } from '../..\\components\\about.vue'
export { default as AddNew } from '../..\\components\\AddNew.vue'
export { default as ArrowUp } from '../..\\components\\ArrowUp.vue'
export { default as Cards } from '../..\\components\\Cards.vue'
export { default as CardsMedia } from '../..\\components\\CardsMedia.vue'
export { default as Footer } from '../..\\components\\Footer.vue'
export { default as LeftMedia } from '../..\\components\\LeftMedia.vue'
export { default as Media } from '../..\\components\\media.vue'
export { default as Nav } from '../..\\components\\Nav.vue'
export { default as NuxtLogo } from '../..\\components\\NuxtLogo.vue'
export { default as Search } from '../..\\components\\Search.vue'
export { default as Show } from '../..\\components\\show.vue'
export { default as Shows } from '../..\\components\\Shows.vue'
export { default as Slider } from '../..\\components\\Slider.vue'
export { default as TitleSection } from '../..\\components\\titleSection.vue'
export { default as Tutorial } from '../..\\components\\Tutorial.vue'

// nuxt/nuxt.js#8607
function wrapFunctional(options) {
  if (!options || !options.functional) {
    return options
  }

  const propKeys = Array.isArray(options.props) ? options.props : Object.keys(options.props || {})

  return {
    render(h) {
      const attrs = {}
      const props = {}

      for (const key in this.$attrs) {
        if (propKeys.includes(key)) {
          props[key] = this.$attrs[key]
        } else {
          attrs[key] = this.$attrs[key]
        }
      }

      return h(options, {
        on: this.$listeners,
        attrs,
        props,
        scopedSlots: this.$scopedSlots,
      }, this.$slots.default)
    }
  }
}
