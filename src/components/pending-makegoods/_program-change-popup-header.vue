<template lang="pug">
  // PASTED..............
  .vui-box.vui-wrap.vui-theme--default.vui-m-bottom--small
    .vui-grid.vui-grid--align-centre.vui-m-bottom--medium.ng-scope(ng-if='ctrl.showDialogData()')
      .vui-form--inline.vui-size--2-of-12
        fieldset.vui-form-element
          label.vui-form-element__label Offer Status:
          .vui-form-element__control
            span.vui-badge.ng-binding(ng-bind='::ctrl.model.offerStatus', ng-class="{'badge--dev-ready': ctrl.model.offerStatus === 'Draft', 'pending': ctrl.model.offerStatus === 'Pending', 'accepted': ctrl.model.offerStatus === 'Accepted' || ctrl.model.offerStatus === 'Confirmed', 'rejected': ctrl.model.offerStatus === 'Rejected', 'resend': ctrl.model.offerStatus === 'Recalled', 'cancelled': ctrl.model.offerStatus === 'Cancelled'}") Error
      .vui-form--inline.vui-size--2-of-12
        fieldset.vui-form-element
          label.vui-form-element__label Offer Sent:
          .vui-form-element__control
            span.ng-binding(ng-bind='::ctrl.model.offerSentDateTime|vuiDate') 02/07/2017
      .vui-form--inline.vui-size--2-of-12
        fieldset.vui-form-element
          label.vui-form-element__label Buyer Status:
          .vui-form-element__control
            span.vui-badge.ng-binding(ng-bind='::ctrl.model.buyerStatus', ng-class="{'badge--dev-ready': ctrl.model.buyerStatus === 'Draft', 'pending': ctrl.model.buyerStatus === 'Pending', 'accepted': ctrl.model.buyerStatus === 'Accepted' || ctrl.model.buyerStatus === 'Confirmed', 'rejected': ctrl.model.buyerStatus === 'Rejected', 'resend': ctrl.model.buyerStatus === 'Recalled', 'cancelled': ctrl.model.buyerStatus === 'Cancelled'}") Error
      .vui-form--inline.vui-size--2-of-12
        fieldset.vui-form-element
          label.vui-form-element__label Station Status:
          .vui-form-element__control
            span.vui-badge.ng-binding(ng-bind='::ctrl.model.stationStatus.name', ng-class="{'badge--dev-ready': ctrl.model.stationStatus.name === 'Draft', 'pending': ctrl.model.stationStatus.name === 'Pending', 'accepted': ctrl.model.stationStatus.name === 'Accepted' || ctrl.model.stationStatus.name === 'Confirmed', 'rejected': ctrl.model.stationStatus.name === 'Rejected', 'resend': ctrl.model.stationStatus.name === 'Recalled', 'cancelled': ctrl.model.stationStatus.name === 'Cancelled'}") Error
      .vui-form--inline.vui-size--4-of-12
        fieldset.vui-form-element
          label.vui-form-element__label Classification:
          .vui-form-element__control
            span.ng-binding(ng-bind='::ctrl.model.classification|makegoodsClassification') MG for Programing Change

    .ng-scope(ng-if='ctrl.showDialogData()')
      .vui-grid.vui-grid--align-centre
        .vui-col.vui-size--2-of-12
          .vui-form--inline
            fieldset.vui-form-element
              label.vui-form-element__label Advertiser:
              .vui-form-element__control
                span.ng-binding(ng-bind='::ctrl.model.advertiserName', title='LONGHORN STEAKHOUSE') LONGHORN STEAKHOUSE
        .vui-col.vui-size--2-of-12
          .vui-form--inline
            fieldset.vui-form-element
              label.vui-form-element__label Flight Start:
              .vui-form-element__control
                span.ng-binding(ng-bind='::ctrl.model.flightStartDate|vuiDate', title='03/27/2017') 03/27/2017
        .vui-col.vui-size--2-of-12
          .vui-form--inline
            fieldset.vui-form-element
              label.vui-form-element__label Station Order #:
              .vui-form-element__control
                span.col-md-7.ng-binding(ng-bind='::ctrl.model.stationOrderNumber', title='195469') 195469
        .vui-col.vui-size--6-of-12
          .vui-form--inline
            fieldset.vui-form-element
              label.vui-form-element__label Estimate #:
              .vui-form-element__control
                span.ng-binding(ng-bind='::ctrl.model.estimateNumber', title='248   ') 248
      .vui-grid.vui-grid--align-centre
        .vui-col.vui-size--2-of-12
          .vui-form--inline
            fieldset.vui-form-element
              label.vui-form-element__label Product:
              .vui-form-element__control
                span.ng-binding(ng-bind='::ctrl.model.productName', title='BRAND') BRAND
        .vui-col.vui-size--2-of-12
          .vui-form--inline
            fieldset.vui-form-element
              label.vui-form-element__label Flight End:
              .vui-form-element__control
                span.ng-binding(ng-bind='::ctrl.model.flightEndDate|vuiDate', title='06/25/2017') 06/25/2017
        .vui-col.vui-size--2-of-12
          .vui-form--inline
            fieldset.vui-form-element
              label.vui-form-element__label Videa Order #:
              .vui-form-element__control
                span.ng-binding(ng-bind='::ctrl.model.videaOrderNumber', title='V0005029') V0005029
        .vui-col.vui-size--6-of-12
          .vui-form--inline
            fieldset.vui-form-element
              label.vui-form-element__label Campaign:
              .vui-form-element__control
                span.ng-binding(ng-bind='::ctrl.model.campaignName', title='FY17 P6 Q2 BROADCAST') FY17 P6 Q2 BROADCAST
    // end ngIf: ctrl.showDialogData()

</template>
