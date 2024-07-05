<template>
  <div class="container-fluid">
    <h1 class="mt-4 admin-header-title">ASSIGNED TICKETS</h1>
    <div class="breakcrumbs mt-3">
        Home > Tickets > <span class="admin-sub-header-title">ASSIGNED TICKETS</span>
    </div>
    <div class="row mt-4">
        <div class="col-xl-12">
        <b-card class="m-2">
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
                                :fields="fields_APPROVED"
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
                                    <template #cell(status)="row">
                                        <div v-if="row.item.status === 'Approved'">
                                            <b-badge class="mr-1 badge" variant="primary">APPROVED</b-badge>
                                        </div>
                                    </template>

                                    <template #cell(actions)="row">
                                        <b-button @click="setStatus(row.item, row.index, $event.target)" size="sm" class="mr-1 jkl-btn-view" style="background-color:#cda839 !important;">Attend Ticket</b-button>
                                    </template>
                                    <template #cell(details)="row">
                                        <b-button @click="viewTicketDetails(row.item, row.index, $event.target)" size="sm" class="mr-1 jkl-btn-view-details">View Details</b-button>
                                    </template>
                                </b-table>
                            <b-row>
                                    <b-pagination v-model="currentPage" :total-rows="totalRows" :per-page="perPage" align="center" ></b-pagination>
                            </b-row>
                    </b-container>
        </b-card>
        </div>
    </div>
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
                                        <template #cell(externalOtherType)="row">
                                            <div v-if="row.item.externalOtherType === 'undefined'">
                                                -
                                            </div>
                                            <div v-else>
                                                {{ row.value}}
                                            </div>
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
                                <span style="font-weight: bold"> REMARKS</span>
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

            errors : '',
            infoModal: {
                id: 'info-modal',
                title: '',
                content: ''
            },
            pageOptions: [5, 10, 15, { value: 100, text: "Show a lot" }],
            totalRows: 0,
            currentPage: 1,
            perPage: 20,
            filterOn: [],
            filter: null,
            sortDirection: 'asc',
            sortBy: 'id',
            sortDesc: true,
            fields: [
                { key: 'id', label: 'ID'},
                { key: 'type', label: 'Request Type'},
                // { key: 'priority', label: 'Priority'},
                { key: 'ifGov', label: 'Client Type'},
                // { key: 'name', label: 'Client Name'},
                { key: 'ticket_created', label: 'Date Submitted'},
                { key: 'status', label: 'Status'},
                { key: 'actions', label: 'Action' }
            ],
            fields_APPROVED: [
                { key: 'reference_code', label: 'Reference Code'},
                { key: 'priority', label: 'Priority'},
                { key: 'ticket_created', label: 'Date Requested'},
                { key: 'externalName', label: 'Client Name'},
                { key: 'internal_external', label: 'Client Type'},
                { key: 'supportType', label: 'Support Type'},
                { key: 'status', label: 'Status'},

                { key: 'details', label: 'Details'},
                { key: 'actions', label: 'Action' }
            ],
            fields_internal: [
                { key: 'reference_code', label: 'Reference Code'},
                { key: 'ticket_created', label: 'Date Submitted'},
                { key: 'externalName', label: 'Client Name'},
                { key: 'division_id', label: 'Division'},
                { key: 'internal_external', label: 'Client Type'},
                { key: 'supportType', label: 'Support Type'},
            ],
            fields_external: [
                { key: 'reference_code', label: 'Reference Code'},
                { key: 'ticket_created', label: 'Date Submitted'},
                { key: 'externalName', label: 'Client Name'},
                { key: 'externalAgency', label: 'Agency'},
                { key: 'internal_external', label: 'Client Type'},
                { key: 'supportType', label: 'Support Type'},
                { key: 'externalOtherType', label: 'Specific Support Type'},
            ],
            fields_external_event: [
                { key: 'externalEventTitle', label: 'Event Title'},
                { key: 'externalStartDate', label: 'Start Date'},
                { key: 'externalEndDate', label: 'End Date'},
            ],
            fields_moreInfo: [
                { key: 'clientNote', label: ''},
            ],
            fields2: [
                { key: 'status', label: 'Status'},
                { key: 'reference_code', label: 'Reference Code'},
                { key: 'externalName', label: 'Requested By'},
                { key: 'type', label: 'Request Type'},
                { key: 'concerned_division', label: 'Concerned Division'},
                { key: 'concerned_section', label: 'Concerned Section'},
                { key: 'note', label: 'Concern'},
            ],
            fields3: [
                { key: 'ticket_created', label: 'Date Submitted'},
                { key: 'ticket_approved', label: 'Date Approved'},
                // { key: 'ticket_approved', label: 'Date Assigned'},
                // { key: 'ticket_attended', label: 'Date Attended'},
                // { key: 'ticket_updated', label: 'Date Updated'},
                // { key: 'ticket_completed', label: 'Date Completed'},
            ]
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
                    const response = await ticket_service.loadTicketDetails_external(this.assignedTicketData.id);
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
                const response_set_refCode = await ticket_service.setDisplayName(response_name.data);
                const response = await ticket_service.getAllTicketDetails_Approved_Assigned(response_name.data);
                this.ticket = response.data;
                this.totalRows = this.ticket.length;
            } catch(error) {
                this.flashMessage.error({
                message: 'Some error occured! Please try again.',
                time: 5000
                });
            }
        },
        setStatus: async function(data) {
            
            var ticket_data = {...data}

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
			let currentYear = date.getFullYear();
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

            const response_getUserData = await ticket_service.getUserData();
            this.displayName=response_getUserData.data.user.name;

            try{
                let formData = new FormData();
                formData.append('status', 'In Progress');
                formData.append('ticket_attended', date_ticketCreated);
                formData.append('ticket_updated', date_ticketCreated);
                formData.append('attended_by', this.displayName);

                
                const response = await ticket_service.updateApproved(ticket_data.id, formData);
                
                
            }
            catch (error) {
                this.flashMessage.warning({
					message: 'Error!'
				});
            }
            this.flashMessage.success({
					message: 'Ticket Attended Successfully!'
				});
            this.loadAllTicketDetails();
            // window.location.reload();
        }
    }
}

</script>

<style>
p{
    color:white !important;
}
</style>