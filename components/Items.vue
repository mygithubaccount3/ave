<template>
  <div class="items" id="items">
    <nav class="items__nav">
      <ul>
        <li active>Popular</li>
        <li>New arrivals</li>
        <li>Best sellers</li>
        <li>Special offers</li>
        <li>Coming soon</li>
      </ul>
    </nav>
    <div class="items_content">
      <div
        class="items_content_wrapper"
        v-for="i in Math.ceil(items.length / 3)"
        :key="i"
      >
        <Item
          v-for="item in items.slice((i - 1) * 3, i * 3)"
          :key="item.id"
          :id="item.id"
          :img="item.img"
          :price="item.price"
          :thumbs="item.thumbs"
        />
      </div>
    </div>
  </div>
</template>

<script>
export default {
  computed: {
    items() {
      return this.$store.state.items;
    }
  }
};
</script>

<style lang="scss">
.items {
  border-top: 1px solid #eeeeee;
  margin: auto;
  margin-top: 62px;
  margin-bottom: 62px;
  padding-top: 54px;
  padding-bottom: 62px;
  width: 80%;

  &__nav {
    & ul {
      padding-left: 0;
      list-style-type: none;
      display: flex;
      flex-wrap: wrap;
      justify-content: space-around;
    }
  }
}

.items_content {
  display: grid;
  grid-template-columns: repeat(1, 1fr);
  grid-gap: 10px;

  &_wrapper {
    display: grid;
    grid-gap: 10px;
    grid-template-areas:
      "item"
      "item"
      "item";

    & > div {
      min-height: 170px;
    }

    &:first-of-type > div:not(:nth-of-type(3)),
    &:last-of-type > div:not(:nth-of-type(1)) {
      min-height: 300px;
    }
  }
}

.items a {
  font-weight: bold;
  line-height: 20px;
  color: #727272;
  font-family: Montserrat, sans-serif;
  font-size: 13px;
  padding: 0;
  text-align: left;
  text-transform: uppercase;
}

.items a:hover {
  color: #00c8c8;
}

.items .nav {
  margin-bottom: 61px;
}

img {
  width: 100%;
  height: auto;
}

@media screen and (min-width: 480px) {
  .items_content {
    grid-template-columns: repeat(2, 1fr);

    &_wrapper {
      &:first-of-type {
        grid-template-areas:
          "top-item-left top-item-right"
          "bottom-item bottom-item";

        & .item:last-of-type {
          grid-area: bottom-item;
        }
      }

      &:last-of-type {
        grid-template-areas:
          "top-item top-item"
          "bottom-item-left bottom-item-right";

        & .item:first-of-type {
          grid-area: top-item;
        }
      }
    }
  }
}

@media screen and (min-width: 768px) {
  .items_content {
    grid-template-columns: repeat(2, 1fr);

    &_wrapper > div {
      min-height: 300px;
    }
  }
}
</style>
