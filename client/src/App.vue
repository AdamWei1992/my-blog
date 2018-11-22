<template>
    <div class="app-wrap">
        <head-nav></head-nav>
        <section>
            <router-view></router-view>
        </section>
        <footer></footer>
    </div>
</template>

<script>

import HeadNav from './views/head/head.vue'

export default {
    components: {
        HeadNav,
    },
    data () {
        return {
            
        }
    },
    created () {
        
    },
    methods: {

    }
}
</script>

<style lang="less">
.app-wrap {
    width: 100%;
    font-size: 14px;
    section {
        width: 70%;
        min-width: 900px;
        margin: 20px auto;
    }
}
</style>
