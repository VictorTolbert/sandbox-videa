<template lang="pug">
  // Offer Tab Details
  .offer-tab-details.offers-container
    // Tabs
    .vui-tabs--scoped.details-tabs-header-container
      ul.vui-tabs--scoped__nav.details-tabs.om-details-tabs(
        role = 'tablist'
      )
        li.vui-tabs--scoped__item.vui-text-heading--label(
          @click.prevent = 'selectTab(detailsTabNames.order)'
          v-bind:class = '{ "vui-active": currentTabName === detailsTabNames.order }'
          role = 'presentation'
        )
          a.vui-tabs--scoped__link(
            @click.prevent = 'selectTab(detailsTabNames.offer)'
          ) {{ detailsTabNames.order }}
        li.vui-tabs--scoped__item.vui-text-heading--label(
          @click.prevent = 'selectTab(detailsTabNames.offer)'
          v-bind:class = '{ "vui-active": currentTabName === detailsTabNames.offer }'
          role = 'presentation'
        )
          a.vui-tabs--scoped__link(
            @click.prevent = 'selectTab(detailsTabNames.offer)'
          ) {{ detailsTabNames.offer }}

    // Order Tab
    .order-tab.vui-m-bottom--medium(
      v-show = 'currentTabName === detailsTabNames.order'
      role = 'tabpanel'
    )

      .vui-p-around--large.vui-tabs--scoped__content

        // Order Tab -- Controls
        .vui-grid.vui-grid--vertical-align-center.vui-m-bottom--medium
          .vui-col.vui-size-1-of-14.vui-m-right--x-large.vui-shrink-none.vui-grow-none
            // Pending or Draft Makegood Legend
            ul
              li.row-padding
                a(
                  @click.prevent = 'showOfferDialog("item.makegoodId")'
                  title = 'Click to open the Offer which has been sent and is awaiting approval'
                )
                  vui-icon.vui-icon--small(name = 'medicine-bottle')
                span Pending MG
              li.row-padding
                span.vui-text-link
                  vui-icon.vui-icon--x-small.vui-m-right--xxx-small.vui-m-left--xx-small.vui-m-right--xx-small(
                    name = 'pencil-square'
                  )
                span.graft-mg-text Draft MG
          .vui-col.vui-size-1-of-4.vui-m-right--x-large.vui-shrink-none.vui-grow-none

            // Show All or Missed Only
            .vui-fieldset
              .vui-fieldset-header
                label  Filter rows
              .vui-p-around--small
                label.vui-radio(for='view-all')
                  input#view-all(
                    v-bind:value = 'false'
                    v-model = 'isOnlyMissedShown'
                    name = 'missedRadioGroup'
                    type = 'radio'
                  )
                  span.vui-radio--faux.vui-m-right--xxx-small
                  span.vui-form-element__label View All
                label.vui-radio(for = 'missed-only')
                  input#missed-only(
                    v-bind:value = 'true'
                    v-model = 'isOnlyMissedShown'
                    name = 'missedRadioGroup'
                    type = 'radio'
                  )
                  span.vui-radio--faux.vui-m-right--xxx-small
                  span.vui-form-element__label Missed Only

          .vui-fieldset.vui-size-3-of-4.vui-m-right--x-large.vui-shrink-none.vui-grow-none
            .vui-grid.vui-grid--vertical-align-center.vui-p-around--x-small
              .vui-col.vui-size-1-of-2.vui-m-right--medium.vui-shrink-none
                a.vui-button.vui-button--secondary.vui-m-right--xx-small(
                  v-bind:href = '`/sellers/order-management/pending-makegoods/${id}/${addButtonType}`'
                  target = '_blank'
                ) Add Offer
              .vui-col.vui-size-1-of-2.vui-m-right--medium.vui-shrink-none.vui-grid
                .vui-col.vui-grid.vui-p-around--x-small.vui-grid--vertical
                  label.vui-radio(for='make-good')
                    input#make-good(
                      v-bind:value = '"makegood"'
                      v-model = 'addButtonType'
                      name = 'addButtonTypeRadioGroup'
                      type = 'radio'
                    )
                    span.vui-radio--faux.vui-m-right--xxx-small
                    span.vui-form-element__label Makegood
                  label.vui-radio(for='credit')
                    input#credit(
                      v-bind:value = '"credit"'
                      v-model = 'addButtonType'
                      name = 'addButtonTypeRadioGroup'
                      type = 'radio'
                    )
                    span.vui-radio--faux.vui-m-right--xxx-small
                    span.vui-form-element__label Credit
                .vui-col.vui-grid.vui-p-around--x-small.vui-grid--vertical
                  label.vui-radio(
                    for = 'r-bonus'
                  )
                    input#r-bonus(
                      v-bind:value = '"bonus"'
                      v-model = 'addButtonType'
                      name = 'addButtonTypeRadioGroup'
                      type = 'radio'
                    )
                    span.vui-radio--faux.vui-m-right--xxx-small
                    span.vui-form-element__label Bonus
                  label.vui-radio(
                    for = 'r-pgm-change'
                  )
                    input#r-pgm-change(
                      v-bind:value = '"program-change"'
                      v-model = 'addButtonType'
                      name = 'addButtonTypeRadioGroup'
                      type = 'radio'
                    )
                    span.vui-radio--faux.vui-m-right--xxx-small
                    span.vui-form-element__label Pgm. Change
                .vui-col.vui-grid.vui-p-around--x-small.vui-grid--vertical
                  label.vui-radio(for = 'r-mg-preempts')
                    input#r-mg-preempts(
                      v-bind:value = '"preempt"'
                      v-model = 'addButtonType'
                      name = 'addButtonTypeRadioGroup'
                      type = 'radio'
                    )
                    span.vui-radio--faux.vui-m-right--xxx-small
                    span.vui-form-element__label MG Preempts
                  label.vui-radio(for = 'r-missed-spots')
                    input#r-missed-spots(
                      v-bind:value = '"missed-spots"'
                      v-model = 'addButtonType'
                      name = 'addButtonTypeRadioGroup'
                      type = 'radio'
                    )
                    span.vui-radio--faux.vui-m-right--xxx-small
                    span.vui-form-element__label Missed Spots
          .vui-col.vui-align-top.vui-p-top--small.vui-size-1-of-4.vui-m-right--medium.vui-shrink-none.vui-grow
            label.vui-checkbox
              input.vui-input(v-model='isShowSpotAllocations' type='checkbox')
              span.vui-checkbox--faux
              span.vui-form-element__label.vui-m-left--xx-small Show Spot Allocations
            .vui-form-element_control(v-if='isShowSpotAllocations')
              label.vui-radio
                input(
                  v-bind:value='true'
                  v-model='isMissedSpotsShown'
                  name='spotTypeFilter'
                  type='radio'
                )
                span.vui-radio--faux.vui-m-right--xxx-small
                span.vui-form-element__label Order v. Missed
              label.vui-radio
                input(
                  v-bind:value = 'false'
                  v-model = 'isMissedSpotsShown'
                  name = 'spotTypeFilter'
                  type = 'radio'
                )
                span.vui-radio--faux.vui-m-right--xxx-small
                span.vui-form-element__label Order v. Traffic

        // Offer Tab -- Order Grid
        makegoods-offer-tab-order-grid.flex-container(
          items = 'orderItems'
          v-bind:order = 'order'
          v-bind:orderId = '$route.params.id'
          v-bind:is-missed-spots-shown = 'isMissedSpotsShown'
          v-bind:is-only-missed-shown = 'isOnlyMissedShown'
          v-bind:is-show-spot-allocations = 'isShowSpotAllocations'
          order-buy-type = 'orderBuyType'
          selected-makegood-type = 'addButtonType'
          show-current-info = 'showCurrentLineInfoPopup'
          show-offer-dialog = 'showOfferDialog'
          show-orbit-details = 'showOrbitDetails'
        )

    // Offer Tab
    .offer-tab.vui-m-bottom--medium(
      v-show = 'currentTabName === detailsTabNames.offer'
      role = 'tabpanel'
    )

      .vui-p-around--large.vui-tabs--scoped__content

        // Offer Tab -- Controls
        .vui-grid.vui-grid--align-start.vui-grid--vertical-align-center.vui-m-bottom--medium
          label.vui-radio(
            for = 'r-draft-pending'
            )
            input#r-draft-pending(
              v-model = 'offerTabIsOnlyDraftAndPendingShown'
              name = 'offersStatusRadioGroup'
              type = 'radio'
              v-bind:value = 'true'
            )
            span.vui-radio--faux.vui-m-right--xxx-small
            span.vui-form-element__label Draft and Pending Orders Only
          label.vui-radio(
            for = 'r-all-offers'
          )
            input#r-all-offers(
              v-bind:value = 'false'
              v-model = 'offerTabIsOnlyDraftAndPendingShown'
              name = 'offersStatusRadioGroup'
              type = 'radio'
            )
            span.vui-radio--faux.vui-m-right--xxx-small
            span.vui-form-element__label All Offers
          .vui-col--bump-left.vui-size--3-of-11
            input.vui-button.vui-button--secondary(
              @click.prevent = 'transferMakegood("offerTabSelected.item")'
              v-bind:disabled = '!canTransferOffer("offerTabSelected.item")'
              type = 'button'
              value = 'Transfer Offer'
            )
            input.vui-button.vui-button--secondary(
              @click.prevent = 'copyMakegood("offerTabSelected.item")'
              v-bind:disabled = '!canCopyOffer("offerTabSelected.item")'
              type = 'button'
              value = 'Copy Offer'
            )
            input.vui-button.vui-button--secondary(
              @click.prevent = 'deleteMakegood("offerTabSelected.item")'
              v-bind:disabled = '!canDeleteOffer("offerTabSelected.item")'
              type = 'button'
              value = 'Delete Offer'
            )
            input.vui-button.vui-button--secondary(
              @click.prevent = 'editMakegood("offerTabSelected.item")'
              v-bind:disabled = '!canEditOffer("offerTabSelected.item")'
              type = 'button'
              value = 'Edit Offer'
            )

        // Offer Tab -- Offer Grid
        makegoods-offer-tab-offer-grid.flex-container(
          v-bind:order = 'order'
          v-bind:orderId = '$route.params.id'
          is-only-draft-and-pending-shown = 'offerTabIsOnlyDraftAndPendingShown'
          items = 'offerItems'
          selected-offer = 'offerTabSelected'
          show-offer-dialog = 'showOfferDialog'
        )
    makegoods-order-line-current-info-popup(
      v-show = 'showCurrentInfoPopup'
      @close = 'showCurrentInfoPopup = false'
    )
