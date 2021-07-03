<template>
    <div>
        <Brand title="Our lookbook" description="Latest posts - mens & womens" />
        <div class="latest-lookbook-hero">
            <b-card no-body>
                <b-tabs pills card>
                <b-tab title="Tab 1" active><b-card-text>Tab contents 1</b-card-text></b-tab>
                <b-tab title="Tab 2"><b-card-text>Tab contents 2</b-card-text></b-tab>
                </b-tabs>
            </b-card>
        </div>
    </div>
</template>

<script>
export default {

}
</script>

<style lang="scss">
    .latest-lookbook-hero {
        border-top: 1px solid lightgrey;
        max-width: 80%;
        margin: auto;
        padding-top: 50px;
        margin-top: 50px;
    }

    .card {
        border: none;
    }

    .card-header {
        background-color: #fff;
        border-bottom: none;
    }
</style>