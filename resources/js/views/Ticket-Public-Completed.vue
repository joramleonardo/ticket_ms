<template>
  <div class="container-fluid">
    <h1 class="mt-4 admin-header-title">FEEDBACK LINKS</h1>
    <div class="breakcrumbs mt-3">
        Home > <span class="admin-sub-header-title">FEEDBACK LINKS</span>
    </div>
    <div class="row mt-4">
        <div class="col-xl-12">
        <b-card class="m-2">
            <div class="row  mb-3">
                <div class="col-md-2 col-lg-2 mb-0">
                    <label style="font-weight: 900">Spreadsheet Monitoring Links: </label>
                </div>
                <div class="col-md-4 col-lg-4 mb-0">
                    <b-button size="sm" class="mr-1 jkl-btn-view btn-monitoring"><a style="text-decoration: none; color: white" target="_blank" href="https://docs.google.com/spreadsheets/d/1JTtVD-3g5v_CXW_LQKx4QN723VDUaDF4q7uK97ApKdE/edit?usp=sharing"> Internal Client</a></b-button>
                    <b-button size="sm" class="mr-1 jkl-btn-view btn-monitoring"><a style="text-decoration: none; color: white" target="_blank" href="https://docs.google.com/spreadsheets/d/1Ssy0jOSvLbr1kQ0U8YGAPelXP1bzV222F3d3K9DcAgI/edit?usp=sharing"> External Client</a></b-button>
                </div>
            </div>
                    <b-container fluid>
                            <b-row class="mb-3">
                                <b-col lg="5" class="my-1">
                                    <b-form-group label="Filter" label-for="filter-input" label-cols-sm="3" label-align-sm="right" label-size="sm" class="mb-0" >
                                        <b-input-group size="sm">
                                            <b-form-input id="filter-input" v-model="filter" type="search" placeholder="Type to Search" ></b-form-input>
                                            <b-input-group-append>
                                                <b-button :disabled="!filter" @click="filter = ''">Clear</b-button>
                                            </b-input-group-append>
                                        </b-input-group>
                                    </b-form-group>
                                </b-col>
                                <!-- <b-col lg="3" class="my-1">
                                    <b-form-group label="Per page" label-for="per-page-select" label-cols-sm="6" label-cols-md="4" label-cols-lg="3" label-align-sm="right" label-size="sm" class="mb-0">
                                        <b-form-select id="per-page-select" v-model="perPage" :options="pageOptions" size="sm"></b-form-select>
                                    </b-form-group>
                                </b-col> -->
                                <b-col lg="2" class="my-1">
                                    <b-form-group label="Sort" label-for="sort-by-select" label-cols-sm="3" label-align-sm="right" label-size="sm" class="mb-0" v-slot="{ ariaDescribedby }">
                                        <b-input-group size="sm">
                                            <!-- <b-form-select id="sort-by-select" v-model="sortBy" :options="sortOptions" :aria-describedby="ariaDescribedby" class="w-75">
                                                <template #first>
                                                <option value="">-- none --</option>
                                                </template>
                                            </b-form-select> -->

                                            <b-form-select v-model="sortDesc" :disabled="!sortBy" :aria-describedby="ariaDescribedby" size="sm" class="w-25">
                                                <option :value="false">Asc</option>
                                                <option :value="true">Desc</option>
                                            </b-form-select>
                                        </b-input-group>
                                    </b-form-group>
                                </b-col>
                            </b-row>
                                <b-table striped hover 
                                :items="ticket"
                                :fields="fields"
                                :current-page="currentPage"
                                :per-page="perPage"
                                :filter="filter"
                                :filter-included-fields="filterOn"
                                :sort-by.sync="sortBy"
                                :sort-desc.sync="sortDesc"
                                :sort-direction="sortDirection"
                                stacked="md"
                                show-empty
                                >
                                    <template #cell(supportType)="row">
                                        <b style="color:rgb(35, 132, 179)">{{ row.value}}</b>
                                    </template>
                                    <template #cell(reference_code)="row">
                                        <b>{{ row.value}}</b>
                                    </template>
                                    <template #cell(priority)="row">
                                        <div v-if="row.item.priority === 'Low'">
                                            <b-badge class="mr-1 badge" variant="primary">LOW</b-badge>
                                        </div>
                                        <div v-if="row.item.priority === 'Medium'">
                                            <b-badge class="mr-1 badge" variant="warning">MEDIUM</b-badge>
                                        </div>
                                        <div v-if="row.item.priority === 'Urgent'">
                                            <b-badge class="mr-1 badge" variant="danger">URGENT</b-badge>
                                        </div>
                                    </template>
                                    <template #cell(externalName)="row">
                                        {{ row.value.toUpperCase()}}
                                    </template>
                                    <template #cell(internal_external)="row">
                                        <div v-if="row.item.internal_external === 'Internal'">
                                            <b-badge class="mr-1 badge" variant="success">Internal</b-badge>
                                        </div>
                                        <div v-if="row.item.internal_external === 'External'">
                                            <b-badge class="mr-1 badge" variant="primary">External</b-badge>
                                        </div>
                                    </template>
                                    <!-- <template #cell(received)="row">
                                        <div v-if="row.item.feedback_status === 'Pending'">
                                            <b-button @click="setStatus(row.item, row.index, $event.target)" size="sm" class="mr-1 jkl-btn-view" style="background-color: rgb(21, 202, 32) !important;">Received</b-button>
                                        </div>
                                        <div v-if="row.item.feedback_status === 'Received'">
                                            <b-button disabled size="sm" class="mr-1 jkl-btn-view" style="background-color: rgb(21, 202, 32) !important;">Received</b-button>
                                        </div>
                                        
                                    </template> -->
                                    <template #cell(satisfaction)="row">
                                        <div v-if="row.item.rating_status === 'Pending'">
                                            <router-link target="_blank" :to="{name: 'rating', params: {id: row.item.id}}">
                                                <b-button size="sm" class="mr-1 jkl-btn-view btn-submit-rating">Submit Rating</b-button>
                                            </router-link>
                                        </div>
                                        <div v-if="row.item.rating_status === 'Received'">
                                            <b-button disabled size="sm" class="mr-1 jkl-btn-view" style="background-color: rgb(21, 202, 32) !important;">Received</b-button>
                                        </div>
                                    </template>
                                    <template #cell(arta)="row">
                                        <div v-if="row.item.feedback_status === 'Pending'">
                                            <b-button @click="showLink(row.item, row.index, $event.target)" size="sm" class="mr-1 jkl-btn-view btn-copy-arta-link">Copy Link</b-button>
                                            <!-- <b-button @click="setStatus(row.item, row.index, $event.target)" size="sm" class="mr-1 jkl-btn-view" style="background-color: rgb(21, 202, 32) !important;"><i class="fa fa-check" aria-hidden="true"></i></b-button> -->
                                        </div>
                                        <div v-if="row.item.feedback_status === 'Received'">
                                           <b-button disabled size="sm" class="mr-1 jkl-btn-view btn-copy-arta-link">Copy Link</b-button>
                                           <!-- <b-button disabled size="sm" class="mr-1 jkl-btn-view" style="background-color: rgb(21, 202, 32) !important;"><i class="fa fa-check" aria-hidden="true"></i></b-button> -->
                                        </div>
                                        
                                    </template>
                                    <template #cell(feedback_status)="row">
                                        <div v-if="row.item.feedback_status === 'Pending'">
                                            <b-button @click="setStatus(row.item, row.index, $event.target)" size="sm" class="mr-1 jkl-btn-view" style="background-color: rgb(21, 202, 32) !important;"><i class="fa fa-check" aria-hidden="true"></i></b-button>
                                        </div>
                                        <div v-if="row.item.feedback_status === 'Received'">
                                            <b-button disabled size="sm" class="mr-1 jkl-btn-view" style="background-color: rgb(21, 202, 32) !important;"><i class="fa fa-check" aria-hidden="true"></i></b-button>
                                        </div>
                                    </template>
                                    <template #cell(details)="row">
                                        <!-- <b-button @click="completeTicket(row.item, row.index, $event.target)" size="sm" class="mr-1 jkl-btn-view-details btn-edit">Edit</b-button> -->
                                        <b-button @click="viewTicketDetails(row.item, row.index, $event.target)" size="sm" class="mr-1 jkl-btn-view-details btn-view">View</b-button>
                                    </template>
                                    <template #cell(status)="row">
                                        <div v-if="row.item.status === 'Completed'">
                                            <b-badge class="mr-1 badge" variant="success">COMPLETED</b-badge>
                                        </div>
                                    </template>
                                </b-table>
                            <b-row>
                                    <b-pagination v-model="currentPage" :total-rows="totalRows" :per-page="perPage" align="center" ></b-pagination>
                            </b-row>
                    </b-container>
        </b-card>
        </div>
    </div>
    <!-- <b-modal id="showReferenceCode" ref="showReferenceCode" hide-footer title="Technical Support Client Satisfaction Measurement Form">
        <div class="center">
        <input type="text" id="myInput" disabled style="color:black; font-weight: bold" value="https://forms.gle/475YJgUWHcY4x57Z8">
        </div>
        <b-button class="mt-3" variant="info" block @click="copyReferenceCode()">Copy</b-button>
    </b-modal> -->
    <b-modal id="showReferenceCode" ref="showReferenceCode" hide-footer title="Technical Support Client Satisfaction Measurement Form">
        <div class="d-block text-center">
        <!-- <input type="text" v-model="this.ticketData_update.reference_code" id="myInput" disabled style="color:black; font-weight: bold"> -->
        </div>
        <b-button class="mt-3" variant="info" block @click="copyReferenceCode()">Copy</b-button>
    </b-modal>
    <b-modal id="showDetails" ref="showDetails" hide-footer title="TICKET INFORMATION">
        <span style="font-weight: bold"> Details </span>
        <b-table 
            stacked
            :items="ticketDetails"
            :fields="fields2"
            :sort-by.sync="sortBy"
            :sort-desc.sync="sortDesc"
            sort-icon-left
            responsive="sm"
            :filter="filterOn"
            :current-page="currentPage"
            :per-page="perPage"
            :filter-included-fields="filterOn">
        </b-table>
        <span style="font-weight: bold"> Tracking </span>
        <b-table 
            stacked
            :items="ticketDetails"
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
    <b-modal id="showDetails_internal" ref="showDetails_internal" hide-footer title="TICKET DETAILS" size="xl">
        <div class="">
            <div class="">
                <b-form class="login-form" id="login-form" v-on:submit.prevent="assignStaff">
                                <!-- <div class="sign-in-htm"> -->
                        <div class="">
                            <div class="">
                                <span style="font-weight: bold"> DETAILS </span>
                                <b-table 
                                    :items="ticketDetails"
                                    :fields="fields_internal"
                                    :sort-by.sync="sortBy"
                                    :sort-desc.sync="sortDesc"
                                    sort-icon-left
                                    responsive="sm"
                                    :filter="filterOn"
                                    :current-page="currentPage"
                                    :per-page="perPage"
                                    :filter-included-fields="filterOn">
                                    <template #cell(reference_code)="row">
                                        <b>{{ row.value}}</b>
                                    </template>
                                    <template #cell(division_id)="row">
                                        <div v-if="row.item.division_id === '1'">
                                            FAD
                                        </div>
                                        <div v-if="row.item.division_id === '2'">
                                            IRAD
                                        </div>
                                        <div v-if="row.item.division_id === '3'">
                                            CRPD
                                        </div>
                                        <div v-if="row.item.division_id === '4'">
                                            OD-MISPS
                                        </div>
                                    </template>
                                    <template #cell(externalName)="row">
                                        {{ row.value.toUpperCase()}}
                                    </template>
                                    <template #cell(internal_external)="row">
                                        <div v-if="row.item.internal_external === 'Internal'">
                                            <b-badge class="mr-1 badge" variant="success">Internal</b-badge>
                                        </div>
                                        <div v-if="row.item.internal_external === 'External'">
                                            <b-badge class="mr-1 badge" variant="primary">External</b-badge>
                                        </div>
                                    </template>
                                    <template #cell(supportType)="row">
                                        <b style="color:rgb(35, 132, 179)">{{ row.value}}</b>
                                    </template>
                                </b-table>
                                    
                                <span style="font-weight: bold"> PROBLEM THAT NEEDED SUPPORT </span>
                                <b-table 
                                    :items="ticketDetails"
                                    :fields="fields_moreInfo"
                                    :sort-by.sync="sortBy"
                                    :sort-desc.sync="sortDesc"
                                    sort-icon-left
                                    responsive="sm"
                                    :filter="filterOn"
                                    :current-page="currentPage"
                                    :per-page="perPage"
                                    :filter-included-fields="filterOn">
                                        <template #cell(clientNote)="row">
                                            <div v-if="row.item.clientNote === ''">
                                                No remarks.
                                            </div>
                                            <div v-else>
                                                <div style="font-style: italic">{{ row.value}}</div>
                                            </div>
                                        </template>
                                </b-table>
                            </div>
                        </div>
                </b-form>
            </div>
        </div>
    </b-modal>
    <b-modal id="showDetails_external" ref="showDetails_external" hide-footer title="TICKET DETAILS" size="xl">
        <div class="">
            <div class="">
                <b-form class="login-form" id="login-form" v-on:submit.prevent="assignStaff">
                                <!-- <div class="sign-in-htm"> -->
                        <div class="">
                            <div class="">
                                <span style="font-weight: bold"> DETAILS </span>
                                <b-table 
                                    :items="ticketDetails"
                                    :fields="fields_external"
                                    :sort-by.sync="sortBy"
                                    :sort-desc.sync="sortDesc"
                                    sort-icon-left
                                    responsive="sm"
                                    :filter="filterOn"
                                    :current-page="currentPage"
                                    :per-page="perPage"
                                    :filter-included-fields="filterOn">
                                        <template #cell(reference_code)="row">
                                            <b>{{ row.value}}</b>
                                        </template>
                                        <template #cell(externalName)="row">
                                            {{ row.value.toUpperCase()}}
                                        </template>
                                        <template #cell(externalAgency)="row">
                                            {{ row.value.toUpperCase()}}
                                        </template>
                                        <template #cell(internal_external)="row">
                                            <div v-if="row.item.internal_external === 'Internal'">
                                                <b-badge class="mr-1 badge" variant="success">Internal</b-badge>
                                            </div>
                                            <div v-if="row.item.internal_external === 'External'">
                                                <b-badge class="mr-1 badge" variant="primary">External</b-badge>
                                            </div>
                                        </template>
                                        <template #cell(externalOtherType)="row">
                                            <div v-if="row.item.externalOtherType === 'undefined'">
                                                -
                                            </div>
                                            <div v-else>
                                                {{ row.value}}
                                            </div>
                                        </template>
                                        <template #cell(supportType)="row">
                                            <b style="color:rgb(35, 132, 179)">{{ row.value}}</b>
                                        </template>
                                </b-table>
                                <span style="font-weight: bold"> EVENT DETAILS </span>
                                <b-table 
                                    :items="ticketDetails"
                                    :fields="fields_external_event"
                                    :sort-by.sync="sortBy"
                                    :sort-desc.sync="sortDesc"
                                    sort-icon-left
                                    responsive="sm"
                                    :filter="filterOn"
                                    :current-page="currentPage"
                                    :per-page="perPage"
                                    :filter-included-fields="filterOn">
                                </b-table>
                                <span style="font-weight: bold"> REMARKS  <span style="font-style: italic; font-size: 10px">(Venue, other deatils, etc.)</span></span>
                                <b-table 
                                    :items="ticketDetails"
                                    :fields="fields_moreInfo"
                                    :sort-by.sync="sortBy"
                                    :sort-desc.sync="sortDesc"
                                    sort-icon-left
                                    responsive="sm"
                                    :filter="filterOn"
                                    :current-page="currentPage"
                                    :per-page="perPage"
                                    :filter-included-fields="filterOn">
                                        <template #cell(clientNote)="row">
                                            <div v-if="row.item.clientNote === ''">
                                                No remarks.
                                            </div>
                                            <div v-else>
                                                <div style="font-style: italic">{{ row.value}}</div>
                                            </div>
                                        </template>
                                </b-table>
                            </div>
                        </div>
                </b-form>
            </div>
        </div>
    </b-modal>
  </div>
  
