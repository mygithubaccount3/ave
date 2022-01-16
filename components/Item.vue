<template>
  <div class="item" :ref="`item${id}`">
    <img
      v-lazy:srcset="
        `${this.img.webp.small} 420w, ${
          this.id === '3' || this.id === '4' ? this.img.webp.big + ' 760w,' : ''
        } ${this.img.legacy.small} 420w, ${
          this.id === '3' || this.id === '4'
            ? this.img.legacy.big + ' 760w'
            : ''
        }`
      "
      v-lazy:src="
        `${
          this.id === '3' || this.id === '4'
            ? this.img.legacy.big
            : this.img.legacy.small
        }`
      "
      alt=""
      :style="style"
    />
    <span class="price">{{ price }}</span>
    <fa :icon="faInfoCircle" color="white" class="infoIcon" />
    <div class="thumbs">
      <img
        v-for="thumb in thumbs"
        :key="thumb.id"
        v-lazy:src="thumb.src"
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
    id: {
      type: String
    },
    img: {
      type: Object,
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
    },
    style() {
      const size = this.id === "3" || this.id === "4" ? "big" : "small";

      return {
        maxWidth: this.img.legacy[size].split("/")[3] + "px",
        maxHeight: this.img.legacy[size].split("/")[4] + "px"
      };
    }
  }
};
</script>

<style lang="scss">
.item {
  display: flex;
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

.items_wrapper:first-of-type .item:nth-of-type(3) {
  margin-top: 2%;
}

.items_wrapper:last-of-type .item:nth-of-type(3) {
  margin-bottom: 2%;
}

.item .price {
  color: #9a9a9a;
  display: none;
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

.thumbs img,
.thumbs img[lazy="loading"] {
  width: 100%;
  height: auto;
  margin-bottom: 10px;
}
</style>
