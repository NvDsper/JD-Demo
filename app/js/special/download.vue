<template>
    <Panel :class="$style.panel">
        <section :class="$style.content">
            <div>
                <P>立即下载</P>
                <span>Copyright</span>
            </div>
        </section>
    </Panel>
</template>
<script>
import Panel from "../core/panel.vue"
import btn from "../core/btn.vue"

export default {
    components: {
        Panel,
        btn,
    },
}
</script>
<style lang="scss" module>
@import "../../css/element.scss";
.panel{
    @include panel;
    margin:0 !important;
    >h4{
        display: none;
    }
    .content{
        @include flex;
        justify-content: space-around;
        align-items: center;
        height: 1136px;
        width: 100%;
        >div{
            background: url(//img12.360buying.com/jrpmobile/jfs/t8956/285/1249806938/50853/8cd3c8f0/59b65f36N05367075.png?) center center no-repeat;
            width: 600px;
            height: 800px;
        }
    }
}
</style>
