<template lang="pug">
  ul(:class="classObject" role="tablist")
    slot
</template>

<script>
  export default {
    props: {
      alignment: {
        type: String,
        default: ''
      }
    },

    computed: {
      classObject () {
        const { alignment } = this
        return {
          'tab-list': true,
          'is-flex': true,
          [`is-${alignment}`]: alignment
        }
      }
    }
  }
</script>
