<template>
  <div>
      <h1>{{ title }}</h1>
      <nuxt-link to="/men">{{ linkTitle }}</nuxt-link>
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
    div {
        background-image: url('https://via.placeholder.com/1920x1080/f8f8f8/f8f8f8/?text=');
        background-size: 100% auto;
        display: flex;
        flex-direction: column;
        /* padding: 100px; */
        padding: 30px;
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