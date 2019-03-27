<template>
  <v-layout
    text-xs-center
    wrap
  >
    <v-flex xs12 sm6 offset-sm3>
      <v-card>
        <v-container grid-list-sm fluid>
          <v-layout row wrap>
            <v-flex
              v-for="(item, index) in product.productImage"
              :key="index"
              xs4
              d-flex
            >
              <v-card flat tile class="d-flex">
                <v-img
                  :src="`${item.images}`"
                  aspect-ratio="1"
                  class="grey lighten-2"
                >
                  <template v-slot:placeholder>
                    <v-layout
                      fill-height
                      align-center
                      justify-center
                      ma-0
                    >
                      <v-progress-circular indeterminate color="grey lighten-5"></v-progress-circular>
                    </v-layout>
                  </template>
                </v-img>
              </v-card>
            </v-flex>
          </v-layout>
        </v-container>
      </v-card>
      <v-card>
        <v-card-title primary-title>
          <div style="text-align:left">
            <h3 class="headline mb-0">{{product.title}}</h3>
            <div>{{product.description}}</div>
            <div>Latest Price : Rp.{{product.price.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")}}</div>
            Price History Start From Latest:
            <div 
              v-for="(item,index) in product.productPrice"
              :key="index"
              >Rp.{{item.price.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")}}</div>
          </div>
        <v-text-field md4 xs12 label="Comment" v-model="comment"></v-text-field>
        </v-card-title>
        <v-card-actions><v-btn @click="addComment()" flat color="blue">Add Comment</v-btn></v-card-actions>
      </v-card>

      <v-card>
        <v-card
          v-for="(item,index) in comments"
          :key="index"
        >
          <v-card-title primary-title>
            <div style="text-align:left">
              <h3 class="headline mb-3">{{item.comment_from}}</h3>
              <div>{{item.comment}}</div>
            </div>
          </v-card-title>
          <v-card-actions>
            <v-btn flat color="blue" @click="setLike(item.like, item.id)">{{item.like}} Like</v-btn>
            <v-btn flat color="orange" @click="setDislike(item.dislike, item.id)">{{item.dislike}} Dislike</v-btn>
          </v-card-actions>
        </v-card>
      </v-card>
    </v-flex>
  </v-layout>
</template>

<script>
  import { url_api } from '../../config';
  import axios from 'axios';

  export default {
    data: () => ({
      product: {},
      comment: "",
      comments: [],
      id: 0,
    }),
    mounted(){
      this.id = this.$route.params.id;
      this.getProduct();
      this.getComment();
    },
    methods: {
      async addComment(){
        const response = await axios.post(`${url_api}/comment`,{
          product_id: this.id,
          comment_from: 'guest',
          comment: this.comment
        });

        if(response.data.success){
          this.getComment();
        }
        this.comment = "";
      },
      async getComment(){
        const response = await axios.get(`${url_api}/comment/${this.id}`);
        this.comments = response.data;
      },
      async getProduct(){
        const response = await axios.get(`${url_api}/product/${this.id}`);
        this.product = response.data;
      },
      async setLike(current, id){
        const response = await axios.put(`${url_api}/comment`,{
          like: current+1,
          product_id: this.id,
          id: id
        });
        if(response.data.success){
          this.getComment();
        }
      },
      async setDislike(current, id){
        const response = await axios.put(`${url_api}/comment`,{
          dislike: current+1,
          product_id: this.id,
          id: id
        });
        if(response.data.success){
          this.getComment();
        }
      }
    }
  }
</script>
<style>
</style>
