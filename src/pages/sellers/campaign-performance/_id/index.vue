<template lang="pug">
  .campaign-performance-details-view
    vui-title.vui-grid.vui-grid--align-spread(style = 'margin-bottom: 0')
      span Campaign Performance Details
      span {{ campaign.advertiser }} {{ campaign.product }} {{campaign.estimateNumber }}  &mdash; {{ id }}

    .vui-grid.vui-grid--align-spread.vui-m-bottom--large
      router-link(v-bind:to='{ name: "sellers-campaign-performance" }')
        vui-icon.vui-align-middle.vui-m-right--xx-small(name='arrow-circle-left')
        span.vui-align-middle Back to Campaign Performance

    vui-subtitle

    //- campaign-performance-details-info(
    //-   v-bind:campaign = 'campaign'
    //- )

    campaign-performance-details-daypart-summary(
      v-bind:campaign = 'campaign'
    )

    vui-panel
      campaign-performance-details-filter

    vui-subtitle Spot Detail
    vui-daypart-selector

    campaign-performance-details-spot-details-grid-controls
    campaign-performance-details-spot-details-grid
    campaign-performance-details-spot-details-grid-footer
</template>

<script>
  import axios from '~plugins/axios'
  import CampaignPerformanceDetailsSpotDetailsGridControls from '~components/campaign-performance/campaign-performance-details-spot-details-grid-controls'
  import CampaignPerformanceDetailsSpotDetailsGridFooter from '~components/campaign-performance/campaign-performance-details-spot-details-grid-footer'
  import CampaignPerformanceDetailsSpotDetailsGrid from '~components/campaign-performance/campaign-performance-details-spot-details-grid'
  import CampaignPerformanceDetailsDaypartSummary from '~components/campaign-performance/campaign-performance-details-daypart-summary'
  import CampaignPerformanceDetailsFilter from '~components/campaign-performance/campaign-performance-details-filter'
  import CampaignPerformanceDetailsInfo from '~components/campaign-performance/campaign-performance-details-info'

  export default {
    metaInfo: {
      title: 'Campaign Performance Details'
    },

    components: {
      CampaignPerformanceDetailsSpotDetailsGridControls,
      CampaignPerformanceDetailsSpotDetailsGridFooter,
      CampaignPerformanceDetailsSpotDetailsGrid,
      CampaignPerformanceDetailsDaypartSummary,
      CampaignPerformanceDetailsFilter,
      CampaignPerformanceDetailsInfo
    },

    data () {
      return {
        id: this.$route.params.id,
        campaign: {}
      }
    },

    methods: {
      fetchCampaign (id) {
        axios.get(`/campaigns/${id}`)
          .then((res) => {
            this.campaign = res.data
          })
          .catch((error) => {
            console.log(error)
          })
      }
    },

    beforeCreate () {
      this.$store.state.activeApp = 'sellers'
    },

    created () {
      this.fetchCampaign(this.$route.params.id)
    }
  }
</script>
