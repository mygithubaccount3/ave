<template>
  <div>
  <b-navbar toggleable="lg" :style="this.$route.path == '/' ? 'background-color: transparent' : 'background-color: #f8f8f8'">
    <b-navbar-brand href="#"><slot name="title"></slot></b-navbar-brand>

    <b-navbar-toggle target="nav-collapse">
        <template #default="{ expanded }">
        <b-icon v-if="expanded" icon="chevron-bar-up"></b-icon>
        <b-icon v-else icon="chevron-bar-down"></b-icon>
        <!-- <font-awesome-icon v-if="expanded" :icon="['fas', 'chevron-up']" style="color: #989898"/>
        <font-awesome-icon v-else :icon="['fas', 'chevron-down']" style="color: #989898"/> -->
      </template>
    </b-navbar-toggle>

    <b-collapse id="nav-collapse" is-nav>
      <!-- <b-navbar-nav>
        <b-nav-item href="#"><span>Avenue</span> Fashion</b-nav-item>
      </b-navbar-nav> -->

      <!-- Right aligned nav items -->
      <b-navbar-nav class="ml-auto">
          <b-nav-item-dropdown text="Mens" left>
          <b-dropdown-item href="#">EN</b-dropdown-item>
          <b-dropdown-item href="#">ES</b-dropdown-item>
          <b-dropdown-item href="#">RU</b-dropdown-item>
          <b-dropdown-item href="#">FA</b-dropdown-item>
        </b-nav-item-dropdown>
        <b-nav-item-dropdown text="Womens" right>
          <b-dropdown-item href="#">EN</b-dropdown-item>
          <b-dropdown-item href="#">ES</b-dropdown-item>
          <b-dropdown-item href="#">RU</b-dropdown-item>
          <b-dropdown-item href="#">FA</b-dropdown-item>
        </b-nav-item-dropdown>
        <b-nav-item href="/brand">The brand</b-nav-item>
        <b-nav-item href="/stores">Local Stores</b-nav-item>
        <b-nav-item-dropdown text="Look Book" right>
            <div class="mob">
                <b-dropdown-item
                    @click.stop
                    v-for="cat in [
                                    {
                                        id: 1,
                                        title: 'first sub cat',
                                        items: [
                                                {   
                                                    id: 1,
                                                    title: 'first item'
                                                },
                                                {
                                                    id: 2,
                                                    title: 'second item'
                                                }
                                               ]
                                    },
                                    {
                                        id: 2,
                                        title: 'second sub cat',
                                        items: [
                                                {
                                                    id: 1,
                                                    title: 'first item'
                                                },
                                                {
                                                    id: 2,
                                                    title: 'second item'
                                                }
                                               ]
                                    }
                                ]" 
                    :key="cat.id"
                    href="#">
                        <!-- <b-nav-item-dropdown v-if="cat.items.length > 0" :text="cat.title" right>
                            <b-dropdown-item v-for="i in cat.items" :key="i.id" href="#">
                                {{ i.title }}
                            </b-dropdown-item>
                        </b-nav-item-dropdown> -->
                        <div>
                            {{ cat.title }}
                        </div>
                </b-dropdown-item>
          <!-- <b-dropdown-item href="#">ES</b-dropdown-item>
          <b-dropdown-item href="#">RU</b-dropdown-item>
          <b-dropdown-item href="#">FA</b-dropdown-item> -->
            </div>
          <SubNav :promo="['https://images.unsplash.com/photo-1621336831096-0ef225705c56?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80']" :subcategories="[{id: 1, title: 'first sub cat', items: [{id: 1, title: 'first item'}, {id: 2, title: 'second item'}]}, {id: 2, title: 'second sub cat', items: [{id: 1, title: 'first item'}, {id: 2, title: 'second item'}]}]" />

        </b-nav-item-dropdown>
        <b-nav-form>
          <b-form-input size="sm" placeholder="Search..."></b-form-input>
          <b-button size="sm" class="my-2 my-sm-0" type="submit">
              <!-- <fa :icon="['fas', 'search']" style="color: #989898"/> -->
              <fa icon="search" style="color: #989898"/>
            </b-button>
        </b-nav-form>
      </b-navbar-nav>
    </b-collapse>
  </b-navbar>
</div>
</template>

<script>
import { BIcon, BIconChevronBarDown, BIconChevronBarUp } from 'bootstrap-vue'

