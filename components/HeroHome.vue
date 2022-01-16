<template>
  <div class="heroHome" ref="heroHome">
    <VueSlickCarousel
      ref="carousel"
      class="heroHome_slider"
      :arrows="false"
      :dots="true"
      :fade="true"
      :autoplay="true"
      :mobileFirst="true"
      lazyLoad="progressive"
    >
      <div v-for="(link, index) in links" :key="link.id">
        <div :class="`heroHome_wrapper-${index}`">
          <img
            :srcset="
              `${link.backgroundWebp.small} 300w, ${link.backgroundWebp.medium} 600w, ${link.backgroundWebp.big} 900w, ${link.backgroundWebp.w1200} 1200w, ${link.backgroundWebp.w1500} 1500w, ${link.backgroundWebp.w2053} 2053w`
            "
            sizes="100vw"
            :src="link.background.big"
            :alt="link.title"
          />
          <h1>{{ title }}</h1>
          <nuxt-link :to="link.url" :class="`heroHome_link-${index}`">{{
            link.title
          }}</nuxt-link>
        </div>
      </div>
    </VueSlickCarousel>
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
  components: { VueSlickCarousel },
  mounted() {
    const heroHome = this.$refs.heroHome;
    let isLeaving = false;
    const observer = new IntersectionObserver(entry => {
      entry.forEach(item => {
        if (item.isIntersecting) {
          isLeaving = true;
          this.$refs.carousel.play();
        } else if (isLeaving) {
          isLeaving = false;
          this.$refs.carousel.pause();
        }
      });
    });

    observer.observe(heroHome);
  }
};
</script>

<style lang="scss" scoped>
.heroHome {
  text-shadow: 1px 1px 2px #333;
  min-height: 220px;

  &_wrapper-1,
  &_wrapper-0 {
    display: flex;
    flex-direction: column;
    align-items: flex-end;
    position: relative;
    padding-bottom: 44.81%;
    background-repeat: no-repeat;
    background-size: cover;
    background-position: center;
  }

  &_link-0,
  &_link-1 {
    display: inline-flex;
    border: 2px solid #737373;
    font-family: Montserrat, sans-serif;
    width: 250px;
    height: 30px;
    justify-content: center;
    align-items: center;
    color: #454647;
    font-size: 11px;
    font-weight: 400;
    text-transform: uppercase;
    letter-spacing: 3.2px;
    position: absolute;
    margin-right: 20px;
  }

  &_link-0:hover,
  &_link-1:hover {
    background-color: #00c8c8;
    border: none;
    color: #f8f8f8;
    text-decoration: none;
  }

  &_link-0 {
    bottom: 35%;
  }

  &_link-1 {
    bottom: 10%;
    border: 2px solid white;
    color: white;
  }
}

h1 {
  color: #575153;
  font-family: Montserrat, sans-serif;
  font-size: 50px;
  font-weight: 700;
  text-transform: uppercase;
  letter-spacing: 22.5px;
  line-height: normal;
  user-select: none;
  position: absolute;
  margin-right: 20px;
}

@media screen and (min-width: 768px) {
  .heroHome {
    min-height: 330px;

    &_link-0,
    &_link-1 {
      height: 40px;
      background-color: #575153;
      color: white;
      width: 342px;
      height: 59px;
      font-size: 16px;
    }

    &_link-0 {
      bottom: 10%;
      color: white;
    }

    &_link-1 {
      border-color: #737373;
    }
  }

  h1 {
    font-size: 200px;
  }
}

@media screen and (min-width: 1500px) {
  h1 {
    font-size: 450px;
  }
}
</style>
