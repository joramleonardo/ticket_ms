<template>
  <div class="container-fluid">
    <h1 class="mt-4 admin-header-title">TICKETS</h1>
    <div class="breakcrumbs mt-3">
        Home > <span class="admin-sub-header-title"> TICKETS </span>
    </div>
    <div class="row mt-4">
        <div class="col-xl-12">
            <div class="">
                <div class="card-body">
                    <b-card header="List of Tickets" align="center" style="padding:1.25rem;">
                            <div>
                                <div class="card-tools">
                                    <b-row >
                                        <b-col lg="10" class="mt-3">
                                            <b-form-group label="Search" label-for="filter-input" label-cols-sm="2" label-align-sm="center">
                                                <b-input-group>
                                                    <b-form-input id="filter-input" v-model="filter" type="search" placeholder="Type to Search" v-on:keydown="returnPaginate($event)"></b-form-input>
                                                </b-input-group>
                                            </b-form-group>
                                        </b-col>
                                    </b-row>
                                </div>
                                <b-table striped hover 
                                :items="ticket"
                                :fields="fields"
                                :sort-by.sync="sortBy"
                                :sort-desc.sync="sortDesc"
                                sort-icon-left
                                responsive="sm"
                                :filter="filterOn"
                                :current-page="currentPage"
                                :per-page="perPage"
                                :filter-included-fields="filterOn">
                                    <template #cell(actions)="row">
                                        <b-button @click="setStatus(row.item, row.index, $event.target)" size="sm" class="mr-1 jkl-btn-view">Approve Ticket</b-button>
                                    </template>
                                    <template #cell(details)="row">
                                        <b-button @click="viewTicketDetails(row.item, row.index, $event.target)" size="sm" class="mr-1 jkl-btn-view-details">View Details</b-button>
                                    </template>
                                    <template #cell(ifGov)="row">
                                        <div v-if="row.item.ifGov === 'Employee'">
                                            <b-badge class="mr-1 badge" variant="success">Employee</b-badge>
                                        </div>
                                        <div v-if="row.item.ifGov === 'Other Agency'">
                                            <b-badge class="mr-1 badge" variant="primary">Other Agency</b-badge>
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
                                </b-table>
                            </div>
                            <div class="my-1">
                                <b-pagination
                                    v-model="currentPage"
                                    :total-rows="totalRows"
                                    :per-page="perPage"
                                    align="center"
                                    class="my-0">
                                </b-pagination>
                            </div>
                    </b-card>
                </div>
            </div>
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
            totalRows: 0,
            currentPage: 1,
            perPage: 10,
            filterOn: [],
            filter: null,
            sortDirection: 'desc',
            sortBy: 'id',
            sortDesc: true,
            fields: [
                { key: 'id', label: 'ID'},
                { key: 'type', label: 'Request Type'},
                // { key: 'priority', label: 'Priority'},
                { key: 'ifGov', label: 'Client Type'},
                // { key: 'name', label: 'Client Name'},
                { key: 'ticket_created', label: 'Date Submitted'},
                { key: 'details', label: 'Details'},
                { key: 'status', label: 'Status'},
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
                { key: 'name', label: 'Requested By'},
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
    methods: {
        viewTicketDetails: async function(data) {
            this.assignedTicketData = {...data}

            let govTypeId = this.assignedTicketData.ifGov;
            console.log(govTypeId);

            if (govTypeId == "Employee"){
                try{
                    const response = await ticket_service.loadTicketDetails(this.assignedTicketData.id);
                    this.ticketDetails = response.data;
                }
                catch (error){

                }
                this.$refs['showDetails_internal'].show();

            } else if (govTypeId == "Other Agency"){
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
                
                
                console.log(response.data);
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
            console.log(ticket_data);
            try {

                let formData = new FormData();
                formData.append('reference_code', ticket_data.reference_code);
                formData.append('attended_by', "my_name");
                formData.append('ticket_updated', date_ticketCreated);
                formData.append('status', 'Approved');
                formData.append("_method", "put");

                const response = await ticket_service.updateStatus(ticket_data.id, formData);
                console.log(response);

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