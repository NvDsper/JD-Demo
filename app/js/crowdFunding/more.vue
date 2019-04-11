<template>
    <Panel :class="$style.panel" title="更多福利">
        <p>专享福利 ></p>
        <section :class="$style.content">
            <div v-for="item in items" :class="$style.item" :key="item.src">
                <img :src="item.src" alt="">
            </div>
        </section>
    </Panel>
</template>
<script>
import Panel from "../core/panel.vue"

export default {
    components: {
        Panel,
    },
    data() {
        return {
            items: [{
                src: "//img12.360buyimg.com/jrpmobile/jfs/t7456/56/1425209238/21928/f1fe492d/599cee57Naea99020.jpg?width=250&height=330",
            }, {
                src: "//img12.360buyimg.com/jrpmobile/jfs/t7894/126/1440046618/24763/5ce6a129/599cee04Ne77b3641.jpg?width=250&height=330",
            }, {
                src: "//img12.360buyimg.com/jrpmobile/jfs/t6385/103/1675552688/24265/91be4150/59549aedNa30670f7.jpg?width=250&height=330",
            }],
        }
    },
}
</script>
<style lang="scss" module>
@import "../../css/element.scss";
.panel{
    @include panel;
    position: relative;
    p{
        position: absolute;
        top: 47px;
        bottom: 340px;
        left: 479px;
        height: 112px;
        font-size: 28px;
        color: #999;
    }
    .content{
        @include flex(row);
        margin-bottom: 40px;
        justify-content: space-around;
        .item{
            img{
            width: 213px;
            height: 280px;
            }
        }
    }
}
</style>
