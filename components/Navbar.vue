<template>
  <nav>
    <ul :class="'menu' + (isMobileMenuOpened ? ' active' : '')">
      <li
        v-for="item in menuItems"
        :key="item.id"
        :class="item.hasOwnProperty('subitems') ? 'dropdown' : 'menu__item'"
      >
        <a class="menu__link" :href="item.link">{{ item.title }}</a>
        <ul class="dropdown_menu dropdown_menu--animated">
          <li
            v-for="subitem in item.subitems"
            :key="subitem.id"
            :class="'subitem' + subitem.id"
          >
            <a :href="subitem.link">{{ subitem.title }}</a>
          </li>
        </ul>
      </li>
    </ul>
    <div
      :class="'hamburger' + (isMobileMenuOpened ? ' active' : '')"
      @click="mobileMenu"
    >
      <span class="bar"></span>
      <span class="bar"></span>
      <span class="bar"></span>
    </div>
  </nav>
</template>

<script>
import { BIcon, BIconChevronBarDown, BIconChevronBarUp } from "bootstrap-vue";

export default {
  props: {
    // title: {
    //     type: String
    // }
  },
  data() {
    return {
      isMobileMenuOpened: false,
      menuItems: [
        {
          id: 0,
          title: "Mens",
          link: "/ave/mens",
          subitems: [
            {
              id: 1,
              title: "Title 1",
              link: "/ave/1",
            },
            {
              id: 2,
              title: "Title 2",
              link: "/ave/2",
            },
            {
              id: 3,
              title: "Title 3",
              link: "/ave/3",
            },
          ],
        },
        {
          id: 4,
          title: "Womens",
          link: "/ave/womens",
          subitems: [
            {
              id: 5,
              title: "Title 4",
              link: "/ave/4",
            },
            {
              id: 6,
              title: "Title 5",
              link: "/ave/5",
            },
            {
              id: 7,
              title: "Title 6",
              link: "/ave/6",
            },
          ],
        },
        {
          id: 8,
          title: "The brand",
          link: "/ave/brand",
        },
        {
          id: 9,
          title: "Local stores",
          link: "/ave/stores",
        },
        {
          id: 10,
          title: "Look book",
          link: "/ave/lookbook",
          subitems: [
            {
              id: 11,
              title: "Title 7",
              link: "/ave/7",
            },
            {
              id: 12,
              title: "Title 8",
              link: "/ave/8",
            },
            {
              id: 13,
              title: "Title 9",
              link: "/ave/9",
            },
          ],
        },
      ],
    };
  },
  components: {
    BIcon,
    BIconChevronBarDown,
    BIconChevronBarUp,
  },
  methods: {
    mobileMenu: function () {
      this.isMobileMenuOpened = !this.isMobileMenuOpened;
      document.querySelector("body").style.overflowY = this.isMobileMenuOpened
        ? "hidden"
        : "auto";
    },
  },
};
</script>

<style lang="scss" scoped>
nav {
  width: 100%;
  display: flex;
  justify-content: center;
  position: fixed;
  z-index: 999;
  background: #fff;
}

.menu {
  display: flex;
  justify-content: center;
  list-style-type: none;
  padding-left: 0;

  & > li {
    padding: 20px 39px;
    color: black;
    background: white;
    position: relative;
    font-size: 18px;
    perspective: 1000px;
    z-index: 100;

    & > a {
      color: black;
      text-decoration: none;

      &:hover {
        color: #00c8c8;
      }
    }
  }
}

.dropdown {
  display: flex;
  justify-content: center;
  align-items: center;

  &:hover .dropdown_menu--animated {
    display: block;
  }

  .dropdown_menu--animated {
    display: none;

    & > li {
      display: block;
      opacity: 1;
    }
  }

  &_menu {
    position: absolute;
    top: 100%;
    left: 0;
    width: 100%;
    perspective: 1000px;
    z-index: -1;
    animation: growDown 300ms ease-in-out forwards;
    transform-origin: top center;
    padding: 0;
    text-align: center;

    & > li {
      display: none;
      background-color: white;
      padding: 10px 20px;
      font-size: 16px;
      opacity: 0;

      & > a {
        color: black;

        &:hover {
          color: #00c8c8;
          text-decoration: none;
        }
      }
    }
  }
}

.hamburger {
  display: none;
}

.bar {
  display: block;
  width: 25px;
  height: 3px;
  margin: 5px auto;
  -webkit-transition: all 0.3s ease-in-out;
  transition: all 0.3s ease-in-out;
  background-color: #101010;
}

@media screen and (max-width: 768px) {
  .dropdown_menu {
    display: block !important;
    position: relative;
    top: 0;
  }

  .menu {
    position: fixed;
    left: -100%;
    top: 27px;
    flex-direction: column;
    align-items: flex-start;
    background-color: #fff;
    width: 100%;
    border-radius: 0;
    text-align: center;
    transition: .3s;
    box-shadow: 0 10px 27px rgba(0, 0, 0, 0.05);
    z-index: 999;
    padding: 0;
    justify-content: flex-start;
    height: 100%;

    & > li {
      padding-top: 5px;
      padding-bottom: 5px;
      flex-direction: column;
      align-items: flex-start;

      & > div {
        color: #00c8c8;
        text-align: left;
      }
    }
  }

  .menu.active {
    left: 0;
    overflow-y: scroll;
  }

  .hamburger {
    display: block;
    cursor: pointer;
  }

  .hamburger.active .bar:nth-child(2) {
    opacity: 0;
  }

  .hamburger.active .bar:nth-child(1) {
    transform: translateY(8px) rotate(45deg);
  }

  .hamburger.active .bar:nth-child(3) {
    transform: translateY(-8px) rotate(-45deg);
  }
}

@keyframes growDown {
  0% {
    transform: scaleY(0);
  }
  80% {
    transform: scaleY(1.1);
  }
  100% {
    transform: scaleY(1);
  }
}
</style>
