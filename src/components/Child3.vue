<template>
    <div id="child3">
        <ul>
            <template v-for="(item,index) in list">
                <li :key="index">
                    <span>{{item.name}}</span>
                    <span>{{item.age}}</span>
                    <span>{{item.sex}}</span>
                </li>
            </template>
        </ul>
        <ul>
            <li v-for="(item,index) in man" :key="index">{{item.name}}</li>
        </ul>
        {{getMsg}}
    </div>
</template>
<script>
export default {
    props: ["getMsg"],
    data: function () {
        return {
            list: [{
                name: "小明", age: 10, sex: "男"
            }, {
                name: "小红", age: 9, sex: "女"
            }, {
                name: "小刚", age: 11, sex: "男"
            }],
            msg: ""
        }
    },
    computed: {
        man: function () {
            return this.list.filter(function (item) {
                return item.sex == "男"
            })

            // this.list = this.list.filter(function (item) {
            //     return item.sex == "男"
            // })
        }
    },
    mounted: function () {
        // this.msg = this.$parent.$data.msg
    }
}
</script>


