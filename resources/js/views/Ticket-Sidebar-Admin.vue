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
                                <!-- All  -->
                                <a v-on:click="count()">All </a>
                                <div v-if="this.totalAll == 0">
                                    <b-badge variant="success" class="sidebar-badge">{{this.totalAll}}</b-badge>
                                </div>
                                <div v-else-if="this.totalAll != 0">
                                    <b-badge variant="danger" class="sidebar-badge">{{this.totalAll}}</b-badge>
                                </div>
                            </router-link>
                            <router-link to="/ticket/admin/pending" class="nav-link" exact>
                                <div class="sb-nav-link-icon">
                                    <i class="fas fa-circle" style="color: #17a2b8"></i>
                                </div>
                                <!-- New  -->
                                <a v-on:click="count()">New </a>
                                <div v-if="this.totalNew == 0">
                                    <b-badge variant="success" class="sidebar-badge">{{this.totalNew}}</b-badge>
                                </div>
                                <div v-else-if="this.totalNew != 0">
                                    <b-badge variant="danger" class="sidebar-badge">{{this.totalNew}}</b-badge>
                                </div>
                            </router-link>
                            <router-link to="/ticket/admin/approved" class="nav-link" exact>
                                <div class="sb-nav-link-icon">
                                    <i class="fas fa-circle" style="color: #007bff"></i>
                                </div>
                                <!-- Assigned -->
                                <a v-on:click="count()">Assigned </a>
                                <div v-if="this.totalAssigned_staff == 0">
                                    <b-badge variant="success" class="sidebar-badge">{{this.totalAssigned_staff}}</b-badge>
                                </div>
                                <div v-else-if="this.totalAssigned_staff != 0">
                                    <b-badge variant="danger" class="sidebar-badge">{{this.totalAssigned_staff}}</b-badge>
                                </div>
                            </router-link>
                            <router-link to="/ticket/admin/inprogress" class="nav-link" exact>
                                <div class="sb-nav-link-icon">
                                    <i class="fas fa-circle" style="color: #ffc107"></i>
                                </div>
                                <!-- In Progress -->
                                <a v-on:click="count()">In Progress </a>
                                <div v-if="this.totalinProgress_staff == 0">
                                    <b-badge variant="success" class="sidebar-badge">{{this.totalinProgress_staff}}</b-badge>
                                </div>
                                <div v-else-if="this.totalinProgress_staff != 0">
                                    <b-badge variant="danger" class="sidebar-badge">{{this.totalinProgress_staff}}</b-badge>
                                </div>
                            </router-link>
                            <router-link to="/ticket/admin/completed" class="nav-link" exact>
                                <div class="sb-nav-link-icon">
                                    <i class="fas fa-circle" style="color: #28a745"></i>
                                </div>
                                <!-- Completed -->
                                <a v-on:click="count()">Completed </a>
                                <div v-if="this.totalCompleted_staff == 0">
                                    <b-badge variant="success" class="sidebar-badge">{{this.totalCompleted_staff}}</b-badge>
                                </div>
                                <div v-else-if="this.totalCompleted_staff != 0">
                                    <b-badge variant="success" class="sidebar-badge">{{this.totalCompleted_staff}}</b-badge>
                                </div>
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
                        <!-- <a v-on:click="doSomething">Logout </a> -->
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
import * as authServices from '../services/auth_service';

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
            name: '',
            }
    },
    mounted() {
        this.countData();
    },
    methods: {
        count: async function() {
            const response_getUserData = await ticket_service.getUserData();
            this.displayName=response_getUserData.data.user.name;
            
                const total = await ticket_service.countAll();
                const total1 = await ticket_service.countNew_All();
                const t1 = await ticket_service.countAssigned_staff(this.displayName)
                const t2 = await ticket_service.countInProgress_staff(this.displayName)
                const t3 = await ticket_service.countCompleted_staff(this.displayName)

                this.totalAll = total.data;
                this.totalNew = total1.data;
                this.totalAssigned_staff = t1.data;
                this.totalinProgress_staff = t2.data;
                this.totalCompleted_staff = t3.data;

                const response_set_refCode = await ticket_service.setDisplayName(this.displayName);
                const response = await ticket_service.getAllTicketDetails_Approved_Assigned(this.displayName);
                this.ticket = response.data;
                this.totalRows = this.ticket.length;
            
        },
        countData: async function() {

            const response_getUserData = await ticket_service.getUserData();
            this.displayName=response_getUserData.data.user.name;
            try{
                const total = await ticket_service.countAll();
                const total1 = await ticket_service.countNew_All();
                const t1 = await ticket_service.countAssigned_staff(this.displayName)
                const t2 = await ticket_service.countInProgress_staff(this.displayName)
                const t3 = await ticket_service.countCompleted_staff(this.displayName)

                this.totalAll = total.data;
                this.totalNew = total1.data;
                this.totalAssigned_staff = t1.data;
                this.totalinProgress_staff = t2.data;
                this.totalCompleted_staff = t3.data;

                const response_set_refCode = await ticket_service.setDisplayName(this.displayName);
                const response = await ticket_service.getAllTicketDetails_Approved_Assigned(this.displayName);
                this.ticket = response.data;
                this.totalRows = this.ticket.length;
            } catch(error) {
                this.flashMessage.error({
                message: 'Some error occured! Please try again.',
                time: 5000
                });
            }
        },
        login: async function () {
            try {
                const response = await authServices.login(this.user);
                if(response.token_scope == 'superadmin'){
                    this.$router.push('/ticket/superadmin/status');
                } 
                else if(response.token_scope == 'admin'){
                    this.$router.push('/ticket/admin/status');
                } 
                else if(response.token_scope == 'staff'){
                    this.$router.push('/ticket/staff/status');
                } 
                // else if(response.token_scope == 'author_hr'){
                //     this.$router.push('/author/hr/dashboard');
                // }
                // } else if(response.token_scope == 'author_lib'){
                //     this.$router.push('/author/library/dashboard');
                // } else if(response.token_scope == 'author_pjs'){
                //     this.$router.push('/author/pjs/dashboard');
                // } else if(response.token_scope == 'author_sja'){
                //     this.$router.push('/author/sja/dashboard');
                // } else if(response.token_scope == 'author_starbooks'){
                //     this.$router.push('/author/starbooks/dashboard');
                // } else if(response.token_scope == 'author_dostv'){
                //     this.$router.push('/author/dostv/dashboard');
                // }
            } catch(error) {
                this.flashMessage.error({
                message: 'Some error occured! Please try again.',
                time: 5000
                });
            }
        },
        
    }
}

</script>
