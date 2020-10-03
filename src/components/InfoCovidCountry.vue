<template>
  <v-simple-table dark height="500px">
    <template v-slot:default>
      <tbody>
        <tr>
          <td>Country:</td>
          <td>{{ infoCovidCountryD ? infoCovidCountryD.country : "" }}</td>
        </tr>
        <tr>
          <td>Cases:</td>
          <td>{{ infoCovidCountryD ? infoCovidCountryD.cases : "" }}</td>
        </tr>
        <tr>
          <td>Today Cases:</td>
          <td>{{ infoCovidCountryD ? infoCovidCountryD.todayCases : "" }}</td>
        </tr>
        <tr>
          <td>Today Deaths:</td>
          <td>{{ infoCovidCountryD ? infoCovidCountryD.todayDeaths : "" }}</td>
        </tr>
        <tr>
          <td>Recovered:</td>
          <td>{{ infoCovidCountryD ? infoCovidCountryD.recovered : "" }}</td>
        </tr>
        <tr>
          <td>Active:</td>
          <td>{{ infoCovidCountryD ? infoCovidCountryD.active : "" }}</td>
        </tr>
        <tr>
          <td>Critical:</td>
          <td>{{ infoCovidCountryD ? infoCovidCountryD.critical : "" }}</td>
        </tr>
        <tr>
          <td>Cases Per One Million:</td>
          <td>
            {{ infoCovidCountryD ? infoCovidCountryD.casesPerOneMillion : "" }}
          </td>
        </tr>
        <tr>
          <td>Deaths Per One Million:</td>
          <td>
            {{ infoCovidCountryD ? infoCovidCountryD.deathsPerOneMillion : "" }}
          </td>
        </tr>
        <tr>
          <td>Total Tests:</td>
          <td>{{ infoCovidCountryD ? infoCovidCountryD.totalTests : "" }}</td>
        </tr>
        <tr>
          <td>Tests Per One Million:</td>
          <td>
            {{ infoCovidCountryD ? infoCovidCountryD.testsPerOneMillion : "" }}
          </td>
        </tr>
      </tbody>
    </template>
  </v-simple-table>
</template>

<script>
export default {
  props: {
    infoCovidCountry: {
      type: Object,
      default: null,
    },
  },

  data() {
    return {
      infoCovidCountryD: null,
    };
  },

  watch: {
    infoCovidCountry() {
      this.infoCovidCountryD = this.infoCovidCountry;
    },
  },
};
</script>

<style>
</style>