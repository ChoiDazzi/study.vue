<template>
  <v-app>
  <!-- v-navigation-drawer -->
  <v-navigation-drawer v-if="drawer">
    <v-list>
      <v-list-item v-for="menu in lists" :key="menu.url" link>
        <template v-slot:prepend>
            <v-icon>{{ menu.icon }}</v-icon>
        </template>
        <v-list-item-title><router-link :to="menu.url">{{  menu.title  }}</router-link></v-list-item-title>
      </v-list-item>
    </v-list>
  </v-navigation-drawer>

    <!-- v-app-bar -->
    <v-app-bar>
      <v-app-bar-nav-icon @click="drawer = !drawer"></v-app-bar-nav-icon>
      <v-toolbar-title>Application</v-toolbar-title>
    </v-app-bar>
    <!-- router-view (contents) -->
    <v-main>
      <router-view/>
    </v-main>
  
<!-- footer -->
    <v-footer app>LETech</v-footer>
  </v-app>
</template>

<script>

export default {
  name: 'App',

  data: () => ({
    //
    drawer: null,
    lists: [
            {icon: 'mdi-inbox-arrow-down', title: 'Study01Test', url: '/study01'},
            {icon: 'mdi-inbox-arrow-down', title: 'Study02Test', url: '/study02'},
            {icon: 'mdi-inbox-arrow-down', title: 'Study03Test', url: '/study03'},
            {icon: 'mdi-inbox-arrow-down', title: 'Study04Test', url: '/study04'},
            {icon: 'mdi-inbox-arrow-down', title: 'BoardList', url: '/board'},
            ]
  }),
}
</script>
