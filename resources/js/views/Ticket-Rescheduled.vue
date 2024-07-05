<template>
  <div class="container-fluid">
    <h1 class="mt-4 admin-header-title">RESCHEDULED TICKETS</h1>
    <div class="breakcrumbs mt-3">
        Home > Tickets > <span class="admin-sub-header-title"> RESCHEDULED TICKETS</span>
    </div>
    <div class="row mt-4">
        <div class="col-xl-12">
            <div class="">
                <div>
                    <b-card header="List of Rescheduled Tickets" align="center" style="padding:2px;">
                            <div>
                                <!-- <div class="card-tools">
                                    <b-row >
                                        <b-col lg="10" class="mt-3">
                                            <b-form-group label="Search" label-for="filter-input" label-cols-sm="2" label-align-sm="center">
                                                <b-input-group>
                                                    <b-form-input id="filter-input" v-model="filter" type="search" placeholder="Type to Search" v-on:keydown="returnPaginate($event)"></b-form-input>
                                                </b-input-group>
                                            </b-form-group>
                                        </b-col>
                                    </b-row>
                                </div> -->
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
                                        <b-button @click="setStatus(row.item, row.index, $event.target)" size="sm" class="mr-1 jkl-btn-view" style="background-color:#cda839 !important;">Attend Ticket</b-button>
                                    </template>
                                    <template #cell(details)="row">
                                        <b-button @click="loadEmployeeHealthAndTraining(row.item, row.index, $event.target)" size="sm" class="mr-1 jkl-btn-warning">View Details</b-button>
                                    </template>
                                    <template #cell(status)="row">
                                        <div v-if="row.item.status === 'Rescheduled'">
                                            <b-badge class="mr-1 badge" variant="dark">RESCHEDULED</b-badge>
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
    <b-modal id="showDetails" ref="showDetails" hide-footer title="Ticket Details">
        TEST DETAILS
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
            ticketData:{
                status:'',
                reference_code:''
            },

            errors : '',
            totalRows: 1,
            currentPage: 1,
            perPage: 10,
            filterOn: [],
            filter: null,
            sortDirection: 'asc',
            sortBy: 'id',
            sortDesc: true,
            fields: [
                { key: 'id', label: 'ID'},
                { key: 'name', label: 'Client'},
                { key: 'type', label: 'Request Type'},
                { key: 'ticket_created', label: 'Date Submitted'},
                { key: 'ticket_completed', label: 'Date Completed'},
                { key: 'assignedStaff', label: 'Action by'},
                { key: 'status', label: 'Status'},
                { key: 'actions', label: 'Action' }
            ]
            }
    },
    mounted() {
        this.loadAllTicketDetails();
    },
    methods: {
        loadAllTicketDetails: async function() {
            try{
                const response = await ticket_service.getAllTicketDetails_Rescheduled();
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
        loadEmployeeHealthAndTraining: async function(data) {
            this.$refs['showDetails'].show();
            
        },
    }
}

</script>