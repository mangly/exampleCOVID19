<template>
  <v-card>
    <v-row>
      <v-col sm cols="12">
        <v-data-table
          :options="{
            'page': 1,
            'itemsPerPage': 5,
            'sortBy': ['protein'],
            'sortDesc': [true],
          }"
          :disable-sort="true"
          :headers="dessertHeaders"
          :items="desserts"
          item-key="name"
        ></v-data-table>
      </v-col>
      <v-col sm cols="12">
        <vuevectormap
          ref="map"
          width="100%"
          height="462px"
          :labels="labels"
          backgroundColor="#FFF"
          :series="series"
          :markers="markers"
          :selectedMarkers="selectedMarkers"
          :markersSelectable="true"
          :markersSelectableOne="true"
          :markerStyle="markerStyle"
          :markerLabelStyle="markerLabelStyle"
          :selectedRegions="selectedRegions"
          :regionsSelectable="true"
          :regionsSelectableOne="false"
          :regionStyle="regionStyle"
          :regionLabelStyle="regionLabelStyle"
        ></vuevectormap>
      </v-col>
    </v-row>
  </v-card>
</template>

<script>
export default {
  mounted() {
    this.map = this.$refs.map.getMap();
    window.addEventListener("resize", () => {
      this.map.updateSize();
    });
  },
  data: () => ({
    map: null,

    //Table
    expanded: [],
    disableSort: false,
    dessertHeaders: [
      {
        text: "Dessert (100g serving)",
        align: "start",
        sortable: false,
        value: "name"
      },
      { text: "Calories", value: "calories" },
      { text: "Fat (g)", value: "fat" },
      { text: "Carbs (g)", value: "carbs" },
      { text: "Protein (g)", value: "protein" },
      { text: "Iron (%)", value: "iron" },
      { text: "", value: "data-table-expand" }
    ],
    desserts: [
      {
        name: "Frozen Yogurt",
        calories: 159,
        fat: 6.0,
        carbs: 24,
        protein: 4.0,
        iron: "1%"
      },
      {
        name: "Ice cream sandwich",
        calories: 237,
        fat: 9.0,
        carbs: 37,
        protein: 4.3,
        iron: "1%"
      },
      {
        name: "Eclair",
        calories: 262,
        fat: 16.0,
        carbs: 23,
        protein: 6.0,
        iron: "7%"
      },
      {
        name: "Cupcake",
        calories: 305,
        fat: 3.7,
        carbs: 67,
        protein: 4.3,
        iron: "8%"
      },
      {
        name: "Gingerbread",
        calories: 356,
        fat: 16.0,
        carbs: 49,
        protein: 3.9,
        iron: "16%"
      },
      {
        name: "Jelly bean",
        calories: 375,
        fat: 0.0,
        carbs: 94,
        protein: 0.0,
        iron: "0%"
      },
      {
        name: "Lollipop",
        calories: 392,
        fat: 0.2,
        carbs: 98,
        protein: 0,
        iron: "2%"
      },
      {
        name: "Honeycomb",
        calories: 408,
        fat: 3.2,
        carbs: 87,
        protein: 6.5,
        iron: "45%"
      },
      {
        name: "Donut",
        calories: 452,
        fat: 25.0,
        carbs: 51,
        protein: 4.9,
        iron: "22%"
      },
      {
        name: "KitKat",
        calories: 518,
        fat: 26.0,
        carbs: 65,
        protein: 7,
        iron: "6%"
      }
    ],

    // Start markers
    markers: [
      { name: "Palestine", coords: [31.5, 34.8] },
      { name: "Russia", coords: [61, 105] }
    ],
    markerStyle: {},
    markerLabelStyle: {},
    selectedMarkers: [0],

    // Regions
    regionStyle: { initial: { fill: "#ccc" } },
    regionLabelStyle: { initial: { fill: "orange" } },
    selectedRegions: ["CN"]

    // Series
    // series: {
    //   regions: [
    //     {
    //       attribute: "fill",
    //       legend: {
    //         title: "Play around with series"
    //       },
    //       scale: {
    //         scale1: "red",
    //         scale2: "blue",
    //         scale3: "green"
    //       },
    //       values: {
    //         US: "scale1",
    //         EG: "scale2",
    //         IT: "scale3",
    //         BR: "scale2"
    //       }
    //     }
    //   ]
    // }
  }),

  computed: {
    labels() {
      const markers = this.markers;

      // Labels for markers and regions
      return {
        markers: {
          render(index) {
            return markers[index].name;
          }
        },
        regions: {
          render(code) {
            return code === "EG" ? code : null;
          }
        }
      };
    }
  }
};
</script>
