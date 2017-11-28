<template>
  <nav class="nav">
    
    <div class="nav-content">
        <a class="nav__brand"><img :src="logo" draggable="false"></a>
        <div class="nav__navbar">
          <ul>
          </ul>
        </div>
    </div>

</nav>
</template>

<script>

export default {
  data () {
    return {

    }
  },

  props: {
    logo: String,
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