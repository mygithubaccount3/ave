<template>
  <div class="hero_wrapper">
    <LazyHeroHome
      title="Ave"
      :links="[
        {
          id: 1,
          title: 'Shop men\'s collection',
          url: '/men',
          background: 'https://picsum.photos/2053/920/?image=275',
          backgroundWebp: 'https://picsum.photos/2053/920.webp?image=275'
        },
        {
          id: 2,
          title: 'Shop women\'s collection',
          url: '/women',
          background: 'https://picsum.photos/2053/920/?image=280',
          backgroundWebp: 'https://picsum.photos/2053/920.webp?image=280'
        }
      ]"
    />
    <LazyItems />
    <div class="lookbooks_wrapper">
      <picture>
        <source data-srcset="~assets/ny.png?webp" type="image/webp" />
        <img
          data-src="~assets/paris.png"
          
          alt="Alternate text for the image"
        />
      </picture>
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
      ]
    };
  }
};
</script>

<style>
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

.lookbooks_wrapper {
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

  .lookbooks_wrapper {
    flex-direction: row;
  }
}
</style>
