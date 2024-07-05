<template>
  <div class="container-fluid">
    <h1 class="mt-4 admin-header-title">DASHBOARD</h1>
    <div class="breakcrumbs mt-3">
        Home > <span class="admin-sub-header-title"> DASHBOARD </span>
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
                            <b-col lg="3" class="my-1">
                                <b-form-group label="Per page" label-for="per-page-select" label-cols-sm="6" label-cols-md="4" label-cols-lg="3" label-align-sm="right" label-size="sm" class="mb-0">
                                    <b-form-select id="per-page-select" v-model="perPage" :options="pageOptions" size="sm"></b-form-select>
                                </b-form-group>
                            </b-col>
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

                        <!-- Main table element -->
                                <b-table striped hover 
                                :items="ticket"
                                :fields="fields_ALL"
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

                            <!-- <template #cell(name)="row">
                                {{ row.value.first }} {{ row.value.last }}
                            </template>

                            <template #row-details="row">
                                <b-card>
                                    <ul>
                                        <li v-for="(value, key) in row.item" :key="key">{{ key }}: {{ value }}</li>
                                    </ul>
                                </b-card>
                            </template> -->
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

    <b-modal id="showDetails_internal" ref="showDetails_internal" hide-footer title="TICKET INFORMATION">
        <span style="font-weight: bold"> TICKET DETAILS </span>
        <b-table 
            stacked
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
        </b-table>
        <span style="font-weight: bold"> TRACKING </span>
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
    <b-modal id="showDetails_external" ref="showDetails_external" hide-footer title="TICKET INFORMATION">
        <span style="font-weight: bold"> TICKET DETAILS </span>
        <b-table 
            stacked
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
        </b-table>
        <span style="font-weight: bold"> TRACKING </span>
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
            perPage: 10,
            filterOn: [],
            filter: null,
            sortDirection: 'desc',
            sortBy: 'id',
            sortDesc: true,
            fields_ALL: [
                // { key: 'id', label: 'ID'},
                { key: 'reference_code', label: 'Reference Code'},
                { key: 'ticket_created', label: 'Date Requested'},
                { key: 'externalName', label: 'Client Name'},
                { key: 'internal_external', label: 'Client Type'},
                { key: 'supportType', label: 'Support Type'},
                { key: 'assignedStaff', label: 'Assigned To'},
                
               
                { key: 'status', label: 'Status'},
                // { key: 'details', label: 'Details'}
            ],
            fields3: [
                { key: 'ticket_created', label: 'Date Submitted'},
                { key: 'ticket_approved', label: 'Date Approved'},
                { key: 'ticket_approved', label: 'Date Assigned'},
                { key: 'ticket_attended', label: 'Date Attended'},
                { key: 'ticket_updated', label: 'Date Updated'},
                { key: 'ticket_completed', label: 'Date Completed'},
            ],
            fields_internal: [
                { key: 'status', label: 'Status'},
                { key: 'reference_code', label: 'Reference Code'},
                { key: 'ifGov', label: 'Client Type'},
                { key: 'externalName', label: 'Requested By'},
                { key: 'type', label: 'Request Type'},
                { key: 'concerned_division', label: 'Concerned Division'},
                { key: 'concerned_section', label: 'Concerned Section'},
                { key: 'note', label: 'Concern'},
            ],
            fields_external: [
                { key: 'status', label: 'Status'},
                { key: 'reference_code', label: 'Reference Code'},
                { key: 'ifGov', label: 'Client Type'},
                { key: 'externalName', label: 'Requested By'},
                { key: 'externalAgency', label: 'Agency'},
                { key: 'externalDate', label: 'Date of Event'},
                { key: 'externalEventTitle', label: 'Title of Event'},
                { key: 'note', label: 'Remarks'},
            ]
            }
    },
    mounted() {
        this.loadEmployees();
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
        loadEmployees: async function() {
            try{
                //const response = await ticket_service.loadEmployees();
                const response = await ticket_service.getAllTicketDetails();
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
			let date_ticketCreated = monthName + " " + currentDay + " " + currentYear;

            var ticket_data = {...data}
            try {

                let formData = new FormData();
                formData.append('reference_code', ticket_data.reference_code);
                formData.append('attended_by', "my_name");
                formData.append('ticket_updated', date_ticketCreated);
                formData.append('status', 'Approved');
                formData.append("_method", "put");

                const response = await ticket_service.updateStatus(ticket_data.id, formData);

                this.flashMessage.success({
                    status: '',
                    message: 'Ticket approved successfully!',
                    time: 5000
                });
                this.loadEmployees();

            } catch (error) {
                switch (error.response.status) {
                    case 422:
                        this.errors = error.response.data.errors;
                        break;
                    default:
                        this.flashMessage.error({
                            message: 'Some error occurred, Please try again!',
                            time: 5000
                        });
                    break;
                }
            }
            this.loadEmployees();
            
        }
    }
}

</script>