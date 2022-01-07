<template>
  <div class="stores">
    <Brand title="Local Stores" description="Find a store near you" />
    <div class="stores-list">
      <div v-for="store in stores" :key="store.id">
        <h2>{{ store.city }}</h2>
        <p>{{ store.address }}</p>
        <p>{{ store.description }}</p>
        <button @click="showDetails(store.id)">View Details</button>
      </div>
    </div>
    <div class="store-info">
      <div id="map" ref="map">
        <img
          :src="
            selectedStore
              ? require('@/static/' + selectedStore.city.toLowerCase() + '.png?webp')
              : require('@/static/' + stores[0].city.toLowerCase() + '.png?webp')
          "
          alt=""
        />
      </div>
      <div>
        <div>
          <h2>{{ selectedStore ? selectedStore.city : stores[0].city }}</h2>
          <p>
            <a
              :href="
                selectedStore ? selectedStore.addressURL : stores[0].addressURL
              "
              >{{
                selectedStore ? selectedStore.address : stores[0].address
              }}</a
            >
          </p>
          <p>
            {{
              selectedStore ? selectedStore.description : stores[0].description
            }}
          </p>
          <p>
            <a
              :href="
                selectedStore ? selectedStore.addressURL : stores[0].addressURL
              "
              >{{
                selectedStore ? selectedStore.address : stores[0].address
              }}</a
            >
          </p>
        </div>
        <div>
          <p>
            <a
              :href="
                'tel:' + (selectedStore ? selectedStore.phone : stores[0].phone)
              "
              >{{ selectedStore ? selectedStore.phone : stores[0].phone }}</a
            >
          </p>
          <p>
            <a
              :href="selectedStore ? selectedStore.website : stores[0].website"
              >{{
                selectedStore ? selectedStore.website : stores[0].website
              }}</a
            >
          </p>
          <p>
            <a
              :href="
                'mailto:' +
                (selectedStore ? selectedStore.email : stores[0].email)
              "
              >{{ selectedStore ? selectedStore.email : stores[0].email }}</a
            >
          </p>
          <p>
            {{
              selectedStore
                ? selectedStore.workingHours
                : stores[0].workingHours
            }}
          </p>
          <div>
            <div
              v-for="social in selectedStore
                ? selectedStore.socials
                : stores[0].socials"
              :key="social.id"
            >
              <a :href="social.url">
                <fa
                  :icon="['fab', social.name]"
                  style="color: white; font-size: 20px; line-height: 26px"
                />
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  asyncData() {
    return {
      stores: [
        {
          id: 1,
          city: "London",
          address: "180-182 Regent street, London, W1B 5BT",
          addressURL: "https://goo.gl/maps/e9DUddeyb26vT5mr9",
          description:
            "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Excepturi, minima itaque voluptatibus harum quaerat, maxime mollitia fugiat eos dolorum recusandae illo magni odio quidem nam voluptas.",
          phone: "0123-456-789",
          website: "https://www.firststore.com",
          email: "support@firststore.com",
          workingHours:
            "Monday-Friday: 9am to 6pm Saturday: 10am to 6pm Sunday: 10am to 2pm",
          socials: [
            {
              name: "facebook-f",
              url: "https://facebook.com",
            },
            {
              name: "twitter",
              url: "https://twitter.com",
            },
            {
              name: "instagram-square",
              url: "https://instagram.com",
            },
            {
              name: "pinterest",
              url: "https://pinterest.com",
            },
          ],
        },
        {
          id: 2,
          city: "NY",
          address: "109 Columbus circle, New York, NY 10023",
          addressURL: "https://goo.gl/maps/8TNTHwgpma8LCzfs5",
          description:
            "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Excepturi, minima itaque voluptatibus harum quaerat, maxime mollitia fugiat eos dolorum recusandae illo magni odio quidem nam voluptas.",
          phone: "0123-456-789",
          website: "https://www.firststore.com",
          email: "support@firststore.com",
          workingHours:
            "Monday-Friday: 9am to 6pm Saturday: 10am to 6pm Sunday: 10am to 2pm",
          socials: [
            {
              name: "facebook-f",
              url: "https://facebook.com",
            },
            {
              name: "twitter",
              url: "https://twitter.com",
            },
            {
              name: "instagram-square",
              url: "https://instagram.com",
            },
            {
              name: "pinterest",
              url: "https://pinterest.com",
            },
          ],
        },
        {
          id: 3,
          city: "Paris",
          address: "2133 Rue Saint-Honore, 75001 Paris",
          addressURL: "https://goo.gl/maps/M1hix8gd4jic6UNk9",
          description:
            "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Excepturi, minima itaque voluptatibus harum quaerat, maxime mollitia fugiat eos dolorum recusandae illo magni odio quidem nam voluptas.",
          phone: "0123-456-789",
          website: "https://www.firststore.com",
          email: "support@firststore.com",
          workingHours:
            "Monday-Friday: 9am to 6pm Saturday: 10am to 6pm Sunday: 10am to 2pm",
          socials: [
            {
              name: "facebook-f",
              url: "https://facebook.com",
            },
            {
              name: "twitter",
              url: "https://twitter.com",
            },
            {
              name: "instagram-square",
              url: "https://instagram.com",
            },
            {
              name: "pinterest",
              url: "https://pinterest.com",
            },
          ],
        },
      ],
    };
  },
  data() {
    return {
      selectedStore: null,
    };
  },
  methods: {
    showDetails(storeID) {
      const selectedStore = this.stores.find((el) => el.id === storeID);
      this.selectedStore = selectedStore;
      window.scrollTo({
        top: this.$refs.map.offsetTop - 83,
        behavior: "smooth",
      });
    },
  },
};
</script>

