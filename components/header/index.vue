<template>
  <div class="headerWrapper">
    <div class="container headerContainer">

          <div class="burgerBox">

              <button class="burgerBtn" @click.prevent="mobileNavClicked">
            <span></span>
            <span></span>
            <span></span>

            </button>
          </div>
          <div class="logoBox">
          <a href="/" class="logo">
          </a>
          </div>

        <div class="navigationBox" v-bind:class="{ active: isActive }">
            <div class="navContainer">
              <div class="navHead">
                  <a href="/" class="navLogo">
                  <img src="@/assets/images/logo.png">
                  </a>
              </div>
              <ul class="navigation">
                  <li> <a :href="$store.state.shopifyUrl+'/collections/all'">Our Menu</a> </li>

                <li class="dropDown" :class="{ active : active_el == 2 }"  @click.prevent="activate(2)">
                  <a @click.prevent="handleRedirect('/family-fun/family-fun-overview')">Family Fun</a> <span class="arrowIcon"></span>

                  <div class="dropBox">
                    <ul>
                      <li><a @click.prevent="handleRedirect('/family-fun/strawberry-days')">Strawberry Days</a></li>
                      <li><a @click.prevent="handleRedirect('/family-fun/barnyard-adventure')">Barnyard Adventure</a></li>
                      <li><a @click.prevent="handleRedirect('/family-fun/sunflower-festival')">Sunflower Festival</a></li>
                      <li> <a @click.prevent="handleRedirect('/family-fun/goat-yoga')">Goat Yoga</a> </li>
                      <li> <a @click.prevent="handleRedirect('/family-fun/haunted-maze')" > Haunted Maze</a> </li>
                      <li><a @click.prevent="handleRedirect('/family-fun/fall-the-farm')">Fall at the Farm</a></li>
                      <li><a @click.prevent="handleRedirect('/family-fun/easter-animal-safari')">Easter Animal Safari</a></li>

                    </ul>
                  </div>

                </li>
                <li> <a href="/berries">Berries</a> </li>
                <li v-if="!$device.isDesktop"> <a href="/berries#u-pick-section" @click="mobileNavClicked">U-Pick</a> </li>
                <li v-if="$device.isDesktop"> <a href="/berries#u-pick-section">U-Pick</a> </li>
                <li> <a href="/wedding">Wedding</a> </li>
                <li> <a href="/winery"> Winery</a> </li>
                <li> <a href="/country-kitchen"> Country Kitchen</a> </li>
                <li> <a href="/about">About</a> </li>
                <li class="mobileMenu"> <a :href="$store.state.shopifyUrl+'/account/login'">Profile</a> </li>

              </ul>
              <div class="navFooter">
                Copyright &copy; {{ new Date().getFullYear() }} Maan Farms.
              </div>
              </div>
              <div class="overlay" @click.prevent="mobileNavClicked"></div>
        </div>

        <div class="profileBox">
          <ul class="profileNav">
            <li class="desktopMenu"> <a :href="$store.state.shopifyUrl+'/account/login'"> <i class="icon profileIcon "></i> </a> </li>
            <li> <a :href="$store.state.shopifyUrl+'/cart'"> <i class="icon bagIcon"></i> </a> </li>
          </ul>
        </div>

    </div>

  </div>
</template>
<script>
export default {
  data() {
    return {
    isActive: false,
    show: true,
     active_el:0


  }
  },

  methods:{

 handleRedirect(url){
      document.location =url;
    },
    mobileNavClicked() {

      this.isActive = !this.isActive;
      // document.documentElement.style.overflow = 'hidden'
      if (document.documentElement.style.overflow === "hidden") {
        document.documentElement.style.overflow = "auto";
      } else {
        document.documentElement.style.overflow = "hidden";
      }

   },
    activate:function(el){

        if(el == this.active_el) {this.active_el = 0}
        else{
           this.active_el = el;
        }

    },
     mobileNavClick() {
      this.showMobileNav = true;
    },
    closeMobileNav() {
      this.showMobileNav = false;
    },

  },


}
</script>

<style scoped>

</style>
