<template lang="pug">
  .makegoods-create-view
    ui-title KOKI 06/27/2016 - 09/25/2016
    ui-subtitle Order Information - Offers
    makegoods-order-details-info(
      order-info = 'orderInfo'
    )
    .vui-grid.vui-grid--align-spread.vui-m-top--large.vui-m-bottom--large
      h2.vui-text-heading--medium
        span KOKI
        | Details
      fieldset.vui-form-element
        input.vui-button.vui-button--brand(
          @click = 'transfer'
          v-bind:disabled = 'canTransfer'
          type = 'button'
          value = 'Transfer to MediaOps'
        )
        input.vui-button.vui-button--brand(
          @click = 'viewGuidlines'
          type = 'button'
          value = 'Guidelines'
        )
        input.vui-button.vui-button--secondary.vui-m-right--xx-small(
          v-bind:disabled = '!canSave'
          @click = 'save'
          type = 'button'
          value = 'Save'
        )
        //- close-button
    .vui-tabs--scoped.details-tabs-header-container
      ul.vui-tabs--scoped__nav.details-tabs(
        role = 'tablist'
      )
        li.vui-tabs--scoped__item.vui-text-heading--label.vui-active(
          role = 'presentation'
        )
          a.vui-tabs--scoped__link(
            href = ''
          ) Makegood
    div(
      role = 'tabpanel'
    )
      form.vui-p-around--large.vui-tabs--scoped__content(
        name = 'makegoodForm'
      )
        .vui-grid.vui-m-bottom--x-large
          .vui-col.vui-p-right--medium
            .vui-form-element
              label.vui-form-element__label Makegood comments
              .vui-form-element__control
                resizable-textarea(
                  initial-height = '140'
                  text = 'makegood.comment'
                  width = '200'
                )
          .vui-col.vui-truncate_container--50.vui-size--1-of-2.vui-p-left--medium.vui-grid.vui-align-spread.vui-form--inline
            .vui-col.vui-size--2-of-3.vui-m-top--large
              makegoods-total-grid(
                makegood = 'makegood'
                offers-name = "'Makegood(s)'"
                order-buy-type = 'orderInfo.orderBuyType'
                preempts-name = "'Pre-empt(s)'"
                show-difference = 'true'
              )
            .vui-form-element.vui-col.vui-size--1-of-3.vui-m-left--x-large.vui-m-top--medium
              label.vui-form-element__label Classification:
              .vui-form-element__control
                makegoods-classification-dropdown(
                  value = 'makegood.classification'
                )
        .vui-grid.vui-m-bottom--medium
          h4.vui-text-heading--small.vui-align-middle.vui-m-right--large Pre-Empt(s)
          fieldset.vui-form-element.vui-align-middle
            label.vui-radio
              input(
                v-model = 'isOnlySelectedPreemptsShown'
                name = 'selectedPreemptsRadioGroup'
                type = 'radio'
                value = 'false'
              )
              span.vui-radio--faux.vui-m-right--xxx-small
              span.vui-form-element__label All Order Preempts
            label.vui-radio
              input(
                v-model = 'isOnlySelectedPreemptsShown'
                name = 'selectedPreemptsRadioGroup'
                type = 'radio'
                value = 'true'
              )
              span.vui-radio--faux.vui-m-right--xxx-small
              span.vui-form-element__label Selected
        div(
          style = 'height: 12rem'
        )
          makegoods-preempts-grid(
            is-edit-mode = 'true'
            is-only-selected-preempts-shown = 'isOnlySelectedPreemptsShown'
            item-selection-changed = 'selectedPreemptsChanged'
            items = 'allOrderPreempts'
            order-buy-type = 'orderInfo.orderBuyType'
          )
        makegoods-common-avail-offer-grids-wrapper(
          makegood-offers = 'makegood.offers'
          offers-label = "'Makegood spot(s) offered'"
          on-data-changed = 'offersChanged'
          order-buy-type = 'orderInfo.orderBuyType'
          order-info = 'orderInfo'
          selected-preemt-spot-lengths-async = 'selectedPreemtSpotLengthsAsync'
        )
</template>

<script>
  export default {
    metaInfo: {
      title: 'Pending Makegoods -- Create'
    },

    data () {
      return {
        isOnlySelectedPreemptsShown: true,
        selectedPreemptsChanged: true,
        canTransfer: true,
        canSave: true,
        orderInfo: {
          orderBuyType: null
        },
        makegood: {
          classification: null,
          offers: []
        }

      }
    },
    methods: {
      save () {},
      transfer () {},
      viewGuidlines () {}
    },

    beforeCreate () {
      this.$store.state.activeApp = 'sellers'
    }
  }
</script>
