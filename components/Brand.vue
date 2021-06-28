<template>
    <div class="wrapper">
        <div>Ave</div>
        <h1>{{ title }}</h1>
        <p>{{ description }}</p>
    </div>
</template>

<script>
export default {
    props: {
        title: {
            type: String,
            default: 'The brand'
        },
        description: {
            type: String,
            default: 'Company slogan goes here'
        }
    }
}
</script>

<style lang="scss" scoped>
    .wrapper {
        background-image: url('https://picsum.photos/id/214/2000/1000');
        background-size: cover;
        text-align: center;
        padding-top: 155px;
        padding-bottom: 139px;
        position: relative;

        &::after {
            background-color: rgba(0, 0, 0, 0.5);
            content: "";
            position: absolute;
            top: 0;
            right: 0;
            bottom: 0;
            left: 0;
            z-index: 10;
        }

        & > div {
            color: white;
            font-size: 24rem;
            font-weight: bold;
            letter-spacing: 14rem;
            margin-right: -14rem;
            position: absolute;
            bottom: 0;
            left: calc(34% - 14rem);
            line-height: 0.8;
            opacity: 0.5;
            text-transform: uppercase;
        }
    }

    h1, p {
        color: white;
        position: relative;
        text-transform: uppercase;
        z-index: 100;
    }

    h1 {
        font-size: 3rem;
        letter-spacing: 5.5px;
        margin-bottom: 26px;
        padding-left: 7px;
    }

    p {
        font-size: 2.3rem;
    }
</style>
