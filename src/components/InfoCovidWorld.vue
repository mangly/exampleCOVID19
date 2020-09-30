<template>
  <v-card color="#1e1e1e" class="pl-3 pr-3 pt-2">
    <div class="center1">
      <div class="center2" style="font-size:30px">
        <span style="color:#ffffff">#About</span>
        <span style="color:#b70000">
          <strong>COVID19</strong>
        </span>
        <span style="color:#ffffff">inTheWorld</span>
      </div>
    </div>
    <v-row>
      <v-col lg="3" cols="12">
        <v-card class="mx-auto" dark color="#d0797c" height="100" width="100%">
          <v-card-text>
            <div>Total Confirmed</div>
            <v-divider></v-divider>
            <div class="center1">
              <div class="center2">
                <p
                  class="display-1 pt-2"
                  style="color: white"
                >{{infoCovidWorld ? infoCovidWorld.cases : ''}}</p>
              </div>
            </div>
          </v-card-text>
        </v-card>
      </v-col>
      <v-col lg="3" cols="12">
        <v-card dark color="#b70000" class="mx-auto" height="100" width="100%">
          <v-card-text>
            <div>Active Cases</div>
            <v-divider></v-divider>
            <div class="center1">
              <div class="center2">
                <p
                  class="display-1 pt-2"
                  style="color: white"
                >{{infoCovidWorld ? infoCovidWorld.active : ''}}</p>
              </div>
            </div>
          </v-card-text>
        </v-card>
      </v-col>
      <v-col lg="3" cols="12">
        <v-card dark color="info" class="mx-auto" height="100" width="100%">
          <v-card-text>
            <div>Total Recovered</div>
            <v-divider></v-divider>
            <div class="center1">
              <div class="center2">
                <p
                  class="display-1 pt-2"
                  style="color: white"
                >{{infoCovidWorld ? infoCovidWorld.recovered : ''}}</p>
              </div>
            </div>
          </v-card-text>
        </v-card>
      </v-col>
      <v-col lg="3" cols="12">
        <v-card color="#eeeeee" class="mx-auto" height="100" width="100%">
          <v-card-text>
            <div>Total Deaths</div>
            <v-divider></v-divider>
            <div class="center1">
              <div class="center2">
                <p
                  class="display-1 pt-2"
                  style="color: black"
                >{{infoCovidWorld ? infoCovidWorld.deaths : '' }}</p>
              </div>
            </div>
          </v-card-text>
        </v-card>
      </v-col>
    </v-row>
  </v-card>
</template>

<script>
export default {
  data() {
    return {
      infoCovidWorld: null
    };
  },

  methods: {
    async loadDataFromApi() {
      const request = await this.$get(
        "https://coronavirus-19-api.herokuapp.com/countries/world"
      );
      if (request.state) {
        this.infoCovidWorld = request.response.data;
      }
    }
  },

  mounted() {
    this.loadDataFromApi();
  }
};
</script>

<style>
.center1 {
  display: flex;
  align-items: center;
}
.center2 {
  margin: 0 auto; /* requerido para alineación horizontal */
}
</style>