<template>
  <div class="hero_wrapper">
    <lazy-HeroHome
      title="Ave"
      :links="[
        {
          id: 1,
          title: 'Shop men\'s collection',
          url: '/men',
          background: 'https://picsum.photos/2053/920/?image=275'
        },
        {
          id: 2,
          title: 'Shop women\'s collection',
          url: '/women',
          background: 'https://picsum.photos/2053/920/?image=280'
        }
      ]"
    />
    <lazy-Items />
    <div class="lookbooks_wrapper">
      <lazy-Lookbook
        v-for="item in lookbooks"
        :key="item.id"
        :title="item.title"
        :description="item.description"
        :url="item.url"
        :imgSrc="item.imgSrc"
      />
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
