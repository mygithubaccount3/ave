<template>
    <div class="brand_hero">
        <div>
            <img src="https://picsum.photos/id/214/500/350" alt="">
            <img src="https://picsum.photos/id/214/500/400" alt="">
            <h2>Our values, vision and strategy</h2>
            <p>The above image would be a great place for an advertising video</p>
            <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Rem quae neque, eveniet ipsam dolorum illum impedit deleniti incidunt
                inventore ab adipisci suscipit placeat tempora provident! Dicta unde, dignissimos rem aut magnam ex nobis! Eum perspiciatis
                voluptates vel itaque expedita ipsum, illo qui. Ullam veritatis voluptate repellendus quibusdam earum expedita maxime enim amet
                aperiam id quo numquam, iure facilis error neque sit deserunt dolorum!</p>
        </div>
        <div>
            <h2>Hand designed clothing</h2>
            <p>Established in 2013, Avenue Fashion sed dictum elit vel sapien luctus eras</p>
            <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Rem quae neque, eveniet ipsam dolorum illum impedit deleniti incidunt
                inventore ab adipisci suscipit placeat tempora provident! Dicta unde, dignissimos rem aut magnam ex nobis! Eum perspiciatis
                voluptates vel itaque expedita ipsum, illo qui. Ullam veritatis voluptate repellendus quibusdam earum expedita maxime enim amet
                aperiam id quo numquam, iure facilis error neque sit deserunt dolorum!</p>
                <img src="https://picsum.photos/id/214/500/350" alt="">
            <h2>Ethical trading</h2>
            <p>We oversee the working conditions of the people in the supply chain</p>
            <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Rem quae neque, eveniet ipsam dolorum illum impedit deleniti incidunt
                inventore ab adipisci suscipit placeat tempora provident! Dicta unde, dignissimos rem aut magnam ex nobis! Eum perspiciatis
                voluptates vel itaque expedita ipsum, illo qui. Ullam veritatis voluptate repellendus quibusdam earum expedita maxime enim amet
                aperiam id quo numquam, iure facilis error neque sit deserunt dolorum!</p>
            <div>
                <img src="" alt="">
                <img src="" alt="">
                <img src="" alt="">
            </div>
        </div>
    </div>
</template>

<script>
export default {

}
</script>

<style lang="scss" scoped>
    .brand_hero {
        display: flex;
        justify-content: space-between;
        margin: auto;
        padding-top: 64px;
        width: 57%;

        & > div {
            display: flex;
            flex-direction: column;
            width: 49%;

            &:last-of-type {
                padding-top: 29px;
                padding-left: 3px;
            }

            & > h2 {
                font-size: 1.24rem;
                margin-top: 25px;
                margin-bottom: 20px;
                text-transform: uppercase;
            }

            & > p:first-of-type {
                margin-bottom: 7px;
                text-transform: uppercase;
            }
        }
    }
</style>