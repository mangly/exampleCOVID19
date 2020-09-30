<template>
  <div>
    <info-covid-world :infoCovidWorld="infoCovidWorld" />
    <map-world @regionSelected="loadDataFromApi($event)" />
  </div>
</template>

<script>
import InfoCovidWorld from "./InfoCovidWorld";
import MapWorld from "./MapWorld";
export default {
  components: {
    "info-covid-world": InfoCovidWorld,
    "map-world": MapWorld,
  },
  data() {
    return {
      infoCovidWorld: {
        Confirmed: "",
        Deaths: "",
        Recovered: "",
        Active: "",
      },
    };
  },
  methods: {
    async loadDataFromApi(regionName) {
      const request = await this.$get(
        "https://coronavirus-19-api.herokuapp.com/countries/" + regionName
      );
      if (request.state) {
        // this.infoCovidWorld =
        //   request.response.data[regionName][
        //     request.response.data[regionName].length - 1
        //   ];

        this.infoCovidWorld = request.response.data

        console.log(this.infoCovidWorld);

        if (!this.infoCovidWorld) {
          this.infoCovidWorld = {
            Confirmed: "",
            Deaths: "",
            Recovered: "",
            Active: "",
          };
        }
      }
    },
  },

  mounted() {
    this.loadDataFromApi("World");
  },
};
</script>
