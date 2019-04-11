<template>
    <Panel :class="$style.panel">
        <section :class="$style.content">
            <div/>
            <P>立即下载</P>
            <span>Copyright</span>
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
            background: url(//img12.360buyimg.com/jrpmobile/jfs/t1/31865/39/1137/193475/5c46c0b9E0e221994/a0aef2651e435a5c.jpg?width=1000&height=520) center center no-repeat;
            background-size: 100% auto;
            width: 600px;
            height: 800px;
            margin-top:-200px;
        }
        >P{
            @include btn($size:32px,$color:#fff,$bgcolor:#F1443E,$padding:5px,$radius:5px);
            width: 471px;
            height: 100px;
            line-height: 100px;
            box-shadow: 0 6px 16px 0 rgba(255,159,135,.6);
            position: fixed;
            bottom: 130px;
        }
        >span{
            position: fixed;
            bottom: 16px;
            font-size: 24px;
            color: #eee;
        }
    }
}
</style>
