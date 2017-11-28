<template>
  <div class="alert" :class="classes">
    <slot></slot>
  </div>
</template>

<script>

export default {
  data () {
    return {

    }
  },

  props: {
    dismissible: Boolean,
    error: Boolean,
    hideIcon: Boolean,
    icon: String,
    info: Boolean,
    success: Boolean,
    warning: Boolean
  },

  computed: {
    classes () {
      return {
        'dismissible': this.dismissible,
        'error': this.error,
        'info': this.info,
        'success': this.success,
        'warning': this.warning
      }
    }
  }
}

</script>