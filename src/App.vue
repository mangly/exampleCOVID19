<template>
  <v-app>
    <v-app-bar
      app
      color="white"
      height="100"
      src="./assets/viggo-jorgen-p5N3PVOOF_0-unsplash (1).jpg"
    >
      <div class="d-flex align-center">
        <v-img
          alt="Vuetify Logo"
          class="shrink mr-2"
          contain
          src="./assets/30271657.png"
          transition="scale-transition"
          width="200"
        />

        <!-- <v-img
          alt="Vuetify Name"
          class="shrink mt-1 hidden-sm-and-down"
          contain
          min-width="100"
          src="https://cdn.vuetifyjs.com/images/logos/vuetify-name-dark.png"
          width="100"
        />-->
      </div>

      <v-spacer />

      <div class="hidden-sm-and-down">
        <v-btn href="/" text>
          <span class="mr-2">Home</span>
        </v-btn>
        <v-btn href target="_blank" text>
          <span class="mr-2">Data</span>
        </v-btn>
        <v-btn href target="_blank" text>
          <span class="mr-2">Methodology</span>
        </v-btn>
        <v-menu offset-y bottom origin="center center" transition="scale-transition">
          <template v-slot:activator="{ on, attrs }">
            <v-btn text v-bind="attrs" v-on="on">
              <span class="mr-2">Models</span>
              <v-icon>mdi-chevron-down</v-icon>
            </v-btn>
          </template>

          <v-list>
            <v-list-item v-for="(item, i) in itemsModels" :key="i" @click>
              <v-list-item-title>{{ item.title }}</v-list-item-title>
            </v-list-item>
          </v-list>
        </v-menu>
        <v-menu offset-y bottom origin="center center" transition="scale-transition">
          <template v-slot:activator="{ on, attrs }">
            <v-btn text v-bind="attrs" v-on="on">
              <span class="mr-2">Resources</span>
              <v-icon>mdi-chevron-down</v-icon>
            </v-btn>
          </template>

          <v-list>
            <v-list-item v-for="(item, i) in itemsResources" :key="i" @click>
              <v-list-item-title>{{ item.title }}</v-list-item-title>
            </v-list-item>
          </v-list>
        </v-menu>
        <v-btn href target="_blank" text>
          <span class="mr-2">Containment</span>
        </v-btn>
        <v-btn href target="_blank" text>
          <span class="mr-2">News</span>
        </v-btn>
        <v-btn href target="_blank" text>
          <span class="mr-2">About us</span>
        </v-btn>
      </div>
      <v-app-bar-nav-icon class="hidden-md-and-up" @click="drawer = !drawer" />
    </v-app-bar>
    <v-navigation-drawer color="grey" dark v-if="isMobile" v-model="drawer" absolute temporary>
      <v-list dense>
        <v-list-item v-for="item in items" :key="item.title" link>
          <v-list-item-icon>
            <v-icon>{{ item.icon }}</v-icon>
          </v-list-item-icon>

          <v-list-item-content>
            <v-list-item-title>{{ item.title }}</v-list-item-title>
          </v-list-item-content>
        </v-list-item>
      </v-list>
    </v-navigation-drawer>
    <v-main>
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
  drawer: null,

  // components: {
  //   HelloWorld
  // },

  data: () => ({
    drawer: false,
    isMobile: false,
    itemsModels: [
      { title: "Click Me" },
      { title: "Click Me" },
      { title: "Click Me" },
      { title: "Click Me 2" }
    ],
    itemsResources: [
      { title: "Methodology" },
      { title: "Models" },
      { title: "Simulations" },
      { title: "State of the art in epidemis modelling" }
    ],
    items: [
      { title: "Home", icon: "mdi-dashboard" },
      { title: "About", icon: "mdi-question_answer" }
    ]
  }),

  beforeDestroy() {
    if (typeof window !== "undefined") {
      window.removeEventListener("resize", this.onResize, { passive: true });
    }
  },

  mounted() {
    this.onResize();
    window.addEventListener("resize", this.onResize, { passive: true });
  },

  methods: {
    onResize() {
      if (window.innerWidth < 600) this.isMobile = true;
      else {
        this.isMobile = false;
        this.drawer = false;
      }
    }
  }
};
</script>
