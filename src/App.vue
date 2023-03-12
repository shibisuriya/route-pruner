<template>
  <div>
    <div class="navbar">
      <div class="navbar-brand">
        <a href="#">Dummy App</a>
      </div>
      <div class="navbar-menu">
        <router-link to="/" exact class="router-link" active-class="active-link"
          ><a href="#">Dashboard</a></router-link
        >
        <router-link
          to="/settings"
          class="router-link"
          active-class="active-link"
          >Settings</router-link
        >
        <router-link
          to="/contacts"
          class="router-link"
          active-class="active-link"
        >
          <a href="#"><a href="#">Contacts</a></a>
        </router-link>
      </div>
    </div>
    <div class="main">
      <router-view></router-view>
    </div>
  </div>
</template>

<script>
export default {
  name: "App",
};
</script>

<style lang="scss" scoped>
.navbar {
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: #333;
  color: #fff;
  padding: 10px;
}

.navbar-brand a {
  font-size: 1.5rem;
  font-weight: bold;
  text-decoration: none;
  color: #fff;
}

.navbar-menu a {
  margin: 0 25px;
  text-decoration: none;
  color: #fff;
}

.navbar-menu a:hover {
  text-decoration: underline;
}
</style>
<style>
body {
  margin: 0px;
}
</style>
