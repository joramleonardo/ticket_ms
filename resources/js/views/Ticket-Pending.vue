<template>
  <div class="container-fluid">
    <h1 class="mt-4 admin-header-title">NEW TICKETS</h1>
    <div class="breakcrumbs mt-3">
        Home > Tickets > <span class="admin-sub-header-title">NEW TICKETS</span>
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
                                :fields="fields_PENDING"
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
                                    <template #cell(externalOtherType)="row">
                                        <div v-if="row.item.externalOtherType === 'undefined'">
                                            None
                                        </div>
                                        <div v-if="row.item.externalOtherType === 'Zoom only'">
                                            None aa
                                        </div>
                                        <!-- <div v-else>
                                            {{ row.value}}
                                        </div> -->
                                    </template>
                                    <template #cell(supportType)="row">
                                        <b style="color:rgb(35, 132, 179)">{{ row.value}}</b>
                                    </template>
                                    <template #cell(attended_by)="row">
                                        <div v-if="row.item.attended_by === ''">
                                            Not yet assigned
                                        </div>
                                        <div v-else>
                                            <div style="font-style: italic">{{ row.value}}</div>
                                        </div>
                                    </template>
                                    <template #cell(status)="row">
                                        <div v-if="row.item.status === 'New'">
                                            <b-badge class="mr-1 badge" variant="info">NEW</b-badge>
                                        </div>
                                        <div v-if="row.item.status === 'Pending'">
                                            <b-badge class="mr-1 badge" variant="info">PENDING</b-badge>
                                        </div>
                                        <div v-if="row.item.status === 'Approved'">
                                            <b-badge class="mr-1 badge" variant="primary">APPROVED</b-badge>
                                        </div>
                                        <div v-if="row.item.status === 'Disapproved'">
                                            <b-badge class="mr-1 badge" variant="danger">DISAPPROVED</b-badge>
                                        </div>
                                        <div v-if="row.item.status === 'In Progress'">
                                            <b-badge class="mr-1 badge" variant="warning">IN PROGRESS</b-badge>
                                        </div>
                                        <div v-if="row.item.status === 'Completed'">
                                            <b-badge class="mr-1 badge" variant="success">COMPLETED</b-badge>
                                        </div>
                                        <div v-if="row.item.status === 'Closed'">
                                            <b-badge class="mr-1 badge" variant="dark">CLOSED</b-badge>
                                        </div>
                                        <div v-if="row.item.status === 'Rescheduled'">
                                            <b-badge class="mr-1 badge" variant="dark">RESCHEDULED</b-badge>
                                        </div>
                                    </template>
                                    <template #cell(actions)="row">
                                        <b-button @click="assignTicket(row.item, row.index, $event.target)" size="sm" class="mr-1 jkl-btn-view" style="background-color:#15ca20 !important;">Assign Ticket</b-button>                                       
                                    </template>
                                    <template #cell(assign)="">
                                        <b-form-select  size="sm" id="assignedStaff" v-model="ticketData.assignedStaff" :options="options"></b-form-select>
                                    </template>
                                </b-table>
                            <b-row>
                                    <b-pagination v-model="currentPage" :total-rows="totalRows" :per-page="perPage" align="center" ></b-pagination>
                            </b-row>
                    </b-container>
        </b-card>
        </div>
    </div>

    <b-modal id="assignModalForm_internal" ref="assignModalForm_internal" hide-footer title="Assign Staff for this Ticket" size="xl">
        <div class="">
            <div class="">
                <b-form class="login-form" id="login-form" v-on:submit.prevent="assignStaff">
                                <!-- <div class="sign-in-htm"> -->
                        <div class="">
                            <div class="">
                                <span style="font-weight: bold"> DETAILS </span>
                                <b-table 
                                    :items="ticket2"
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
                                    :items="ticket2"
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
                                <div class="row">
                                    <div class="col-md-6 col-lg-6 mb-0">
                                        <span style="font-weight: bold"> ASSIGN A STAFF </span>
                                        <b-form-group class="group">
                                            <label for="type" class="label"><span style="font-style: italic; font-size: 10px; text-transform: none">  Please select below... </span></label>
                                            <b-form-select style="background-color: rgb(239 239 239);" size="sm" id="assignedStaff" v-model="assignedTicketData.assignedStaff" :options="options_staff" required></b-form-select>
                                        </b-form-group>
                                    </div>
                                    <div class="col-md-6 col-lg-6 mb-0">
                                        <span style="font-weight: bold"> SET PRIORITY LEVEL</span>
                                        <b-form-group class="group" >
                                            <label for="type" class="label"><span style="font-style: italic; font-size: 10px; text-transform: none">  Please select below... </span></label>
                                            <b-form-select style="background-color: rgb(239 239 239);" size="sm" id="priority" v-model="assignedTicketData.priority" :options="options_priority" required> </b-form-select>
                                        </b-form-group>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <b-form-group class="group" style="margin-top: 50px">
                            <b-button type="submit" class="tab button" style="background-color: #1161ee !important;" variant="outline-success">Submit</b-button>
                        </b-form-group>
                </b-form>
            </div>
        </div>
    </b-modal>

    <b-modal id="assignModalForm_external" ref="assignModalForm_external" hide-footer title="Assign Staff for this External Ticket" size="xl">
        <div class="">
            <div class="">
                <b-form class="login-form" id="login-form" v-on:submit.prevent="assignStaff">
                                <!-- <div class="sign-in-htm"> -->
                        <div class="">
                            <div class="">
                                <span style="font-weight: bold"> DETAILS </span>
                                <b-table 
                                    :items="ticket2"
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
                                    :items="ticket2"
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
                                    :items="ticket2"
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
                                <div class="row">
                                    <div class="col-md-6 col-lg-6 mb-0">
                                        <span style="font-weight: bold"> ASSIGN A STAFF </span>
                                        <b-form-group class="group">
                                            <label for="type" class="label"><span style="font-style: italic; font-size: 10px; text-transform: none">  Please select below... </span></label>
                                            <b-form-select  size="sm" id="assignedStaff" v-model="assignedTicketData.assignedStaff" :options="options_staff" required></b-form-select>
                                        </b-form-group>
                                    </div>
                                    <div class="col-md-6 col-lg-6 mb-0">
                                        <span style="font-weight: bold"> SET PRIORITY LEVEL</span>
                                        <b-form-group class="group">
                                            <label for="type" class="label"><span style="font-style: italic; font-size: 10px; text-transform: none">  Please select below... </span></label>
                                            <b-form-select  size="sm" id="priority" v-model="assignedTicketData.priority" :options="options_priority" required></b-form-select>
                                        </b-form-group>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <b-form-group class="group" style="margin-top: 50px">
                            <b-button type="submit" class="tab button" style="background-color: #1161ee !important;" variant="outline-success">Submit</b-button>
                        </b-form-group>
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
    data() {
        return {
            ticket: [],
            ticket2: [],
            ticketDetails: [],
            ticketData:{
                status:'',
                reference_code:'',
                assignedStaff:''
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
            currentPage: 20,
            perPage: 10,
            filterOn: [],
            filter: null,
            sortDirection: 'desc',
            sortBy: 'id',
            sortDesc: true,
            fields_PENDING: [
                { key: 'reference_code', label: 'Reference Code'},
                { key: 'ticket_created', label: 'Date Requested'},
                { key: 'externalName', label: 'Client Name'},
                { key: 'internal_external', label: 'Client Type'},
                { key: 'supportType', label: 'Support Type'},
               
                { key: 'status', label: 'Status'},
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
            selected: null,
            options_staff: [
                { value: null, text: 'Please select staff', disabled: true},
                { value: 'Lloyd Mandapat', text: 'Lloyd Mandapat' },
                { value: 'Reiner Zagada', text: 'Reiner Zagada' },
                { value: 'Michael Binondo', text: 'Michael Binondo' },
                { value: 'Mark Jayson Sison', text: 'Mark Jayson Sison' },
                { value: 'Chester Francisco', text: 'Chester Francisco' },
                { value: 'Joram Kate Leonardo', text: 'Joram Kate Leonardo' },
                { value: 'Etienne Wayne Amparado', text: 'Etienne Wayne Amparado' },
                { value: 'Mc Gyver Basaya', text: 'Mc Gyver Basaya' },
                { value: 'Jomar Rabanera', text: 'Jomar Rabanera' },
            ],
            options_priority: [
                { value: null, text: 'Please select priority level', disabled: true},
                { value: 'Low', text: 'Low' },
                { value: 'Medium', text: 'Medium' },
                { value: 'Urgent', text: 'Urgent' },
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
            try{
                const response = await ticket_service.loadTicketDetails(this.assignedTicketData.id);
                this.ticketDetails = response.data;
            }
            catch (error){

            }
            this.$refs['showDetails'].show();
        },
        loadAllTicketDetails: async function() {
            try{
                const response = await ticket_service.loadTicketDetails_New();
              
                this.ticket = response.data;
                this.totalRows = this.ticket.length;
            } catch(error) {
                this.flashMessage.error({
                message: 'Some error occured! Please try again.',
                time: 5000
                });
            }
        },
        loadTicketDetails: async function(data) {
            var ticket_data = {...data}
            

            try{
                const response = await ticket_service.loadTicketDetails(ticket_data.id);
                this.ticket2 = response.data;
            }
            catch (error){

            }
        },
        assignTicket: async function(data) {
            this.assignedTicketData = {...data}
            let govTypeId = this.assignedTicketData.internal_external;

            if (govTypeId == "Internal"){
                try{
                    const response = await ticket_service.loadTicketDetails(this.assignedTicketData.id);
                    this.ticket2 = response.data;
                }
                catch (error){

                }
                this.$refs['assignModalForm_internal'].show();

            } else if (govTypeId == "External"){
                try{
                    const response = await ticket_service.loadTicketDetails_external(this.assignedTicketData.id);
                    this.ticket2 = response.data;
                }
                catch (error){

                }
                this.$refs['assignModalForm_external'].show();
            }

        },
        assignStaff: async function(){
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
			let date_ticketCreatedComplete = monthName + " " + currentDay + " " + currentYear + " " + getHours + ":" + getMinutes + " " + newformat;

            const response_getUserData = await ticket_service.getUserData();
            this.displayName=response_getUserData.data.user.name;

            try {

                let formData = new FormData();
                formData.append('reference_code', this.assignedTicketData.reference_code);
                formData.append('approved_by', this.displayName);
                formData.append('assignedStaff', this.assignedTicketData.assignedStaff);
                formData.append('priority', this.assignedTicketData.priority);
                formData.append('ticket_approved', date_ticketCreatedComplete);
                formData.append('ticket_updated', date_ticketCreatedComplete);

                formData.append('status', 'Approved');

                const response = await ticket_service.updatePending(this.assignedTicketData.id, formData);
                

            } catch (error) {
                this.flashMessage.warning({
					message: 'Please fill out the form!'
				});
            }
            this.loadAllTicketDetails();
            this.flashMessage.success({
					message: 'Ticket Assigned Successfully!'
				});
            this.$refs['assignModalForm_internal'].hide();
            this.$refs['assignModalForm_external'].hide();
            // window.location.reload();
        },
        loadEmployeeHealthAndTraining: async function(data) {
            this.$refs['showDetails'].show();
            
        },
    }
}

</script>