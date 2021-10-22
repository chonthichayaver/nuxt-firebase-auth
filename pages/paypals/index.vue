<template>
  <v-row id="paypals-page">
    <v-col>
      <v-card>
        <v-card-title>
          <h3>
            Paypal
          </h3>
        </v-card-title>
      </v-card>

      <v-divider></v-divider>

      <item-sells
        :title="stitle"
        :headers="headers"
        :sells="sells"
      />

      <v-divider></v-divider>

      <item-buys
        :btitle="btitle"
        :bheaders="bheaders"
        :buys="buys"
      />
    </v-col>
  </v-row>
</template>

<script>
import { ref, onValue } from '@firebase/database';
import { DB } from '../../services/fireinit';
import ItemSells from '../../components/ItemSells.vue';
import ItemBuys from '../../components/ItemBuys.vue';
import { buildSellItem, buyItem } from '../../utils/utils';

export default {
  name: 'PaypalsPage',

  components: {
    ItemSells,
    ItemBuys
  },

  asyncData ({ store }) {
		const sellsRef = ref(DB, '/currencies/paypals/sells');
		const buysRef = ref(DB, '/currencies/paypals/buys');

		return {
      sells: store.dispatch('onValueRef', sellsRef).then((snapshot) => {
        return buildSellItem(snapshot);
      }),

			buys: store.dispatch('onValueRef', buysRef).then((snapshot) => {
        return buyItem(snapshot.key, snapshot.val());
      })
    };
  },

  data () {
    return {
      stitle: 'Rate To Buy',
      headers: [
        {
          name: 'USD',
          class: 'w-49',
          hclass: 't-r'
        },
        {
          name: ':',
          class: 'w-2',
          hclass: 't-c'
        },
        {
          name: 'THB',
          class: 'w-49',
          hclass: 't-l'
        }
      ],
      btitle: 'Rate To Sell',
      bheaders: [
        {
          name: 'USD',
          class: 'w-49',
          hclass: 't-r'
        },
        {
          name: ':',
          class: 'w-2',
          hclass: 't-c'
        },
        {
          name: 'THB',
          class: 'w-49',
          hclass: 't-l'
        }
      ]
    };
  }
};
</script>
