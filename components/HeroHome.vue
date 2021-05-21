<template>
    <div>
    <b-carousel
      id="carousel-1"
      :interval="4000"
      :fade="true"
      controls
      indicators
      background="#ababab"
      style="text-shadow: 1px 1px 2px #333;"
    >
      <b-carousel-slide img-src="https://picsum.photos/2053/920/?image=275">
        <div style="display:flex;flex-direction:column;align-items:flex-end">
            <h1>{{ title }}</h1>
            <nuxt-link to="/men">{{ linkTitle }}</nuxt-link>
        </div>
        <!-- <div class="heroHome_wrapper">
            
        </div> -->
      </b-carousel-slide>

      <b-carousel-slide img-src="https://picsum.photos/2053/920/?image=280">
        <div style="display:flex;flex-direction:column;align-items:flex-end">
            <h1>{{ title }}</h1>
            <nuxt-link to="/women">{{ linkTitle }}</nuxt-link>
        </div>
        <!-- <div class="heroHome_wrapper">
            
        </div> -->
      </b-carousel-slide>
    </b-carousel>
  </div>
</template>

<script>
export default {
    name: 'HeroHome',
    props: {
        title: {
            type: String
        },
        linkTitle: {
            type: String,
            required: true
        }
    }

}
</script>

<style scoped>
    .heroHome_wrapper {
        background-image: url('https://via.placeholder.com/1920x1080/f8f8f8/f8f8f8/?text=');
        background-size: 100% auto;
        display: flex;
        flex-direction: column;
        /* padding: 100px; */
        padding: 30px;


        position: relative;
        top: 0;
        right: 0;
        left: 0;
        z-index: -999999;
    }
    h1 {
        color: #575153;
        font-family: Montserrat, sans-serif;
        font-size: 450px;
        font-weight: 700;
        text-align: center;
        text-transform: uppercase;
        letter-spacing: 22.5px;
        line-height: normal;
        user-select: none;
    }

    @media screen and (min-width: 767px) and (max-width: 1100px) {
        h1 {
            font-size: 200px;
        }
    }

    a {
        align-self: flex-end;
        display: inline-flex;
        border: 2px solid #737373;
        font-family: Montserrat, sans-serif;
        width: 342px;
        height: 59px;
        justify-content: center;
        align-items: center;
        color: #454647;
        font-size: 16px;
        font-weight: 400;
        text-align: center;
        text-transform: uppercase;
        letter-spacing: 3.2px;
    }

    a:hover {
        background-color: #00c8c8;
        border: none;
        color: #f8f8f8;
        text-decoration: none;
    }

    @media screen and (max-width: 767px) {
        h1 {
            font-size: 100px;
        }

        div {
            padding: 9px;
        }
    }
</style>