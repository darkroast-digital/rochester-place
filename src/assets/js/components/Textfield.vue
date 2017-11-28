<template>
  <div class="form-field">
    <label :for="name">{{ name }}</label>
    <textarea :name="name" :placeholder="placeholder" :id="name" :class="classes"></textarea>
  </div>
</template>

<script>

export default {
  data () {
    return {
     
    }
  },
  props: {
    name: String,
    placeholder: String,
    info: Boolean,
    success: Boolean,
    error: Boolean,
    warning: Boolean,
  },
  computed: {
    classes () {
      return {
        'is--info': this.info,
        'is--success': this.success,
        'is--error': this.error,
        'is--warning': this.warning
      }
    }
  }
}

</script>