export default {
    props: {
        // title: {
        //     type: String
        // }
    },
    components: {
        BIcon,
        BIconChevronBarDown,
        BIconChevronBarUp
    }

}
</script>

<style>
    .mr-sm-2.form-control.form-control-sm:placeholder-shown{
        /* Style for "Search.." */
        color: #989898;
        font-family: Montserrat, sans-serif;
        font-size: 13px;
        font-weight: 300;
        line-height: 27px;
        text-align: left;
    }

    .nav-link.dropdown-toggle {
        display: flex;
        flex-direction: column;
        align-items: flex-start;
    }

    .nav-link.dropdown-toggle::after {
        margin-top: 11px;
    }

    @media screen and (max-width: 767px) {
        .nav-link.dropdown-toggle {
            flex-direction: row;
            align-items: center;
        }

        .nav-link.dropdown-toggle::after {
            margin-top: 0;
        }
    }

    .navbar {
        margin-top: 45px;
        padding-top: 21px;
        padding-right: 6.6%;
        padding-bottom: 28px;
        padding-left: 6.6%;
    }

    .navbar-nav {
        padding-top: 12px;
    }

    .navbar-brand {
        /* Style for "avenue fas" */
        color: #222222;
        font-family: Montserrat, sans-serif;
        font-size: 24px;
        font-weight: 400;
        text-transform: uppercase;
        
        /* Text style for "fashion" */
      
        letter-spacing: 1.2px;
    }

    .navbar-brand span {
        color: #222222;
        font-size: 24px;
        font-family: Montserrat, sans-serif;
        font-weight: 700;
        letter-spacing: 1.2px;
        text-transform: uppercase;
    }

    @media screen and (max-width: 767px) {
        .navbar-collapse {
            background-color: #efefef;
            padding: 20px;
        }
    }

    .navbar .nav-link span, .navbar .navbar-nav .nav-link {
        /* Style for "mens" */
        /* width: 595px;
        height: 11px; */
        color: #222222;
        font-family: Montserrat;
        font-size: 13px;
        font-weight: bold;
        font-style: normal;
        letter-spacing: normal;
        line-height: 20px;
        text-transform: uppercase;
    }

    .navbar .nav-item:hover span, .navbar .nav-item:hover .navbar .nav-item:nth-of-type(3) a, .navbar-light .navbar-nav .nav-link:hover, .navbar-nav .show>.nav-link span {
        color: #00c8c8;
        line-height: normal;
    }

    .navbar .nav-item:hover .nav-link.dropdown-toggle::after, .navbar-nav .show>.nav-link::after {
        border-top: 0.3em solid#00c8c8;
    }

    @media screen and (max-width: 767px) {
        .navbar .nav-item:hover span {
            line-height: 20px;
        }
    }

    .navbar .form-control, .navbar .btn {
        border-radius: 0;
    }

    .navbar .form-control {
        border-right: none;
    }

    .navbar .btn {
        background-color: white;
        border: 1px solid #ced4da;
        border-left: none;
    }

    .nav-item {
        margin-right: 40px;
    }

    .navbar-nav .nav-item:nth-of-type(3) {
        align-self: flex-start;
    }

    .form-control:focus .btn-secondary:not(:disabled):not(.disabled):active {
        border-color: #80bdff;
        box-shadow: 0 0 0 0.2rem rgb(0 123 255 / 25%);
    }

    @media screen and (min-width: 991px) and (max-width: 1113px) {
        .nav-item {
            margin-right: 0;
        }
    }

    li.form-inline {
        align-items: flex-start;
    }

    @media screen and (max-width: 991px) {
        li.form-inline {
            margin-top: 35px;
        }
    }

    li.form-inline .form-inline {
        flex-wrap: nowrap;
    }

    .dropdown-menu.dropdown-menu-right.show {
        width: 467px;
        /* height: 527px; */
        box-shadow: 0 17px 24px rgba(0, 0, 0, 0.14);
        background-color: #f8f8f8;
        /* width: 426%; */
    }

    @media screen and (max-width: 767px) {
        .dropdown-menu.dropdown-menu-right.show {
            box-shadow: none;
            background-color: #efefef;
            width: 248px;
        }

        .mob {
            display: block;
        }
    }

    @media screen and (min-width: 768px) {
        .mob {
            display: none;
        }
    }

    .navbar.navbar-light.navbar-expand-lg {
        position: absolute;
        z-index: 9999;
        right: 0;
        left: 0;
        background-color: transparent;
    }
</style>
