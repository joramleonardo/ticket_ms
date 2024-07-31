<template>
  <div class="container-fluid">
    <h1 class="mt-4 admin-header-title" >DASHBOARD</h1>
    <div class="breakcrumbs mt-3">
        Home > <span class="admin-sub-header-title"> DASHBOARD</span>
    </div>
    <div class="row mt-4">
        <div class="col-xl-12">
            <div class="row">
                <div class="col-xl-3">
                    <div class="card-body">
                        <div class="card">
                            <div class="card-body p-4 small-card-background">
                                <div class="data-card">
                                    <h3 style="color:rgb(23, 162, 184)">{{this.totalNew}}</h3>
                                    <br>
                                    <h4 >TICKETS PENDING</h4>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="col-xl-3">
                    <div class="card-body">
                        <div class="card">
                            <div class="card-body p-4 small-card-background">
                                <div class="data-card">
                                    <h3 style="color:rgb(255, 193, 7)">{{this.totalinProgress_staff}}</h3>
                                    <br>
                                    <h4>TICKETS IN PROGRESS</h4>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="col-xl-3">
                    <div class="card-body">
                        <div class="card">
                            <div class="card-body p-4 small-card-background">
                                <div class="data-card">
                                    <h3 style="color:rgb(40, 167, 69)">{{this.totalCompleted_staff}}</h3>
                                    <br>
                                    <h4>TICKETS COMPLETED</h4>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="col-xl-3">
                    <div class="card-body">
                        <div class="card">
                            <div class="card-body p-4 small-card-background">
                                <div class="data-card">
                                    <h3 style="color:rgb(43, 88, 118)">{{this.totalAll}}</h3>
                                    <br>
                                    <h4>TICKETS CLOSED</h4>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>

  </div>
</template>


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
            }
            
        }
    }

</script>


<style >
    .Chart {
        padding: 20px;
        box-shadow: 0px 0px 20px 2px rgba(0, 0, 0, .4);
        border-radius: 20px;
        margin: 50px 0;
    }
    .container {
        max-width: 800px;
        margin: 0 auto;
    }

    .card{
        background-color: #fff !important;
        box-shadow: 0 2px 6px 0 rgb(218 218 253 / 65%), 0 2px 6px 0 rgb(206 206 238 / 54%)!important;
    }
</style>