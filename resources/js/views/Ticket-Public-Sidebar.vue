<template>
    <div id="layoutSidenav_nav">
        <nav class="sb-sidenav accordion sb-sidenav-dark" id="sidenavAccordion">
            <div class="sb-sidenav-menu">
                <div class="nav">
                    <!-- <router-link to="/ticket/public/dashboard" class="nav-link collapsed" href="#" data-toggle="collapse" data-target="#" aria-expanded="false" aria-controls="" exact>
                        <div class="sb-nav-link-icon">
                        </div>
                        Dashboard
                    </router-link> -->
                    <!-- <router-link to="/ticket/public/status" class="nav-link collapsed" href="#" data-toggle="collapse" data-target="#" aria-expanded="false" aria-controls="" exact>
                        <div class="sb-nav-link-icon">
                        </div>
                        Tickets
                    </router-link> -->
                    <router-link to="/ticket/public/completed" class="nav-link collapsed" href="#" data-toggle="collapse" data-target="#" aria-expanded="false" aria-controls="" exact>
                        <div class="sb-nav-link-icon">
                        </div>
                        Feedback Links
                    </router-link>
                    <router-link to="/login" class="nav-link collapsed" href="#" data-toggle="collapse" data-target="#" aria-expanded="false" aria-controls="" exact>
                        <div class="sb-nav-link-icon">
                            <i class="fas fa-arrow-right"></i>
                        </div>
                        Logout
                    </router-link>

                    
                </div>
            </div>
            <!--
            <div class="sb-sidenav-footer">
                <div class="small">Logged in as:</div>
                Start Bootstrap
            </div>
            -->
        </nav>
    </div>
</template>

<style>
    .sidebar-badge{
        color: white !important;
        padding: 5px !important;
        margin: 10px !important;
        width: 50px !important;
    }
</style>
<script>
import * as ticket_service from '../services/ticket_service';

export default {
    name: 'employee',
    data() {
        return {
            ticket: [],
            ticketDetails: [],
            ticketData:{
                status:'',
                reference_code:''
            },
            assignedTicketData:{},
            totalAll: '',
            totalNew: '',
            totalAssigned: '',
            totalinProgress: '',
            totalCompleted: '',
            totalAssigned_staff: '',
            totalinProgress_staff: '',
            totalCompleted_staff: '',
            
            }
    },
    mounted() {
        this.countData();
    },
    methods: {
        countData: async function() {

            const response_getUserData = await ticket_service.getUserData();
            this.displayName=response_getUserData.data.user.name;
            
			let name = this.displayName;

            try{
                const total = await ticket_service.countAll();
                const total2 = await ticket_service.countAssigned_All();
                const total3 = await ticket_service.countInProgress_All();
                const total4 = await ticket_service.countCompleted_All();

                const t1 = await ticket_service.countAssigned_staff(name)
                const t2 = await ticket_service.countInProgress_staff(name)
                const t3 = await ticket_service.countCompleted_All()

                this.totalAll = total.data;
                // this.totalAssigned = total2.data;
                // this.totalinProgress = total3.data;
                // this.totalCompleted = total4.data;

                this.totalAssigned_staff = t1.data;
                this.totalinProgress_staff = t2.data;
                this.totalCompleted_staff = t3.data;

                const response_set_refCode = await ticket_service.setDisplayName(name);
                const response = await ticket_service.getAllTicketDetails_Approved_Assigned(name);
                this.ticket = response.data;
                this.totalRows = this.ticket.length;
            } catch(error) {
                this.flashMessage.error({
                message: 'Some error occured! Please try again.',
                time: 5000
                });
            }
        },
        // countData: async function(){
        //     console.log("aa");
        // }
        
    }
}

</script>
