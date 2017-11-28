<template>
  <div class="form-field">
    <label :for="name">{{ name }}</label>
    <input :type="type" :name="name" :placeholder="placeholder" :id="name" :class="classes">
  </div>
</template>

<script>

export default {
  data () {
    return {
     
    }
  },
  props: {
    type: String,
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