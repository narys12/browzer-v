<template>
  <v-app>
    <v-content class="text-md-center">
      <router-view></router-view>
    </v-content>
    <v-bottom-nav shift :value="true" :active.sync="e2">
      <v-btn dark to="/home">
        <span>Home</span>
        <v-icon>home</v-icon>
      </v-btn>
      <v-btn dark to="/camera">
        <span>Camera</span>
        <v-icon>camera</v-icon>
      </v-btn>
      <v-btn dark to="/notifications">
        <span>Notifications</span>
        <v-icon>notifications</v-icon>
      </v-btn>
    </v-bottom-nav>
  </v-app>
</template>

<script>
export default {
  data () {
    return {
      e2: 3
    }
  }
}
</script>

<style>
main > div > .layout {
  margin-bottom: 60px;
}
</style>