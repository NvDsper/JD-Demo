<template>
    <Panel :class="$style.panel" title="轮播图">
        <Slider :cname="$style.slider" :items="items"/>
        <section :class="$style.ad">
            <img src="//img12.360buyimg.com/jrpmobile/jfs/t5842/235/8356236245/38364/2112fd7e/597a95d4Ne01da140.png?width=750&height=270" alt="新手专享">
        </section>
    </Panel>
</template>

<script>
import Slider from "../core/slider.vue"
import Panel from "../core/panel.vue"

export default {
    components: {
        Slider,
        Panel,
    },
    data() {
        return {
            items: [{
                src: "//img12.360buyimg.com/jrpmobile/jfs/t11149/181/856008463/68797/dc303e9/59f97baeN3cdae084.jpg?width=750&height=400",
                href: "money",
            }, {
                src: "//img12.360buyimg.com/jrpmobile/jfs/t9994/205/2575467053/189117/125e7b05/59f97c36N7599be57.png?width=750&height=400",
                href: "moeny",
            }],
        }
    },
}
</script>

<style lang="scss" module>
@import "../../css/element.scss";
.panel{
    @include panel;
    background: #f5f5f5;
    >h4{
        display: none;
    }
    .slider{
        margin-top:120px;
        img{
            height: 340px;
        }
    }
    .ad{
        margin-top: 20px;
        >img{
            width: 100%;
            height: 216px;
            background: #ffff;
        }
    }
}

</style>
