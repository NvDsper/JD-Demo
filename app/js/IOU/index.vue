<template>
    <div>
        <Header/>
        <Slider/>
        <Welfare/>
        <More-service/>
        <people-service/>
        <Footer/>
        <Navbar/>
    </div>
</template>
<script>
import Header from "../public/header.vue"
import Footer from "../public/footer.vue"
import Navbar from "../public/navbar.vue"
import Slider from "./Islider.vue"
import Welfare from "./welfare.vue"
import MoreService from "./moreService.vue"
import PeopleService from "./peopleService.vue"

export default {
    components: {
        Header,
        Footer,
        Navbar,
        Slider,
        Welfare,
        MoreService,
        PeopleService,
    },
}
</script>
<style lang="scss" module>

</style>
