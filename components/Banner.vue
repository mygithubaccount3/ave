<template>
  <div class="banner" :style="'background-color:' + bgColor + ';width:' + width + ';height: auto;' + otherStyle">
      <slot></slot>
  </div>
</template>

<script>
export default {
    name: 'Banner',
    props: {
        bgColor: {
            type: String,
            default: 'white'
        },
        width: {
            type: String,
            default: '100%'
        },
        otherStyle: {
            type: String
        }
    }

}
</script>

<style scoped>
    .banner {
        padding-top: 62px;
        padding-right: 58px;
        padding-bottom: 64px;
        padding-left: 58px;
    }

    @media screen and (max-width: 768px) {
        .banner {
            padding: 0;
            width: 100% !important;
        }
    }
</style>
