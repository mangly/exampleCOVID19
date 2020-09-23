<template>
  <v-app>
    <v-navigation-drawer
      v-model="drawer"
      :mini-variant.sync="mini"
      app
      :expand-on-hover="expandOnHoverMethod()"
    >
      <v-img
        src="./assets/rawImage.jpg"
        gradient="to right, rgba(5, 11, 31, .8), rgba(5, 11, 31, .8)"
        height="100%"
      >
        <v-list-item dark class="px-2">
          <v-list-item-avatar>
            <v-img src="https://randomuser.me/api/portraits/men/85.jpg"></v-img>
          </v-list-item-avatar>

          <v-list-item-title>John Leider</v-list-item-title>
        </v-list-item>

        <v-divider />

        <v-list dark dense>
          <v-list-item v-for="item in items" :key="item.title" link>
            <v-list-item-icon>
              <v-icon>{{ item.icon }}</v-icon>
            </v-list-item-icon>

            <v-list-item-content>
              <v-list-item-title>{{ item.title }}</v-list-item-title>
            </v-list-item-content>
          </v-list-item>
        </v-list>
      </v-img>
    </v-navigation-drawer>
    <v-app-bar
      elevation="0"
      app
      height="56"
      src="./assets/viggo-jorgen-p5N3PVOOF_0-unsplash (1).jpg"
    >
      <div class="d-flex align-center">
        <v-btn icon @click.stop="changeMini">
          <v-icon>{{iconChevron}}</v-icon>
        </v-btn>
        <v-img
          alt="Vuetify Logo"
          class="shrink mr-2"
          contain
          src="./assets/30271657.png"
          transition="scale-transition"
          width="100"
        />
      </div>

      <!-- <v-spacer /> -->

    </v-app-bar>
    <v-main style="background-color:grey">
      <v-fade-transition mode="out-in">
        <router-view />
      </v-fade-transition>
    </v-main>
    <v-footer color="black" app>
      <span class="white--text">
        <strong>&copy; 2020 Covid-19</strong> Powered by Torus Actions SAS
      </span>
    </v-footer>
  </v-app>
</template>

<script>
// import HelloWorld from "./components/HelloWorld";

export default {
  name: "App",
  // components: {
  //   HelloWorld
  // },

  data() {
    return {
      drawer: true,
      items: [
        { title: "Home", icon: "mdi-home-city" },
        { title: "My Account", icon: "mdi-account" },
        { title: "Users", icon: "mdi-account-group-outline" }
      ],
      mini: false,
      expandOnhover: false,
      iconChevron: "mdi-chevron-left"
    };
  },

  methods: {
    changeMini() {
      this.mini = !this.mini;
      this.expandOnhover = !this.expandOnhover;
      this.iconChevron = this.mini ? "mdi-chevron-right" : "mdi-chevron-left";
    },

    expandOnHoverMethod() {
      this.iconChevron = this.mini ? "mdi-chevron-right" : "mdi-chevron-left";
      return this.expandOnhover;
    }
  }
};
</script>
