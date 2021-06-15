<template>
  <div>
    <h1>Created my first dynamic page of Nuxt</h1>
    <NuxtLink to="/">Home Page</NuxtLink>
    <p>{{ pageNames }}</p>
    <template v-for="link in pageNames">
      <NuxtLink :key="link" :to="`dynamic/${link}`"> {{ link }} </NuxtLink>
    </template>
    <!-- <p>{{ strapiApiData }}</p> -->
    <!-- <template v-for="item in strapiApiData"> -->
    <!-- {{ (pageNames = Object.keys(item)) }} -->
    <!-- <template v-for="pageName in item">
        <template v-if="Array.isArray(pageName)">
          <p :key="pageName">{{ pageName }}</p>
        </template>
      </template> -->

    <!-- <template v-if="Array.isArray(item)">
        <p :key="item">{{ item }}</p>
      </template> -->
    <!-- <p :key="item">{{ item }}</p> -->
    <!-- </template> -->
    <!-- <p>{{ strapiApiData[0] }}</p> -->
    <!-- <template v-for="item in strapiApiData[0]"> -->
    <!-- <p :key="item._id">{{ item }}</p> -->
    <!-- <template v-if="Array.isArray(item)"> -->
    <!-- <p :key="item._id">{{ item }}</p> -->

    <!-- <NuxtLink :key="item._id" :to="`/${item}`"></NuxtLink> -->
    <!-- </template> -->
    <!-- </template> -->
  </div>
</template>

//
<script>
import axios from "axios";
// import { response } from "express";
export default {
  data() {
    return {
      //   strapiApiData: [],
      error: null,
      pageNames: []
    };
  },
  async mounted() {
    try {
      //   console.log("before axios");
      const response = await axios.get("http://localhost:1337/homes");
      //   console.log("after response");
      //   console.log("consoling response", response);
      const strapiApiData = response.data;
      console.log("strapiApiData", strapiApiData);
      for (const pageName in strapiApiData[0]) {
        // console.log(pageName);
        // console.log(pageName, strapiApiData[0][pageName]);
        if (Array.isArray(strapiApiData[0][pageName])) {
          this.pageNames.push(pageName);
        }
        // if (pageName.constructor == Array) {
        //   console.log(pageName);
        //   pageNames.push(pageName);
        // }
      }
    } catch (error) {
      //   console.log(this.error);
      this.error = error;
    }
  }
};
</script>
