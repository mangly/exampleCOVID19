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

          <v-list dark>
            <template v-for="item in items">
              <v-list-group
                v-if="item.children"
                :key="item.text"
                v-model="item.model"
                append-icon
                :prepend-icon="item.model ? item.icon : item['icon-alt']"
              >
                <template v-slot:activator>
                  <v-list-item class="pl-0">
                    <v-list-item-content>
                      <v-list-item-title>{{ item.text }}</v-list-item-title>
                    </v-list-item-content>
                  </v-list-item>
                </template>
                <v-list-item v-for="(child, i) in item.children" :key="i" :to="child.link" link>
                  <v-list-item-content>
                    <v-list-item-title>{{ child.text }}</v-list-item-title>
                  </v-list-item-content>
                </v-list-item>
              </v-list-group>
              <v-list-item v-else :key="item.text" link>
                <v-list-item-action>
                  <v-icon>{{ item.icon }}</v-icon>
                </v-list-item-action>
                <v-list-item-content>
                  <v-list-item-title>{{ item.text }}</v-list-item-title>
                </v-list-item-content>
              </v-list-item>
            </template>
          </v-list>
        </v-container>
      </v-img>
    </v-navigation-drawer>
    <v-app-bar elevation="0" app height="100" color="#eeeeee">
      <div class="d-flex align-center">
        <v-btn class="mx-2 ml-5" fab dark small color="#b70000" @click.stop="changeMini()">
          <v-icon>{{iconChevron}}</v-icon>
        </v-btn>
        <v-breadcrumbs :items="itemsBreadCrumbs">
          <template v-slot:item="{ item }">
            <v-breadcrumbs-item
              :href="item.href"
              :disabled="item.disabled"
            >{{ item.text.toUpperCase() }}</v-breadcrumbs-item>
          </template>
        </v-breadcrumbs>
        <!-- <v-img
          alt="Vuetify Logo"
          class="shrink mr-2"
          contain
          src="./assets/30271657.png"
          transition="scale-transition"
          width="100"
        />-->
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
      </v-fade-transition>
    </v-main>
    <v-footer color="#eeeeee" app>
      <span class="black--text">
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

      itemsAppBar: [
        { title: "Profile" },
        { title: "Setting" },
        { title: "Logout" }
      ],
      itemsBreadCrumbs: [
        {
          text: "Home",
          disabled: false,
          href: "breadcrumbs_dashboard"
        }
      ],
      items: [
        { icon: "mdi-chevron-right", text: "Home" },
        { icon: "mdi-chevron-right", text: "Data" },
        { icon: "mdi-chevron-right", text: "Methodology" },
        {
          icon: "mdi-folder-open",
          "icon-alt": "mdi-folder",
          text: "Models",
          model: false,
          children: [
            {
              text: "Book on epidemic modeling",
              icon: "mdi-circle"
            }
          ]
        },
        {
          icon: "mdi-folder-open",
          "icon-alt": "mdi-folder",
          text: "Resources",
          model: false,
          children: [
            {
              icon: "mdi-circle",
              text: "Methodology"
            },
            {
              icon: "mdi-circle",
              text: "Models"
            },
            {
              icon: "mdi-circle",
              text: "Simulations"
            },
            {
              icon: "mdi-circle",
              text: "Predictions"
            },
            {
              icon: "mdi-circle",
              text: "State of the art in epidemic modeling"
            }
          ]
        },
        { icon: "mdi-chevron-right", text: "Containment" },
        { icon: "mdi-chevron-right", text: "News" },
        { icon: "mdi-chevron-right", text: "About us" }
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

<style>
.v-list-item .v-list-item__subtitle,
.v-list-item .v-list-item__title {
  line-height: 1.2;
  font-weight: 300;
  font-size: 14px;
}

.v-list-group__items .v-list-item .v-list-item__title {
  font-size: 13px;
}
</style>