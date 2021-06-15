<template>
  <footer class="footer">
    <div class="container">
        <div class="row">
          <div class="col-sm-12 col-md-8">
            <div class="listBox">
              <div class="item" :class="{ active : active_el == 1 }">
                <p class="listTitle">Explore <span class="arrowIcon" @click="activate(1)"></span></p>
                <ul class="list">
                  <li><a :href="$store.state.shopifyUrl+'/collections/all'">Our Menu</a></li>
                  <li> <a href="/berries">Berries</a> </li>
                <li> <a href="/berries#u-pick-section">U-Pick</a> </li>
                <li> <a href="/wedding">Wedding</a> </li>
                <li> <a href="/winery"> Winery</a> </li>
                <li> <a href="/country-kitchen"> Country Kitchen</a> </li>
                </ul>
              </div>

              <div class="item" :class="{ active : active_el == 2 }">
                <p class="listTitle">Family Fun <span class="arrowIcon" @click="activate(2)"></span></p>
                <ul class="list">
                  <li><a href="/family-fun/strawberry-days">Strawberry Days</a></li>
                    <li><a href="/family-fun/barnyard-adventure">Barnyard Adventure</a></li>
                    <li><a href="/family-fun/sunflower-festival">Sunflower Festival</a></li>
                    <li> <a href="/family-fun/haunted-maze"> Haunted Maze</a> </li>
                    <li> <a href="/family-fun/goat-yoga">Goat Yoga</a> </li>
                    <li><a href="/family-fun/fall-the-farm">Fall at the Farm</a></li>
                    <li><a href="/family-fun/easter-animal-safari">Easter Animal Safari</a></li>

                </ul>
              </div>



              <div class="item" :class="{ active : active_el == 3 }">
                <p class="listTitle">ABOUT <span class="arrowIcon" @click="activate(3)"></span></p>
                <ul class="list">
                  <li><a href="/about#story">Our Story</a></li>
                  <li><a href="/about#history">History</a></li>

                </ul>
              </div>
               <div class="item" :class="{ active : active_el == 4 }" >
                <p class="listTitle">Connect <span class="arrowIcon" @click="activate(4)"></span></p>
                <ul class="list">
                  <li><a href="https://www.instagram.com/maanfarms" target="_blank">Instagram</a></li>
                  <li><a href="https://www.facebook.com/maanfarmsestatewinery/" target="_blank">Facebook</a></li>
                  <li><a href="https://twitter.com/maanfarms" target="_blank">Twitter </a></li>
                </ul>
              </div>
            </div>
          </div>
          <div class="col-sm-6 col-md-4">
            <div class="fAddress">
              <p class="title">Get in touch</p>
              <p class="text">(604) 864-5723</p>
              <p class="text">info@maanfarms.com</p>
              <p class="text">790 McKenzie Rd Abbotsford V2S 7N4 </p>
              <p class="text">Open from 9am - 6pm everyday</p>
            </div>
          </div>
           <div class="col-sm-6 col-md-4 offset-md-8">
            <div class="fAddress xs-mt-20">
              <p class="title">Join us on the journey</p>

              <p class="text">Want to stay up to date about Maan Farms? Sign up to hear all the latest news from us,
                invites to events, and stories about what inspires us</p>
              <div class="subscribeBox">
                 <div class="form-field">
                  <div class="form-field__control">
                    <input id="email" type="text" v-model="email" placeholder="Email" class="form-field__input" @keyup.enter.prevent="subscribe" />
                    <p id="sl-message" :class="{error:error,success:success}">{{message}}</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="row">
          <div class="col-sm-12 col-md-6">
            <div class="paymentMode">
              <img src="@/assets/images/paymentmode.png" alt="paymentMode">
            </div>
          </div>

          <div class="col-sm-12 col-md-6">
            <div class="copyright">
              <p class="text">Copyright &copy {{ new Date().getFullYear() }} Maan Farms. Designed by <a href="https://www.stylabs.in/" target="_blank">Stylabs</a></p>
              </div>
          </div>
        </div>
    </div>
  </footer>
</template>
<script>
export default {
  components: {},
  data() {
    return {

      message : "",
      error:false,
      success : false,
      email:"",
      active_el:0
    };
  },

  methods:{
    async subscribe() {
      var re = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
      this.error = false;
      this.success = false;
      let email = this.email.trim();
      if (!email.length) {
        this.message = "Please Enter Your Valid Email Address";
        this.error = true;
        return false;
      } else if (!re.test(email)) {
        this.message = "Invalid Email Address";
        this.error = true;
        return false;
      }
      let responseData = await this.$axios
        .post("/auth/subscribe", {
          email: email,
        })
        .then((success) => {
          this.message = "Thanks For Subscribing";
          this.success = true;
        })
        .catch(err => {
          try{
            if(err.response){
              err.response.data.errors.forEach(function(error){
                if(error.error_code == 4001){
                  this.message = "You Have Already Subscribed"
                  this.error = true;
                  this.success = false;
                }else{
                  this.message = "Internal Server Error"
                  this.error = true;
                  this.success = false;
                }
              }.bind(this))
            }else {
               this.message = "Internal Server Error"
                  this.error = true;
                  this.success = false;
            }
          } catch(err){
            console.log(err);
             this.message = "Internal Server Error"
                this.error = true;
                this.success = false;
          }
        });
    },
    activate:function(el){

        if(el == this.active_el) {this.active_el = 0}
        else{
           this.active_el = el;
        }

    },
  },
   mounted() {
    const setActive = (el, active) => {
      const formField = el.parentNode.parentNode;
      if (active) {
        formField.classList.add("form-field--is-active");
      } else {
        formField.classList.remove("form-field--is-active");
        el.value === ""
          ? formField.classList.remove("form-field--is-filled")
          : formField.classList.add("form-field--is-filled");
      }
    };

    [].forEach.call(
      document.querySelectorAll(".form-field__input, .form-field__textarea"),
      (el) => {
        console.log(el)
        // el.onblur = () => {
        //   console.log(el.value);
        //   setActive(el, false);
        // };
        el.onfocus = () => {
          setActive(el, true);
        };
        el.onkeypress = () => {
           console.log(el.value);
          setActive(el, true);
        };
         el.onkeyup = () => {
           console.log(el.value);
          setActive(el, true);
        };
      }
    );
  }
};
</script>
<style scoped>

#sl-message{
    margin-top: 10px;
    color: #ce5353;
    position: absolute;
        bottom: -44px;
    font-size: 12px;
}
#sl-message.error{
    color: #ce5353;
}
#sl-message.success{
    color: #2c6d18;;
}
</style>
