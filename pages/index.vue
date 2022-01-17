<template>
  <div class="hero_wrapper">
    <HeroHome title="Ave" :links="links" />
    <Items />
    <div class="lookbooks_wrapper">
      <div v-lazy:component="'Lookbook'">
        <component
          :is="loadedComponents.find(el => el === 'Lookbook')"
          v-for="item in lookbooks"
          :key="item.id"
          :title="item.title"
          :description="item.description"
          :url="item.url"
          :imgSrc="item.imgSrc"
        ></component>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  asyncData() {
    return {
      loadedComponents: []
    };
  },
  computed: {
    lookbooks() {
      return this.$store.state.lookbooks;
    },
    links() {
      return this.$store.state.links;
    }
  }
};
</script>

<style>
.slick-slide img {
  position: absolute;
}

.slick-next {
  right: 0 !important;
}

.slick-prev {
  left: 0 !important;
  z-index: 1;
}
.page-enter-active,
.page-leave-active {
  transition: opacity 0.5s;
}
.page-enter,
.page-leave-to {
  opacity: 0;
}

.hero_wrapper {
  padding-top: 29px;
}

.lookbooks_wrapper > div {
  display: flex;
  flex-direction: column;
  justify-content: space-between;
}

.carousel-caption {
  top: 0;
}

@media screen and (min-width: 768px) {
  .hero_wrapper {
    padding-top: 85px;
  }

  .lookbooks_wrapper > div {
    flex-direction: row;
  }
}
</style>
