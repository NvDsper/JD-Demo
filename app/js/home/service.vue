<template>
    <Panel :class="$style.panel" title="ad">
        <img src="//img12.360buyimg.com/jrpmobile/jfs/t2842/350/3035567089/14791/5f6ff93d/577cf395N31e76288.png?width=1125&height=252" alt="客服服务">
    </Panel>
</template>

<script>
import Panel from "../core/panel.vue"

export default {
    components: {
        Panel,
    },
}
</script>
<style lang="scss" module>
@import "../../css/element.scss";
.panel{
    @include panel;
    margin-bottom: 0px;
    margin-top: 20px;
    h4{
        display: none;
    }
    img{
        height: 134px;
    }
}
</style>
