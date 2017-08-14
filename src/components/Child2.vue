<template>
    <div id="child2">
        <input type="button" value="child2-add" @click="add">
    </div>
</template>

<style>

</style>
<script>
import { mapGetters, mapActions } from "vuex"
export default {
    methods: mapActions([
        "add"
    ])
}
</script>

