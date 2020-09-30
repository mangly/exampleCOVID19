<template>
  <v-card elevation="2" class="pl-4 pr-4 pb-4 pt-4">
    <v-row>
      <v-col lg="8" cols="12">
        <vuevectormap
          @regionSelected="regionSelectedEventFire"
          ref="map"
          width="100%"
          height="500px"
          backgroundColor="#fff"
          :selectedMarkers="selectedMarkers"
          :markerStyle="markerStyle"
          :markerLabelStyle="markerLabelStyle"
          :selectedRegions="selectedRegions"
          :regionsSelectable="true"
          :regionsSelectableOne="true"
          :regionStyle="regionStyle"
        ></vuevectormap>
      </v-col>
      <v-col lg="4" cols="12">
        <info-covid-country :infoCovidCountry="infoCovidCountry" />
      </v-col>
    </v-row>
  </v-card>
</template>

<script>
import InfoCovidCountry from "./InfoCovidCountry";
export default {
  props: {
    infoCovidCountry: {
      type: Object,
      default: null
    }
  },
  components: {
    "info-covid-country": InfoCovidCountry
  },
  mounted() {
    this.map = this.$refs.map.getMap();
    window.addEventListener("resize", () => {
      this.map.updateSize();
    });
  },
  data: () => ({
    map: null,

    markerStyle: {},
    markerLabelStyle: {},
    selectedMarkers: [],

    // Regions
    regionStyle: { initial: { fill: "#ccc" } },
    selectedRegions: ["FR"]
  }),

  methods: {
    regionSelectedEventFire() {
      let countryName = document.getElementsByClassName("jsvmap-tooltip")[0]
        .textContent;

      if (countryName == "United States") countryName = "USA";
      this.$emit("regionSelected", countryName);
    }
  }
};
</script>

<style>
.jsvmap-tooltip {
  background-color: #b70000;
}
</style>