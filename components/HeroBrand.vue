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
        flex-direction: column;

        & > div {
            display: flex;
            flex-direction: column;
            width: 100%;

            &:first-of-type, &:last-of-type {
                h2, p {
                    padding-right: 5px;
                    padding-left: 5px;
                }
            }

            &:last-of-type {
                padding-top: 29px;
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

            & > img:last-of-type {
                order: 1;
            }
        }
    }

    @media screen and (min-width: 480px) {
        .brand_hero {
            flex-direction: row;
            flex-wrap: wrap;
            justify-content: space-between;

            & > div {
                width: 45%;

                &:first-of-type {
                    & :not(img) {
                        padding-left: 15px;
                    }
                }

                &:last-of-type {
                    & :not(img) {
                        padding-right: 15px;
                    }
                }
            }
        }

    }

    @media screen and (min-width: 768px) {
        .brand_hero {
            justify-content: space-between;

            & > div {
                width: 49%;
            }
        }
    }

    // @media screen and (min-width: 1500px) {
        
    // }

    @media screen and (min-width: 2050px) {
        .brand_hero {
            margin: auto;
            width: 57%;
        }
    }

    // @media screen and (min-width: 480px) {

    // }

    // @media screen and (min-width: 768px) {

    // }

    // @media screen and (min-width: 1500px) {

    // }
</style>
