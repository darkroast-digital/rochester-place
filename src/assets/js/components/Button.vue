<template>
  <button :href="route" class="button" :class="classes" :type="type"><slot></slot></button>
</template>

<script>

export default {
  data () {
    return {

    }
  },

  props: {
    route: String,
    type: String,
    primary: Boolean,
    secondary: Boolean,
    tertiary: Boolean,
    ghost: Boolean,
    invisible: Boolean,
    shadow: Boolean,
    info: Boolean,
    success: Boolean,
    warning: Boolean,
    error: Boolean
  },

  computed: {
    classes () {
      return {
        'button-primary': this.primary,
        'button-secondary': this.secondary,
        'button-tertiary': this.tertiary,
        'button-ghost': this.ghost,
        'button-invisible': this.invisible,
        'button-shadow': this.shadow,
        'button-error': this.error,
        'button-info': this.info,
        'button-success': this.success,
        'button-warning': this.warning
      }
    }
  }
}

</script>