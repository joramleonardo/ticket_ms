<template>

<div id="home-top">
        <!-- Navigation-->
        <div class="navbar navbar-expand-lg bg-dark text-uppercase fixed-top" id="mainNav">
            <div class="container">
                <button class="navbar-toggler text-uppercase font-weight-bold bg-success text-white rounded" type="button" data-bs-toggle="collapse" data-bs-target="#navbarResponsive" aria-controls="navbarResponsive" aria-expanded="false" aria-label="Toggle navigation">
                    Menu
                    <i class="fas fa-bars"></i>
                </button>
                <div class="collapse navbar-collapse" id="navbarResponsive">
                    <ul class="navbar-nav ms-auto">
                        <li class="nav-item mx-0 mx-lg-1">
                            <a class="nav-link py-3 px-0 px-lg-3 rounded" href="">
                                <router-link to="/home" style="color: #fff !important;">
                                Home
                                </router-link>
                            </a>
                        </li>
                        <li class="nav-item mx-0 mx-lg-1">
                            <a class="nav-link py-3 px-0 px-lg-3 rounded" href="">
                                <router-link to="/request" style="color: #fff !important;">
                                Submit a Request
                                </router-link>
                            </a>
                        </li>
                        <li class="nav-item mx-0 mx-lg-1">
                            <a class="nav-link py-3 px-0 px-lg-3 rounded" href="">
                                <router-link to="/followup" style="color: #fff !important;">
                                Track a Ticket
                                </router-link>
                            </a>
                        </li>
                        <li class="nav-item mx-0 mx-lg-1">
                            <a class="nav-link py-3 px-0 px-lg-3 rounded" href="">
                                <router-link to="/login" style="color: #fff !important;">
                                Technical
                                </router-link>
                            </a>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
        <b-modal id="showReferenceCode" no-close-on-backdrop no-close-on-esc hide-header-close ref="showReferenceCode" hide-footer title="TICKET SUBMITTED SUCCESFULLY">
            <div class="d-block text-center">
                <span style="margin-bottom:5px">
                    Please secure a copy of your Reference Code for follow up.
                </span>
                <input type="text" v-model="this.ticketData_update.reference_code" id="myInput" disabled style="color:black; font-weight: bold; ">
            </div>
            <b-button class="mt-3" variant="info" block @click="copyReferenceCode()">Copy</b-button>
            <b-button class="mt-3" variant="danger" block @click="closeReferenceCode()">Close</b-button>
        </b-modal>
        <b-modal id="showErrorModal" no-close-on-backdrop no-close-on-esc hide-header-close ref="showErrorModal" hide-footer title="Employee ID does not exist! Please enter a valid Employee ID">
            <div class="d-block text-center">
                <!-- Employee ID does not exist! Please enter a valid Employee ID -->
            </div>
            <b-button class="mt-3" variant="danger" block @click="okayErrorModal()">Okay</b-button>
        </b-modal>
        <!-- Track Section-->
        <section class="masthead page-section bg-secondary text-white mb-0" id="track">
            <div class="container">
                <!-- About Section Heading-->
                <h2 class="page-section-heading text-center text-uppercase text-white">Track your request</h2>
                <!-- Icon Divider-->
                <div class="divider-custom divider-light">
                    <div class="divider-custom-line"></div>
                    <div class="divider-custom-icon"><i class="fas fa-star"></i></div>
                    <div class="divider-custom-line"></div>
                </div>
                <!-- About Section Content-->
                <div class="row">
                    <b-form class="loginn-form" v-on:submit.prevent="getTicketStatus">
                            <b-form-group class="group">
                                <b-form-input id="referenceCode" v-model="ticketData.referenceCode" type="text" class="input" style="border: 1px solid #ced4da !important;"></b-form-input>
                            </b-form-group>
                            <b-form-group class="group">
                                <b-button type="submit" class="track-btn" variant="outline-info" style="background: #2384b3 !important; width: 100%; color:white">Track</b-button>
                            </b-form-group>
                    </b-form>
                </div>
            </div>
        </section>
        <b-modal id="showDetails_internal" ref="showDetails_internal" hide-footer title="TICKET INFORMATION"  size="xl">
            <span style="font-weight: bold"> STATUS</span>
            <b-table 
                :items="ticket"
                :fields="fields4"
                :sort-by.sync="sortBy"
                :sort-desc.sync="sortDesc"
                sort-icon-left
                responsive="sm"
                :filter="filterOn"
                :current-page="currentPage"
                :per-page="perPage"
                :filter-included-fields="filterOn">
                <template #cell(status)="row">
                    <!-- PENDING -->
                    <div v-if="row.item.status === 'New'">
                        <b-container fluid class="bv-example-row">
                            <b-row>
                                <b-col cols="12" style="">
                                    <div class="stepper-wrapper">
                                        <div class="stepper-item active">
                                            <div class="step-counter"><b>1</b></div>
                                            <div class="step-name"><b>PENDING</b></div>
                                        </div>
                                        <div class="stepper-item ">
                                            <div class="step-counter"><b>2</b></div>
                                            <div class="step-name">APPROVED</div>
                                        </div>
                                        <div class="stepper-item">
                                            <div class="step-counter"><b>3</b></div>
                                            <div class="step-name">IN PROGRESS</div>
                                        </div>
                                        <div class="stepper-item">
                                            <div class="step-counter"><b>4</b></div>
                                            <div class="step-name">COMPLETED</div>
                                        </div>
                                    </div>
                                </b-col>
                            </b-row>
                        </b-container>
                    </div>
                    <!-- APPROVED -->
                    <div v-if="row.item.status === 'Approved'">
                        <b-container fluid class="bv-example-row">
                            <b-row>
                                <b-col cols="12" style="">
                                    <div class="stepper-wrapper">
                                        <div class="stepper-item completed">
                                            <div class="step-counter"><b>1</b></div>
                                            <div class="step-name"><b>PENDING</b></div>
                                        </div>
                                        <div class="stepper-item active">
                                            <div class="step-counter"><b>2</b></div>
                                            <div class="step-name"><b>APPROVED</b></div>
                                        </div>
                                        <div class="stepper-item">
                                            <div class="step-counter"><b>3</b></div>
                                            <div class="step-name">IN PROGRESS</div>
                                        </div>
                                        <div class="stepper-item">
                                            <div class="step-counter"><b>4</b></div>
                                            <div class="step-name">COMPLETED</div>
                                        </div>
                                    </div>
                                </b-col>
                            </b-row>
                        </b-container>
                    </div>
                    <!-- IN PROGRESS -->
                    <div v-if="row.item.status === 'In Progress'">
                        <b-container fluid class="bv-example-row">
                            <b-row>
                                <b-col cols="12" style="">
                                    <div class="stepper-wrapper">
                                        <div class="stepper-item completed">
                                            <div class="step-counter"><b>1</b></div>
                                            <div class="step-name"><b>PENDING</b></div>
                                        </div>
                                        <div class="stepper-item completed">
                                            <div class="step-counter"><b>2</b></div>
                                            <div class="step-name"><b>APPROVED</b></div>
                                        </div>
                                        <div class="stepper-item active">
                                            <div class="step-counter"><b>3</b></div>
                                            <div class="step-name"><b>IN PROGRESS</b></div>
                                        </div>
                                        <div class="stepper-item">
                                            <div class="step-counter"><b>4</b></div>
                                            <div class="step-name">COMPLETED</div>
                                        </div>
                                    </div>
                                </b-col>
                            </b-row>
                        </b-container>
                    </div>
                    <!-- COMPLETED -->
                    <div v-if="row.item.status === 'Completed'">
                        <b-container fluid class="bv-example-row">
                            <b-row>
                                <b-col cols="12" style="" >
                                    <div class="stepper-wrapper text-center">
                                        <div class="stepper-item completed">
                                            <div class="step-counter"><b>1</b></div>
                                            <div class="step-name"><b>PENDING</b></div>
                                        </div>
                                        <div class="stepper-item completed">
                                            <div class="step-counter"><b>2</b></div>
                                            <div class="step-name"><b>APPROVED</b></div>
                                        </div>
                                        <div class="stepper-item completed">
                                            <div class="step-counter"><b>3</b></div>
                                            <div class="step-name"><b>IN PROGRESS</b></div>
                                        </div>
                                        <div class="stepper-item completed">
                                            <div class="step-counter"><b>4</b></div>
                                            <div class="step-name"><b>COMPLETED</b></div>
                                        </div>
                                    </div>
                                </b-col>
                            </b-row>
                        </b-container>
                    </div>
                </template>
            </b-table>
            <span style="font-weight: bold"> DETAILS </span>
            <b-table 
                :items="ticket"
                :fields="fields2"
                :sort-by.sync="sortBy"
                :sort-desc.sync="sortDesc"
                sort-icon-left
                responsive="sm"
                :filter="filterOn"
                :current-page="currentPage"
                :per-page="perPage"
                :filter-included-fields="filterOn">
                <template #cell(reference_code)="row">
                    <span style="color: #28a228"><b>{{ row.value}}</b></span>
                </template>
                <template #cell(externalName)="row">
                    {{ row.value.toUpperCase()}}
                </template>
                <template #cell(supportType)="row">
                    <b style="color:rgb(35, 132, 179)">{{ row.value}}</b>
                </template>
            </b-table>
            <span style="font-weight: bold"> TECHNICAL STAFF </span>
            <b-table 
                :items="ticket"
                :fields="fields5"
                :sort-by.sync="sortBy"
                :sort-desc.sync="sortDesc"
                sort-icon-left
                responsive="sm"
                :filter="filterOn"
                :current-page="currentPage"
                :per-page="perPage"
                :filter-included-fields="filterOn">
                <template #cell(approved_by)="row">
                    <div v-if="row.item.approved_by === ''">
                        Not yet approved
                    </div>
                    <div v-else>
                        <div style="font-style: italic">{{ row.value}}</div>
                    </div>
                </template>
                <template #cell(assignedStaff)="row">
                    <div v-if="row.item.assignedStaff === ''">
                        -
                    </div>
                    <div v-else>
                        <div style="font-style: italic">{{ row.value}}</div>
                    </div>
                </template>
            </b-table>
            <span style="font-weight: bold"> TRACKING </span>
            <b-table 
                :items="ticket"
                :fields="fields3"
                :sort-by.sync="sortBy"
                :sort-desc.sync="sortDesc"
                sort-icon-left
                responsive="sm"
                :filter="filterOn"
                :current-page="currentPage"
                :per-page="perPage"
                :filter-included-fields="filterOn">
            </b-table>
        </b-modal>
        <b-modal id="showDetails_external" ref="showDetails_external" hide-footer title="TICKET INFORMATION"  size="xl">
            <span style="font-weight: bold"> STATUS</span>
            <b-table 
                :items="ticket"
                :fields="fields4"
                :sort-by.sync="sortBy"
                :sort-desc.sync="sortDesc"
                sort-icon-left
                responsive="sm"
                :filter="filterOn"
                :current-page="currentPage"
                :per-page="perPage"
                :filter-included-fields="filterOn">
                <template #cell(status)="row">
                    <!-- PENDING -->
                    <div v-if="row.item.status === 'New'">
                        <b-container fluid class="bv-example-row">
                            <b-row>
                                <b-col cols="12" style="">
                                    <div class="stepper-wrapper">
                                        <div class="stepper-item active">
                                            <div class="step-counter"><b>1</b></div>
                                            <div class="step-name"><b>PENDING</b></div>
                                        </div>
                                        <div class="stepper-item ">
                                            <div class="step-counter"><b>2</b></div>
                                            <div class="step-name">APPROVED</div>
                                        </div>
                                        <div class="stepper-item">
                                            <div class="step-counter"><b>3</b></div>
                                            <div class="step-name">IN PROGRESS</div>
                                        </div>
                                        <div class="stepper-item">
                                            <div class="step-counter"><b>4</b></div>
                                            <div class="step-name">COMPLETED</div>
                                        </div>
                                    </div>
                                </b-col>
                            </b-row>
                        </b-container>
                    </div>
                    <!-- APPROVED -->
                    <div v-if="row.item.status === 'Approved'">
                        <b-container fluid class="bv-example-row">
                            <b-row>
                                <b-col cols="12" style="">
                                    <div class="stepper-wrapper">
                                        <div class="stepper-item completed">
                                            <div class="step-counter"><b>1</b></div>
                                            <div class="step-name"><b>PENDING</b></div>
                                        </div>
                                        <div class="stepper-item active">
                                            <div class="step-counter"><b>2</b></div>
                                            <div class="step-name"><b>APPROVED</b></div>
                                        </div>
                                        <div class="stepper-item">
                                            <div class="step-counter"><b>3</b></div>
                                            <div class="step-name">IN PROGRESS</div>
                                        </div>
                                        <div class="stepper-item">
                                            <div class="step-counter"><b>4</b></div>
                                            <div class="step-name">COMPLETED</div>
                                        </div>
                                    </div>
                                </b-col>
                            </b-row>
                        </b-container>
                    </div>
                    <!-- IN PROGRESS -->
                    <div v-if="row.item.status === 'In Progress'">
                        <b-container fluid class="bv-example-row">
                            <b-row>
                                <b-col cols="12" style="">
                                    <div class="stepper-wrapper">
                                        <div class="stepper-item completed">
                                            <div class="step-counter"><b>1</b></div>
                                            <div class="step-name"><b>PENDING</b></div>
                                        </div>
                                        <div class="stepper-item completed">
                                            <div class="step-counter"><b>2</b></div>
                                            <div class="step-name"><b>APPROVED</b></div>
                                        </div>
                                        <div class="stepper-item active">
                                            <div class="step-counter"><b>3</b></div>
                                            <div class="step-name"><b>IN PROGRESS</b></div>
                                        </div>
                                        <div class="stepper-item">
                                            <div class="step-counter"><b>4</b></div>
                                            <div class="step-name">COMPLETED</div>
                                        </div>
                                    </div>
                                </b-col>
                            </b-row>
                        </b-container>
                    </div>
                    <!-- COMPLETED -->
                    <div v-if="row.item.status === 'Completed'">
                        <b-container fluid class="bv-example-row">
                            <b-row>
                                <b-col cols="12" style="" >
                                    <div class="stepper-wrapper text-center">
                                        <div class="stepper-item completed">
                                            <div class="step-counter"><b>1</b></div>
                                            <div class="step-name"><b>PENDING</b></div>
                                        </div>
                                        <div class="stepper-item completed">
                                            <div class="step-counter"><b>2</b></div>
                                            <div class="step-name"><b>APPROVED</b></div>
                                        </div>
                                        <div class="stepper-item completed">
                                            <div class="step-counter"><b>3</b></div>
                                            <div class="step-name"><b>IN PROGRESS</b></div>
                                        </div>
                                        <div class="stepper-item completed">
                                            <div class="step-counter"><b>4</b></div>
                                            <div class="step-name"><b>COMPLETED</b></div>
                                        </div>
                                    </div>
                                </b-col>
                            </b-row>
                        </b-container>
                    </div>
                </template>
            </b-table>
            <span style="font-weight: bold"> DETAILS </span>
            <b-table 
                :items="ticket"
                :fields="fields2_external"
                :sort-by.sync="sortBy"
                :sort-desc.sync="sortDesc"
                sort-icon-left
                responsive="sm"
                :filter="filterOn"
                :current-page="currentPage"
                :per-page="perPage"
                :filter-included-fields="filterOn">
                <template #cell(reference_code)="row">
                    <span style="color: #28a228"><b>{{ row.value}}</b></span>
                </template>
                <template #cell(externalName)="row">
                    {{ row.value.toUpperCase()}}
                </template>
                <template #cell(supportType)="row">
                    <b style="color:rgb(35, 132, 179)">{{ row.value}}</b>
                </template>
            </b-table>
            <span style="font-weight: bold"> TECHNICAL STAFF </span>
            <b-table 
                :items="ticket"
                :fields="fields5"
                :sort-by.sync="sortBy"
                :sort-desc.sync="sortDesc"
                sort-icon-left
                responsive="sm"
                :filter="filterOn"
                :current-page="currentPage"
                :per-page="perPage"
                :filter-included-fields="filterOn">
                <template #cell(approved_by)="row">
                    <div v-if="row.item.approved_by === ''">
                        Not yet approved
                    </div>
                    <div v-else>
                        <div style="font-style: italic">{{ row.value}}</div>
                    </div>
                </template>
                <template #cell(assignedStaff)="row">
                    <div v-if="row.item.assignedStaff === ''">
                        -
                    </div>
                    <div v-else>
                        <div style="font-style: italic">{{ row.value}}</div>
                    </div>
                </template>
            </b-table>
            <span style="font-weight: bold"> TRACKING </span>
            <b-table 
                :items="ticket"
                :fields="fields3"
                :sort-by.sync="sortBy"
                :sort-desc.sync="sortDesc"
                sort-icon-left
                responsive="sm"
                :filter="filterOn"
                :current-page="currentPage"
                :per-page="perPage"
                :filter-included-fields="filterOn">
            </b-table>
        </b-modal>
        <!-- Footer-->
        <footer class="footer text-center">
            <div class="container">
                <div class="row">
                    <!-- Footer Location-->
                    <div class="col-lg-6 mb-5 mb-lg-0">
                        <h4 class="text-uppercase mb-4">Location</h4>
                        <p class="lead mb-0">
                            DOST-STII Building
                            <br />
                            DOST Compound, Gen. Santos Avenue
                            <br />
                            Bicutan 1631, Taguig, Metro Manila
                        </p>
                    </div>
                    <!-- Footer Social Icons-->
                    <!-- <div class="col-lg-4 mb-5 mb-lg-0">
                        <h4 class="text-uppercase mb-4">Around the Web</h4>
                        <a class="btn btn-outline-light btn-social mx-1" href="#!"><i class="fab fa-fw fa-facebook-f"></i></a>
                        <a class="btn btn-outline-light btn-social mx-1" href="#!"><i class="fab fa-fw fa-twitter"></i></a>
                        <a class="btn btn-outline-light btn-social mx-1" href="#!"><i class="fab fa-fw fa-linkedin-in"></i></a>
                        <a class="btn btn-outline-light btn-social mx-1" href="#!"><i class="fab fa-fw fa-dribbble"></i></a>
                    </div> -->
                    <!-- Footer About Text-->
                    <div class="col-lg-6 mb-5 mb-lg-0">
                        <h4 class="text-uppercase mb-4">Around the Web</h4>
                        <a class="btn btn-outline-light btn-social mx-1" href="https://www.facebook.com/dost.stii" target="_blank"><i class="fab fa-fw fa-facebook-f"></i></a>
                        <a class="btn btn-outline-light btn-social mx-1" href="https://stii.dost.gov.ph/" target="_blank"><i class="fab fa-fw fa-dribbble"></i></a>
                    </div>
                    <!-- <div class="col-lg-4">
                        <h4 class="text-uppercase mb-4">About Freelancer</h4>
                        <p class="lead mb-0">
                            Freelance is a free to use, MIT licensed Bootstrap theme created by
                            <a href="http://startbootstrap.com">Start Bootstrap</a>
                            .
                        </p>
                    </div> -->
                </div>
            </div>
        </footer>
			<FlashMessage></FlashMessage>
