<!--
<template>
    <main>
        <Header />
        <div id="layoutSidenav">
            <Sidebar />
                        
            <div id="layoutSidenav_content">
                <main>
                    <router-view> </router-view>
                </main>
                <Footer />
            </div>
        </div>

        <FlashMessage position="right bottom"> </FlashMessage>
    </main>
</template>

<script>
    import Header from './components/Header.vue';
    import Sidebar from './components/Sidebar.vue';
    import Footer from './components/Footer.vue';

    export default {
        components: {
            Header,
            Sidebar,
            Footer
        }
    }
</script>

-->

<template>
    <main>
        <!-- <Header /> -->
        <router-view></router-view>
        <!-- <vue-progress-bar></vue-progress-bar> -->
    </main>
</template>
<script>
    import Header from './components/Header.vue';
    import Sidebar from './components/Sidebar.vue';
    import Footer from './components/Footer.vue';

    export default {
        components: {
            Header,
            Sidebar,
            Footer
        }
    }
</script>
<!--
<script>
import * as authService from './services/auth_service';

    export default { 
        data () {
            return {
                
            }
        },

        beforeCreate: async function () {
            try {
                if(authService.isLoggedIn()) {
                    const response = await authService.getUserProfile();
        
                    this.$store.dispatch('authenticate', response.data);
                }
            } catch (error) {

            }
        },
    }
</script>

-->