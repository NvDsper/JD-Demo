<template>
    <Panel :class="$style.panel" title="理财精选">
        <section :class="$style.content">
            <div v-for="item in items" :class="$style.item" :key="item.title">
                <img :src="item.src" alt="">
                <div>
                    <h4>{{ item.title }}</h4>
                    <p>{{ item.text }}</p>
                </div>
                <em>去赚钱></em>
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
                title: "月度理财",
                src: "//img12.360buyimg.com/jrpmobile/jfs/t3670/58/543125556/2606/a65096b9/580d80afN63b1085a.png?width=76&height=76",
                text: "预期年化收益率4.50%",
            }, {
                title: "季度理财",
                src: "//img12.360buyimg.com/jrpmobile/jfs/t3679/44/511862277/2728/c1c6b2bf/580d8189N6b6f8052.png?width=76&height=76",
                text: "历史年化回报率5.50%",
            }, {
                title: "一年理财",
                src: "//img12.360buyimg.com/jrpmobile/jfs/t3331/69/580199498/3074/d5bb21c5/580d7f6cN7f35e596.png?width=76&height=76",
                text: "历史年化回报率5.50%",
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
        border-top: 2px solid #eee;
        .item{
            @include flex(row);
            padding: 15px 0;
            img{
                width: 88px;
                height: 88px;
                padding: 0 32px;
            }
            h4{
                font-size: 32px;
                width: 344px;
                height: 57.6px;
                line-height: 57.6px;
            }
            p{
                width: 344px;
                height: 26.4px;
                line-height: 26.4px;
                font-size: 24px;
                color: #ff3232;
            }
            em{
                width: 113px;
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
            &:last-child{
                &::after{
                    display: none;
                }
            }
        }
    }
}
</style>
