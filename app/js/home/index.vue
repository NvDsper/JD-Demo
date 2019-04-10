<template>
    <div>
        <Heador/>
        <HSlider/>
        <Novice/>
        <Borrow/>
        <Money/>
        <Product/>
        <Life/>
        <Service/>
        <Footer/>
        <Navbar/>
    </div>
</template>

<script>
import Heador from "../public/header.vue"
import Footer from "../public/footer.vue"
import Navbar from "../public/navbar.vue"
import HSlider from "./hslider.vue"
import Novice from "./novice.vue"
import Borrow from "./borrow.vue"
import Money from "./money.vue"
import Product from "./product.vue"
import Life from "./life.vue"
import Service from "./service.vue"

export default {
    components: {
        Heador,
        Footer,
        Navbar,
        HSlider,
        Novice,
        Borrow,
        Money,
        Product,
        Life,
        Service,
    },
}
</script>

<style lang="scss" module>

</style>

