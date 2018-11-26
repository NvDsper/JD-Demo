<template>
    <Panel :class="$style.panel" title="ad">
        <img src="//img12.360buyimg.com/jrpmobile/jfs/t7162/219/4755741/18941/4e51a5aa/597b066dNf6c7a972.jpg?width=750&height=120" alt="智投">
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
    height: 102px;
    h4{
        display: none;
    }
    img{
        height: 102px;
        width: 100%;
    }
}
</style>
