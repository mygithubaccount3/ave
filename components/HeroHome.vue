<template>
  <div class="heroHome">
    <VueSlickCarousel
      class="heroHome_slider"
      :arrows="false"
      :dots="true"
      :fade="true"
      :autoplay="true"
      lazyLoad="progressive"
    >
      <div v-for="link in links" :key="link.id">
        <div class="heroHome_wrapper">
          <img
            class="heroHome_background"
            :srcset="`${link.backgroundWebp}, ${link.background}`"
            :alt="link.title"
            :img-width="link.background.split('/')[3]"
            :img-height="link.background.split('/')[4]"
          />
          <h1>{{ title }}</h1>
          <nuxt-link :to="link.url">{{ link.title }}</nuxt-link>
        </div>
      </div>
    </VueSlickCarousel>
    <div class="header_mobile">
      <h1>{{ title }}</h1>
      <div class="header_mobile__links-wrapper">
        <nuxt-link
          class="header_mobile__link"
          v-for="link in links"
          :key="link.id"
          :to="link.url"
          >{{ link.title }}</nuxt-link
        >
      </div>
    </div>
  </div>
</template>

<script>
import VueSlickCarousel from "vue-slick-carousel";
import "vue-slick-carousel/dist/vue-slick-carousel.css";
import "vue-slick-carousel/dist/vue-slick-carousel-theme.css";

export default {
  name: "HeroHome",
  props: {
    title: {
      type: String
    },
    links: {
      type: Array,
      required: true
    }
  },
  components: { VueSlickCarousel }
};
</script>

<style lang="scss" scoped>
.heroHome {
  text-shadow: 1px 1px 2px #333;
  margin: auto;
  width: 80%;

  &_slider {
    display: none !important;
  }

  &_wrapper {
    display: flex;
    flex-direction: column;
    align-items: flex-end;
    position: relative;
    padding-bottom: 223.1521739130435px;
  }

  &_background {
    position: absolute;
    z-index: -99;
  }
}

.header_mobile {
  display: flex;
  flex-direction: column;
  align-items: center;

  &__links-wrapper {
    display: flex;
    justify-content: center;
    flex-wrap: wrap;
  }

  &__link {
    margin-right: 5px;
    margin-bottom: 10px;
    margin-left: 5px;
    text-align: center;
    min-width: 190px;
    padding: 5px;
    width: 45%;
  }
}

h1 {
  color: #575153;
  font-family: Montserrat, sans-serif;
  font-size: 100px;
  font-weight: 700;
  text-transform: uppercase;
  letter-spacing: 22.5px;
  line-height: normal;
  user-select: none;
}

a {
  display: inline-flex;
  border: 2px solid #737373;
  font-family: Montserrat, sans-serif;
  width: 342px;
  height: 59px;
  justify-content: center;
  align-items: center;
  color: #454647;
  font-size: 16px;
  font-weight: 400;
  text-transform: uppercase;
  letter-spacing: 3.2px;

  &:hover {
    background-color: #00c8c8;
    border: none;
    color: #f8f8f8;
    text-decoration: none;
  }
}

@media screen and (min-width: 768px) {
  .header_mobile {
    display: none;
  }

  .heroHome {
    width: 100%;
    min-height: 330px;

    &_slider {
      display: block !important;
    }
  }

  h1 {
    font-size: 200px;
  }

  a {
    align-self: flex-end;
    background-color: #575153;
    color: white;
  }
}

@media screen and (min-width: 1500px) {
  h1 {
    font-size: 450px;
  }
}
</style>
