<template>
  <div class="heroHome">
    <b-carousel
      v-show="!isOnMobile"
      id="carousel-1"
      :interval="4000"
      :fade="true"
      controls
      background="#ababab"
    >
      <b-carousel-slide
        v-for="link in links"
        :key="link.id"
        :img-src="link.background"
        :img-alt="link.title"
      >
        <div class="heroHome_wrapper">
          <h1>{{ title }}</h1>
          <nuxt-link :to="link.url">{{ link.title }}</nuxt-link>
        </div>
      </b-carousel-slide>
    </b-carousel>
    <div class="header_mobile" v-show="isOnMobile">
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
  data() {
    return {
      isOnMobile: true
    };
  },
  methods: {
    checkIfOnMobile() {
      if (window.innerWidth > 768) {
        this.isOnMobile = false;
      } else {
        this.isOnMobile = true;
      }
    }
  },
  created() {
    if (process.client) {
      this.checkIfOnMobile();
    }
  },
  beforeMount() {
    window.addEventListener("resize", this.checkIfOnMobile);
  },
  beforeUnmount() {
    window.removeEventListener("resize", this.checkIfOnMobile);
  }
};
</script>

<style lang="scss" scoped>
.heroHome {
  text-shadow: 1px 1px 2px #333;
  margin: auto;
  width: 80%;

  &_wrapper {
    display: flex;
    flex-direction: column;
    align-items: flex-end;
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
  .heroHome {
    width: 100%;
  }

  h1 {
    font-size: 200px;
  }

  a {
    align-self: flex-end;
    background-color: #575153;
    color: #f8f8f8;
  }
}

@media screen and (min-width: 1500px) {
  h1 {
    font-size: 450px;
  }
}
</style>
