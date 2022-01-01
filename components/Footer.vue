// footer menu separate component
// button is component
// responsive
// changing-image-size-in-markdown

<template>
  <div class="footer">
    <div>
      <div>
        <h2>Information</h2>
        <ul>
          <li>The brand</li>
          <li>Local stores</li>
          <li>Customer service</li>
          <li>Privacy & cookies</li>
          <li>Site map</li>
        </ul>
      </div>
      <div>
        <h2>Why buy from us</h2>
        <ul>
          <li>Shipping & returns</li>
          <li>Secure shopping</li>
          <li>Testimonials</li>
          <li>Award winning</li>
          <li>Ethical trading</li>
        </ul>
      </div>
      <div>
        <h2>Your account</h2>
        <ul>
          <li>Sign in</li>
          <li>Register</li>
          <li>View cart</li>
          <li>View your lookbooks</li>
          <li>Track an order</li>
          <li>Update information</li>
        </ul>
      </div>
      <div>
        <h2>Lookbook</h2>
        <ul>
          <li>Latest posts</li>
          <li>Men's lookbook</li>
          <li>Women's lookbook</li>
          <li>Lookbooks RSS feed</li>
          <li>View your lookbook</li>
          <li>Delete your lookbook</li>
        </ul>
      </div>
      <div>
        <h2>Contact details</h2>
        <ul style="width: 273px">
          <li>Head Office: Avenue Fashion, 180-182 Regent Street, London.</li>
          <li>Telephone: 0123-456-789</li>
          <li>Email: support@yourwebsite.com</li>
        </ul>
      </div>
    </div>
    <div class="banners">
      <Banner bgColor="#333333;" width="48.7%">
        <h2>award winner</h2>
        <p>fashion awards 2016</p>
      </Banner>
      <Banner
        bgColor="#00c8c8;"
        width="48.7%"
        otherStyle="display: flex; justify-content: space-around; align-items: center"
      >
        <div>
          <fa
            :icon="['fab', 'facebook-f']"
            style="color: white; font-size: 36px; line-height: 48px"
          />
          <fa
            :icon="['fab', 'twitter']"
            style="color: white; font-size: 36px; line-height: 48px"
          />
          <fa
            :icon="['fab', 'instagram-square']"
            style="color: white; font-size: 36px; line-height: 48px"
          />
          <fa
            :icon="['fab', 'pinterest']"
            style="color: white; font-size: 36px; line-height: 48px"
          />
        </div>
      </Banner>
    </div>
    <div class="copyright">
      <div>
        <span>© 2016 Avenue Fashion™</span
        ><span>Design by RobbyDesigns.com Dev by Loremipsum.com</span>
      </div>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped>
.footer {
  background-color: #f8f8f8;
  margin-top: 124px;
}

.footer > div:first-of-type {
  display: flex;
  justify-content: space-between;
  padding-top: 63px;
  margin: auto;
  margin-bottom: 62px;
  width: 60%;
}

.footer h2 {
  color: #575153;
  font-family: Montserrat;
  font-size: 13px;
  font-weight: bold;
  line-height: 20px;
  margin-bottom: 33px;
  text-align: left;
  text-transform: uppercase;
}

.footer ul {
  list-style-type: none;
  padding: 0;
}

.footer li {
  color: #727272;
  font-family: Montserrat;
  font-weight: 300;
  line-height: 30px;
}

.banners {
  display: flex;
  justify-content: space-between;
  margin: auto;
  margin-bottom: 60px;
  padding-bottom: 63px;
  width: 60%;
}

.banners h2 {
  color: #ffffff;
  font-family: Montserrat;
  font-size: 36px;

  line-height: 48px;
  margin-bottom: 5px;
  text-align: center;
  text-transform: uppercase;
  /* Text style for "award winn" */

  font-weight: 700;

  letter-spacing: 1.8px;
}

.banners p {
  color: #ffffff;
  font-family: Montserrat;
  font-size: 36px;
  line-height: 48px;
  font-weight: 300;
  letter-spacing: 1.8px;
  text-align: center;
  text-transform: uppercase;
}

.banner:last-child div {
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 65%;
}

.copyright {
  background-color: #333333;
  padding-top: 17px;
  padding-bottom: 17px;
}

.copyright div {
  display: flex;
  justify-content: space-between;
  margin: auto;
  width: 60%;
}

.copyright span {
  color: #fff;
  font-family: Montserrat;
  font-size: 13px;
  text-align: left;
  /* Text style for "" */
  line-height: 21px;
}

@media screen and (max-width: 768px) {
  .footer {
    margin-top: 0;
    padding-top: 50px;

    & > div:first-of-type {
      flex-direction: row;
      flex-wrap: wrap;
      justify-content: space-between;
      align-items: baseline;
      margin-bottom: 10px;
      padding: 15px;
      padding-top: 0;
      width: 100%;

      & > div {
        width: 50%;

        &:last-of-type {
          display: flex;
          flex-direction: column;
          align-items: center;
          width: 100%;
        }
      }
    }

    & > div:first-of-type > div,
    .footer > div:first-of-type > div > h2 {
      text-align: center;
    }

    & h2 {
      margin-bottom: 0.5rem;
      text-align: center;
    }
  }

  .banners {
    margin-bottom: 0;
    width: 100%;
  }

  .copyright div {
    width: 95%;
  }
}

@media screen and (max-width: 480px) {
  .footer {
    & > div {
      &:first-of-type {
        align-items: center;
        flex-direction: column;
      }
    }
  }

  .banners {
    flex-direction: column;
    padding-bottom: 0;
  }
}

// @media screen and (min-width: 480px) {

// }

// @media screen and (min-width: 768px) {

// }

@media screen and (min-width: 1500px) {
  .footer {
    padding: 0 15px;

    & > div:first-of-type {
      margin-bottom: 38px;
      padding-top: 62px;
      width: 58%;
    }

    & h2 {
      margin-bottom: 19px;
    }

    & li {
      letter-spacing: -2px;
    }
  }

  .banners {
    margin-bottom: 0;
    padding-bottom: 55px;
    width: 58%;

    & h2 {
      letter-spacing: 1px;
      margin-bottom: 0;
    }

    & P {
      letter-spacing: 1.7px;
    }

    & > .banner {
      padding-top: 52px;
      padding-bottom: 37px;
      padding-left: 40px;
      padding-right: 40px;

      &:last-child {
        & > div {
          margin-top: -15px;
          width: 59%;
        }
      }
    }
  }

  .copyright {
      padding-top: 12px;
      padding-bottom: 12px;
  }
}
</style>
