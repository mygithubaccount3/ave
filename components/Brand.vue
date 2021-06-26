<template>
    <div>
        <h1>The brand</h1>
        <p>Company slogan goes here</p>
    </div>
</template>

<script>
export default {

}
</script>

<style lang="scss" scoped>
    div {
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
