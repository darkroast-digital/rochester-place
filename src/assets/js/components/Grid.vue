<template>
  <div class="grid" v-bind:class="classes">
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
    gapless: Boolean,
  },

  computed: {
    classes () {
      return {
        'grid__gapless': this.gapless,
      }
    }
  }
}

</script>