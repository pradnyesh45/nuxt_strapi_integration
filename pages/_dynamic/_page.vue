<template>
  <div>
    <h1>{{ dynamic }} / {{ page }}</h1>
    <p>{{ variable }}</p>
  </div>
</template>

<script>
export default {
  async asyncData({ params }) {
    const page = params.page;
    const dynamic = params.dynamic;
    return { page, dynamic };
  },
  data() {
    return {
      variable: ""
    };
  },
  async mounted() {
    this.variable = "Pradnyesh Aglawe";
  }
};
</script>
