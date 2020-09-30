<template>
  <v-app>
    <v-navigation-drawer
      app
      v-model="drawer"
      :mini-variant.sync="mini"
      :expand-on-hover="expandOnHoverMethod()"
      mini-variant-width="80"
    >
      <v-img
        src="./assets/rawImage.jpg"
        gradient="to right, rgba(5, 11, 31, .8), rgba(5, 11, 31, .8)"
        height="100%"
      >
        <v-container>
          <v-list-item dark class="px-2">
            <v-list-item-avatar>
              <v-img src="https://randomuser.me/api/portraits/men/85.jpg"></v-img>
            </v-list-item-avatar>

            <v-list-item-title>
              <v-img src="./assets/302716571.png"></v-img>
            </v-list-item-title>
          </v-list-item>

          <v-divider style="border-color:#4f4f4f" />

          <v-list dark dense>
            <v-list-item v-for="item in itemsMenu" :key="item.title" link>
              <v-list-item-icon>
                <v-icon>{{ item.icon }}</v-icon>
              </v-list-item-icon>

              <v-list-item-content>
                <v-list-item-title>{{ item.title }}</v-list-item-title>
              </v-list-item-content>
            </v-list-item>
          </v-list>
        </v-container>
      </v-img>
    </v-navigation-drawer>
    <v-app-bar elevation="0" app height="100" color="#eeeeee">
      <div class="d-flex align-center">
        <v-btn class="mx-2 ml-5" fab dark small color="#b70000" @click.stop="changeMini()">
          <v-icon>{{iconChevron}}</v-icon>
        </v-btn>
            <v-breadcrumbs :items="items">
      <template v-slot:item="{ item }">
        <v-breadcrumbs-item
          :href="item.href"
          :disabled="item.disabled"
        >
          {{ item.text.toUpperCase() }}
        </v-breadcrumbs-item>
      </template>
    </v-breadcrumbs>
        <!-- <v-img
          alt="Vuetify Logo"
          class="shrink mr-2"
          contain
          src="./assets/30271657.png"
          transition="scale-transition"
          width="100"
        /> -->
      </div>
      <v-spacer />

      <v-menu offset-y bottom origin="center center" transition="scale-transition">
        <template v-slot:activator="{ on, attrs }">
          <v-btn class="ml-10 mr-5" icon color="info" v-bind="attrs" v-on="on">
            <v-icon>mdi-account</v-icon>
          </v-btn>
        </template>

        <v-list class="pr-15">
          <v-list-item v-for="(item, i) in itemsAppBar" :key="i">
            <v-list-item-title>{{ item.title }}</v-list-item-title>
          </v-list-item>
        </v-list>
      </v-menu>
    </v-app-bar>
    <v-main style="background-color:#eeeeee; padding-top:120px">
      <v-fade-transition mode="out-in">
        <router-view class="mr-10 ml-10" />
        <!-- <v-card><HelloWorld/></v-card> -->
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
      itemsMenu: [
        { title: "Home", icon: "mdi-home-city" },
        { title: "My Account", icon: "mdi-account" },
        { title: "Users", icon: "mdi-account-group-outline" }
      ],
      itemsAppBar: [
        { title: "Profile" },
        { title: "Setting" },
        { title: "Logout" }
      ],
      items: [
      {
        text: 'Dashboard',
        disabled: false,
        href: 'breadcrumbs_dashboard',
      },
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
      } else {
        this.drawer = true;
        this.mini = false;
        this.expandOnhover = false;
      }
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