</template>

<style>
    .font-weight-800{
        font-weight: 800;
    }
    .font-weight-700{
        font-weight: 700;
    }
    .font-weight-600{
        font-weight: 600;
    }

    .btn-edit{
        background-color: #32CD32 !important; 
        border-color: #32CD32 !important;
        color: white !important;
    }

    .btn-edit:hover{
        background-color: #228B22 !important; 
        border-color: #228B22 !important;
    }

    .btn-view{
        background-color: #F08080 !important; 
        border-color: #F08080 !important;
        color: white !important;
    }

    .btn-view:hover{
        background-color: #CD5C5C !important; 
        border-color: #CD5C5C !important;
    }

    .btn-submit-rating{
        background-color: #FF7F50 !important; 
        border-color: #FF7F50 !important;
        color: white !important;
    }

    .btn-submit-rating:hover{
        background-color: #FF6347 !important; 
        border-color: #FF6347 !important;
    }

    .btn-copy-arta-link{
        background-color: #00BFFF !important; 
        border-color: #00BFFF !important;
        color: white !important;
    }

    .btn-copy-arta-link:hover{
        background-color: #1E90FF !important; 
        border-color: #1E90FF !important;
        color: white !important;
    }

    .btn-monitoring{
        background-color: #A9A9A9 !important; 
        border-color: #A9A9A9 !important;
        color: white !important;
    }

    .btn-monitoring:hover{
        background-color: #808080 !important; 
        border-color: #808080 !important;
        color: white !important;
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
            assignedTicketData_update:{},
			drop_type: [{ text: '(SELECT HERE)', value: null, disabled: true}, 	'Hardware', 
																		'Software'],
			drop_hardware: [{ text: '(SELECT HERE)', value: null, disabled: true }, 	'Troubleshooting', 
																		'Evaluation', 
																		'Network', 
																		'Testing', 
																		'Consultation', 
																		'Assistance'],
			drop_software: [{ text: '(SELECT HERE)', value: null, disabled: true }, 	'Installation', 
																		'Data Retrieval', 
																		'Virus/Malwares', 
																		'Data Conversion/Uploading/Processing', 
																		'Reformat', 
																		'Download', 
																		'Assistance'],
			drop_assistedBy: [{ text: '(SELECT HERE)', value: null, disabled: true }, 	'None', 
																		'Lloyd Mandapat', 
																		'Reiner Zagada', 
																		'Michael Binondo', 
																		'Mark Jayson Sison', 
																		'Chester Francisco', 
																		'Joram Kate Leonardo', 
																		'Etienne Wayne Amparado', 
																		'Mc Gyver Basaya', 
																		'Jomar Rabanera'],
            employee_Email: '',
            employee_Div: '',
            errors : '',
            internal_external:'',
            infoModal: {
                id: 'info-modal',
                title: '',
                content: ''
            },
            pageOptions: [5, 10, 15, { value: 100, text: "Show a lot" }],
            totalRows: 0,
            currentPage: 1,
            perPage: 100,
            filterOn: [],
            filter: null,
            sortDirection: 'asc',
            sortBy: 'id',
            sortDesc: true,
            fields: [
                { key: 'reference_code', label: 'Reference Code'},
                { key: 'ticket_created', label: 'Date Requested'},
                { key: 'ticket_completed', label: 'Date Completed'},
                { key: 'externalName', label: 'Client Name'},
                { key: 'internal_external', label: 'Client Type'},
                { key: 'details', label: 'Details'},
                { key: 'satisfaction', label: 'Client Feedback Status' },

                { key: 'arta', label: 'CSM Form (ARTA)' },
            ],
            fields_internal: [
                { key: 'reference_code', label: 'Reference Code'},
                { key: 'ticket_created', label: 'Date Submitted'},
                { key: 'ticket_completed', label: 'Date Completed'},
                { key: 'externalName', label: 'Client Name'},
                { key: 'division_id', label: 'Division'},
                { key: 'internal_external', label: 'Client Type'},
                { key: 'supportType_', label: 'Support Type'},
            ],
            fields_external: [
                { key: 'reference_code', label: 'Reference Code'},
                { key: 'ticket_created', label: 'Date Submitted'},
                { key: 'externalName', label: 'Client Name'},
                { key: 'externalAgency', label: 'Agency'},
                { key: 'internal_external', label: 'Client Type'},
                { key: 'supportType_', label: 'Support Type'},
                { key: 'externalOtherType_', label: 'Specific Support Type'},
            ],
            fields_external_event: [
                { key: 'externalEventTitle', label: 'Event Title'},
                { key: 'externalStartDate', label: 'Start Date'},
                { key: 'externalEndDate', label: 'End Date'},
            ],
            fields_moreInfo: [
                { key: 'clientNote_', label: ''},
            ],
            fields_INPROG: [
                { key: 'reference_code', label: 'Reference Code'},
                { key: 'priority', label: 'Priority'},
                { key: 'ticket_created', label: 'Date Requested'},
                { key: 'externalName', label: 'Client Name'},
                { key: 'internal_external', label: 'Client Type'},
                { key: 'supportType_', label: 'Support Type'},
                { key: 'status', label: 'Status'},
                { key: 'details', label: 'Details'},
                { key: 'actions', label: 'Action' }
            ],
            fields2: [
                { key: 'status', label: 'Status'},
                { key: 'reference_code', label: 'Reference Code'},
                { key: 'name', label: 'Client Name'},
                { key: 'division_id', label: 'Division'},
                { key: 'email', label: 'Email'},
                { key: 'type', label: 'Request Type'},
                { key: 'concerned_division', label: 'Concerned Division'},
                { key: 'concerned_section', label: 'Concerned Section'},
                { key: 'clientNote_', label: 'Note'},
            ],
            fields3: [
                { key: 'ticket_created', label: 'Date Submitted'},
                { key: 'ticket_approved', label: 'Date Approved'},
                { key: 'ticket_attended', label: 'Date Attended'},
                { key: 'ticket_updated', label: 'Date Updated'},
                { key: 'ticket_completed', label: 'Date Completed'},
            ],
            fields_tracking: [
                { key: 'ticket_created', label: 'Date Submitted'},
                { key: 'ticket_approved', label: 'Date Approved'},
                { key: 'ticket_attended', label: 'Date Attended'},
                { key: 'ticket_updated', label: 'Date Updated'},
            ],
            }
    },
    mounted() {
        this.loadAllTicketDetails();
    },
    computed: {
      sortOptions() {
        // Create an options list from our fields
        return this.fields
          .filter(f => f.sortable)
          .map(f => {
            return { text: f.label, value: f.key }
          })
      }
    },
    methods: {
        viewTicketDetails: async function(data) {
            this.assignedTicketData = {...data}

            let govTypeId = this.assignedTicketData.internal_external;

            if (govTypeId == "Internal"){
                try{
                    const response = await ticket_service.loadTicketDetails(this.assignedTicketData.id);
                    this.ticketDetails = response.data;
                }
                catch (error){

                }
                this.$refs['showDetails_internal'].show();

            } else if (govTypeId == "External"){
                try{
                    const response = await ticket_service.loadTicketDetails(this.assignedTicketData.id);
                    this.ticketDetails = response.data;
                }
                catch (error){

                }
                this.$refs['showDetails_external'].show();
            }
        },
        loadAllTicketDetails: async function() {

            const response_getUserData = await ticket_service.getUserData();
            this.displayName=response_getUserData.data.user.name;
            
			let name = this.displayName;
            const response_name = await ticket_service.setName(name);
            
            try{
                const response_set_refCode = await ticket_service.setDisplayName(name);
                const response = await ticket_service.getAllTicketDetails_Completed();
                this.ticket = response.data;
                this.totalRows = this.ticket.length;
            } catch(error) {
                this.flashMessage.error({
                message: 'Some error occured! Please try again.',
                time: 5000
                });
            }
        },
        loadEmployeeHealthAndTraining: async function(data) {
            this.$refs['showDetails'].show();
            
        },
        setStatus: async function(data) {
            
            this.assignedTicketData = {...data}

            this.loadAllTicketDetails();

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
			// let date_ticketCreated = monthName + " " + currentDay + " " + currentYear;
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
			let date_ticketCreated = monthName + " " + currentDay + " " + currentYear + " " + getHours + ":" + getMinutes + " " + newformat;

			let currentDateTime = currentYear + "-" + currentMonth + "-" + currentDay;
            const response_getUserData = await ticket_service.getUserData();
            this.displayName=response_getUserData.data.user.name;

            var ticket_data = {...data}

            try {
                let formData = new FormData();
                formData.append('feedback_received', date_ticketCreated);
                formData.append('feedback_status', 'Received');


                const response = await ticket_service.updateFeedbackStatus(this.assignedTicketData.id, formData);
               
                this.flashMessage.success({
					message: 'Feedback Received Successfully!'
				});

            } catch (error) {
                this.flashMessage.warning({
					message: 'Please fill out the form!'
				});
            }
            this.loadAllTicketDetails();
        },
        
        copyLink:async function copyToClipboard(textToCopy) {
            // Navigator clipboard api needs a secure context (https)
            if (navigator.clipboard && window.isSecureContext) {
                await navigator.clipboard.writeText(textToCopy);
            } else {
                // Use the 'out of viewport hidden text area' trick
                const textArea = document.createElement("textarea");
                textArea.value = textToCopy;
                    
                // Move textarea out of the viewport so it's not visible
                textArea.style.position = "absolute";
                textArea.style.left = "-999999px";
                    
                document.body.prepend(textArea);
                textArea.select();

                try {
                    document.execCommand('copy');
                } catch (error) {
                    console.error(error);
                } finally {
                    textArea.remove();
                }
            }
        },
        showLink: async function(data){
            this.assignedTicketData = {...data}

           
            this.internal_external = this.assignedTicketData.internal_external;

            if (this.internal_external === "Internal"){

                const date = new Date(this.assignedTicketData.date1);
                let currentDay= String(date.getDate()).padStart(2, '0');
                let currentMonth = String(date.getMonth()+1).padStart(2,"0");
                let currentYear = date.getFullYear();
                let currentDateTime = currentYear + "-" + currentMonth + "-" + currentDay;

                const date2 = new Date(this.assignedTicketData.date1);
                let currentDay2 = String(date.getDate()).padStart(2, '0');
                let currentMonth2 = String(date.getMonth()+1).padStart(2,"0");
                let currentYear2 = date.getFullYear();
                let currentDateTime2 = currentYear2 + "-" + currentMonth2 + "-" + currentDay2;

                let a1 = "Government (Employee or another agency)".replaceAll(" ", "+");
                let a2 = "National Capital Region (NCR)".replaceAll(" ", "+");
                let a3 = "Technical Support Services".replaceAll(" ", "+");
                let a4 = "Gobyerno (Empleyado o Ahensya)".replaceAll(" ", "+");
                let a5 = this.assignedTicketData.reference_code.replaceAll(" ", "+");
                let a6 = this.assignedTicketData.externalName.replaceAll(" ", "+");
                let a7 = this.assignedTicketData.empEmail.replaceAll(" ", "+");
                let a8 = this.assignedTicketData.empDiv.replaceAll(" ", "+");
                let a9 = currentDateTime; // request date
                let a10 = currentDateTime2; // completed date
                let a11 = this.assignedTicketData.clientNote.replaceAll(" ", "+");
                let a12 = this.assignedTicketData.actions_taken.replaceAll(" ", "+");
                let a13 = this.assignedTicketData.natureOfSupport.replaceAll(" ", "+");
                let a14 = this.assignedTicketData.attended_by.replaceAll(" ", "+");
                let a15 = this.assignedTicketData.remarks.replaceAll(" ", "+");
                let a16 = this.assignedTicketData.assisted_by_1.replaceAll(" ", "+");

                let __link = "https://docs.google.com/forms/d/e/1FAIpQLSfda5Huf3g5zB5kIoemYLrM-SPR41VmTYRQ2gyeGwaeTtXPsg/viewform?usp=pp_url"
                + "&entry.1725600=" + "0"
                + "&entry.1819805617=" + "0"
                + "&entry.298800992=" + a5
                + "&entry.855472974=" + a6
                + "&entry.738949883=" + a9
                + "&entry.2079193609=" + a10
                + "&entry.1449935561=" + a5
                + "&entry.1990048049=" + a6
                + "&entry.249930846=" + a9
                + "&entry.1821298=" + a10;

                // let link_internal = "https://docs.google.com/forms/d/e/1FAIpQLSfda5Huf3g5zB5kIoemYLrM-SPR41VmTYRQ2gyeGwaeTtXPsg/viewform?usp=pp_url"
                // + "&entry.613601820=" + a1
                // + "&entry.2007236997=" + a2
                // + "&entry.474414778=" + a3
                // + "&entry.1426259693=" + a4
                // + "&entry.1972918236=" + a2
                // + "&entry.2008685738=" + a3
                // + "&entry.1725600=" + "0"
                // + "&entry.1819805617=" + "0"
                // + "&entry.1637951943=" + a5 //reference code
                // + "&entry.478303025=" + a6 // name
                // + "&entry.2075742875=" + a7 // email
                // + "&entry.292814853=" + a8 // division 
                // + "&entry.1555563534=" + a9 //date of request
                // + "&entry.1650701328=" + a10 // date accomplished
                // + "&entry.910998812=" + a11 // describe the problem that needed support || client note
                // + "&entry.1859630267=" + a12 // actions taken 
                // + "&entry.1734376917=" + a13 // nature of support
                // + "&entry.9829575=" + a14 // attended by 
                // + "&entry.943510939=" + a16 // assisted by 
                // + "&entry.1753625299=" + a15; // remarks
                // // navigator.clipboard.writeText(link_internal);
                

                const textarea = document.createElement('textarea');
                textarea.value = __link;
                //hide textarea from UI (trick 🙂 )
                textarea.style.position = 'fixed';
                textarea.style.left = '-9999px';
                document.body.appendChild(textarea);

                textarea.select();
                textarea.setSelectionRange(0, 99999); // For mobile devices

                // Use the Clipboard API to copy the selected text
                document.execCommand('copy');

                // Remove the temporary textarea
                document.body.removeChild(textarea);
            }

            else if (this.internal_external === "External"){

                const date = new Date(this.assignedTicketData.date1);
                let currentDay= String(date.getDate()).padStart(2, '0');
                let currentMonth = String(date.getMonth()+1).padStart(2,"0");
                let currentYear = date.getFullYear();
                let currentDateTime = currentYear + "-" + currentMonth + "-" + currentDay;

                const date2 = new Date(this.assignedTicketData.date2);
                let currentDay2 = String(date2.getDate()).padStart(2, '0');
                let currentMonth2 = String(date2.getMonth()+1).padStart(2,"0");
                let currentYear2 = date2.getFullYear();
                let currentDateTime2 = currentYear2 + "-" + currentMonth2 + "-" + currentDay2;

                console.log("this is external");
                let a1 = "Government (Employee or another agency)".replaceAll(" ", "+");
                let a2 = "National Capital Region (NCR)".replaceAll(" ", "+");
                let a3 = "Technical Support Services".replaceAll(" ", "+");
                let a4 = "Gobyerno (Empleyado o Ahensya)".replaceAll(" ", "+");
                let a5 = this.assignedTicketData.reference_code.replaceAll(" ", "+"); //reference code
                let a6 = this.assignedTicketData.externalName.replaceAll(" ", "+"); //client name
                let a7 = this.assignedTicketData.externalAgency.replaceAll(" ", "+"); //external Agency
                let a8 = currentDateTime; // request date
                let a9 = currentDateTime2; // completed date
                let a10 = this.assignedTicketData.clientNote.replaceAll(" ", "+");
                let a11 = this.assignedTicketData.actions_taken.replaceAll(" ", "+");
                let a12 = this.assignedTicketData.supportType.replaceAll(" ", "+");
                let a13 = this.assignedTicketData.externalOtherType_.replaceAll(" ", "+");
                let a14 = this.assignedTicketData.attended_by.replaceAll(" ", "+");
                let a15 = this.assignedTicketData.remarks.replaceAll(" ", "+");
                let a16 = this.assignedTicketData.assisted_by_1.replaceAll(" ", "+");

                let __link = "https://docs.google.com/forms/d/e/1FAIpQLSdG0armoL-XLSz6T2BpXJ_JUMU1tg-NDxaf40q6qgpsMmJjhg/viewform?usp=pp_url"
                + "&entry.478303025=" + a6
                + "&entry.1637951943=" + a5
                + "&entry.292814853=" + a7
                + "&entry.1555563534=" + a8
                + "&entry.1650701328=" + a9;

                const textarea = document.createElement('textarea');
                textarea.value = __link;
                //hide textarea from UI (trick 🙂 )
                textarea.style.position = 'fixed';
                textarea.style.left = '-9999px';
                document.body.appendChild(textarea);

                textarea.select();
                textarea.setSelectionRange(0, 99999); // For mobile devices

                // Use the Clipboard API to copy the selected text
                document.execCommand('copy');

                // Remove the temporary textarea
                document.body.removeChild(textarea);
            }

            
            
            this.flashMessage.success({
                message: 'Link Copied Successfully!'
            });
            // this.$refs.showReferenceCode.show()
        },
		copyReferenceCode(){
			var copyText = document.getElementById("myInput");
			copyText.select();
			copyText.setSelectionRange(0, 99999); 
			navigator.clipboard.writeText(copyText.value);
		},
        copy(stringHere){
            const textarea = document.createElement('textarea');
            textarea.value = stringHere;
            //hide textarea from UI (trick 🙂 )
            textarea.style.position = 'fixed';
            textarea.style.left = '-9999px';
            document.body.appendChild(textarea);

            textarea.select();
            textarea.setSelectionRange(0, 99999); // For mobile devices

            // Use the Clipboard API to copy the selected text
            document.execCommand('copy');

            // Remove the temporary textarea
            document.body.removeChild(textarea);
        }
    }
}

</script>