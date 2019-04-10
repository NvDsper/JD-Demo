<template>
    <Panel :class="$style.panel" title="金融头条">
        <section :class="$style.content">
            <swiper :options="options">
                <swiper-slide>
                    <router-link :to="{name:home}">
                        <a>百万白条券免费送，速来领取！！<em>></em></a>
                    </router-link>
                </swiper-slide>
                <swiper-slide>
                    <router-link :to="{name:home}">
                        <a>签到领流量，1元500M！<em>></em></a>
                    </router-link>
                </swiper-slide>
                <swiper-slide>
                    <router-link :to="{name:home}">
                        <a>百万白条券免费送，速来领取！！<em>></em></a>
                    </router-link>
                </swiper-slide>
            </swiper>
        </section>
    </Panel>
</template>
<script>
import { swiper, swiperSlide } from "vue-awesome-swiper"
import Slider from "../core/slider.vue"
import Panel from "../core/panel.vue"

export default {
    components: {
        Slider,
        swiper,
        swiperSlide,
        Panel,
    },
    data() {
        return {
            options: {
                autoplay: true,
                loop: true,
                direction: "vertical",
            },
        }
    },
}
</script>

<style lang="scss">
.swiper-container-vertical{
    height: 72px;
    .swiper-slide{
        a{
        font-family: PingFangSC-Medium;
        font-size: 28px;
        height: 72px;
        line-height: 72px;
        display: block;
        color: #333;
        text-decoration: none;
        }
        em{
            color: #ddd;
            float: right;
            height: 72px;
            margin-right: 20px;
        }
    }
}
</style>
<style lang="scss" module>
@import "../../css/element.scss";
.panel{
    @include panel;
    margin-top: 120px;
    >h4{
        display: none;
    }
    .content{
        height: 72px;
        line-height: 72px;
        overflow: hidden;
        padding-left: 178px;
        background: url(//m.jr.jd.com/spe/qyy/main/images/scroll_title_img.png) left top no-repeat;
    }
}
</style>
