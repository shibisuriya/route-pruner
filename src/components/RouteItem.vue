<template>
    <div class="route">
        <input type="checkbox" v-if="!children" /> {{ path }}
        <div v-if="item.children">
            <RouteItem v-for="route, index in item.children" :key="index" :item="route"></RouteItem>
        </div>

    </div>
</template>

<script>
// import RouteItem from './RouteItem.vue'
export default {
    name: 'RouteItem',
    components: {
        // RouteItem
    },
    computed: {
        path() {
            return this.item.path
        },
        children() {
            return this.item.children

        }
    },
    props: {
        item: {
            type: Object,
            required: true
        },
    }

}
</script>

<style lang="scss" scoped>
.route {
    border: 1px solid black;
    padding: 15px;
    margin: 15px;
}
</style>