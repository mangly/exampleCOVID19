<template>
  <v-row>
    <v-col cols="12">
      <v-card elevation="2" class="pb-4 pt-4">
        <vuevectormap
          @regionSelected="regionSelectedEventFire"
          ref="map"
          width="100%"
          height="700px"
          backgroundColor="#fff"
          :selectedMarkers="selectedMarkers"
          :markerStyle="markerStyle"
          :markerLabelStyle="markerLabelStyle"
          :selectedRegions="selectedRegions"
          :regionsSelectable="true"
          :regionsSelectableOne="true"
          :regionStyle="regionStyle"
        ></vuevectormap>
      </v-card>
    </v-col>
  </v-row>
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

    markerStyle: {},
    markerLabelStyle: {},
    selectedMarkers: [],

    // Regions
    regionStyle: { initial: { fill: "#ccc" } },
    selectedRegions: ["FR"],
  }),

  methods: {
    regionSelectedEventFire() {
      let countryName = document.getElementsByClassName("jsvmap-tooltip")[0]
        .textContent;

      if (countryName == "United States") countryName = "USA";
      this.$emit("regionSelected", countryName);
    },
  },
};
</script>

<style>
.jsvmap-tooltip {
  background-color: #b70000;
}
</style>