<template>
  <div class="container-fluid">
    <h1 class="mt-4 admin-header-title">COMPLETED TICKETS</h1>
    <div class="breakcrumbs mt-3">
        Home > Tickets > <span class="admin-sub-header-title">COMPLETED TICKETS</span>
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
                                            <router-link target="_blank" :to="{name: 'rating', params: {id: row.item.id, type: row.item.internal_external}}">
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
                                            <b-button @click="setStatus(row.item, row.index, $event.target)" size="sm" class="mr-1 jkl-btn-view" style="background-color: rgb(21, 202, 32) !important;"><i class="fa fa-check" aria-hidden="true"></i></b-button>
                                        </div>
                                        <div v-if="row.item.feedback_status === 'Received'">
                                           <b-button disabled size="sm" class="mr-1 jkl-btn-view btn-copy-arta-link">Copy Link</b-button>
                                           <b-button disabled size="sm" class="mr-1 jkl-btn-view" style="background-color: rgb(21, 202, 32) !important;"><i class="fa fa-check" aria-hidden="true"></i></b-button>
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
                                        <b-button @click="completeTicket(row.item, row.index, $event.target)" size="sm" class="mr-1 jkl-btn-view-details btn-edit">Edit</b-button>
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

    <b-modal id="assignModalForm_1" ref="assignModalForm_1" hide-footer title="Edit Ticket Details">
        <div class="">
            <div class="">
                <b-form class="login-form" id="login-form" v-on:submit.prevent="assignStaff_1">
                        <div class="">
                            <div class="">
                                <div class="row">
                                    <div style="margin-botton: 15px">
                                        <span style="font-size: 12px; color: red; font-style: italic; ">* Required Fields</span>
                                    </div>
                                    <div class="col-md-6 col-lg-6 mb-0">
                                        <b-form-group class="group" id="form_ITURequestType_internal">
                                            <label for="supportType" class="label" style="color:black; font-weight: bold"><span style="font-size: 12px; color: red">*</span>Request Type:</label>
                                            <select required  @change="switchSelect_ITURequestType($event)" v-model="assignedTicketData_update.supportType_">
                                                <option value="" disabled>Select here</option>
                                                <option value="Livestream">Livestream</option>
                                                <option value="Other">Other..</option>
                                            </select>
                                        </b-form-group>
                                    </div>
                                    <div class="col-md-6 col-lg-6 mb-0">
                                        <b-form-group class="group">
                                            <label for="mode" class="label" style="color:black; font-weight: bold"><span style="font-size: 12px; color: red">*</span>Mode:</label>
                                            <select required v-model="assignedTicketData.mode_" id="mode" name="mode">
                                                <option value="" disabled>Select here</option>
                                                <option value="Service Form">Service Form</option>
                                                <option value="Online Form">Online Form</option>
                                            </select>
                                        </b-form-group>
                                    </div>
                                </div>
                                <b-form-group class="group" id="form_RequestTypeOther">
                                    <label for="externalOtherType" class="label" style="color:black; font-weight: bold">Specific Request:</label>
                                    <b-form-input v-model="assignedTicketData_update.externalOtherType_" id="externalOtherType" type="text" class="input" style="background: #fff; border: 1px solid #ced4da !important; color: black"></b-form-input>
                                </b-form-group>
                                <div class="row">
                                    <div class="col-md-6 col-lg-6 mb-0">
                                        <b-form-group class="group" id="optionAssistedBy">
                                            <label required for="assisted_by_1" class="label" style="color:black; font-weight: bold"><span style="font-size: 12px; color: red">*</span>Assisted by:<span style="font-style: italic; font-size: 10px; text-transform: none;">  (Please select below... )</span></label>
                                            <b-form-select style="background-color: rgb(239 239 239);" :options="drop_assistedBy"  id="assisted_by_1" v-model="assignedTicketData.assisted_by_1"></b-form-select>
                                        </b-form-group>
                                    </div>
                                    <div class="col-md-6 col-lg-6 mb-0">
                                        <b-form-group class="group">
                                        <b-form-group class="group" id="optionAssistedBy">
                                            <label required for="assisted_by_2" class="label" style="color:black; font-weight: bold"><span style="font-size: 12px; color: red">*</span>Assisted by:<span style="font-style: italic; font-size: 10px; text-transform: none;">  (Please select below... )</span></label>
                                            <b-form-select style="background-color: rgb(239 239 239);" :options="drop_assistedBy"  id="assisted_by_2" v-model="assignedTicketData.assisted_by_2"></b-form-select>
                                        </b-form-group>
                                        </b-form-group>
                                    </div>
                                </div>
                                
                                
                                
                                <!-- <b-form-group class="group" id="groupProblem_that_needed_support" style="display:none">
                                    <label for="problem_that_needed_support" class="label" style="color:black; font-weight: bold">Describe the problem that needed support</label>
                                    <b-form-textarea id="problem_that_needed_support"  v-model="assignedTicketData.problem_that_needed_support" placeholder="Enter remarks here..." rows="3" max-rows="3" style="background: #fff !important; color: black"></b-form-textarea>
                                </b-form-group> -->
                                <b-form-group class="group" id="groupProblem_that_needed_support">
                                    <label for="problem_that_needed_support" class="label" style="color:black; font-weight: bold"><span style="font-size: 12px; color: red">*</span>Describe the problem that needed support:</label>
                                    <b-form-textarea id="problem_that_needed_support"  v-model="assignedTicketData_update.clientNote_" placeholder="Enter here..." rows="3" max-rows="3" style="background: #fff !important; color: black"></b-form-textarea>
                                </b-form-group>
                                <b-form-group class="group" id="groupActions_taken">
                                    <label for="actions_taken" class="label" style="color:black; font-weight: bold"><span style="font-size: 12px; color: red">*</span>Describe actions taken:</label>
                                    <b-form-textarea id="actions_taken"  v-model="assignedTicketData.actions_taken" placeholder="Enter here..." rows="3" max-rows="3" style="background: #fff !important; color: black"></b-form-textarea>
                                </b-form-group>
                                <b-form-group class="group" id="groupRemarks">
                                    <label for="remarks" class="label" style="color:black; font-weight: bold"><span style="font-size: 12px; color: red">*</span>REMARKS:</label>
                                    <b-form-textarea id="remarks"  v-model="assignedTicketData.remarks" placeholder="Enter here..." rows="3" max-rows="3" style="background: #fff !important; color: black"></b-form-textarea>
                                </b-form-group>
                                <b-form-group class="group" id="form_ITURequestType_internal">
                                    <label for="type" class="label" style="color:black; font-weight: bold"><span style="font-size: 12px; color: red">*</span>Type:<span style="font-style: italic; font-size: 10px; text-transform: none"></span></label>
                                    <select required v-model="assignedTicketData.type" id="type" name="type">
                                        <option value="" disabled>Select here</option>
                                        <option value="PC Setup & Troubleshooting">PC Setup & Troubleshooting</option>
                                        <option value="Network related">Network related</option>
                                        <option value="Printer related">Printer related</option>
                                        <option value="Zoom related">Zoom related</option>
                                        <option value="Website related">Website related</option>
                                        <option value="STARBOOKS related">STARBOOKS related</option>
                                        <option value="Installation related">Installation related</option>
                                        <option value="Others">Others</option>
                                    </select>
                                </b-form-group>
                            </div>
                        </div>
                        <b-form-group class="group" style="margin-top: 50px">
                            <b-button type="submit" class="tab button" style="background-color: #1161ee !important;" variant="outline-success">Apply Changes</b-button>
                        </b-form-group>
                </b-form>
            </div>
        </div>
    </b-modal>

    <b-modal id="assignModalForm_2" ref="assignModalForm_2" hide-footer title="Edit Ticket Details">
        <div class="">
            <div class="">
                <b-form class="login-form" id="login-form" v-on:submit.prevent="assignStaff_2">
                        <div class="">
                            <div class="">
                                <b-form-group class="group">
                                    <label for="type" class="label" style="color:black; font-weight: bold"><span style="font-size: 12px; color: red">*</span>Select Nature of Support<span style="font-style: italic; font-size: 10px; text-transform: none"></span></label>
                                    <select required @change="switchSelect_Division($event)" id="natureOfSupport" v-model="assignedTicketData.natureOfSupport">
                                        <option value="" disabled>Choose</option>
                                        <option value="Hardware">Hardware</option>
                                        <option value="Software">Software</option>
                                        <option value="Hardware and Software">Hardware and Software</option>
                                        <option value="System update / development">System update / development</option>
                                        <option value="NA">NA</option>
                                    </select>
                                </b-form-group>
                                <div v-if="assignedTicketData.natureOfSupport === 'Hardware'">
                                    <b-form-group class="group" id="optionHardware" style="display:block">
                                        <label for="type" class="label" style="color:black; font-weight: bold">Hardware:<span style="font-style: italic; font-size: 10px; text-transform: none;">  (Please select below... )</span></label>
                                        <b-form-select style="background-color: rgb(239 239 239);" :options="drop_hardware" id="supportType_hardware" v-model="assignedTicketData.hardware"></b-form-select>
                                    </b-form-group>
                                </div>
                                <div v-if="assignedTicketData.natureOfSupport === 'Software'">
                                    <b-form-group class="group" id="optionSoftware" style="display:block">
                                        <label for="type" class="label" style="color:black; font-weight: bold">Software:<span style="font-style: italic; font-size: 10px; text-transform: none;">  (Please select below... )</span></label>
                                        <b-form-select style="background-color: rgb(239 239 239);" :options="drop_software"  id="supportType_software" v-model="assignedTicketData.software"></b-form-select>
                                    </b-form-group>
                                </div>
                                <div v-if="assignedTicketData.natureOfSupport === 'Hardware and Software'">
                                    <b-form-group class="group" id="optionHardware" style="display:block">
                                        <label for="type" class="label" style="color:black; font-weight: bold">Hardware:<span style="font-style: italic; font-size: 10px; text-transform: none;">  (Please select below... )</span></label>
                                        <b-form-select style="background-color: rgb(239 239 239);" :options="drop_hardware" id="supportType_hardware" v-model="assignedTicketData.hardware"></b-form-select>
                                    </b-form-group>
                                    <b-form-group class="group" id="optionSoftware" style="display:block">
                                        <label for="type" class="label" style="color:black; font-weight: bold">Software:<span style="font-style: italic; font-size: 10px; text-transform: none;">  (Please select below... )</span></label>
                                        <b-form-select style="background-color: rgb(239 239 239);" :options="drop_software"  id="supportType_software" v-model="assignedTicketData.software"></b-form-select>
                                    </b-form-group>
                                </div>
                                <div v-if="assignedTicketData.natureOfSupport === 'NA'">
                                    <b-form-group class="group" id="optionHardware" style="display:none">
                                        <label for="type" class="label" style="color:black; font-weight: bold">Hardware:<span style="font-style: italic; font-size: 10px; text-transform: none;">  (Please select below... )</span></label>
                                        <b-form-select style="background-color: rgb(239 239 239);" :options="drop_hardware" id="supportType_hardware" v-model="assignedTicketData.hardware"></b-form-select>
                                    </b-form-group>
                                    <b-form-group class="group" id="optionSoftware" style="display:none">
                                        <label for="type" class="label" style="color:black; font-weight: bold">Software:<span style="font-style: italic; font-size: 10px; text-transform: none;">  (Please select below... )</span></label>
                                        <b-form-select style="background-color: rgb(239 239 239);" :options="drop_software"  id="supportType_software" v-model="assignedTicketData.software"></b-form-select>
                                    </b-form-group>
                                </div>


                                




                                <div class="row">
                                    <div class="col-md-6 col-lg-6 mb-0">
                                        <b-form-group class="group" id="form_ITURequestType_internal">
                                            <label for="supportType" class="label" style="color:black; font-weight: bold"><span style="font-size: 12px; color: red">*</span>Request Type:<span style="font-style: italic; font-size: 10px; text-transform: none"></span></label>
                                            <select required v-model="assignedTicketData.supportType_" id="supportType" name="supportType">
                                                <option value="" disabled>Select here</option>
                                                <option value="Livestream">Livestream</option>
                                                <option value="Technical Support">Technical Support</option>
                                                <option value="IS">Information System</option>
                                                <option value="TWG">TWG</option>
                                            </select>
                                        </b-form-group>
                                    </div>
                                    <div class="col-md-6 col-lg-6 mb-0">
                                        <b-form-group class="group">
                                            <label for="mode" class="label" style="color:black; font-weight: bold"><span style="font-size: 12px; color: red">*</span>Mode:<span style="font-style: italic; font-size: 10px; text-transform: none"></span></label>
                                            <select required v-model="assignedTicketData.mode_" id="mode" name="mode">
                                                <option value="" disabled>Select here</option>
                                                <option value="Service Form">Service Form</option>
                                                <option value="Online Form">Online Form</option>
                                            </select>
                                        </b-form-group>
                                    </div>
                                </div>
                                <div class="row">
                                    <div class="col-md-6 col-lg-6 mb-0">
                                        <b-form-group class="group" id="optionAssistedBy">
                                            <label required for="assisted_by_1" class="label" style="color:black; font-weight: bold"><span style="font-size: 12px; color: red">*</span>Assisted by:<span style="font-style: italic; font-size: 10px; text-transform: none;">  (Please select below... )</span></label>
                                            <b-form-select style="background-color: rgb(239 239 239);" :options="drop_assistedBy"  id="assisted_by_1" v-model="assignedTicketData.assisted_by_1"></b-form-select>
                                        </b-form-group>
                                    </div>
                                    <div class="col-md-6 col-lg-6 mb-0">
                                        <b-form-group class="group">
                                        <b-form-group class="group" id="optionAssistedBy">
                                            <label required for="assisted_by_2" class="label" style="color:black; font-weight: bold"><span style="font-size: 12px; color: red">*</span>Assisted by:<span style="font-style: italic; font-size: 10px; text-transform: none;">  (Please select below... )</span></label>
                                            <b-form-select style="background-color: rgb(239 239 239);" :options="drop_assistedBy"  id="assisted_by_2" v-model="assignedTicketData.assisted_by_2"></b-form-select>
                                        </b-form-group>
                                        </b-form-group>
                                    </div>
                                </div>
                                <!-- <b-form-group class="group" id="groupProblem_that_needed_support" style="display:none">
                                    <label for="problem_that_needed_support" class="label" style="color:black; font-weight: bold">Describe the problem that needed support</label>
                                    <b-form-textarea id="problem_that_needed_support"  v-model="assignedTicketData.problem_that_needed_support" placeholder="Enter remarks here..." rows="3" max-rows="3" style="background: #fff !important; color: black"></b-form-textarea>
                                </b-form-group> -->
                                <b-form-group class="group" id="groupProblem_that_needed_support">
                                    <label for="problem_that_needed_support" class="label" style="color:black; font-weight: bold"><span style="font-size: 12px; color: red">*</span>Describe the problem that needed support</label>
                                    <b-form-textarea required id="problem_that_needed_support"  v-model="assignedTicketData_update.clientNote_" placeholder="Enter here..." rows="3" max-rows="3" style="background: #fff !important; color: black"></b-form-textarea>
                                </b-form-group>
                                <b-form-group class="group" id="groupActions_taken">
                                    <label for="actions_taken" class="label" style="color:black; font-weight: bold"><span style="font-size: 12px; color: red">*</span>Describe actions taken</label>
                                    <b-form-textarea required id="actions_taken"  v-model="assignedTicketData.actions_taken" placeholder="Enter here..." rows="3" max-rows="3" style="background: #fff !important; color: black"></b-form-textarea>
                                </b-form-group>
                                <b-form-group class="group" id="groupRemarks">
                                    <label for="remarks" class="label" style="color:black; font-weight: bold"><span style="font-size: 12px; color: red">*</span>REMARKS/RECOMMENDATION</label>
                                    <b-form-textarea required id="remarks"  v-model="assignedTicketData.remarks" placeholder="Enter here..." rows="3" max-rows="3" style="background: #fff !important; color: black"></b-form-textarea>
                                </b-form-group>
                                <b-form-group class="group" id="form_ITURequestType_internal">
                                    <label for="type" class="label" style="color:black; font-weight: bold"><span style="font-size: 12px; color: red">*</span>Type:<span style="font-style: italic; font-size: 10px; text-transform: none"></span></label>
                                    <select required v-model="assignedTicketData.type" id="type" name="type">
                                        <option value="" disabled>Select here</option>
                                        <option value="PC Setup & Troubleshooting">PC Setup & Troubleshooting</option>
                                        <option value="Network related">Network related</option>
                                        <option value="Printer related">Printer related</option>
                                        <option value="Zoom related">Zoom related</option>
                                        <option value="Website related">Website related</option>
                                        <option value="STARBOOKS related">STARBOOKS related</option>
                                        <option value="Installation related">Installation related</option>
                                        <option value="Others">Others</option>
                                    </select>
                                </b-form-group>
                            </div>
                        </div>
                        <b-form-group class="group" style="margin-top: 50px">
                            <b-button type="submit" class="tab button" style="background-color: #1161ee !important;" variant="outline-success">Apply Changes</b-button>
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
        completeTicket: async function(data) {
            this.assignedTicketData = {...data}
            this.assignedTicketData_update = {...data}
            let govTypeId = this.assignedTicketData_update.	supportType;
            if (govTypeId == "Livestream" || govTypeId == "IS" || govTypeId == "TWG"|| govTypeId == "Other"){
                this.$refs['assignModalForm_1'].show();
            } else if (govTypeId == "Technical Support" ){
                this.$refs['assignModalForm_2'].show();
            }
        },
        assignStaff_1: async function(data) {
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
            try {
                let formData_ = new FormData(); //Ticket Status table

                
                formData_.append('date2', this.assignedTicketData_update.date2);
                formData_.append('natureOfSupport', "NA");
                // formData_.append('hardware', this.assignedTicketData.supportType_hardware);
                // formData_.append('software', this.assignedTicketData.supportType_software);
                formData_.append('supportType_', this.assignedTicketData.supportType_);
                formData_.append('externalOtherType_', this.assignedTicketData_update.externalOtherType_);
                formData_.append('mode_', this.assignedTicketData.mode_);
                formData_.append('assisted_by_1', this.assignedTicketData.assisted_by_1);
                formData_.append('assisted_by_2', this.assignedTicketData.assisted_by_2);
                formData_.append('clientNote_', this.assignedTicketData_update.clientNote_);
                formData_.append('type', this.assignedTicketData.type);
                formData_.append('ticket_completed', this.assignedTicketData.ticket_completed);

                formData_.append('actions_taken', this.assignedTicketData.actions_taken);
                formData_.append('remarks', this.assignedTicketData.remarks);
                formData_.append('ticket_updated', date_ticketCreated);
                formData_.append('status', this.assignedTicketData.status);
                formData_.append('feedback_status', this.assignedTicketData.feedback_status);
                formData_.append('rating_status', this.assignedTicketData.	rating_status);

                const response_ = await ticket_service.updateInProg_TicketStatus_1(this.assignedTicketData.id, formData_);

                this.flashMessage.success({
					message: 'Ticket Updated Successfully!'
				});
            } 
            catch (error) {
                this.flashMessage.warning({
					message: 'Please fill out the form!'
				});
            }

            let username = this.assignedTicketData.assignedStaff;
            let activity_id = 8;
            let activity_date = date_ticketCreated;
            let ticket_id = this.assignedTicketData.reference_code;

            let formData_activityLog = new FormData();
            formData_activityLog.append('username', username);
            formData_activityLog.append('activity_id', activity_id);
            formData_activityLog.append('activity_date', activity_date);
            formData_activityLog.append('ticket_id', ticket_id);
            const response_activityLog = await ticket_service.addActivityLog(formData_activityLog);


            this.loadAllTicketDetails();
            this.$refs['assignModalForm_1'].hide();
            this.$refs['assignModalForm_2'].hide();
        },
        assignStaff_2: async function(data) {
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

            try {
                let formData_ = new FormData(); //Ticket Status table
                formData_.append('date2', this.assignedTicketData.date2);
                formData_.append('natureOfSupport', this.assignedTicketData.natureOfSupport);
                formData_.append('hardware', this.assignedTicketData.supportType_hardware);
                formData_.append('software', this.assignedTicketData.supportType_software);
                formData_.append('supportType_', this.assignedTicketData.supportType_);
                formData_.append('externalOtherType_', this.assignedTicketData_update.externalOtherType_);
                formData_.append('mode_', this.assignedTicketData.mode_);
                formData_.append('assisted_by_1', this.assignedTicketData.assisted_by_1);
                formData_.append('assisted_by_2', this.assignedTicketData.assisted_by_2);
                formData_.append('clientNote_', this.assignedTicketData_update.clientNote_);
                formData_.append('type', this.assignedTicketData.type);
                formData_.append('ticket_completed', date_ticketCreated);

                formData_.append('actions_taken', this.assignedTicketData.actions_taken);
                formData_.append('remarks', this.assignedTicketData.remarks);
                formData_.append('ticket_updated', date_ticketCreated);
                formData_.append('status', this.assignedTicketData.status);
                formData_.append('feedback_status', this.assignedTicketData.feedback_status);
                formData_.append('rating_status', this.assignedTicketData.rating_status);

                const response_ = await ticket_service.updateInProg_TicketStatus_1(this.assignedTicketData.id, formData_);

                this.flashMessage.success({
					message: 'Ticket Updated Successfully!'
				});
            } 
            catch (error) {
                this.flashMessage.warning({
					message: 'Please fill out the form!'
				});
            }

            let username = this.assignedTicketData.assignedStaff;
            let activity_id = 8;
            let activity_date = date_ticketCreated;
            let ticket_id = this.assignedTicketData.reference_code;

            let formData_activityLog = new FormData();
            formData_activityLog.append('username', username);
            formData_activityLog.append('activity_id', activity_id);
            formData_activityLog.append('activity_date', activity_date);
            formData_activityLog.append('ticket_id', ticket_id);
            const response_activityLog = await ticket_service.addActivityLog(formData_activityLog);

            
            this.loadAllTicketDetails();
            this.$refs['assignModalForm_1'].hide();
            this.$refs['assignModalForm_2'].hide();
        },
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
                const response_set_refCode = await ticket_service.setDisplayName(name);
                const response = await ticket_service.getAllTicketDetails_Completed_Assigned(name);
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
        showRating: async function(data){
            this.assignedTicketData = {...data}
            console.log(this.assignedTicketData.id);
    
        },
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
		switchSelect_Division(event) {
			this.selected = event.target.value;
			if(this.selected == "Software"){ 
				document.getElementById("optionSoftware").style.display = "block"; 
				document.getElementById("optionHardware").style.display = "none"; 
				document.getElementById("optionAssistedBy").style.display = "block"; 
				document.getElementById("groupProblem_that_needed_support").style.display = "block"; 
				document.getElementById("groupActions_taken").style.display = "block"; 
				document.getElementById("groupRemarks").style.display = "block"; 
			}
			else if(this.selected == "Hardware"){ 
				document.getElementById("optionSoftware").style.display = "none"; 
				document.getElementById("optionHardware").style.display = "block"; 
				document.getElementById("optionAssistedBy").style.display = "block"; 
				document.getElementById("groupProblem_that_needed_support").style.display = "block"; 
				document.getElementById("groupActions_taken").style.display = "block"; 
				document.getElementById("groupRemarks").style.display = "block"; 
			}
			else if(this.selected == "Hardware and Software"){ 
				document.getElementById("optionSoftware").style.display = "block"; 
				document.getElementById("optionHardware").style.display = "block"; 
				document.getElementById("optionAssistedBy").style.display = "block"; 
				document.getElementById("groupProblem_that_needed_support").style.display = "block"; 
				document.getElementById("groupActions_taken").style.display = "block"; 
				document.getElementById("groupRemarks").style.display = "block"; 
			}
			else if(this.selected == "NA"){ 
				document.getElementById("optionSoftware").style.display = "none"; 
				document.getElementById("optionHardware").style.display = "none"; 
				document.getElementById("optionAssistedBy").style.display = "block"; 
				document.getElementById("groupProblem_that_needed_support").style.display = "block"; 
				document.getElementById("groupActions_taken").style.display = "block"; 
				document.getElementById("groupRemarks").style.display = "block"; 
			}
			else if(this.selected == "System update / development"){ 
				document.getElementById("optionSoftware").style.display = "none"; 
				document.getElementById("optionHardware").style.display = "none"; 
				document.getElementById("optionAssistedBy").style.display = "block"; 
				document.getElementById("groupProblem_that_needed_support").style.display = "block"; 
				document.getElementById("groupActions_taken").style.display = "block"; 
				document.getElementById("groupRemarks").style.display = "block"; 
			}
		},
    }
}

</script>