<style lang="scss" scoped>
#map {
  & > img {
    width: 100%;
    height: auto;
  }
}

.stores {
  background-color: #f8f8f8;

  &-list {
    padding: 15px;
    padding-top: 0;

    & > div {
      margin-bottom: 50px;
      text-align: center;

      & > h2,
      & > p:first-of-type {
        font-size: 1rem;
        overflow: hidden;
        text-overflow: ellipsis;
        white-space: nowrap;
        text-transform: uppercase;
      }

      & > p:first-of-type {
        font-size: 0.9rem;
        margin-bottom: 8px;
      }

      & > p:last-of-type {
        line-height: 1.4;
        margin-bottom: 27px;
      }

      & > h2 {
        letter-spacing: 3px;
        margin-bottom: 21px;
      }

      & button {
        margin: auto;
      }
    }
  }
}

.store-info {
  & > div {
    & > div {
      & > p {
        & > a {
          color: #000;
        }
      }
    }
    &:last-of-type {
      //   align-items: baseline;
      //   display: flex;
      //   justify-content: space-between;
      padding: 15px;
      //   width: 100%;

      //   flex-direction: column;

      & > div:last-of-type > div {
        display: flex;
        justify-content: space-between;
        width: 50%;

        & > div {
          display: flex;
          width: 30px;
          height: 30px;
          border-radius: 15px;
          background: black;
          align-items: center;
          justify-content: center;
          transition: background-color 0.3s;

          &:hover {
            background: white;
          }

          & svg {
            transition: color 0.3s;
          }

          &:hover svg {
            color: black !important;
          }
        }
      }
    }
  }
}

button {
  background-color: #f8f8f8;
  border-radius: 3px;
  font-weight: bold;
  letter-spacing: 3.8px;
  min-width: 190px;
  padding: 15px;
  text-transform: uppercase;
  width: 56%;

  &:hover {
    background-color: #00c8c8;
    color: #f8f8f8;
  }
}

@media screen and (min-width: 480px) {
  .store-info {
    & > div:last-of-type {
      & > div:last-of-type > div {
        width: 30%;
      }
    }
  }

  .stores-list {
    display: flex;
    justify-content: space-between;
    flex-wrap: wrap;
    padding: 15px;
    padding-top: 50px;

    & > div {
      width: 45%;

      &:last-of-type {
        width: 100%;

        & button {
          margin: auto;
        }
      }
    }
  }
}

@media screen and (min-width: 768px) {
    .stores {
        padding-top: 83px;
    }
}

@media screen and (min-width: 1500px) {
  #map {
    width: 151%;
  }

  .store-info {
    display: flex;

    & > div {
      &:last-of-type {
        padding-top: 36px;
      }
    }
  }

  .stores {
    padding-top: 157px;

    &-list {
      margin: auto;
      margin-top: 10px;
      margin-bottom: 47px;
      width: 80%;

      & > div {
        display: flex;
        flex-direction: column;
        align-items: flex-start;
        margin-bottom: 0;
        text-align: left;
        width: 32%;

        &:last-of-type {
          width: 32%;
        }

        & > button,
        &:last-of-type > button {
          margin-left: 0;
        }

        & > button {
          width: 59%;
        }
      }
    }
  }
}

@media screen and (min-width: 2050px) {
  .stores-list {
    width: 58.6%;
  }
}
</style>
