<template>
  <v-card>
    <v-card-title v-text="title"></v-card-title>
    <v-divider></v-divider>
    <v-list justify="center">
      <v-list-item>
        <v-list-item-content
          v-for="(header, i) in headers"
          :key="i"
          :class="header.class"
        >
          <v-list-item-title>
            <h6 :class="header.hclass">
              {{ header.name }}
            </h6>
          </v-list-item-title>
        </v-list-item-content>
      </v-list-item>
      <v-divider></v-divider>
      <v-list-item
        v-for="sell in sells"
        :key="sell.key"
      >
        <v-list-item-content class="w-49">
          <v-list-item-title class="t-r">
            {{ sell.description }}
          </v-list-item-title>
        </v-list-item-content>
        <v-list-item-content class="w-2">
          <v-list-item-title class="t-c">
            :
          </v-list-item-title>
        </v-list-item-content>
        <v-list-item-content class="w-49">
          <v-list-item-title class="t-l">
            {{ decimal(sell.price) }}
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
    title: {
      type: String,
      default: ''
    },
    headers: {
      type: Array,
      default: () => []
    },
    sells: {
      type: Array,
      default: () => []
    }
  },

  methods: {
    decimal
  }
};
</script>
