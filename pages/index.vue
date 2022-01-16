<template>
  <div class="hero_wrapper">
    <HeroHome
      title="Ave"
      :links="[
        {
          id: 1,
          title: 'Shop men\'s collection',
          url: '/men',
          background: {
            w2053: 'https://picsum.photos/2053/920/?image=275',
            w1500: 'https://picsum.photos/1500/673/?image=275',
            w1200: 'https://picsum.photos/1200/538/?image=275',
            big: 'https://picsum.photos/900/404/?image=275',
            medium: 'https://picsum.photos/600/269/?image=275',
            small: 'https://picsum.photos/300/135/?image=275'
          },
          backgroundWebp: {
            w2053: 'https://picsum.photos/2053/920.webp?image=275',
            w1500: 'https://picsum.photos/1500/673.webp?image=275',
            w1200: 'https://picsum.photos/1200/538.webp?image=275',
            big: 'https://picsum.photos/900/404.webp?image=275',
            medium: 'https://picsum.photos/600/269.webp?image=275',
            small: 'https://picsum.photos/300/135.webp?image=275'
          }
        },
        {
          id: 2,
          title: 'Shop women\'s collection',
          url: '/women',
          background: {
            w2053: 'https://picsum.photos/2053/920/?image=280',
            w1500: 'https://picsum.photos/1500/673/?image=280',
            w1200: 'https://picsum.photos/1200/538/?image=280',
            big: 'https://picsum.photos/900/404/?image=280',
            medium: 'https://picsum.photos/600/269/?image=280',
            small: 'https://picsum.photos/300/135/?image=280'
          },
          backgroundWebp: {
            w2053: 'https://picsum.photos/2053/920.webp?image=280',
            w1500: 'https://picsum.photos/1500/673.webp?image=280',
            w1200: 'https://picsum.photos/1200/538.webp?image=280',
            big: 'https://picsum.photos/900/404.webp?image=280',
            medium: 'https://picsum.photos/600/269.webp?image=280',
            small: 'https://picsum.photos/300/135.webp?image=280'
          }
        }
      ]"
    />
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
      lookbooks: [
        {
          id: 1,
          title: "Men's lookbook",
          description:
            "Lorem ipsum dolor sit amet eras facilisis consectetur adipiscing elit lor, integer lorem consecteur dignissim laciniqui. Elementum metus facilisis ut phasellu.",
          url: "/men",
          imgSrc: "/silhouette.png"
        },
        {
          id: 2,
          title: "Women's lookbook",
          description:
            "Pellentesque habitant morbi tristique senectus et netus et malesuada fames . Pellentesque laoreet quis enim et mattis. Quisque interdum felis tellus.",
          url: "/women",
          imgSrc: "/silhouette.png"
        },
        {
          id: 3,
          title: "Your lookbook",
          description:
            "See an item you like and click the  button to add it to your lookbook where you can create your own perfect look. It’s like your own boutique!",
          url: "/your",
          imgSrc: "/silhouette.png"
        }
      ],
      loadedComponents: []
    };
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
