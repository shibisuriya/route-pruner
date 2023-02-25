<template>
  <div>
    <div v-for="route, index in routes" :key="index">{{ route }}</div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      routes: [
        {
          path: '/home',
          name: 'home',
          component: 'home',
          children: [{
            path: '/about',
            name: 'about',
            component: 'about'
          }]
        },
        {
          path: '/about',
          name: 'about',
          component: 'about'
        }
      ]
    }
  }
}
</script>
<style lang='scss' scoped></style>