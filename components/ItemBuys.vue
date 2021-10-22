<template>
  <v-card>
    <v-card-title v-text="btitle"></v-card-title>
    <v-divider></v-divider>
    <v-list justify="center">
      <v-list-item>
        <v-list-item-content
          v-for="(bheader, i) in bheaders"
          :key="i"
          :class="bheader.class"
        >
          <v-list-item-title>
            <h6 :class="bheader.hclass">
              {{ bheader.name }}
            </h6>
          </v-list-item-title>
        </v-list-item-content>
      </v-list-item>
      <v-divider></v-divider>
      <v-list-item
        v-for="buy in buys"
        :key="buy.key"
      >
        <v-list-item-content class="w-49">
          <v-list-item-title class="t-r">
            {{ buy.description }}
          </v-list-item-title>
        </v-list-item-content>
        <v-list-item-content class="w-2">
          <v-list-item-title class="t-c">
            :
          </v-list-item-title>
        </v-list-item-content>
        <v-list-item-content class="w-49">
          <v-list-item-title class="t-l">
            {{ decimal(buy.price) }}
          </v-list-item-title>
        </v-list-item-content>
      </v-list-item>
    </v-list>
  </v-card>
</template>

<script>
import { decimal } from '../utils/utils';

export default {
  props: {
    btitle: {
      type: String,
      default: ''
    },
    bheaders: {
      type: Array,
      default: () => []
    },
    buys: {
      type: Array,
      default: () => []
    }
  },

  methods: {
    decimal
  }
};
</script>
