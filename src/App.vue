<template>
  <v-app>
    <v-toolbar app>
      <v-toolbar-title class="headline text-uppercase">
        <span>FBL</span>
      </v-toolbar-title>
      <v-spacer></v-spacer>
      <v-btn flat to="/">Add Product</v-btn>
      <v-btn flat to="/list">Product List</v-btn>
    </v-toolbar>

    <v-content>
      <router-view></router-view>
    </v-content>
  </v-app>
</template>

<script>

export default {
  name: 'App',
  data () {
    return {
      //
    }
  }
}
</script>
