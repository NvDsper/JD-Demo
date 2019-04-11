<template>
    <Panel :class="$style.panel" title="In货推荐">
        <section :class="$style.content">
            <div :class="$style.goods">
                <img src="//img12.360buyimg.com/jrpmobile/jfs/t3406/210/2247820735/50952/86016eea/5846d8e7N20446dbd.png?width=750&height=200" alt="科技">
                <img src="//img12.360buyimg.com/jrpmobile/jfs/t3739/82/2244582797/54399/746c7d79/5846a953N66b67d05.png?width=750&height=200" alt="智能">
                <img src="//img12.360buyimg.com/jrpmobile/jfs/t3214/113/4408032436/61548/ce316eef/5846d310Ne93f00c9.png?width=750&height=200" alt="美食">

                <div v-for="item in items" :class="$style.item" :key="item.title">
                    <label>{{ item.head }}</label>
                    <img :src="item.src" :alt="item.title">
                    <p>{{ item.title }}</p>
                    <P><em>{{ item.price }}</em> 起</P>
                    <article>
                        <div :class="$style.wrapper">
                            <div :class="$style.inner" :style="{width:item.hot+'%'}"/>
                        </div>
                        <p>{{ item.hot+'%' }}</p>
                    </article>
                </div>
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
                head: "精选",
                src: "//img30.360buyimg.com/cf/s250x250_jfs/t14881/283/656508232/143980/9b606acf/5a33a171N18c9c80a.jpg",
                title: "双响炮蓝牙音箱",
                price: "¥29.00",
                hot: "172",
            }, {
                head: "精选",
                src: "//img30.360buyimg.com/cf/s250x250_jfs/t15529/308/632300625/135123/adb9c6d0/5a37676dNc31da9ea.jpg",
                title: "脑波相机",
                price: "¥998.00",
                hot: "259",
            }, {
                head: "精选",
                src: "//img30.360buyimg.com/cf/s250x250_jfs/t11257/287/2281727659/55759/e00b90a/5a138f21N32dca834.jpg",
                title: "智能电动牙刷",
                price: "¥19.00",
                hot: "481",
            }, {
                head: "精选",
                src: "//img30.360buyimg.com/cf/s250x250_jfs/t14209/293/662014092/61635/bba5c330/5a33a983N077cac56.jpg",
                title: "烟草加热电子烟",
                price: "¥258.00",
                hot: "105",
            }, {
                head: "精选",
                src: "//img30.360buyimg.com/cf/s250x250_jfs/t15007/47/884045069/149879/17987250/5a3cb182N15868ea1.jpg",
                title: "赖公高淮封藏老酒",
                price: "¥99.00",
                hot: "199",
            }, {
                head: "精选",
                src: "//img30.360buyimg.com/cf/s250x250_jfs/t14197/160/546457496/134173/4e1baccd/5a30ccc5Na44f7492.jpg",
                title: "泗洪花雕醉蟹",
                price: "¥58.00",
                hot: "222",
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
        position: relative;
        width: 640px;
        height: 1750px;
        .goods{
            @include flex(row);
            position: relative;
            >img{
                height: 170px;
                width: 640px;
            }
            img:nth-of-type(2){
                position: absolute;
                top: 566px;
            }
            img:nth-of-type(3){
                position: absolute;
                top: 1132px;
            }
            .item{
                width: 320px;
                height: 396px;
                text-align: center;
                background: rgba(0,0,0,0.02);
                position: relative;
                label{
                    position: absolute;
                    top: 0px;
                    left: 0px;
                    font-size: 20px;
                    width: 40px;
                    height: 20px;
                    padding: 4px 8px;
                    color: #ff0000;
                    background: #c1c1c1;
                }
                img{
                    height: 180px;
                    width: 180px;
                    margin: 44px 0 20px 0;
                }
                p:first-of-type{
                    height: 28px;
                    font-size: 28px;
                }
                p:nth-of-type(2){
                    height: 48px;
                    font-size: 20px;
                    line-height: 48px;
                    color: #999;
                    em{
                    margin-right: 4px;
                    color: #ff3232;
                    font-size: 36px;
                    height: 48px;
                    }
                }
                &:nth-child(6){
                    margin-top: 170px;
                }
                &:nth-child(7){
                    margin-top: 170px;
                }
                &:nth-child(8){
                    margin-top: 170px;
                }
                &:nth-child(9){
                    margin-top: 170px;
                }
                article{
                    @include flex(row);
                    align-items: center;
                    justify-content: space-around;
                    padding: 0 20px;
                    height: 30px;
                    line-height: 30px;
                    margin-top: 16px;
                    .wrapper{
                        width: 144px;
                        height: 10px;
                        background: #f6e6e6;
                        border-radius: 22px;
                        .inner{
                            width: 40%;
                            max-width: 100%;
                            height: 10px;
                            background-image: linear-gradient(270deg,#F55 1%,#FF9C31 100%);
                            border-radius: 22px;
                        }
                    }
                    p{
                        font-size: 24px;
                        color: #999;
                    }
                }
            }
        }
    }
}
</style>
