<template>
  <div>
    <div class="object">
      <h2>Object:</h2>
      <div>
        {{ flattenedObject }}
      </div>
    </div>
    <RouteItem v-for="route, index in routes" :key="index" :item="route" />
  </div>
</template>

<script>
import flatten from 'flat'
import RouteItem from './components/RouteItem.vue';
export default {
  components: {
    RouteItem
  },
  computed: {
    flattenedObject() {
      return flatten(this.routes)
    },
  },
  mounted() {
    console.log(this.processItem(this.routes[1]))
  },
  methods: {
    processItem(item) {
      if (item.children) {
        return {
          path: item.path,
          children: this.processItem(item.children)
        }
      } else {
        return item
      }
    },
  },
  data() {
    return {
      routes: [
        { path: 'a' }, { path: 'b', children: [{ path: 'c', children: [{ path: 'e' }] }] }
      ]

    }
  }
}
</script>

<style lang="scss" scoped></style>