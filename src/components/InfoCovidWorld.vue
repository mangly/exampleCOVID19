<template>
  <v-card class="pl-10 pr-10 pb-10 pt-10">
    <v-row>
      <v-col lg="3" cols="12">
        <v-card dark color="#d0797c" class="mx-auto" height="100" width="100%">
          <v-card-text>
            <div>Total Confirmed</div>
            <v-divider></v-divider>
            <p class="display-1 pt-2" style="color: white">{{infoCovidWorld.cases }}</p>
          </v-card-text>
        </v-card>
      </v-col>
      <v-col lg="3" cols="12">
        <v-card dark color="#b70000" class="mx-auto" height="100" width="100%">
          <v-card-text>
            <div>Active Cases</div>
            <v-divider></v-divider>
            <p class="display-1 pt-2" style="color: white">
              {{
              infoCovidWorld.active
              }}
            </p>
          </v-card-text>
        </v-card>
      </v-col>
      <v-col lg="3" cols="12">
        <v-card dark color="info" class="mx-auto" height="100" width="100%">
          <v-card-text>
            <div>Total Recovered</div>
            <v-divider></v-divider>
            <p class="display-1 pt-2" style="color: white">{{infoCovidWorld.recovered }}</p>
          </v-card-text>
        </v-card>
      </v-col>
      <v-col lg="3" cols="12">
        <v-card dark color="#000000" class="mx-auto" height="100" width="100%">
          <v-card-text>
            <div>Total Deaths</div>
            <v-divider></v-divider>
            <p class="display-1 pt-2" style="color: white">{{infoCovidWorld.deaths }}</p>
          </v-card-text>
        </v-card>
      </v-col>
    </v-row>
  </v-card>
</template>

<script>
export default {
  props: {
    infoCovidWorld: {
      type: Object,
      default: null
    }
  }
};
</script>

<style>
</style>