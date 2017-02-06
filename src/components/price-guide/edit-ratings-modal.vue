<template lang="pug">
  modal(
    v-bind:on-close = 'close'
    v-bind:show = 'show',
    size = 'large'
  )

    .modal-header.vui-m-bottom--large
      h3.vui-text-heading--medium Edit Ratings

    .modal-body

      .vui-grid.vui-grid--align-spread.vui-p-around--small(
        style = 'background-color: white'
      )

        .vui-media
          .vui-media__body
            p.vui-align-middle
              span.vui-m-right--xx-small Station Rate
              span.vui-text-heading--medium  ${{ data.station.rate }}

      .vui-scrollable--x.vui-m-bottom--large(
        style = 'height: 20rem; overflow-x: hidden; overflow-y: scroll'
      )

        table.vui-table.vui-no-row-hover
          thead
            tr
              th Demo
              th.u-width-medium Station Rating
              th.u-width-small
                | CPP
                sup 1
              th.u-width-small
                | Premium CPP
                sup 1
              th.u-width-medium Videa Rating
              th.u-width-small
                | CPP
                sup 1

          tbody
            tr(
              v-bind:class = '(index % 2 === 0) ? "vui-highlight" : ""'
              v-for = '(demo, index) in data.station.demos',
            )
              td {{ demo.name }}
              td
                input.vui-input.vui-text-align--right(
                  v-bind:value = 'demo.rating | formatRating'
                  v-model = 'demo.rating'
                )
              td.vui-text-align--right
                cpp(
                  v-bind:rate = 'data.station.rate'
                  v-bind:rating = 'demo.rating'
                )
              td.vui-text-align--right
                cpp(
                  v-bind:rate = 'data.station.premium.rate'
                  v-bind:rating = 'demo.rating'
                )
              td.vui-text-align--right {{demo.rating | formatRating}}
              td.vui-text-align--right
                cpp(
                  v-bind:rate = 'data.station.rate'
                  v-bind:rating = 'demo.rating'
                )

      .vui-grid.vui-grid--align-end
        button.vui-button.vui-button--neutral.vui-m-right--x-small(
          @click.prevent = 'close'
        ) Cancel
        button.vui-button.vui-button--brand(
          @click.prevent = 'saveEditedRatings(data)'
        ) Save
</template>

<script>
  export default {
    props: {
      show: Boolean,
      heading: String,
      data: Object
    },

    data () {
      return {
        comment: '',
        reps: [
          {
            name: 'Adamy, John',
            office: 'New York, NY',
            checked: false
          },
          {
            name: 'Admire, Tony',
            office: 'Austin, TX',
            checked: false
          },
          {
            name: 'Akens, Phil',
            office: 'New York, NY',
            checked: false
          },
          {
            name: 'Aden, Michael',
            office: 'Chicago, IL',
            checked: false
          },
          {
            name: 'Adel, Joe',
            office: 'Atlanta, GA',
            checked: false
          }
        ]
      }
    },

    methods: {
      close () {
        this.show = false
        this.comment = ''
      },

      postComment () {
        this.close()
      },

      saveEditedRatings (context) {
        this.close()
      }
    }
  }
</script>