</div>
</template>
<style>
    #sub-btn:hover, .track-btn:hover{
        color:rgb(233, 229, 229) !important;
        box-shadow: 3px 5px #babcc0;
    }
	
</style>

<script type="text/javascript">
import * as ticket_service from '../services/ticket_service';

export default {
    data() {
        return {
            selected: null,
            options_supportType: [
                { value: null, text: 'Please select an option', disabled: true },
                { value: 'Technical Support', text: 'Technical Support' },
                { value: 'Livestream', text: 'Livestream' },
                { value: 'IS', text: 'Information System' },
                { value: 'TWG', text: 'Technical Working Group' }
            ],
            options_supportType_external: [
                { value: null, text: 'Please select an option', disabled: true },
                { value: 'Livestream', text: 'Livestream' },
                { value: 'Other', text: 'Other' }
            ],
            options_sex: [
                { value: null, text: 'Please select an option', disabled: true },
                { value: 'Male', text: 'Male' },
                { value: 'Female', text: 'Female' },
            ],
            variants: ['primary', 'secondary', 'success', 'warning', 'danger', 'info', 'light', 'dark'],
            headerBgVariant: 'dark',
            headerTextVariant: 'light',
            bodyBgVariant: 'light',
            bodyTextVariant: 'dark',
            footerBgVariant: 'warning',
            footerTextVariant: 'dark',
			ref_code:'',
            note_:'',
			ticket: [],
			ticketData:{
				status:'',
				reference_code:''
			},
            ticketDetails: [],
            empName: '',
            empSex: '',
            empDiv: '',
            empEmail: '',
            internal_external:'',
			ticketDataStatus:{
				employee_code:'',
				type:'',
				hardware:'',
				software:'',
				note:'',
				reference_code:''
			},
			selected: '',
			ticketData_update:{
				reference_code:''
			},
			errors : '',
            totalRows: 1,
            currentPage: 1,
            perPage: 10,
            filterOn: [],
            filter: null,
            sortDirection: 'desc',
            sortBy: 'id',
            sortDesc: true,
            fields2: [
                { key: 'reference_code', label: 'Reference Code'},
                { key: 'externalName', label: 'Requested By'},
                { key: 'supportType', label: 'Request Type'},
                { key: 'clientNote', label: 'Concern'},
            ],
            fields2_external: [
                { key: 'reference_code', label: 'Reference Code'},
                { key: 'externalName', label: 'Requested By'},
                { key: 'supportType', label: 'Request Type'},
                { key: 'externalAgency', label: 'Agency'},
                { key: 'externalStartDate', label: 'Start Date'},
                { key: 'externalEndDate', label: 'End Date'},
                { key: 'externalEventTitle', label: 'Event Title'},
                { key: 'clientNote', label: 'Remarks'},
            ],
            fields3: [
                { key: 'ticket_created', label: 'Date Submitted'},
                { key: 'ticket_approved', label: 'Date Approved/Assigned'},
                { key: 'ticket_attended', label: 'Date Attended'},
                { key: 'ticket_completed', label: 'Date Completed'},
            ],
            fields4: [
                { key: 'status', label: ''},
            ],
            fields5: [
                { key: 'approved_by', label: 'Approved By'},
                { key: 'assignedStaff', label: 'Assigned To'},
                { key: 'tech_remarks', label: 'Note'},
            ],
		}
    },
    mounted() {
    },
	computed:{
	},
    methods: {
		switchSelect_ITURequestType(event) {
			this.selected = event.target.value;
			if(this.selected == "Other"){ 
				document.getElementById("form_RequestTypeOther").style.display = "block"; 
			} 
			else if(this.selected == "Livestream"){ 
				document.getElementById("form_RequestTypeOther").style.display = "none"; 
			}
			else if(this.selected == "Technical Support"){ 
				document.getElementById("form_RequestTypeOther").style.display = "none"; 
			}
			else if(this.selected == "Information System"){ 
				document.getElementById("form_RequestTypeOther").style.display = "none"; 
			}
			else if(this.selected == "TWG"){ 
				document.getElementById("form_RequestTypeOther").style.display = "none"; 
			}
		},
        createTicket: async function() {
			const date = new Date();
			const months = [
				'January',
				'February',
				'March',
				'April',
				'May',
				'June',
				'July',
				'August',
				'September',
				'October',
				'November',
				'December'
				];
			const monthIndex = date.getMonth()
			const monthName = months[monthIndex]
			let currentDay= String(date.getDate()).padStart(2, '0');
			let currentMonth = String(date.getMonth()+1).padStart(2,"0");
			let currentYear = date.getFullYear();
			let time = date.getHours() + "" + date.getMinutes() + "" + date.getSeconds();
			let date_ticketCreated = monthName + " " + currentDay + " " + currentYear;
            let getHours = date.getHours();
            let getMinutes = date.getMinutes();
            let getSeconds = date.getSeconds();
            // Check whether AM or PM
            let newformat = getHours >= 12 ? 'PM' : 'AM';
            // Find current hour in AM-PM Format
            getHours = getHours % 12;
            // To display "0" as "12"
            getHours = getHours ? getHours : 12;
            getMinutes = getMinutes < 10 ? '0' + getMinutes : getMinutes;
			let date_ticketCreatedComplete = monthName + " " + currentDay + " " + currentYear + " " + getHours + ":" + getMinutes + " " + newformat;
			
			let currentDateTime = currentYear + "-" + currentMonth + "-" + currentDay;

			const countEntry_data = await ticket_service.countEntry(date_ticketCreated);
			let totalEntry = countEntry_data.data;
			let new_totalEntry = totalEntry + 1;
            
			if (new_totalEntry < 10){
				this.ref_code = currentYear + currentMonth + currentDay + "-" + "00" + new_totalEntry;
			} else if (new_totalEntry >= 10){
				this.ref_code = currentYear + currentMonth + currentDay + "-" + "0" + new_totalEntry;
			}

			const empID = await ticket_service.validateEmpID(this.ticketData.employee_code);
			let _govType = empID.data;

            if (_govType == 1){ // 1 if STII Employee
                try {
                    const empID_1 = await ticket_service.getEmpDetails(this.ticketData.employee_code);
                    this.ticketDetails = empID_1.data[0];
                    this.empName = this.ticketDetails.fname + " " + this.ticketDetails.lname ;
                    this.empSex = this.ticketDetails.sex
                    this.empEmail = this.ticketDetails.email
                    let div_id = this.ticketDetails.division_id;
                    if (div_id == "1"){
                        this.empDiv = "FAD";
                    } else if (div_id == "2"){
                        this.empDiv = "IRAD";
                    } else if (div_id == "3"){
                        this.empDiv = "CRPD";
                    }else if (div_id == "4"){
                        this.empDiv = "OD-MISPS";
                    }

                    let formData_ticketData = new FormData();
                    formData_ticketData.append('date1', currentDateTime); //date requested
                    formData_ticketData.append('employee_code', this.ticketData.employee_code);
                    formData_ticketData.append('sex', this.empSex);
                    formData_ticketData.append('concerned_division', "OD-MISPS");
                    formData_ticketData.append('concerned_section', "ITU");
                    formData_ticketData.append('clientNote', this.ticketData.clientNote);
                    formData_ticketData.append('supportType', this.ticketData.supportType);

                    formData_ticketData.append('reference_code', this.ref_code);
                    formData_ticketData.append('ticket_created', date_ticketCreatedComplete);
                    formData_ticketData.append('internal_external', "Internal");
                    formData_ticketData.append('mode', "Service Form");
                    formData_ticketData.append('externalName', this.empName);
                    formData_ticketData.append('empDiv', this.empDiv);
                    formData_ticketData.append('empEmail', this.empEmail);
                    formData_ticketData.append('clientType', "Government");
            
                    this.ticketData_update.reference_code = this.ref_code;

                    let formData_ticketDataStatus = new FormData();
                    formData_ticketDataStatus.append('status', 'New');
                    formData_ticketDataStatus.append('entry_date', date_ticketCreated);
                    formData_ticketDataStatus.append('reference_code', this.ref_code);

                    const response_ticketData = await ticket_service.addTicket_internal(formData_ticketData);
                    const response_ticketDataStatus = await ticket_service.addTicketStatus_Pending(formData_ticketDataStatus);
                }
                catch (error) {
                    this.flashMessage.warning({
                        message: 'Please fill out the form!'
                    });
                    console.log("Please fill out the form!");
                }

                this.$refs.requestModalForm_internal.hide()
                this.$refs.showReferenceCode.show() 
                
                this.flashMessage.success({
                    message: 'Ticket Submitted Successfully!'
                });
                console.log("Ticket Submitted Successfully!");
            }
            else if (_govType == 0){ // 0 employee id not found; not STII employee
                this.flashMessage.warning({
                    message: 'Employee ID does not exist! Please enter a valid Employee ID'
                });
                console.log("Employee ID does not exist! Please enter a valid Employee ID");
                
                this.$refs.showErrorModal.show() 
                    
            }
        },
        createTicket_external: async function() {
			const date = new Date();
			const months = [
				'January',
				'February',
				'March',
				'April',
				'May',
				'June',
				'July',
				'August',
				'September',
				'October',
				'November',
				'December'
				];
			const monthIndex = date.getMonth()
			const monthName = months[monthIndex]
			let currentDay= String(date.getDate()).padStart(2, '0');
			let currentMonth = String(date.getMonth()+1).padStart(2,"0");
			let currentYear = date.getFullYear();
			let time = date.getHours() + "" + date.getMinutes() + "" + date.getSeconds();
			let date_ticketCreated = monthName + " " + currentDay + " " + currentYear;
            let getHours = date.getHours();
            let getMinutes = date.getMinutes();
            let getSeconds = date.getSeconds();
            // Check whether AM or PM
            let newformat = getHours >= 12 ? 'PM' : 'AM';
            // Find current hour in AM-PM Format
            getHours = getHours % 12;
            // To display "0" as "12"
            getHours = getHours ? getHours : 12;
            getMinutes = getMinutes < 10 ? '0' + getMinutes : getMinutes;
			let date_ticketCreatedComplete = monthName + " " + currentDay + " " + currentYear + " " + getHours + ":" + getMinutes  + " " + newformat;
			
			let currentDateTime = currentYear + "-" + currentMonth + "-" + currentDay;

			const countEntry_data = await ticket_service.countEntry(date_ticketCreated);
			let totalEntry = countEntry_data.data;
			let new_totalEntry = totalEntry + 1;
			if (new_totalEntry < 10){
				this.ref_code = currentYear + currentMonth + currentDay + "-" + "00" + new_totalEntry;
			} else if (new_totalEntry >= 10){
				this.ref_code = currentYear + currentMonth + currentDay + "-" + "0" + new_totalEntry;
			}

            let finalName = this.ticketData.fName + " " + this.ticketData.mName + " " + this.ticketData.lName;
            

            try {
                let formData_ticketData = new FormData();
                formData_ticketData.append('date1', currentDateTime);
                formData_ticketData.append('externalName', finalName);
                formData_ticketData.append('sex', this.ticketData.sex);
                formData_ticketData.append('externalAgency', this.ticketData.externalAgency);
                formData_ticketData.append('externalStartDate', this.ticketData.externalStartDate);
                formData_ticketData.append('externalEndDate', this.ticketData.externalEndDate);
                formData_ticketData.append('externalEventTitle', this.ticketData.externalEventTitle);
                formData_ticketData.append('supportType', this.ticketData.supportType);
                formData_ticketData.append('externalOtherType', this.ticketData.externalOtherType);
                formData_ticketData.append('clientNote', this.ticketData.clientNote);

                
                formData_ticketData.append('reference_code', this.ref_code);
                formData_ticketData.append('ticket_created', date_ticketCreatedComplete);
                formData_ticketData.append('internal_external', "External");
                formData_ticketData.append('mode', "Online Form");
                formData_ticketData.append('clientType', "Government");

                this.ticketData_update.reference_code = this.ref_code;
                let formData_ticketDataStatus = new FormData();
                formData_ticketDataStatus.append('status', 'New');
                formData_ticketDataStatus.append('entry_date', date_ticketCreated);
                formData_ticketDataStatus.append('reference_code', this.ref_code);
                const response_ticketData = await ticket_service.addTicket_external(formData_ticketData);
                const response_ticketDataStatus = await ticket_service.addTicketStatus_Pending(formData_ticketDataStatus);

                document.getElementById("form_RequestTypeOther").style.display = "none"; 

            } catch (error) {
                this.flashMessage.warning({
                    message: 'Please fill out the form!'
                });
                console.log("Please fill out the form!");
            }
            this.$refs.requestModalForm_external.hide()
            this.$refs.showReferenceCode.show() 
          
                    
            // document.getElementById("form_RequestTypeOther").style.display = "none"; 

            this.flashMessage.success({
                    message: 'Ticket Submitted Successfully!'
            });
            console.log("Ticket Submitted Successfully!");
        },
		copyReferenceCode(){
			var copyText = document.getElementById("myInput");
			copyText.select();
			copyText.setSelectionRange(0, 99999); 
			navigator.clipboard.writeText(copyText.value);

            this.flashMessage.success({
                message: 'Reference Code Copied Successfully!'
            });
            console.log("Reference Code Copied Successfully!");
		},
		closeReferenceCode(){
            window.location.reload();
		},
		okayErrorModal(){
            window.location.reload();
		},
        openRequestModalForm_internal(){
            this.$refs.requestModalForm_internal.show()
        },
        openRequestModalForm_external(){
            this.$refs.requestModalForm_external.show()
        },
        getTicketStatus: async function() {
			let ref_code = this.ticketData.referenceCode;

            const refCode = await ticket_service.validateRefCode(ref_code);
            let _refCode = refCode.data
            const refCodeDetails = await ticket_service.validateRefCodeDetails(ref_code);
            let _refCodeDetails = refCodeDetails.data[0];
            this.internal_external = _refCodeDetails.internal_external;

            if (_refCode == 1){
                try{
                    const response = await ticket_service.getTicketStatus(ref_code);

                    this.ticket = response.data;
                } catch(error) {
                    this.flashMessage.error({
                    message: 'Some error occured! Please try again.',
                    time: 5000
                    });
                }
                
                if (this.internal_external === "Internal"){
                    this.$refs['showDetails_internal'].show();
                }else if (this.internal_external === "External"){
                    this.$refs['showDetails_external'].show();
                }
            }
            else if (_refCode == 0){
                this.flashMessage.warning({
                    message: 'Reference Code does not exist! Please enter a valid Reference Code'
                });
            }

        }
    }
}
</script>
