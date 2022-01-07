<template>
  <div class="lookbook">
    <img
      v-lazy="require('~assets' + imgSrc + '?webp').default"
      
      alt="lookbook image"
      width="237"
      height="437"
    />
    <div class="text">
      <h2 class="title">{{ title }}</h2>
      <p class="description">{{ description }}</p>
      <nuxt-link :to="'/lookbooks' + url">View now</nuxt-link>
    </div>
  </div>
</template>

<script>
export default {
  name: "Lookbook",
  props: {
    title: {
      type: String,
      required: true
    },
    description: {
      type: String,
      required: true
    },
    url: {
      type: String,
      required: true
    },
    imgSrc: {
      type: String,
      required: true
    }
  }
};
</script>

<style scoped>
.lookbook {
  align-items: center;
  background-color: #f8f8f8;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  padding-top: 43px;
  padding-right: 57px;
  padding-left: 39px;
  width: 32%;
}

.text {
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  margin-bottom: 85px;
  width: 290px;
}

.title {
  color: #575153;
  font-family: Montserrat, sans-serif;
  font-size: 48px;
  font-weight: 300;

  letter-spacing: normal;
  line-height: 54px;
  margin-bottom: 29px;
  text-align: right;
  text-transform: uppercase;

  /* letter-spacing: 2.4px;
        line-height: normal; */
}

.title span {
  font-weight: 700;
}

.description {
  color: #727272;
  font-family: Roboto, sans-serif;
  font-size: 15px;

  line-height: 22px;
  text-align: right;
  /* Text style for "Lorem ipsu" */

  line-height: normal;
  margin-bottom: 31px;
}

img {
  width: 41%;
}

a {
  color: #454647;
  font-family: Montserrat;
  font-size: 16px;

  text-align: center;
  text-transform: uppercase;
  /* Text style for "v, iew now" */

  letter-spacing: 3.2px;
  border: 2px solid #737373;
  background-color: transparent;
  padding-top: 23px;
  padding-right: 34px;
  padding-bottom: 24px;
  padding-left: 33px;
}

a:hover {
  background-color: #00c8c8;
  border-color: #00c8c8;
  color: #f8f8f8;
  text-decoration: none;
}

@media screen and (max-width: 768px) {
  .lookbook {
    flex-direction: column;
    padding: 5px;
    width: 100%;
  }

  .text {
    align-items: stretch;
  }
}
</style>
