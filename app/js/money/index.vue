<template>
    <div>
        <Heador/>
        <Mslider/>
        <Money/>
        <Ad/>
        <money2/>
        <Ad1/>
        <Footer/>
        <Navbar/>
    </div>
</template>

<script>
import Heador from "../public/header.vue"
import Footer from "../public/footer.vue"
import Navbar from "../public/navbar.vue"
import Mslider from "./mslider.vue"
import Money from "./money.vue"
import Ad from "./ad.vue"
import money2 from "./money2.vue"
import Ad1 from "./ad1.vue"

export default {
    components: {
        Heador,
        Footer,
        Navbar,
        Mslider,
        Money,
        Ad,
        money2,
        Ad1,
    },
}
</script>

<style lang="scss" module>

</style>

