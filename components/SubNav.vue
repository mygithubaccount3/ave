<template>
    <div class="subnav" style="padding: 30px">
        <div style="display: flex; margin-bottom: 62px">
            <div class="subcat" v-for="cat in subcategories" :key="cat.id">
                <p>{{ cat.title }}</p>
                <ul>
                    <li v-for="item in cat.items" :key="item.id">
                        <nuxt-link to="#">{{ item.title }}</nuxt-link>
                    </li>
                </ul>
            </div>
        </div>
        <div v-if="promo">
            <img style="width: 100%; height: auto" v-for="url in promo" :key="url" :src="url" alt="">
        </div>
    </div>
  
</template>

<script>
export default {
    name: 'SubNav',
    props: {
        promo: {
            type: Array,
            default: []
        },
        subcategories: {
            type: Array,
            required: true
        }
    }
}
</script>

<style scoped>
    p {
        color: #575153;
        font-family: Montserrat, sans-serif;
        font-size: 12px;
        font-weight: bold;
        line-height: 20px;
        text-align: left;
        text-transform: uppercase;
    }

    ul {
        list-style-type: none;
        padding: 0;
    }

    li {
        font-family: Montserrat, sans-serif;
        font-size: 14px;
        font-weight: 300;
        line-height: 30px;
        text-align: left;
    }

    a {
        color: #727272;
    }

    .subcat {
        margin-right: 86px
    }

    @media screen and (max-width: 767px) {
        .subcat {
            margin-right: 56px;
            width: 50%;
        }

        .subnav {
            display: none;
        }
    }

    @media screen and (min-width: 768px) {
        .subnav {
            display: block;
        }
    }
</style>
