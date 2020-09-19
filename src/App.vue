<template>
  <v-app>
    <v-app-bar
      app
      color="white"
      dark
      height="150"
      src="./assets/videoblocks-coronavirus-covid-19-background_rk80xzipu__d_thumbnail-1080_01.png"
    >
      <div class="d-flex align-center">
        <v-img
          alt="Vuetify Logo"
          class="shrink mr-2"
          contain
          src="./assets/logo-covid.png"
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

      <v-spacer></v-spacer>

      <v-btn href target="_blank" text>
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
    </v-app-bar>

    <v-main>
      <!-- <HelloWorld /> -->
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

  data: () => ({
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
    ]
  })
};
</script>
