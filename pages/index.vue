<template>
  <div>
    <HeroHome title="Ave" linkTitle="Shop men's collection" />
    <Items />
    <div class="lookbooks_wrapper">
      <Lookbook v-for="item in lookbooks" :key="item.id" :title="item.title" :description="item.description" :url="item.url" :imgSrc="item.imgSrc" />
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
          title: 'Men\'s lookbook',
          description: 'Lorem ipsum dolor sit amet eras facilisis consectetur adipiscing elit lor, integer lorem consecteur dignissim laciniqui. Elementum metus facilisis ut phasellu.',
          url: '/men',
          imgSrc: '/silhouette.png'
        },
        {
          id: 2,
          title: 'Women\'s lookbook',
          description: 'Pellentesque habitant morbi tristique senectus et netus et malesuada fames . Pellentesque laoreet quis enim et mattis. Quisque interdum felis tellus.',
          url: '/women',
          imgSrc: '/silhouette.png'
        },
        {
          id: 3,
          title: 'Your lookbook',
          description: 'See an item you like and click the  button to add it to your lookbook where you can create your own perfect look. It’s like your own boutique!',
          url: '/your',
          imgSrc: '/silhouette.png'
        }
      ]
    }
  }
}
</script>

<style scoped>
  div:first-of-type {
    padding-top: 85px;
  }

  .lookbooks_wrapper {
    display: flex;
    justify-content: space-between;
  }

  @media screen and (max-width: 768px) {
    .lookbooks_wrapper {
      flex-direction: column;
    }
  }
</style>
