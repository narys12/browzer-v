<template>
  <v-app>
    <router-view></router-view>
    <v-bottom-nav absolute shift :value="true" :active.sync="e2" :color="computedColor">
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
      e2: 0
    }
  },
  computed: {
    computedColor () {
      switch (this.e2) {
        case 0:
          return 'blue-grey'
        case 1:
          return 'teal'
        case 2:
          return 'brown'
      }
    }
  }
}
</script>
