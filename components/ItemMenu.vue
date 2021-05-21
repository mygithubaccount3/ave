<template>
    <div class="menu">
        <h1 class="title">{{ title }}</h1>
        <p class="description">{{ description }}</p>
        <div class="actions">
            <div><fa :icon="faShoppingCart" color="white"/></div>
            <div><fa icon="heart" color="white"/></div>
            <div><fa :icon="faCompressAlt" color="white"/></div>
        </div>
    </div>
</template>

<script>
import { faCompressAlt, faShoppingCart } from '@fortawesome/free-solid-svg-icons'
export default {
    name: 'ItemMenu',
    props: {
        title: {
            type: String,
            required: true
        },
        description: {
            type: String,
            required: true
        }
    },
    computed: {
        faCompressAlt () {
        return faCompressAlt
        },
        faShoppingCart () {
        return faShoppingCart
        }
    },
}
</script>

<style>
    .actions {
        display: flex;
        justify-content: space-between;
        width: 120px;
        margin: auto;
    }

    .actions div {
        background-color: #727272;
        width: 30px;
        height: 30px;
        border-radius: 15px;
        display: flex;
        justify-content: center;
        align-items: center;
    }

    .actions div:hover {
        background-color: #00c8c8;
    }

    .item .menu {
        background-color: white;
        box-shadow: 0 0 24px rgba(0, 0, 0, 0.14);
        position: absolute;
        display: none;
        flex-direction: column;
        align-items: center;
        left: 0;
        right: 0;
        padding-top: 21px;
        padding-bottom: 17px;
        padding-left: 55px;
        padding-right: 55px;
        z-index: 999999;
    }

    .menu .title {
        color: #727272;
        font-family: Montserrat;
        font-size: 13px;
        font-weight: bold;
        line-height: 20px;
        text-align: center;
        text-transform: uppercase;
    }

    .menu .description {
        color: #8e8c8c;
        font-family: Roboto;
        font-size: 15px;
        line-height: normal;
        text-align: center;
        /* Text style for "Classic ca" */
        line-height: 22px;
        /* Text style for "A hard-wea" */
        line-height: 20px;
    }

</style>