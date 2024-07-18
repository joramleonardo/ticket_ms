<template>
  <div class="container-fluid">
    <h1 class="mt-4 admin-header-title">IN PROGRESS TICKETS</h1>
    <div class="breakcrumbs mt-3">
        Home > Tickets > <span class="admin-sub-header-title">IN PROGRESS TICKETS</span>
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
                                :fields="fields_INPROG"
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
                                        <div v-if="row.item.status === 'In Progress'">
                                            <b-badge class="mr-1 badge" variant="warning">IN PROGRESS</b-badge>
                                        </div>
                                    </template>


                                    <template #cell(actions)="row">
                                        <b-button @click="addRemarksModal(row.item, row.index, $event.target)" size="sm" class="mr-1 jkl-btn-view" style="background-color:rgb(242, 100, 25) !important;">Add Remarks</b-button>
                                        <b-button @click="completeTicket(row.item, row.index, $event.target)" size="sm" class="mr-1 jkl-btn-view" style="background-color:#417c4f !important;">Mark Complete</b-button>                                       
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

    <b-modal id="assignModalForm_1" ref="assignModalForm_1" hide-footer title="Please fill out this form to mark the ticket as complete.">
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
                                            <select required  @change="switchSelect_ITURequestType($event)" v-model="assignedTicketData_update.supportType">
                                                <option value="" disabled>Select here</option>
                                                <option value="Livestream">Livestream</option>
                                                <option value="Other">Other..</option>
                                            </select>
                                        </b-form-group>
                                    </div>
                                    <div class="col-md-6 col-lg-6 mb-0">
                                        <b-form-group class="group">
                                            <label for="mode" class="label" style="color:black; font-weight: bold"><span style="font-size: 12px; color: red">*</span>Mode:</label>
                                            <select required v-model="assignedTicketData.mode" id="mode" name="mode">
                                                <option value="" disabled>Select here</option>
                                                <option value="Service Form">Service Form</option>
                                                <option value="Online Form">Online Form</option>
                                            </select>
                                        </b-form-group>
                                    </div>
                                </div>
                                <b-form-group class="group" id="form_RequestTypeOther">
                                    <label for="externalOtherType" class="label" style="color:black; font-weight: bold">Specific Request:</label>
                                    <b-form-input v-model="assignedTicketData_update.externalOtherType" id="externalOtherType" type="text" class="input" style="background: #fff; border: 1px solid #ced4da !important; color: black"></b-form-input>
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
                                    <b-form-textarea id="problem_that_needed_support"  v-model="assignedTicketData_update.clientNote" placeholder="Enter here..." rows="3" max-rows="3" style="background: #fff !important; color: black"></b-form-textarea>
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
                            <b-button type="submit" class="tab button" style="background-color: #1161ee !important;" variant="outline-success">Submit</b-button>
                        </b-form-group>
                </b-form>
            </div>
        </div>
    </b-modal>

    <b-modal id="assignModalForm_2" ref="assignModalForm_2" hide-footer title="Please fill out this form to mark the ticket as complete.">
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
                                <b-form-group class="group" id="optionHardware" style="display:none">
                                    <label for="type" class="label" style="color:black; font-weight: bold">Hardware:<span style="font-style: italic; font-size: 10px; text-transform: none;">  (Please select below... )</span></label>
                                    <b-form-select style="background-color: rgb(239 239 239);" :options="drop_hardware" id="supportType_hardware" v-model="assignedTicketData.supportType_hardware"></b-form-select>
                                </b-form-group>
                                <b-form-group class="group" id="optionSoftware" style="display:none">
                                    <label for="type" class="label" style="color:black; font-weight: bold">Software:<span style="font-style: italic; font-size: 10px; text-transform: none;">  (Please select below... )</span></label>
                                    <b-form-select style="background-color: rgb(239 239 239);" :options="drop_software"  id="supportType_software" v-model="assignedTicketData.supportType_software"></b-form-select>
                                </b-form-group>
                                <div class="row">
                                    <div class="col-md-6 col-lg-6 mb-0">
                                        <b-form-group class="group" id="form_ITURequestType_internal">
                                            <label for="supportType" class="label" style="color:black; font-weight: bold"><span style="font-size: 12px; color: red">*</span>Request Type:<span style="font-style: italic; font-size: 10px; text-transform: none"></span></label>
                                            <select required v-model="assignedTicketData.supportType" id="supportType" name="supportType">
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
                                            <select required v-model="assignedTicketData.mode" id="mode" name="mode">
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
                                    <b-form-textarea required id="problem_that_needed_support"  v-model="assignedTicketData_update.clientNote" placeholder="Enter here..." rows="3" max-rows="3" style="background: #fff !important; color: black"></b-form-textarea>
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
                            <b-button type="submit" class="tab button" style="background-color: #1161ee !important;" variant="outline-success">Submit</b-button>
                        </b-form-group>
                </b-form>
            </div>
        </div>
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
        <span style="font-weight: bold"> NOTE FROM TECHNICAL STAFF </span>
        <b-table 
            stacked
            :items="ticketDetails"
            :fields="fields4"
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
            </div>
        </div>
    </b-modal>
    <b-modal id="showDetails_external" ref="showDetails_external" hide-footer title="TICKET DETAILS" size="xl">
        <div class="">
            <div class="">
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
            </div>
        </div>
    </b-modal>
    <b-modal id="addRemarksModalForm" ref="addRemarksModalForm" hide-footer title="Add remarks">
        <div class="">
            <div class="">
                <b-form class="login-form" id="login-form" v-on:submit.prevent="addRemarks">
                        <div class="">
                            <div class="">
                                <b-form-group class="group" id="groupRemarks">
                                    <label for="remarks" class="label" style="color:black; font-weight: bold">Leave a note here</label>
                                    <b-form-textarea id="tech_remarks"  v-model="assignedTicketDataTechRemarks_update.tech_remarks" placeholder="Enter remarks here..." rows="3" max-rows="3" style="background: #fff !important; color: black"></b-form-textarea>
                                </b-form-group>
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

