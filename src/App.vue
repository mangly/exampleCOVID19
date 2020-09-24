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
    <v-app-bar elevation="0" app height="100" color="#eeeeee">
      <div class="d-flex align-center">
        <v-btn class="mx-2" fab dark small color="#b70000" @click.stop="changeMini">
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
      <v-spacer />
      <div class="pt-5" style="width:100px">
        <v-text-field label="Search" color="#b70000" />
      </div>
      <v-btn class="mx-2" fab small color="white">
        <v-icon>mdi-magnify</v-icon>
      </v-btn>
    </v-app-bar>
    <v-main style="background-color:#eeeeee">
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
      isMobile: false,
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
      if (!this.isMobile) {
        this.mini = !this.mini;
        this.expandOnhover = !this.expandOnhover;
        this.iconChevron = this.mini ? "mdi-chevron-right" : "mdi-chevron-left";
      } else this.drawer = !this.drawer;
    },

    expandOnHoverMethod() {
      this.iconChevron = this.mini ? "mdi-chevron-right" : "mdi-chevron-left";
      return this.expandOnhover;
    },
    onResize() {
      this.isMobile = window.innerWidth < 600 ? true : false;
    }
  },
  beforeDestroy() {
    if (typeof window !== "undefined") {
      window.removeEventListener("resize", this.onResize, { passive: true });
    }
  },

  mounted() {
    this.onResize();
    window.addEventListener("resize", this.onResize, { passive: true });
  }
};
</script>