</template>

<script>
  export default {
    props: [ 'order', 'offers' ],
    data () {
      return {
        id: this.$route.params.id,
        offer: this.$route.params.offer,
        showCurrentInfoPopup: false,
        currentTabName: 'Order',
        isCurrentLineInfoPopupShown: false,
        offerTabIsOnlyDraftAndPendingShown: true,
        isShowSpotAllocations: false,
        isMissedSpotsShown: false,
        isOnlyMissedShown: false,
        addButtonType: 'makegood',
        detailsTabNames: {
          offer: 'Offer',
          order: 'Order'
        }
      }
    },

    methods: {
      selectTab (tab) {
        this.currentTabName = tab
      },

      addButtonClicked (button) {
        this.$router.push({
          name: `sellers-order-management-makegoods-id-add-${button}-offer`
        })
      },

      showCurrentInfo(item) {
        this.showCurrentInfoPopup = true
      },

      showOfferDialog (item) {},
      canTransferOffer (item) {},
      transferMakegood (item) {},
      canCopyOffer (item) {},
      copyMakegood (item) {},
      canDeleteOffer (item) {},
      deleteMakegood (item) {},
      canEditOffer (item) {},
      editMakegood (item) {}
    }
  }
</script>


<style lang="stylus">
  .vui-form-element__label
    white-space nowrap
</style>
