<template>
  <div class="container-fluid">
    <h1 class="mt-4 admin-header-title" >DASHBOARD</h1>
    <div class="breakcrumbs mt-3">
        Home > <span class="admin-sub-header-title"> DASHBOARD</span>
        
    </div>
    <div class="row mt-4">
        <!-- <audio ref="audio" autoplay>
            <source src="/sound/notif_sound.mp3" type="audio/mpeg">
        </audio> -->
        <!-- <audio src="/sound/notif_sound.mp3" controls id="sound">
        </audio> -->
         <!-- <input type="text" value="http://127.0.0.1:8000/sound/notif_sound.mp3" id="myInput" disabled style="display:none"> -->
    </div>
    <div class="row mt-4">
        <div class="col-xl-12">
                <div class="row">
                    <!-- Earnings (Monthly) Card Example -->
                    <div class="col-xl-3 col-md-6 mb-4">
                        <div class="card border-left-warning shadow h-100 py-2">
                            <div class="card-body">
                                <div class="row no-gutters align-items-center">
                                    <div class="col mr-2">
                                        <div class="text-xs font-weight-bold text-uppercase mb-1" style="color:rgb(23, 162, 184)">
                                            Pending TICKETS</div>
                                        <div class="h3 mb-0 font-weight-bold text-gray-800">{{this.totalNew}}</div>
                                    </div>
                                    <div class="col-auto">
                                        <i class="fas fa-plus square fa-2x text-gray-300"></i>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <!-- Earnings (Monthly) Card Example -->
                    <div class="col-xl-3 col-md-6 mb-4">
                        <div class="card border-left-warning shadow h-100 py-2">
                            <div class="card-body">
                                <div class="row no-gutters align-items-center">
                                    <div class="col mr-2">
                                        <div class="text-xs font-weight-bold text-uppercase mb-1" style="color:rgb(255, 193, 7)">
                                            In Progresss TICKETS</div>
                                        <div class="h3 mb-0 font-weight-bold text-gray-800">{{this.totalinProgress_staff}}</div>
                                    </div>
                                    <div class="col-auto">

                                        <i class="fas fa-spinner fa-2x text-gray-300"></i>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <!-- Pending Requests Card Example -->
                    <div class="col-xl-3 col-md-6 mb-4">
                        <div class="card border-left-warning shadow h-100 py-2">
                            <div class="card-body">
                                <div class="row no-gutters align-items-center">
                                    <div class="col mr-2">
                                        <div class="text-xs font-weight-bold text-uppercase mb-1" style="color:rgb(40, 167, 69)">
                                            Completed TICKETS</div>
                                        <div class="h3 mb-0 font-weight-bold text-gray-800">{{this.totalCompleted_staff}}</div>
                                    </div>
                                    <div class="col-auto">
                                        <i class="fas fa-check-square fa-2x text-gray-300"></i>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="col-xl-3 col-md-6 mb-4">
                        <div class="card border-left-warning shadow h-100 py-2">
                            <div class="card-body">
                                <div class="row no-gutters align-items-center">
                                    <div class="col mr-2">
                                        <div class="text-xs font-weight-bold text-uppercase mb-1" style="color:rgb(43, 88, 118)"> 
                                            TOTAL TICKETS</div>
                                        <div class="h3 mb-0 font-weight-bold text-gray-800">{{this.totalAll}}</div>
                                    </div>
                                    <div class="col-auto">
                                        <i class="fas fa-th list fa-2x text-gray-300"></i>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <!-- Earnings (Monthly) Card Example -->
                    <!-- <div class="col-xl-3 col-md-6 mb-4">
                        <div class="card border-left-info shadow h-100 py-2">
                            <div class="card-body">
                                <div class="row no-gutters align-items-center">
                                    <div class="col mr-2">
                                        <div class="text-xs font-weight-bold text-info text-uppercase mb-1">Tasks
                                        </div>
                                        <div class="row no-gutters align-items-center">
                                            <div class="col-auto">
                                                <div class="h5 mb-0 mr-3 font-weight-bold text-gray-800">50%</div>
                                            </div>
                                            <div class="col">
                                                <div class="progress progress-sm mr-2">
                                                    <div class="progress-bar bg-info" role="progressbar"
                                                        style="width: 90%" aria-valuenow="50" aria-valuemin="0"
                                                        aria-valuemax="100"></div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="col-auto">
                                        <i class="fas fa-clipboard-list fa-2x text-gray-300"></i>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div> -->
                    
                </div>
        </div>
    </div>



  </div>
</template>


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
                totalNew: 0,
                new: '',
                totalAssigned: '',
                totalinProgress: '',
                totalCompleted: '',
                totalAssigned_staff: '',
                totalinProgress_staff: '',
                totalCompleted_staff: '',
                name: '',
                thisAudio: ''
                }
        },
        mounted() {
            this.countData();

            

            // this.$nextTick(() => {
            //     const button = document.createElement('button');
            //     button.textContent = 'Play Audio';
            //     button.onclick = this.playAudio;
            //     document.body.appendChild(button);
            // });
        },
        methods: {
            playAudio() {
                const audio = new Audio('../sound/notif_sound.mp3');
                audio.play().catch(error => {
                    console.error('Audio playback failed:', error);
                });
            },

            initWebSocket(){
                // Create WebSocket connection.
                const socket = new WebSocket("ws://10.10.140.36:6000");

                // Connection opened
                socket.addEventListener("open", (event) => {
                socket.send("Hello Server!");
                });

                // Listen for messages
                socket.addEventListener("message", (event) => {
                console.log("Message from server ", event.data);
                });
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

                    if (this.totalNew === 0){
                        console.log("No New Ticket");
                    }
                    else{
                        this.playAudio();
                    }

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