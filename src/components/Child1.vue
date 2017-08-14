<template>
    <div id="child1">
        {{count}}
    </div>
</template>

<style>

</style>
<script>
import { mapGetters, mapActions } from "vuex"
export default {
    computed: mapGetters([
        "count"
    ]),
    mounted: function () {
        console.log(this.$store)
    }
}
</script>

