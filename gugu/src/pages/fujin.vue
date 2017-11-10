<template>
    <div>
        附近页面
        <a @click="loaddingH()">12</a>
    </div>
</template>

<script>
  import {mapMutations} from 'vuex'
    export default {
        data () {
            return {}
        },
        methods: {
            ...mapMutations({
          loadding:'SHOW_LOADDNG_SUCCESS'
        }),
          loaddingH:function () {

            this.$store.commit('SHOW_LOADDNG_SUCCESS')
          }
        },
        mounted:function () {

        }
    }
</script>

<style>

</style>
