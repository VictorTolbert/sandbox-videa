<template lang="pug">
  vui-modal(size='large')
    .modal-header.vui-m-bottom--large
      h3.vui-text-heading--medium Reject Order
    .modal-body
      fieldset.vui-form-element.vui-m-bottom--large
        label.vui-form-element__label(
          for = 'reject-order-notes'
        ) Notes or Comments
        .vui-form-element__control
          textarea#reject-order-notes.vui-textarea

      .vui-text-align--right
        button.vui-button.vui-button--brand.vui-m-right--x-small(
          @click.prevent = '$emit("close")'
        ) Submit
        button.vui-button.vui-button--neutral(
          @click.prevent = '$emit("close")'
        ) Cancel
</template>

<script>
  export default {
    data () {
      return {
        comment: '',
        expirationDate: new Date()
      }
    }
  }
</script>
