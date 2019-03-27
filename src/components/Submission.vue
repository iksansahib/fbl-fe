<template>
  <v-form v-model="valid">
    <v-container>
      <v-layout>
        <v-flex
          xs12
          md4
        >
          <v-form ref="submission">
            <v-text-field
              v-model="productUrl"
              label="Product URL"
              required
            ></v-text-field>
          </v-form>
          <v-btn
            color="success"
            @click="submit"
          >
            Submit
          </v-btn>
        </v-flex>
      </v-layout>
    </v-container>
  </v-form>
</template>

<script>
  import axios from 'axios';
  import { url_api } from '../../config';
  export default {
    data: () => ({
      valid: false,
      productUrl: '',
    }),
    methods: {
      submit: async function(){
        const response = await axios.post(`${url_api}/product`, {
          url: this.productUrl
        });      
        if(response.data.success){
          alert('Sukses Tersimpan');
          this.$router.push('/list');
        } else {
          alert(`Gagal Tersimpan ${response.data.message.code}`);
        }
      }
    }
  }
</script>