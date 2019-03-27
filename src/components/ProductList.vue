<template>
  <v-container>
    <v-layout
      text-xs-center
      wrap
    >

      <v-flex mb-4>
        <v-card>
          <v-list three-line>
            <template v-for="(item, index) in products">
              <v-list-tile
                ripple
                @click="detail(item.id)"
                :key="item.id"
              >
                <v-list-tile-content>
                  <v-list-tile-title v-html="item.title"></v-list-tile-title>
                  <v-list-tile-sub-title v-html="item.description"></v-list-tile-sub-title>
                  <v-list-tile-sub-title>Rp.{{item.price.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")}}</v-list-tile-sub-title>
                </v-list-tile-content>
              </v-list-tile>
              <v-divider
                v-if="index + 1 < products.length"
                :key="'divider_'+index"
              ></v-divider>
            </template>
          </v-list>
        </v-card>
      </v-flex>
    </v-layout>
  </v-container>
</template>

<script>
  import { url_api } from '../../config';
  import axios from 'axios';

  export default {
    data: () => ({
      products: []
    }),
    mounted(){
      this.getProduct();
    },
    methods:{
      getProduct: async function() {
        const response = await axios.get(`${url_api}/product`);
        this.products = response.data;
      },
      detail: async function(id){
        this.$router.push(`/detail/${id}`)
      }
    }
  }
</script>

<style>

</style>
