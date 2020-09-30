<template>
  <v-simple-table dark height="500px">
    <template v-slot:default>
      <tbody>
        <tr>
          <td>Country:</td>
          <td>{{infoCovidCountry ? infoCovidCountry.country: ''}}</td>
        </tr>
        <tr>
          <td>Cases:</td>
          <td>{{infoCovidCountry ? infoCovidCountry.cases: ''}}</td>
        </tr>
        <tr>
          <td>Today Cases:</td>
          <td>{{infoCovidCountry ? infoCovidCountry.todayCases: ''}}</td>
        </tr>
        <tr>
          <td>Today Deaths:</td>
          <td>{{infoCovidCountry ? infoCovidCountry.todayDeaths: ''}}</td>
        </tr>
        <tr>
          <td>Recovered:</td>
          <td>{{infoCovidCountry ? infoCovidCountry.recovered: ''}}</td>
        </tr>
        <tr>
          <td>Active:</td>
          <td>{{infoCovidCountry ? infoCovidCountry.active: ''}}</td>
        </tr>
        <tr>
          <td>Critical:</td>
          <td>{{infoCovidCountry ? infoCovidCountry.critical: ''}}</td>
        </tr>
        <tr>
          <td>Cases Per One Million:</td>
          <td>{{infoCovidCountry ? infoCovidCountry.casesPerOneMillion: ''}}</td>
        </tr>
        <tr>
          <td>Deaths Per One Million:</td>
          <td>{{infoCovidCountry ? infoCovidCountry.deathsPerOneMillion: ''}}</td>
        </tr>
        <tr>
          <td>Total Tests:</td>
          <td>{{infoCovidCountry ? infoCovidCountry.totalTests: ''}}</td>
        </tr>
        <tr>
          <td>Tests Per One Million:</td>
          <td>{{infoCovidCountry ? infoCovidCountry.testsPerOneMillion: ''}}</td>
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
      default: null
    }
  },
};
</script>

<style>
</style>