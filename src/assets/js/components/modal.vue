<template>
  <div :class="{ modal: true, 'is--active': showModal }">
    <div class="modal-background"></div>
      <div class="modal-content">
          <slot></slot>
      </div>
      <button class="modal-close" @click="close()"></button>
  </div>
</template>

<script>

export default {
  data () {
    return {
      showModal: false
    }
  },
  methods: {
    close () {
      this.showModal = false
    }
  }
}

</script>