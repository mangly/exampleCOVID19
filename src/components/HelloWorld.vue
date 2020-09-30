<template>
  <div>
    <info-covid-world />
    <map-world
      class="mt-4"
      @regionSelected="loadDataFromApi($event)"
      :infoCovidCountry="infoCovidCountry"
    />
  </div>
</template>

<script>
import InfoCovidWorld from "./InfoCovidWorld";
import MapWorld from "./MapWorld";
export default {
  components: {
    "info-covid-world": InfoCovidWorld,
    "map-world": MapWorld
  },
  data() {
    return {
      infoCovidCountry: null
    };
  },
  methods: {
    async loadDataFromApi(regionName) {
      const request = await this.$get(
        "https://coronavirus-19-api.herokuapp.com/countries/" + regionName
      );
      if (request.state) {
        this.infoCovidCountry = request.response.data;
      }
    }
  }
};
</script>
