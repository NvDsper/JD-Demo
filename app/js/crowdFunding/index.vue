<template>
    <div>
        <Heador/>
        <Hslider/>
        <Signin/>
        <Recommend/>
        <More/>
        <Footer/>
        <Navbar/>
    </div>
</template>

<script>
import Heador from "../public/header.vue"
import Footer from "../public/footer.vue"
import Navbar from "../public/navbar.vue"
import Hslider from "./hslider.vue"
import Signin from "./signin.vue"
import Recommend from "./recommend.vue"
import More from "./more.vue"

export default {
    components: {
        Heador,
        Footer,
        Navbar,
        Hslider,
        Signin,
        Recommend,
        More,
    },
}
</script>

<style lang="scss" module>

</style>

