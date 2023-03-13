<template>
  <div class="page-not-found">
    <h2>Route not bundled!</h2>
    <p>
      Oops! The component you're trying to access has been pruned away by the
      route pruner. To access the component, please navigate to the route pruner
      control panel and include the relevant route.
    </p>
    <router-link to="/">Go Home</router-link>
  </div>
</template>

<script>
export default {
  name: "PageNotFound",
  components: {},
};
</script>

<style scoped>
.page-not-found {
  text-align: center;
  margin: 50px auto;
  font-size: 24px;
}
.page-not-found h2 {
  font-size: 50px;
  margin: 0;
}
.page-not-found p {
  margin: 20px 20px;
}
.page-not-found router-link {
  display: inline-block;
  padding: 10px 20px;
  background-color: #007bff;
  color: #fff;
  border-radius: 4px;
  text-decoration: none;
}
.page-not-found router-link:hover {
  background-color: #0069d9;
}
</style>
