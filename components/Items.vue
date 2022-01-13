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
      <div class="items_content_wrapper">
        <Item
          id="1"
          :img="{
            webp: {
              small: 'https://picsum.photos/420/500.webp?image=314'
            },
            legacy: {
              small: 'https://picsum.photos/420/500/?image=314'
            }
          }"
          price="20.47$"
          :thumbs="[
            {
              id: 1,
              title: 'Thumb 1',
              src:
                'https://images.unsplash.com/photo-1621423028668-d5f9555ebea3?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1868&q=80'
            }
          ]"
        />
        <Item
          id="2"
          :img="{
            webp: {
              small: 'https://picsum.photos/420/500.webp?image=317'
            },
            legacy: {
              small: 'https://picsum.photos/420/500/?image=317'
            }
          }"
          price="20.47$"
          :thumbs="[
            {
              id: 2,
              title: 'Thumb 2',
              src:
                'https://images.unsplash.com/photo-1621423028668-d5f9555ebea3?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1868&q=80'
            }
          ]"
        />
        <Item
          id="3"
          :img="{
            webp: {
              big: 'https://picsum.photos/760/500.webp?image=323',
              small: 'https://picsum.photos/420/277.webp?image=323'
            },
            legacy: {
              big: 'https://picsum.photos/760/500/?image=323',
              small: 'https://picsum.photos/420/277?image=323'
            }
          }"
          price="20.47$"
          :thumbs="[
            {
              id: 3,
              title: 'Thumb 3',
              src:
                'https://images.unsplash.com/photo-1621423028668-d5f9555ebea3?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1868&q=80'
            }
          ]"
        />
      </div>
      <div class="items_content_wrapper">
        <Item
          id="4"
          :img="{
            webp: {
              big: 'https://picsum.photos/760/500.webp?image=350',
              small: 'https://picsum.photos/420/277.webp?image=350'
            },
            legacy: {
              big: 'https://picsum.photos/760/500/?image=350',
              small: 'https://picsum.photos/420/277?image=350'
            }
          }"
          price="20.47$"
          :thumbs="[
            {
              id: 4,
              title: 'Thumb 4',
              src:
                'https://images.unsplash.com/photo-1621423028668-d5f9555ebea3?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1868&q=80'
            }
          ]"
        />
        <Item
          id="5"
          :img="{
            webp: {
              small: 'https://picsum.photos/420/500.webp?image=352'
            },
            legacy: {
              small: 'https://picsum.photos/420/500/?image=352'
            }
          }"
          price="20.47$"
          :thumbs="[
            {
              id: 5,
              title: 'Thumb 5',
              src:
                'https://images.unsplash.com/photo-1621423028668-d5f9555ebea3?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1868&q=80'
            }
          ]"
        />
        <Item
          id="6"
          :img="{
            webp: {
              small: 'https://picsum.photos/420/500.webp?image=327'
            },
            legacy: {
              small: 'https://picsum.photos/420/500/?image=327'
            }
          }"
          price="20.47$"
          :thumbs="[
            {
              id: 6,
              title: 'Thumb 6',
              src:
                'https://images.unsplash.com/photo-1621423028668-d5f9555ebea3?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1868&q=80'
            }
          ]"
        />
      </div>
    </div>
  </div>
</template>

<script>
export default {};
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
    min-height: 300px;
  }
}
</style>
