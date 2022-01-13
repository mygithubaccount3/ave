<template>
  <div class="item" :id="`item${id}`">
    <img
      :data-srcset="
        `${img.webp.small} 420w, ${
          id === '3' || id === '4' ? img.webp.big + ' 760w,' : ''
        } ${img.legacy.small} 420w, ${
          id === '3' || id === '4' ? img.legacy.big + ' 760w' : ''
        }`
      "
      alt=""
      :style="{
        maxWidth:
          img.legacy[id === '3' || id === '4' ? 'big' : 'small'].split('/')[3] +
          'px'
      }"
    />
    <span class="price">{{ price }}</span>
    <fa :icon="faInfoCircle" color="white" class="infoIcon" />
    <div class="thumbs">
      <img
        v-for="thumb in thumbs"
        :key="thumb.id"
        :data-src="thumb.src"
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
    }
  },
  mounted() {
    const image = document.querySelector(`#item${this.id}`);
    const observer = new IntersectionObserver(function(entry) {
      entry.forEach(item => {
        if (item.isIntersecting) {
          let picture = item.target.children[0];
          const datasrcsetPicture = picture.getAttribute("data-srcset");
          let thumb = item.target.children[3].children[0];
          const datasrcThumb = thumb.getAttribute("data-src");
          picture.setAttribute("srcset", datasrcsetPicture);
          thumb.setAttribute("src", datasrcThumb);
          this.unobserve(item.target);
        }
      });
    });

    observer.observe(image);
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
