<template>
    <div class="mainWapper fixedHeader theme6">
      <headerBox class="pos0" :class="[{ showHeader: scrollPosition > height }]">
      </headerBox>
      <div class="listingWrapper">
          <div class="container listingBox">
            <div class="filterBox">
              <p class="mainTitle d-block d-md-none">25 Products</p>
              <div class="box d-none d-md-block" >
                <ul class="typeList">
                  <li
                    v-for="filterList in filterOptions"
                    :key="filterList"
                    @click="(filterDrop = filterList), (filterBy = false)"
                    :class="{ active: filterDrop == filterList }"
                  >
                    {{ filterList }}
                  </li>
                </ul>
              </div>
            </div>
            <div class="listBox">
              <div class="headBox">
                <div class="item">
                  <p class="title d-none d-md-block">25 Products</p>
                  <div class="dropWraper d-block d-md-none">

                        <div class="dropBox" >
                      <span
                        class="selectText" v-click-outside="outFilterBy"
                        v-bind:class="{ active: filterBy }"
                        v-on:click="filterBy = !filterBy"
                      >
                        {{ filterDrop }}
                      </span>
                      <ul class="dropList" v-bind:class="{ active: filterBy }">
                        <li
                          v-for="filterList in filterOptions"
                          :key="filterList"
                          @click="(filterDrop = filterList), (filterBy = false)"
                          :class="{ active: filterDrop == filterList }"
                        >
                          {{ filterList }}
                        </li>
                      </ul>
                    </div>

                  </div>
                </div>
                <div class="item">

                  <div class="dropWraper">
                    <div class="dropBox" v-click-outside="outSortBy">
                      <span
                        class="selectText"
                        v-bind:class="{ active: sortBy }"
                        v-on:click="sortBy = !sortBy"
                      >
                        Sort By <span class="selectOption"> : {{ selectedOption }}</span>
                      </span>
                      <ul class="dropList sizeRight" v-bind:class="{ active: sortBy }">
                        <li
                          v-for="option in options"
                          :key="option"
                          @click="(selectedOption = option), (sortBy = false)"
                          :class="{ active: selectedOption == option }"
                        >
                          {{ option }}
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
              <div class="cardGridBox">
                <div class="row">
                  <div class="col-md-6 col-lg-4" :key="index" v-for="index in 12">
                    <div class="productCardBox">
                      <div class="imgBox">
                          <img src="@/assets/images/products/strawberryRhubarbPie.jpeg">
                          <button class="addCart">Add to Cart</button>
                      </div>
                      <div class="details">
                        <p class="name">Strawberry Rhubarb Pie</p>
                        <p class="price">$16</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

      </div>
      <div class="contentSection bg-default">
        <div class="container">
          <div class="bookBox">
            <div class="titleImg">
              <img src="@/assets/images/buyBCLogo.png" alt="Buy BC Logo"/>
            </div>
            <p class="text">
              This project is supported by the BC Government’s Buy BC Partnership Program;
  delivered by the Investment Agriculture Foundation of BC with funding from the
  Government of British Columbia. Opinions expressed in this document are those of
  Maan Farms and not necessarily those of the Government of British Columbia
  or the Investment Agriculture Foundation of BC.
            </p>

          </div>
        </div>
      </div>

      <footerBox></footerBox>

    </div>
</template>

<script>
import VueSlickCarousel from "vue-slick-carousel";
import "vue-slick-carousel/dist/vue-slick-carousel.css";
import "vue-slick-carousel/dist/vue-slick-carousel-theme.css";
import headerBox from "~/components/header/index";
import footerBox from "~/components/footer/index";
export default {
  components: {
    headerBox,
    footerBox,
    VueSlickCarousel,
  },

  data() {
    return {
      scrollPosition: null,
      height: 0,
      sortBy: false,
      filterBy: false,
      filterDrop: "All Products",
      filterOptions: ["All Products","Kitchen", "Frozen", "Wine", "Berry"],
      selectedOption: "Recommended",
      options: ["Recommended", "Popular", "New", "Upcoming"],
    };
  },
  computed: {},
  mounted() {
    this.parentNode = this.$el.parentElement;
    window.addEventListener("scroll", this.updateScroll);
  },
  methods: {
    updateScroll() {
      this.scrollPosition = window.scrollY;
      this.height = 50;
    },

    outSortBy: function (e) {
      this.sortBy = false;

    },
     outFilterBy: function (e) {

      this.filterBy = false;
    },
  },
  directives: {
    "click-outside": {
      bind: function (el, binding) {
        if (typeof binding.value !== "function") {
        }

        const bubble = binding.modifiers.bubble;
        const handler = (e) => {
          if (bubble || (!el.contains(e.target) && el !== e.target)) {
            binding.value(e);
          }
        };

        document.addEventListener("click", handler);
      },
    },
  },
};
</script>
