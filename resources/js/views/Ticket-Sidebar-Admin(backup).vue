<template>
    <div id="layoutSidenav_nav">
        <nav class="sb-sidenav accordion sb-sidenav-dark" id="sidenavAccordion">
            <div class="sb-sidenav-menu">
                <div class="nav">
                    <router-link to="/ticket/admin/status" class="nav-link collapsed" href="#" data-toggle="collapse" data-target="#" aria-expanded="false" aria-controls="" exact>
                        <div class="sb-nav-link-icon">
                            <!-- <i class="fas fa-arrow-right"></i> -->
                        </div>
                        Tickets
                    </router-link>
                    <!-- <div class="collapse" id="collapse_sciencejourno" aria-labelledby="headingOne" data-parent="#sidenavAccordion" > -->
                    <div >
                        <nav class="sb-sidenav-menu-nested nav">
                            <router-link to="/ticket/admin/status" class="nav-link" exact>
                                <div class="sb-nav-link-icon">
                                    <i class="fas fa-circle" style="color: #2b5876"></i>
                                </div>
                                All  <b-badge variant="light" class="sidebar-badge">{{this.totalAll}}</b-badge>
                            </router-link>
                            <router-link to="/ticket/admin/pending" class="nav-link" exact>
                                <div class="sb-nav-link-icon">
                                    <i class="fas fa-circle" style="color: #17a2b8"></i>
                                </div>
                                New  <b-badge variant="light" class="sidebar-badge">{{this.totalNew}}</b-badge>
                            </router-link>
                            <router-link to="/ticket/admin/approved" class="nav-link" exact>
                                <div class="sb-nav-link-icon">
                                    <i class="fas fa-circle" style="color: #007bff"></i>
                                </div>
                                Assigned <b-badge variant="light" class="sidebar-badge">{{this.totalAssigned_staff}}</b-badge>
                            </router-link>
                            <router-link to="/ticket/admin/inprogress" class="nav-link" exact>
                                <div class="sb-nav-link-icon">
                                    <i class="fas fa-circle" style="color: #ffc107"></i>
                                </div>
                                In Progress <b-badge variant="light" class="sidebar-badge">{{this.totalinProgress_staff}}</b-badge>
                            </router-link>
                            <router-link to="/ticket/admin/completed" class="nav-link" exact>
                                <div class="sb-nav-link-icon">
                                    <i class="fas fa-circle" style="color: #28a745"></i>
                                </div>
                                Completed <b-badge variant="light" class="sidebar-badge">{{this.totalCompleted_staff}}</b-badge>
                            </router-link>
                            <!-- <router-link to="/ticket/admin/closed" class="nav-link" exact>
                                <div class="sb-nav-link-icon">
                                    <i class="fas fa-circle" style="color: #343a40"></i>
                                </div>
                                Closed
                            </router-link> -->
                            <!-- <router-link to="/ticket/admin/rescheduled" class="nav-link" exact>
                                <div class="sb-nav-link-icon">
                                    <i class="fas fa-circle" style="color: #dc3545"></i>
                                </div>
                                Rescheduled
                            </router-link> -->
                            
                        </nav>
                    </div>

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
        background-color: red !important;
        padding: 5px !important;
        margin: 10px !important;
        width: 30px !important;
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
        // this.loadAllTicketDetails();
        this.countData();
    },
    methods: {
        countData: async function() {

            const response_getUserData = await ticket_service.getUserData();
            this.displayName=response_getUserData.data.user.name;
            
			let name = this.displayName;
            

            try{

                const total = await ticket_service.countAll();
                const total1 = await ticket_service.countNew_All();
                const total2 = await ticket_service.countAssigned_All();
                const total3 = await ticket_service.countInProgress_All();
                const total4 = await ticket_service.countCompleted_All();

                const t1 = await ticket_service.countAssigned_staff(name)
                const t2 = await ticket_service.countInProgress_staff(name)
                const t3 = await ticket_service.countCompleted_staff(name)

                this.totalAll = total.data;
                this.totalNew = total1.data;
                this.totalAssigned = total2.data;
                this.totalinProgress = total3.data;
                this.totalCompleted = total4.data;

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
