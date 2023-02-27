<template>
  <div>
    <h1>App.vue</h1>
    <div class="row">

      <router-link to="/" exact class="router-link" active-class="active-link">Home</router-link>
      <router-link to="/about" class="router-link" active-class="active-link">About</router-link>
      <router-link to="/profile" class="router-link" active-class="active-link">Profile</router-link>
    </div>

    <router-view></router-view>
  </div>
</template>

<script>
export default {

}
</script>

<style lang="scss" scoped>
.router-link {
  padding: 30px;
  margin: 30px;
  display: block;
  position: static;
}

.row {
  display: flex;
}

.active-link {
  color: white;
  background-color: red;
}
</style>