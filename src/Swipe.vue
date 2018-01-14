<style lang="scss">
@-webkit-keyframes fadeIn {
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
}
@keyframes fadeIn {
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
}

@-webkit-keyframes fadeOut {
  from {
    opacity: 1;
  }
  to {
    opacity: 0;
  }
}
@keyframes fadeOut {
  from {
    opacity: 1;
  }
  to {
    opacity: 0;
  }
}

.pc-swipe {
  position: relative;
  overflow: hidden;
  height: 100%;
  width: 100%;
  &-wrap {
    position: relative;
    overflow: hidden;
    width: 100%;
    height: 100%;
    > div {
      position: absolute;
      width: 100%;
      height: 100%;
      overflow: hidden;
      left: 0;
      top: 0;
      opacity: 0;
      -webkit-animation: .3s fadeOut;
              animation: .3s fadeOut;
    }
    .is-active {
      opacity: 1;
      -webkit-animation: .3s fadeIn;
              animation: .3s fadeIn;
    }
  }
}
</style>
<template>
  <div class="pc-swipe" v-on:mouseover="mouseOver" v-on:mouseout="mouseOut">
    <div class="pc-swipe-wrap">
      <slot></slot>
    </div>
  </div>
</template>
<script>
export default {
  name: 'Swipe',
  props: {
    continuous: {
      type: Boolean,
      default: false
    },
    auto: {
      type: Number,
      default: 5000
    },
    startSlide: {
      type: Number,
      default: 0
    }
  },
  data () {
    let timer = null
    let index = this.startSlide
    let oldChildEl = null
    return {
      timer,
      index,
      oldChildEl
    }
  },
  mounted () {
    if (this.$children.length < 2) this.continuous = false
    this.slide(this.index)
    this.setUp()
  },
  methods: {
    setUp () {
      if (this.continuous) {
        this.timer = setInterval(() => {
          this.slide(this.index + 1)
        }, this.auto)
      }
    },
    addClass (el, clsName) {
      el.classList.add(clsName)
    },
    removeClass (el, clsName) {
      el.classList.remove(clsName)
    },
    getNumSlides () {
      return this.$children.length
    },
    slide (index) {
      if (index >= this.getNumSlides()) {
        index = 0
      }
      if (index < 0) {
        index = this.getNumSlides() - 1
      }

      this.index = index

      if (this.oldChildEl) {
        this.removeClass(this.oldChildEl, 'is-active')
      }
      this.addClass(this.$children[index].$el, 'is-active')
      this.oldChildEl = this.$children[index].$el
      this.$emit('change', index)
    },
    prev () {
      clearInterval(this.timer)
      this.timer = null
      this.slide(this.index - 1)
      this.setUp()
    },
    next () {
      clearInterval(this.timer)
      this.timer = null
      this.slide(this.index + 1)
      this.setUp()
    },
    getPos () {
      return this.index
    },
    mouseOver () {
      clearInterval(this.timer)
      this.timer = null
    },
    mouseOut () {
      this.setUp()
    }
  }
}
</script>
