<template>
  <v-row id="currencies-page">
    <v-col>
      <v-card>
        <v-card-title>
          <h4>
            Currencies
          </h4>
        </v-card-title>
      </v-card>
      <v-divider></v-divider>
      <v-row>
        <v-col
          v-for="(item, i) in items"
          :key="i"
          cols="12"
          sm="12"
          md="4"
          lg="3"
        >
          <v-card
            nuxt
            :to="item.to"
            exact
          >
            <v-img
              :src="item.src"
              :alt="item.title"
              height="auto"
            ></v-img>
          </v-card>
        </v-col>
      </v-row>
    </v-col>
  </v-row>
</template>

<script>
export default {
  name: 'CurrenciesPage',

  data () {
    return {
      items: [
        {
          title: 'Paypals',
          to: '/paypals',
          src: '../../assets/images/pp720.jpg'
        },
        {
          title: 'Webmonies',
          to: '/webmonies',
          src: '../../assets/images/wm720.jpg'
        },
        {
          title: 'Perfectmonies',
          to: '/perfectmonies',
          src: '../../assets/images/pm720.jpg'
        },
        {
          title: 'Netellers',
          to: '/netellers',
          src: '../../assets/images/nt720.jpg'
        },
        {
          title: 'Skrills',
          to: '/skrills',
          src: '../../assets/images/skr720.jpg'
        }
      ]
    }
  }
}
</script>
