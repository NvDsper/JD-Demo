<template>
    <Panel :class="$style.panel" title="ad">
        <img src="//img12.360buyimg.com/jrpmobile/jfs/t10876/23/2566835181/40527/d7d27c08/59f97d68Ne53fda5b.png?width=1080&height=240" alt="理财金ad">
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
    margin-top: 20px;
    h4{
        display: none;
    }
    img{
        height: 134px;
    }
}
</style>