.table thead th{
    font-size:12px;
}
.table th, .table td{
    font-size: 12px;
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
                reference_code:'',
                assignedStaff:''
            },
            assignedTicketData:{},
            assignedTicketData_update:{},
            assignedTicketDataTechRemarks_update:{},
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
                { key: 'details', label: 'Ticket Details'},
                { key: 'actions', label: 'Action' }
            ],
            fields_INPROG: [
                { key: 'reference_code', label: 'Reference Code'},
                { key: 'priority', label: 'Priority'},
                { key: 'ticket_created', label: 'Date Requested'},
                { key: 'externalName', label: 'Client Name'},
                { key: 'internal_external', label: 'Client Type'},
                { key: 'supportType', label: 'Support Type'},
                { key: 'status', label: 'Status'},

                { key: 'details', label: 'Ticket Details'},
                { key: 'actions', label: 'Action' }
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
                { key: 'ticket_attended', label: 'Date Attended'},
                { key: 'ticket_updated', label: 'Date Updated'},
                // { key: 'ticket_completed', label: 'Date Completed'},
            ],
            fields4: [
                { key: 'assignedStaff', label: 'Assigned to'},
                { key: 'tech_remarks', label: 'Note'},
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
            ],
            fields_external_event: [
                { key: 'externalEventTitle', label: 'Event Title'},
                { key: 'externalStartDate', label: 'Start Date'},
                { key: 'externalEndDate', label: 'End Date'},
            ],
            fields_moreInfo: [
                { key: 'clientNote', label: ''},
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
                    const response = await ticket_service.loadTicketDetails_external(this.assignedTicketData.id);
                    this.ticketDetails = response.data;
                }
                catch (error){

                }
                this.$refs['showDetails_external'].show();
            }
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
        loadAllTicketDetails: async function() {

            const response_getUserData = await ticket_service.getUserData();
            this.displayName=response_getUserData.data.user.name;
            const response_name = await ticket_service.setName(this.displayName);

            try{
                const response_set_refCode = await ticket_service.setDisplayName(response_name);
                const response = await ticket_service.getAllTicketDetails_InProgress_Assigned(response_name);
                this.ticket = response.data;
                this.totalRows = this.ticket.length;
            } catch(error) {
                this.flashMessage.error({
                message: 'Some error occured! Please try again.',
                time: 5000
                });
            }
        },
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

                
                formData_.append('date2', currentDateTime);
                formData_.append('natureOfSupport', "NA");
                // formData_.append('hardware', this.assignedTicketData.supportType_hardware);
                // formData_.append('software', this.assignedTicketData.supportType_software);
                formData_.append('supportType_', this.assignedTicketData.supportType);
                formData_.append('externalOtherType_', this.assignedTicketData_update.externalOtherType);
                formData_.append('mode_', this.assignedTicketData.mode);
                formData_.append('assisted_by_1', this.assignedTicketData.assisted_by_1);
                formData_.append('assisted_by_2', this.assignedTicketData.assisted_by_2);
                formData_.append('clientNote_', this.assignedTicketData_update.clientNote);
                formData_.append('type', this.assignedTicketData.type);
                formData_.append('ticket_completed', date_ticketCreated);

                formData_.append('actions_taken', this.assignedTicketData.actions_taken);
                formData_.append('remarks', this.assignedTicketData.remarks);
                formData_.append('ticket_updated', date_ticketCreated);
                formData_.append('status', 'Completed');
                formData_.append('feedback_status', 'Pending');
                formData_.append('rating_status', 'Pending');

                const response_ = await ticket_service.updateInProg_TicketStatus_1(this.assignedTicketData.id, formData_);

                this.flashMessage.success({
					message: 'Ticket Completed Successfully!'
				});

            } 
            catch (error) {
                this.flashMessage.warning({
					message: 'Please fill out the form!'
				});
            }

            let username = this.assignedTicketData.assignedStaff;
            let activity_id = 6;
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

                
                formData_.append('date2', currentDateTime);
                formData_.append('natureOfSupport', this.assignedTicketData.natureOfSupport);
                formData_.append('hardware', this.assignedTicketData.supportType_hardware);
                formData_.append('software', this.assignedTicketData.supportType_software);
                formData_.append('supportType_', this.assignedTicketData.supportType);
                formData_.append('externalOtherType_', this.assignedTicketData_update.externalOtherType);
                formData_.append('mode_', this.assignedTicketData.mode);
                formData_.append('assisted_by_1', this.assignedTicketData.assisted_by_1);
                formData_.append('assisted_by_2', this.assignedTicketData.assisted_by_2);
                formData_.append('clientNote_', this.assignedTicketData_update.clientNote);
                formData_.append('type', this.assignedTicketData.type);
                formData_.append('ticket_completed', date_ticketCreated);

                formData_.append('actions_taken', this.assignedTicketData.actions_taken);
                formData_.append('remarks', this.assignedTicketData.remarks);
                formData_.append('ticket_updated', date_ticketCreated);
                formData_.append('status', 'Completed');
                formData_.append('feedback_status', 'Pending');
                formData_.append('rating_status', 'Pending');

                const response_ = await ticket_service.updateInProg_TicketStatus_1(this.assignedTicketData.id, formData_);

                this.flashMessage.success({
					message: 'Ticket Completed Successfully!'
				});

            } 
            catch (error) {
                this.flashMessage.warning({
					message: 'Please fill out the form!'
				});
            }

            let username = this.assignedTicketData.assignedStaff;
            let activity_id = 6;
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
        addRemarksModal: async function(data) {
            this.assignedTicketData = {...data}
            this.assignedTicketDataTechRemarks_update = {...data}
            this.$refs['addRemarksModalForm'].show();
        },
        addRemarks: async function(data) {
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
            
            try {
                let formData = new FormData();
                formData.append('ticket_updated', date_ticketCreated);

                formData.append('tech_remarks', this.assignedTicketDataTechRemarks_update.tech_remarks);
                
                const response = await ticket_service.updateRemarks(this.assignedTicketData.id, formData);
                this.flashMessage.success({
					message: 'Remarks Added Successfully!'
				});
                this.$refs['addRemarksModalForm'].hide();

            } catch (error) {
                this.flashMessage.warning({
					message: 'Please fill out the form!'
				});
            }
            let username = this.assignedTicketData.assignedStaff;
            let activity_id = 7;
            let activity_date = date_ticketCreated;
            let ticket_id = this.assignedTicketData.reference_code;

            let formData_activityLog = new FormData();
            formData_activityLog.append('username', username);
            formData_activityLog.append('activity_id', activity_id);
            formData_activityLog.append('activity_date', activity_date);
            formData_activityLog.append('ticket_id', ticket_id);
            const response_activityLog = await ticket_service.addActivityLog(formData_activityLog);

            this.loadAllTicketDetails();
        },
    }
}

</script>