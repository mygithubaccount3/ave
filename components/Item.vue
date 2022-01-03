<template>
  <div class="item">
    <img
      v-lazy="imgSrc"
      alt=""
      :width="imgSrc.split('/')[3]"
      :height="imgSrc.split('/')[4]"
    />
    <span class="price">{{ price }}</span>
    <fa :icon="faInfoCircle" color="white" class="infoIcon" />
    <div class="thumbs">
      <img
        v-for="thumb in thumbs"
        :key="thumb.id"
        src="data:image/png;base64, iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAQAAAC1HAwCAAAAC0lEQVR42mNkqAcAAIUAgUW0RjgAAAAASUVORK5CYII="
        v-lazy="thumb.src"
        :alt="thumb.title"
      />
    </div>
    <ItemMenu title="this is a title" description="And this is a description" />
  </div>
</template>

<script>
import { faInfoCircle } from "@fortawesome/free-solid-svg-icons";
export default {
  name: "Item",
  props: {
    imgSrc: {
      type: String,
      required: true
    },
    price: {
      type: String,
      required: true
    },
    thumbs: {
      type: Array
    }
  },
  computed: {
    faInfoCircle() {
      return faInfoCircle;
    }
  }
};
</script>

<style>
.item {
  position: relative;
}

.item:hover {
  box-shadow: 0 0 24px rgba(0, 0, 0, 0.14);
}

.item:hover .menu,
.item:hover .infoIcon,
.item:hover .thumbs {
  display: flex;
}

div .item:nth-of-type(1),
div .item:nth-of-type(2) {
  width: 49%;
}

.items_wrapper:first-of-type .item:nth-of-type(3) {
  margin-top: 2%;
}

.items_wrapper:last-of-type .item:nth-of-type(3) {
  margin-bottom: 2%;
}

.item .price {
  color: #9a9a9a;
  font-family: Montserrat;
  font-size: 21px;
  font-weight: 300;
  text-align: left;
  text-transform: uppercase;
  /* Text style for "£, 69.95" */
  /* Text style for "" */
  letter-spacing: 1.05px;
  position: absolute;
  top: 15px;
  left: 15px;
}

.infoIcon {
  position: absolute;
  top: calc(50% - 24px);
  left: calc(50% - 24px);
  display: none;
  font-size: 48px;
}

.thumbs {
  position: absolute;
  top: 15px;
  right: 15px;
  width: 10%;
  display: none;
  flex-direction: column;
}

.thumbs img {
  width: 100%;
  height: auto;
  margin-bottom: 10px;
}
</style>
