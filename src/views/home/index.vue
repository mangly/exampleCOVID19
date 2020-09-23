<template>
  <section id="hero">
    <v-img
      :min-height="minHeight"
      :src="require('@/assets/ciberseguridad-covid19-1200x630.jpg')"
      class="white--text"
      gradient="to right, rgba(5, 11, 31, .8), rgba(5, 11, 31, .8)"
    >
      <v-container class="fill-height px-4 py-12">
        <v-responsive class="d-flex align-center" height="100%" max-width="700" width="100%">
          <h1>Description</h1>
          <br />
          <p>
            In this website you'll find information about the covid-19 pandemic, including data,
            models, simulations, predictions, containment, measures, and epidemic literature.
            This website is done by a group of researchers at Torus Actions in collaborations
            with mathematicians at Max-Planck Institute for Mathematic in the Sciencies and
            Czech Academy of Sciencies. This website in created May 2020 and willbe updated fast
            and regulary, and will also show our own simulations and models for Covid-19.
          </p>

          <div
            :class="$vuetify.breakpoint.smAndDown ? 'flex-column align-start' : 'align-center'"
            class="d-flex flex-wrap"
          >
            <!-- <base-btn>Discover More</base-btn>

            <span class="font-weight-bold ml-6 mr-4 my-4">or</span>

            <base-btn :ripple="false" class="pa-1" height="auto" text>Get Started Now</base-btn>-->
          </div>
        </v-responsive>
      </v-container>
    </v-img>
  </section>
</template>
<script>
export default {
  name: "SectionHero",
  computed: {
    minHeight() {
      const height = this.$vuetify.breakpoint.mdAndUp ? "100vh" : "50vh";

      return `calc(${height} - ${this.$vuetify.application.top}px)`;
    }
  }
};
</script>
