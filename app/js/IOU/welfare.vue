<template>
    <Panel :class="$style.panel" title="白条福利">
        <section :class="$style.content">
            <div v-for="item in items" :class="$style.item" :key="item.title">
                <img :src="item.src" :alt="item.title">
                <div>
                    <h4>{{ item.title }}</h4>
                    <p>{{ item.text }}</p>
                </div>
                <em>{{ item.sub }}</em>
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
                src: "//img12.360buyimg.com/jrpmobile/jfs/t4378/62/155957680/9017/16463551/58affd58Nb5c9198e.jpg?width=120&height=120",
                title: "开通白条",
                sub: "立即开通>",
                text: "送188元礼包",
            }, {
                src: "//img12.360buyimg.com/jrpmobile/jfs/t4150/330/141981421/9147/604e3e04/58affc3bNbfa8f9d7.jpg?width=120&height=120",
                title: "白条闪付",
                sub: "随机立减>",
                text: "新手享158元礼包",
            }, {
                src: "//img12.360buyimg.com/jrpmobile/jfs/t4270/96/1102370053/8651/58b7fa5a/58bd2e10N453e9464.jpg?width=120&height=120",
                title: "白条提额",
                sub: "去提额>",
                text: "金融app专享提额礼包",
            }],
        }
    },
}
</script>
<style lang="scss" module>
@import "../../css/element.scss";
.panel{
    @include panel;
    .content{
        @include flex;
        border-top: 1px solid #ddd;
        .item{
            @include flex(row);
            padding: 15px 0;
            img{
                width: 88px;
                height: 88px;
                margin: 0 32px;
            }
            h4{
                width: 304px;
                height: 58px;
                line-height: 58px;
                margin: auto 0;
                font-size: 30px;
            }
            p{
                font-size: 22px;
                width: 304px;
                height: 24px;
                line-height: 24px;
                color: #999;
            }
            em{
                width: 134px;
                height: 28px;
                color: #ff801A;
                line-height: 28px;
                font-size: 28px;
                margin: auto 0;
            }
            &:after{
                content: " ";
                width: 100%;
                margin-left: 150px;
                border-bottom: 1px solid #ddd;
                box-sizing: border-box;
                margin-top: 15px;
            }
            &:last-child:after{
                display: none;
            }
        }
    }
}
</style>
