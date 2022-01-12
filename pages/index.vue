<template>
  <div class="hero_wrapper">
    <HeroHome
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
    <div id="items">
      <component :is="loadedComponents.find(el => el === 'Items')"></component>
    </div>
    <div class="lookbooks_wrapper" id="lookbook">
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
  },
  mounted() {
    const lookbook = document.querySelector("#lookbook");
    const items = document.querySelector("#items");
    const component = this;
    const observer = new IntersectionObserver(function(entry) {
      entry.forEach(item => {
        if (item.isIntersecting) {
          component.loadedComponents.push(
            item.target
              .getAttribute("id")
              .charAt(0)
              .toUpperCase() + item.target.getAttribute("id").slice(1)
          );
          this.unobserve(item.target);
        }
      });
    });

    observer.observe(lookbook);
    observer.observe(items);
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
