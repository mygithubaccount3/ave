<template>
  <div class="items">
      <div>
        <b-nav>
            <b-nav-item active>Popular</b-nav-item>
            <b-nav-item>New arrivals</b-nav-item>
            <b-nav-item>Best sellers</b-nav-item>
            <b-nav-item>Special offers</b-nav-item>
            <b-nav-item>Coming soon</b-nav-item>
        </b-nav>
    </div>
    <div class="items_content">
        <div class="items_wrapper">
            <Item
                imgSrc="https://picsum.photos/420/500/?image=314"
                price="20.47$"
            />
            <Item
                imgSrc="https://picsum.photos/420/500/?image=317"
                price="20.47$"
            />
            <Item
                imgSrc="https://picsum.photos/870/704/?image=323"
                price="20.47$"
            />
        </div>
        <div class="items_wrapper">
            <Item
                imgSrc="https://picsum.photos/420/500/?image=350"
                price="20.47$"
            />
            <Item
                imgSrc="https://picsum.photos/420/500/?image=352"
                price="20.47$"
            />
            <Item
                imgSrc="https://picsum.photos/870/704/?image=327"
                price="20.47$"
            />
        </div>
    </div>
  </div>
</template>

<script>
export default {

}
</script>

<style>
    .items {
        border-top: 1px solid #eeeeee;
        margin: auto;
        margin-top: 62px;
        margin-bottom: 62px;
        padding-top: 54px;
        padding-bottom: 62px;
        width: 80%;
    }

    .items_content {
        display: flex;
        flex-wrap: wrap;
        justify-content: space-between;
    }

    .items_wrapper {
        display:flex;
        flex-wrap: wrap;
        justify-content: space-between;
        width: 49%
    }

    .items_wrapper:last-of-type .item:last-of-type {
        order: -1;
    }

    .items a {
        font-weight: bold;
        line-height: 20px;
        color: #727272;
        font-family: Montserrat, sans-serif;
        font-size: 13px;
        padding: 0;
        text-align: left;
        text-transform: uppercase;
    }

    .items a:hover {
        color: #00c8c8;
    }

    .items .nav {
        margin-bottom: 61px;
    }

    img {
        width: 100%;
        height: auto;
    }
</style>