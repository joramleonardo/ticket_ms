<!--
<template>
    <div>
        <h1> This is Dashboard </h1>
    </div>

</template>
-->
<template>
    <!-- v-if="isLoggedIn" -->
    <main>
        <Header />
        <div style="padding:5px; font-style: italic; color: white; font-size: 12px; background-color: #2c3e50"> 
            <b>ADMIN ACCESS:</b> {{this.displayName}}
        </div>
        <div id="layoutSidenav">
            <Sidebar />
                        
            <div id="layoutSidenav_content">
                <main>
                    <router-view> </router-view>
                </main>
                <!-- <Footer /> -->
            </div>
        </div>

        <FlashMessage position="right bottom"> </FlashMessage>
    </main>
</template>

<script>
    import Header from './Header.vue';
    import Sidebar from './Ticket-Sidebar-Admin.vue';
    import Footer from './Footer.vue';
    import * as ticket_service from '../services/ticket_service';   

    export default { 
        components: {
            Header,
            Sidebar,
            Footer
        },
        data(){
            return {
                isLoggedIn: false,
                ticketData_update:{
                    reference_code:''
                },
                displayName: ''
            }
        },
        mounted(){
            this.loadEmployees();
        },
        methods:{
            loadEmployees: async function(){
                try{

                    
                    const response = await ticket_service.getUserData();
                    this.displayName=response.data.user.name;
                } catch(error) {
                    this.flashMessage.error({
                    message: 'Some error occured! Please try again.',
                    time: 5000
                    });
                }
            }
        }

    }
</script>