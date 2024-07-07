<template>
  <div class="container-fluid">
    <h1 class="mt-4 admin-header-title">CREATE A TICKET</h1>
    <div class="breakcrumbs mt-3">
        Home > Create Ticket > <span class="admin-sub-header-title" style="font-weight:700">Other Agency</span>
    </div>
    <div class="row mt-4">
        <div class="col-xl-12">
        <b-card class="m-2">
            <b-form class="loginForm" id="loginForm" v-on:submit.prevent="createTicket_external">
                    <div class="">
                        <div class="row">
                            <div class="col-md-6 col-lg-6 mb-0">
                                <b-form-group class="group" id="form_externalEventDate">
                                    <label for="entryDate" class="label" style="color:black; font-weight: bold"><span style="font-size: 12px; color: red">*</span>Entry Date <span style="font-style:italic">(Same as date of request)</span></label>
                                    <label style="font-size: 10px; color: red; font-style:italic">(For reference number)</label>
                                    <b-form-input pattern="\d{1,2}/\d{1,2}/\d{4}" required v-model="ticketData.entryDate" id="entryDate" type="date" class="input" style="text-transform:uppercase; background: #fff; border: 1px solid #ced4da !important; color: black"></b-form-input>
                                </b-form-group>
                            </div>
                            <div class="col-md-6 col-lg-6 mb-0">
                                <b-form-group class="group">
                                    <label for="mode" class="label" style="color:black; font-weight: bold"><span style="font-size: 12px; color: red">*</span>Mode:<span style="font-style: italic; font-size: 10px; text-transform: none"></span></label>
                                    <!-- <select required v-model="ticketData.mode" id="mode" name="mode">
                                        <option value="" disabled>Select here</option>
                                        <option value="Service Form">Service Form</option>
                                        <option value="Online Form">Online Form</option>
                                    </select> -->
                                    <b-form-select v-model="ticketData.mode" :options="options_mode"></b-form-select>
                                </b-form-group>
                            </div>
                        </div>
                        <div class="row">
                                <div style="margin-botton: 15px">
                                    <span style="font-size: 12px; color: red; font-style: italic; ">* Required Fields</span>
                                </div>
                            <div class="col-md-6 col-lg-6 mb-0">
                                <b-form-group class="group" id="form_externalName">
                                    <label for="externalName" class="label" style="color:black; font-weight: bold"><span style="font-size: 12px; color: red">*</span>Last Name</label>
                                    <b-form-input required v-model="ticketData.lName" id="lName" type="text" class="input" style="text-transform:uppercase; background: #fff; border: 1px solid #ced4da !important; color: black"></b-form-input>
                                </b-form-group>
                            </div>
                            <div class="col-md-6 col-lg-6 mb-0">
                                <b-form-group class="group" id="form_externalName">
                                    <label for="externalName" class="label" style="color:black; font-weight: bold"><span style="font-size: 12px; color: red">*</span>First Name</label>
                                    <b-form-input required v-model="ticketData.fName" id="fName" type="text" class="input" style="text-transform:uppercase; background: #fff; border: 1px solid #ced4da !important; color: black"></b-form-input>
                                </b-form-group>
                            </div>
                            <!-- <div class="col-md-2 col-lg-2 mb-0">
                                <b-form-group class="group" id="form_externalName">
                                    <label for="externalName" class="label" style="color:black; font-weight: bold"><span style="font-size: 12px; color: red">*</span>M. I.</label>
                                    <b-form-input required v-model="ticketData.mName" id="mName" type="text" class="input" style="text-transform:uppercase; background: #fff; border: 1px solid #ced4da !important; color: black"></b-form-input>
                                </b-form-group>
                            </div> -->
                        </div>
                        <div class="row">
                            <div class="col-md-6 col-lg-6 mb-0">
                                <b-form-group class="group" id="form_employeeId">
                                    <label for="externalAgency" class="label" style="color:black; font-weight: bold"><span style="font-size: 12px; color: red">*</span>Agency:</label>
                                    <b-form-input required v-model="ticketData.externalAgency" id="externalAgency" name="externalAgency" type="text" class="input" style="text-transform:uppercase; background: #fff; border: 1px solid #ced4da !important; color: black"></b-form-input>
                                    
                                </b-form-group>   
                            </div>
                            <div class="col-md-6 col-lg-6 mb-0">
                                <b-form-group class="group" id="form_employeeId">
                                    <label for="sex" class="label" style="color:black; font-weight: bold"><span style="font-size: 12px; color: red">*</span>Sex:</label>
                                    <b-form-select v-model="ticketData.sex" :options="options_sex"></b-form-select>
                                </b-form-group> 
                            </div>
                        </div>
                            
                        <div class="row">
                            <div class="col-md-6 col-lg-6 mb-0">
                                <b-form-group class="group" id="form_externalEventDate">
                                    <label for="externalStartDate" class="label" style="color:black; font-weight: bold"><span style="font-size: 12px; color: red">*</span>Event Start Date</label>
                                    <b-form-input required v-model="ticketData.externalStartDate" id="externalStartDate" type="date" class="input" style="text-transform:uppercase; background: #fff; border: 1px solid #ced4da !important; color: black"></b-form-input>
                                </b-form-group>
                            </div>
                            <div class="col-md-6 col-lg-6 mb-0">
                                <b-form-group class="group" id="form_externalEventDate">
                                    <label for="externalEndDate" class="label" style="color:black; font-weight: bold"><span style="font-size: 12px; color: red">*</span>Event End Date</label>
                                    <b-form-input required v-model="ticketData.externalEndDate" id="externalEndDate" type="date" class="input" style="text-transform:uppercase; background: #fff; border: 1px solid #ced4da !important; color: black"></b-form-input>
                                </b-form-group>
                            </div>
                        </div>
                        <div class="row">
                            <div class="col-md-12 col-lg-12 mb-0">
                                <b-form-group class="group" id="form_externalEventTitle">
                                    <label for="externalEventTitle" class="label" style="color:black; font-weight: bold"><span style="font-size: 12px; color: red">*</span>Title of Event</label>
                                    <!-- <b-form-input required v-model="ticketData.externalEventTitle" id="externalEventTitle" type="text" class="input" style="text-transform:uppercase; background: #fff; border: 1px solid #ced4da !important; color: black"></b-form-input> -->
                                    <b-form-textarea required v-model="ticketData.externalEventTitle" id="externalEventTitle" placeholder="Type here..." rows="2" max-rows="2" style="background: #fff !important; color: black"></b-form-textarea>
                                </b-form-group>
                            </div>
                        </div>
                        <div class="row">
                            <div class="col-md-6 col-lg-6 mb-0">
                                <b-form-group class="group" id="form_employeeId">
                                    <label for="employee_code" class="label" style="color:black; font-weight: bold"><span style="font-size: 12px; color: red">*</span>Request Type:</label>
                                    <b-form-select v-model="ticketData.supportType" :options="options_supportType_external"></b-form-select>
                                </b-form-group> 
                            </div>
                            <div class="col-md-6 col-lg-6 mb-0">
                                <b-form-group class="group" id="form_RequestTypeOther">
                                    <label for="externalOtherType" class="label" style="color:black; font-weight: bold">If other, please enter Specific Request</label>
                                    <b-form-input v-model="ticketData.externalOtherType" id="externalOtherType" type="text" class="input" style="text-transform:uppercase; background: #fff; border: 1px solid #ced4da !important; color: black"></b-form-input>
                                </b-form-group> 
                            </div>
                        </div>
                        <div class="row">
                            <div class="col-md-4 col-lg-4 mb-0">
                                <span style="font-weight: bold"> Assigned Staff:</span>
                                <b-form-group class="group">
                                    <label for="type" class="label"><span style="font-style: italic; font-size: 10px; text-transform: none">  Please select below... </span></label>
                                    <b-form-select  size="sm" id="assignedStaff" v-model="ticketData.attended_by" :options="options_staff" required></b-form-select>
                                </b-form-group>
                            </div>
                            <div class="col-md-4 col-lg-4 mb-0">
                                <span style="font-weight: bold"> Assisted By:</span>
                                <b-form-group class="group">
                                    <label for="type" class="label"><span style="font-style: italic; font-size: 10px; text-transform: none">  Please select below... </span></label>
                                    <b-form-select  size="sm" id="assignedStaff" v-model="ticketData.assisted_by_1" :options="drop_assistedBy" required></b-form-select>
                                </b-form-group>
                            </div>
                            <div class="col-md-4 col-lg-4 mb-0">
                                <span style="font-weight: bold"> Assisted By:</span>
                                <b-form-group class="group">
                                    <label for="type" class="label"><span style="font-style: italic; font-size: 10px; text-transform: none">  Please select below... </span></label>
                                    <b-form-select  size="sm" id="assignedStaff" v-model="ticketData.assisted_by_2" :options="drop_assistedBy" required></b-form-select>
                                </b-form-group>
                            </div>
                        </div>
                        <b-form-group class="group" id="form_remarks">
                            <label for="clientNote" class="label" style="color:black; font-weight: bold"><span style="font-size: 12px; color: red">*</span>Describe the problem that needed support: <span style="font-style: italic; font-size: 10px"></span></label>
                            <b-form-textarea required v-model="ticketData.clientNote" id="clientNote" name="clientNote" placeholder="Type here..." rows="3" max-rows="3" style="background: #fff !important; color: black"></b-form-textarea>
                        </b-form-group>
                        <b-form-group class="group" id="groupActions_taken">
                            <label for="actions_taken" class="label" style="color:black; font-weight: bold"><span style="font-size: 12px; color: red">*</span>Describe actions taken:</label>
                            <b-form-textarea required id="actions_taken"  v-model="ticketData.actions_taken" placeholder="Enter here..." rows="3" max-rows="3" style="background: #fff !important; color: black"></b-form-textarea>
                        </b-form-group>
                        <b-form-group class="group" id="groupRemarks">
                            <label for="remarks" class="label" style="color:black; font-weight: bold"><span style="font-size: 12px; color: red">*</span>Remarks:</label>
                            <b-form-textarea required id="remarks"  v-model="ticketData.remarks" placeholder="Enter here..." rows="3" max-rows="3" style="background: #fff !important; color: black"></b-form-textarea>
                        </b-form-group>
                        <b-form-group class="group" id="form_ITURequestType_internal">
                            <label for="type" class="label" style="color:black; font-weight: bold"><span style="font-size: 12px; color: red">*</span>Type:<span style="font-style: italic; font-size: 10px; text-transform: none"></span></label>
                            <b-form-select  size="sm" id="assignedStaff" v-model="ticketData.type" :options="options_type" required></b-form-select>
                        </b-form-group>

                        <!-- <b-form-group class="group" id="form_remarks">
                            <label for="clientNote" class="label" style="color:black; font-weight: bold"><span style="font-size: 12px; color: red">*</span>Remarks: <span style="font-style: italic; font-size: 10px">(Venue, other deatils, etc.)</span><span style="font-style: italic; font-size: 10px"></span></label>
                            <b-form-textarea required v-model="ticketData.clientNote" id="clientNote" placeholder="Type here..." rows="5" max-rows="5" style="background: #fff !important; color: black"></b-form-textarea>
                        </b-form-group> -->
                    </div>
                    <b-form-group class="group">
                        <b-button type="submit" class="block" style="background-color: #1161ee !important;" variant="outline-success">Submit</b-button>
                    </b-form-group>
            </b-form>
        </b-card>
        </div>
    </div>
        <b-modal id="showReferenceCode" no-close-on-backdrop no-close-on-esc hide-header-close ref="showReferenceCode" hide-footer title="Please secure a copy of your Reference Code for follow up.">
            <div class="d-block text-center">
            <input type="text" v-model="this.ticketData_update.reference_code" id="myInput" disabled style="color:black; font-weight: bold">
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

<script type="text/javascript">
    import * as ticket_service from '../services/ticket_service';

    export default {
        data() {
            return {
                ref_code:'',
                ticket: [],
                ticketData:{
                    status:'',
                    reference_code:''
                },
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
                empName: '',
                empSex: '',
                empDiv: '',
                empEmail: '',
                errors : '',
                totalRows: 1,
                currentPage: 1,
                perPage: 10,
                filterOn: [],
                filter: null,
                sortDirection: 'desc',
                sortBy: 'id',
                sortDesc: true,
                specificRequest: '',
                options_supportType: [
                    { value: null, text: 'Please select an option', disabled: true },
                    { value: 'Technical Support', text: 'Technical Support' },
                    { value: 'Livestream', text: 'Livestream' },
                    { value: 'IS', text: 'Information System' },
                    { value: 'TWG', text: 'Technical Working Group' }
                ],
                options_mode: [
                    { value: null, text: 'Please select an option', disabled: true },
                    { value: 'Service Form', text: 'Service Form' },
                    { value: 'Online Mode', text: 'Online Mode' }
                ],
                options_type: [
                    { value: null, text: 'Please select an option', disabled: true },
                    { value: 'PC Setup & Troubleshooting', text: 'PC Setup & Troubleshooting' },
                    { value: 'Network related', text: 'Network related' },
                    { value: 'Printer related', text: 'Printer related' },
                    { value: 'Zoom related', text: 'Zoom related' },
                    { value: 'Website related', text: 'Website related' },
                    { value: 'STARBOOKS related', text: 'STARBOOKS related' },
                    { value: 'Installation related', text: 'Installation related' },
                    { value: 'Others', text: 'Others' },
                ],
                options_supportType_external: [
                    { value: null, text: 'Please select an option', disabled: true },
                    { value: 'Livestream', text: 'Livestream' },
                    { value: 'Other', text: 'Other..' }
                ],
                options_sex: [
                    { value: null, text: 'Please select an option', disabled: true },
                    { value: 'Male', text: 'Male' },
                    { value: 'Female', text: 'Female' },
                ],
                fields2: [
                    { key: 'reference_code', label: 'Reference Code'},
                    { key: 'name', label: 'Requested By'},
                    { key: 'type', label: 'Request Type'},
                    // { key: 'concerned_division', label: 'Concerned Division'},
                    // { key: 'concerned_section', label: 'Concerned Section'},
                    { key: 'note', label: 'Concern'},
                ],
                fields3: [
                    { key: 'ticket_created', label: 'Date Submitted'},
                    { key: 'ticket_approved', label: 'Date Approved'},
                    { key: 'ticket_approved', label: 'Date Assigned'},
                    { key: 'ticket_attended', label: 'Date Attended'},
                    { key: 'ticket_completed', label: 'Date Completed'},
                ],
                fields4: [
                    { key: 'status', label: ''},
                ],
                fields5: [
                    { key: 'approved_by', label: 'Approved By'},
                    { key: 'assignedStaff', label: 'Assigned To'},
                    { key: 'assisted_by', label: 'Assisted By'},
                    { key: 'tech_remarks', label: 'Note'},
                ],
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
                ],
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
                drop_assistedBy_sb: [{ text: '(SELECT HERE)', value: null, disabled: true }, 	'None', 
                                                                            'Jomar Rabanera'],
                drop_hardware: [{ text: '(SELECT HERE)', value: null, disabled: true }, 	'Troubleshooting', 
                                                                            'Evaluation', 
                                                                            'Network', 
                                                                            'Testing', 
                                                                            'Consultation', 
                                                                            'Assistance',
                                                                            'None'],
                drop_software: [{ text: '(SELECT HERE)', value: null, disabled: true }, 	'Installation', 
                                                                            'Data Retrieval', 
                                                                            'Virus/Malwares', 
                                                                            'Data Conversion/Uploading/Processing', 
                                                                            'Reformat', 
                                                                            'Download', 
                                                                            'Assistance' ,
                                                                            'None'],
                drop_software_sb: [{ text: '(SELECT HERE)', value: null, disabled: true }, 	'Installation', 
                                                                            'Assistance',
                                                                            'None'],
            }
        },
        mounted() {
        },
        computed:{
        },
        methods: {
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
                const date = new Date(this.ticketData.entryDate);
                const months = ['January','February','March','April','May','June',
                                'July','August','September','October','November','December'];
                const monthIndex = date.getMonth()
                const monthName = months[monthIndex]
                let currentDay= String(date.getDate()).padStart(2, '0');
                let currentMonth = String(date.getMonth()+1).padStart(2,"0");
                let currentYear = date.getFullYear();
                let time = date.getHours() + "" + date.getMinutes() + "" + date.getSeconds();
                let date_ticketCreated = monthName + " " + currentDay + " " + currentYear;
                let getHours = date.getHours();
                let getMinutes = date.getMinutes();
                let newformat = getHours >= 12 ? 'PM' : 'AM';
                getHours = getHours % 12;
                getHours = getHours ? getHours : 12;
                getMinutes = getMinutes < 10 ? '0' + getMinutes : getMinutes;

                const date_created = new Date(this.ticketData.ticket_created);
                const months2 = ['January','February','March','April','May','June',
                                'July','August','September','October','November','December'];
                const monthIndex2 = date_created.getMonth()
                const monthName2 = months2[monthIndex2]
                let currentDay2 = String(date_created.getDate()).padStart(2, '0');
                let currentMonth2 = String(date_created.getMonth()+1).padStart(2,"0");
                let currentYear2 = date_created.getFullYear();
                let time2 = date_created.getHours() + "" + date_created.getMinutes() + "" + date_created.getSeconds();
                let date_ticketCreated2 = monthName2 + " " + currentDay2 + " " + currentYear2;
                let getHours2 = date_created.getHours();
                let getMinutes2 = date_created.getMinutes();
                let newformat2 = getHours2 >= 12 ? 'PM' : 'AM';
                getHours2 = getHours2 % 12;
                getHours2 = getHours2 ? getHours2 : 12;
                getMinutes2 = getMinutes2 < 10 ? '0' + getMinutes2 : getMinutes2;
                let date_ticketCreatedComplete2 = monthName2 + " " + currentDay2 + " " + currentYear2 + " " + getHours2 + ":" + getMinutes2 + " " + newformat2;
                
                const date_completed = new Date(this.ticketData.ticket_completed);
                const months3 = ['January','February','March','April','May','June',
                                'July','August','September','October','November','December'];
                const monthIndex3 = date_completed.getMonth()
                const monthName3 = months3[monthIndex3]
                let currentDay3 = String(date_completed.getDate()).padStart(2, '0');
                let currentMonth3 = String(date_completed.getMonth()+1).padStart(2,"0");
                let currentYear3 = date_completed.getFullYear();
                let time3 = date_completed.getHours() + "" + date_completed.getMinutes() + "" + date_completed.getSeconds();
                let date_ticketCreated3 = monthName3 + " " + currentDay3 + " " + currentYear3;
                let getHours3 = date_completed.getHours();
                let getMinutes3 = date_completed.getMinutes();
                let newformat3 = getHours3 >= 12 ? 'PM' : 'AM';
                getHours3 = getHours3 % 12;
                getHours3 = getHours3 ? getHours3 : 12;
                getMinutes3 = getMinutes3 < 10 ? '0' + getMinutes3 : getMinutes3;
                let date_ticketCreatedComplete3 = monthName3 + " " + currentDay3 + " " + currentYear3 + " " + getHours3 + ":" + getMinutes3 + " " + newformat3;

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

                        if (this.empEmail === ""){
                            this.empEmail = "-"
                            console.log("No Email");
                        } else if (this.empEmail != ""){
                            this.empEmail = this.empEmail
                            console.log(this.empEmail);
                        } 

                        let formData_ticketData = new FormData();
                        formData_ticketData.append('reference_code', this.ref_code);
                        formData_ticketData.append('ticket_created', date_ticketCreatedComplete2);
                        formData_ticketData.append('employee_code', this.ticketData.employee_code);
                        formData_ticketData.append('sex', this.empSex);
                        formData_ticketData.append('internal_external', "Internal");
                        formData_ticketData.append('concerned_division', "OD-MISPS");
                        formData_ticketData.append('concerned_section', "ITU");
                        formData_ticketData.append('externalName', this.empName);
                        formData_ticketData.append('empDiv', this.empDiv);
                        formData_ticketData.append('empEmail', this.empEmail);
                        formData_ticketData.append('clientType', "Government");
                        formData_ticketData.append('date1', date_ticketCreatedComplete2);
                        formData_ticketData.append('clientNote', this.ticketData.clientNote);
                        formData_ticketData.append('supportType', this.ticketData.supportType);
                        formData_ticketData.append('mode', "Service Form");

                        this.ticketData_update.reference_code = this.ref_code;

                        let formData_ticketDataStatus = new FormData();
                        formData_ticketDataStatus.append('reference_code', this.ref_code);
                        formData_ticketDataStatus.append('status', 'Completed');
                        formData_ticketDataStatus.append('entry_date', date_ticketCreated);
                        formData_ticketDataStatus.append('assignedStaff', this.ticketData.attended_by);
                        formData_ticketDataStatus.append('approved_by', "Lloyd Mandapat");
                        formData_ticketDataStatus.append('attended_by', this.ticketData.attended_by);
                        formData_ticketDataStatus.append('priority', "Low");
                        formData_ticketDataStatus.append('ticket_approved', date_ticketCreatedComplete3);
                        formData_ticketDataStatus.append('ticket_attended', date_ticketCreatedComplete3);
                        formData_ticketDataStatus.append('problem_that_needed_support', this.ticketData.clientNote);
                        formData_ticketDataStatus.append('actions_taken', this.ticketData.actions_taken);
                        formData_ticketDataStatus.append('remarks', this.ticketData.remarks);
                        formData_ticketDataStatus.append('feedback_status', "Pending");
                        formData_ticketDataStatus.append('rating_status', "Pending");
                        formData_ticketDataStatus.append('date2', date_ticketCreatedComplete3); //date requested
                        formData_ticketDataStatus.append('natureOfSupport', this.ticketData.natureOfSupport);
                        formData_ticketDataStatus.append('hardware', this.ticketData.supportType_hardware);
                        formData_ticketDataStatus.append('software', this.ticketData.supportType_software);
                        formData_ticketDataStatus.append('supportType_', this.ticketData.supportType);
                        formData_ticketDataStatus.append('mode_', "Service Form");
                        formData_ticketDataStatus.append('assisted_by_1', this.ticketData.assisted_by_1);
                        formData_ticketDataStatus.append('assisted_by_2', this.ticketData.assisted_by_2);
                        formData_ticketDataStatus.append('clientNote_', this.ticketData.clientNote);
                        formData_ticketDataStatus.append('type', this.ticketData.type);
                        formData_ticketDataStatus.append('ticket_completed', date_ticketCreatedComplete3);

                        const response_ticketData = await ticket_service.technical_addTicket_internal(formData_ticketData);
                        const response_ticketDataStatus = await ticket_service.technical_addTicketStatus_Pending(formData_ticketDataStatus);
                    }
                    catch (error) {
                        this.flashMessage.warning({
                            message: 'Please fill out the form!'
                        });
                    }

                    // this.$refs.requestModalForm_internal.hide()
                    this.$refs.showReferenceCode.show() 
                    
                    this.flashMessage.success({
                        message: 'Ticket Submitted Successfully!'
                    });
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

                let specificRequest = document.getElementById("externalOtherType").value;
                if (specificRequest === ""){
                    this.specificRequest = "None";
                }
                else if (specificRequest != ""){
                    this.specificRequest = specificRequest;
                }
                let _comment = this.specificRequest;
                const date = new Date(this.ticketData.entryDate);
                const months = ['January','February','March','April','May','June',
                                'July','August','September','October','November','December'];
                const monthIndex = date.getMonth()
                const monthName = months[monthIndex]
                let currentDay= String(date.getDate()).padStart(2, '0');
                let currentMonth = String(date.getMonth()+1).padStart(2,"0");
                let currentYear = date.getFullYear();
                let time = date.getHours() + "" + date.getMinutes() + "" + date.getSeconds();
                let date_ticketCreated = monthName + " " + currentDay + " " + currentYear;
                let getHours = date.getHours();
                let getMinutes = date.getMinutes();
                let newformat = getHours >= 12 ? 'PM' : 'AM';
                getHours = getHours % 12;
                getHours = getHours ? getHours : 12;
                getMinutes = getMinutes < 10 ? '0' + getMinutes : getMinutes;

                const date_created = new Date(this.ticketData.entryDate);
                const months2 = ['January','February','March','April','May','June',
                                'July','August','September','October','November','December'];
                const monthIndex2 = date_created.getMonth()
                const monthName2 = months2[monthIndex2]
                let currentDay2 = String(date_created.getDate()).padStart(2, '0');
                let currentMonth2 = String(date_created.getMonth()+1).padStart(2,"0");
                let currentYear2 = date_created.getFullYear();
                let time2 = date_created.getHours() + "" + date_created.getMinutes() + "" + date_created.getSeconds();
                let date_ticketCreated2 = monthName2 + " " + currentDay2 + " " + currentYear2;
                let getHours2 = date_created.getHours();
                let getMinutes2 = date_created.getMinutes();
                let newformat2 = getHours2 >= 12 ? 'PM' : 'AM';
                getHours2 = getHours2 % 12;
                getHours2 = getHours2 ? getHours2 : 12;
                getMinutes2 = getMinutes2 < 10 ? '0' + getMinutes2 : getMinutes2;
                let date_ticketCreatedComplete2 = monthName2 + " " + currentDay2 + " " + currentYear2 + " " + getHours2 + ":" + getMinutes2 + " " + newformat2;
                
                const date_completed = new Date(this.ticketData.externalEndDate);
                const months3 = ['January','February','March','April','May','June',
                                'July','August','September','October','November','December'];
                const monthIndex3 = date_completed.getMonth()
                const monthName3 = months3[monthIndex3]
                let currentDay3 = String(date_completed.getDate()).padStart(2, '0');
                let currentMonth3 = String(date_completed.getMonth()+1).padStart(2,"0");
                let currentYear3 = date_completed.getFullYear();
                let time3 = date_completed.getHours() + "" + date_completed.getMinutes() + "" + date_completed.getSeconds();
                let date_ticketCreated3 = monthName3 + " " + currentDay3 + " " + currentYear3;
                let getHours3 = date_completed.getHours();
                let getMinutes3 = date_completed.getMinutes();
                let newformat3 = getHours3 >= 12 ? 'PM' : 'AM';
                getHours3 = getHours3 % 12;
                getHours3 = getHours3 ? getHours3 : 12;
                getMinutes3 = getMinutes3 < 10 ? '0' + getMinutes3 : getMinutes3;
                let date_ticketCreatedComplete3 = monthName3 + " " + currentDay3 + " " + currentYear3 + " " + getHours3 + ":" + getMinutes3 + " " + newformat3;

                const countEntry_data = await ticket_service.countEntry(date_ticketCreated);
                let totalEntry = countEntry_data.data;
                let new_totalEntry = totalEntry + 1;
                
                if (new_totalEntry < 10){
                    this.ref_code = currentYear + currentMonth + currentDay + "-" + "00" + new_totalEntry;
                } else if (new_totalEntry >= 10){
                    this.ref_code = currentYear + currentMonth + currentDay + "-" + "0" + new_totalEntry;
                }

                // let finalName = this.ticketData.fName + " " + this.ticketData.mName + " " + this.ticketData.lName;
                let finalName = this.ticketData.fName + " " + this.ticketData.lName;
                

                try {
                    let formData_ticketData = new FormData();
                    formData_ticketData.append('date1', date_ticketCreatedComplete2);
                    formData_ticketData.append('externalName', finalName);
                    formData_ticketData.append('externalAgency', this.ticketData.externalAgency);
                    formData_ticketData.append('sex', this.ticketData.sex);
                    formData_ticketData.append('externalStartDate', this.ticketData.externalStartDate);
                    formData_ticketData.append('externalEndDate', this.ticketData.externalEndDate);
                    formData_ticketData.append('externalEventTitle', this.ticketData.externalEventTitle);
                    formData_ticketData.append('supportType', this.ticketData.supportType);
                    formData_ticketData.append('externalOtherType', _comment);
                    formData_ticketData.append('clientNote', this.ticketData.clientNote);
                    formData_ticketData.append('reference_code', this.ref_code);
                    formData_ticketData.append('ticket_created', date_ticketCreatedComplete2);
                    formData_ticketData.append('internal_external', "External");
                    formData_ticketData.append('mode', "Online Form");
                    formData_ticketData.append('clientType', "Government");

                    this.ticketData_update.reference_code = this.ref_code;
                    let formData_ticketDataStatus = new FormData();

                    formData_ticketDataStatus.append('reference_code', this.ref_code);
                    formData_ticketDataStatus.append('status', 'Completed');
                    formData_ticketDataStatus.append('entry_date', date_ticketCreated);
                    

                    formData_ticketDataStatus.append('assignedStaff', this.ticketData.attended_by);
                    formData_ticketDataStatus.append('approved_by', "Lloyd Mandapat");
                    formData_ticketDataStatus.append('attended_by', this.ticketData.attended_by);
                    formData_ticketDataStatus.append('priority', "Low");
                    formData_ticketDataStatus.append('ticket_approved', date_ticketCreatedComplete3);
                    formData_ticketDataStatus.append('ticket_attended', date_ticketCreatedComplete3);
                    formData_ticketDataStatus.append('problem_that_needed_support', this.ticketData.clientNote);
                    formData_ticketDataStatus.append('actions_taken', this.ticketData.actions_taken);
                    formData_ticketDataStatus.append('remarks', this.ticketData.remarks);
                    formData_ticketDataStatus.append('feedback_status', "Pending");
                    formData_ticketDataStatus.append('rating_status', "Pending");
                    formData_ticketDataStatus.append('date2', date_ticketCreatedComplete3); //date requested
                    formData_ticketDataStatus.append('supportType_', this.ticketData.supportType);
                    formData_ticketDataStatus.append('mode_', "Online Form");
                    formData_ticketDataStatus.append('assisted_by_1', this.ticketData.assisted_by_1);
                    formData_ticketDataStatus.append('assisted_by_2', this.ticketData.assisted_by_2);
                    formData_ticketDataStatus.append('clientNote_', this.ticketData.clientNote);
                    formData_ticketDataStatus.append('type', this.ticketData.type);
                    formData_ticketDataStatus.append('ticket_completed', date_ticketCreatedComplete3);



                    const response_ticketData = await ticket_service.technical_addTicket_external(formData_ticketData);
                    const response_ticketDataStatus = await ticket_service.technical_addTicketStatus_Pending_external(formData_ticketDataStatus);

                    document.getElementById("form_RequestTypeOther").style.display = "none"; 

                } catch (error) {
                    this.flashMessage.warning({
                        message: 'Please fill out the form!'
                    });
                    console.log("Please fill out the form!");
                }
                // this.$refs.requestModalForm_external.hide()
                this.$refs.showReferenceCode.show() 
            
                        
                // document.getElementById("form_RequestTypeOther").style.display = "none"; 

                this.flashMessage.success({
                        message: 'Ticket Submitted Successfully!'
                });
                console.log("Ticket Submitted Successfully!");
            },
            createTicket_starbooks: async function() {
                const date = new Date(this.ticketData.entryDate);
                const months = ['January','February','March','April','May','June',
                                'July','August','September','October','November','December'];
                const monthIndex = date.getMonth()
                const monthName = months[monthIndex]
                let currentDay= String(date.getDate()).padStart(2, '0');
                let currentMonth = String(date.getMonth()+1).padStart(2,"0");
                let currentYear = date.getFullYear();
                let time = date.getHours() + "" + date.getMinutes() + "" + date.getSeconds();
                let date_ticketCreated = monthName + " " + currentDay + " " + currentYear;
                let getHours = date.getHours();
                let getMinutes = date.getMinutes();
                let newformat = getHours >= 12 ? 'PM' : 'AM';
                getHours = getHours % 12;
                getHours = getHours ? getHours : 12;
                getMinutes = getMinutes < 10 ? '0' + getMinutes : getMinutes;

                const date_created = new Date(this.ticketData.entryDate);
                const months2 = ['January','February','March','April','May','June',
                                'July','August','September','October','November','December'];
                const monthIndex2 = date_created.getMonth()
                const monthName2 = months2[monthIndex2]
                let currentDay2 = String(date_created.getDate()).padStart(2, '0');
                let currentMonth2 = String(date_created.getMonth()+1).padStart(2,"0");
                let currentYear2 = date_created.getFullYear();
                let time2 = date_created.getHours() + "" + date_created.getMinutes() + "" + date_created.getSeconds();
                let date_ticketCreated2 = monthName2 + " " + currentDay2 + " " + currentYear2;
                let getHours2 = date_created.getHours();
                let getMinutes2 = date_created.getMinutes();
                let newformat2 = getHours2 >= 12 ? 'PM' : 'AM';
                getHours2 = getHours2 % 12;
                getHours2 = getHours2 ? getHours2 : 12;
                getMinutes2 = getMinutes2 < 10 ? '0' + getMinutes2 : getMinutes2;
                let date_ticketCreatedComplete2 = monthName2 + " " + currentDay2 + " " + currentYear2 + " " + getHours2 + ":" + getMinutes2 + " " + newformat2;
                
                const date_completed = new Date(this.ticketData.ticket_completed);
                const months3 = ['January','February','March','April','May','June',
                                'July','August','September','October','November','December'];
                const monthIndex3 = date_completed.getMonth()
                const monthName3 = months3[monthIndex3]
                let currentDay3 = String(date_completed.getDate()).padStart(2, '0');
                let currentMonth3 = String(date_completed.getMonth()+1).padStart(2,"0");
                let currentYear3 = date_completed.getFullYear();
                let time3 = date_completed.getHours() + "" + date_completed.getMinutes() + "" + date_completed.getSeconds();
                let date_ticketCreated3 = monthName3 + " " + currentDay3 + " " + currentYear3;
                let getHours3 = date_completed.getHours();
                let getMinutes3 = date_completed.getMinutes();
                let newformat3 = getHours3 >= 12 ? 'PM' : 'AM';
                getHours3 = getHours3 % 12;
                getHours3 = getHours3 ? getHours3 : 12;
                getMinutes3 = getMinutes3 < 10 ? '0' + getMinutes3 : getMinutes3;
                let date_ticketCreatedComplete3 = monthName3 + " " + currentDay3 + " " + currentYear3 + " " + getHours3 + ":" + getMinutes3 + " " + newformat3;

                const countEntry_data = await ticket_service.countEntry(date_ticketCreated);
                let totalEntry = countEntry_data.data;
                let new_totalEntry = totalEntry + 1;
                
                if (new_totalEntry < 10){
                    this.ref_code = currentYear + currentMonth + currentDay + "-" + "00" + new_totalEntry;
                } else if (new_totalEntry >= 10){
                    this.ref_code = currentYear + currentMonth + currentDay + "-" + "0" + new_totalEntry;
                }

                    try {
                        let formData_ticketData = new FormData();
                        formData_ticketData.append('reference_code', this.ref_code);
                        formData_ticketData.append('ticket_created', date_ticketCreatedComplete2);
                        formData_ticketData.append('sex', this.ticketData.sex);
                        formData_ticketData.append('internal_external', "External");
                        formData_ticketData.append('externalName', this.ticketData.fName + " " + this.ticketData.lName);
                        formData_ticketData.append('empEmail', this.ticketData.email);
                        formData_ticketData.append('externalAgency', this.ticketData.externalAgency);
                        formData_ticketData.append('date1', date_ticketCreatedComplete2);
                        formData_ticketData.append('clientNote', this.ticketData.clientNote);
                        formData_ticketData.append('supportType', "Technical Support");
                        formData_ticketData.append('mode', "Online Remote");

                        this.ticketData_update.reference_code = this.ref_code;

                        let formData_ticketDataStatus = new FormData();
                        formData_ticketDataStatus.append('reference_code', this.ref_code);
                        formData_ticketDataStatus.append('status', 'Completed');
                        formData_ticketDataStatus.append('entry_date', date_ticketCreated);
                        formData_ticketDataStatus.append('assignedStaff', "Mc Gyver Basaya");
                        formData_ticketDataStatus.append('approved_by', "Mc Gyver Basaya");
                        formData_ticketDataStatus.append('attended_by', "Mc Gyver Basaya");
                        formData_ticketDataStatus.append('priority', "Low");
                        formData_ticketDataStatus.append('ticket_approved', date_ticketCreatedComplete2);
                        formData_ticketDataStatus.append('ticket_attended', date_ticketCreatedComplete2);
                        formData_ticketDataStatus.append('problem_that_needed_support', this.ticketData.clientNote);
                        formData_ticketDataStatus.append('actions_taken', this.ticketData.actions_taken);
                        formData_ticketDataStatus.append('remarks', "-");
                        formData_ticketDataStatus.append('feedback_status', "Pending");
                        formData_ticketDataStatus.append('rating_status', "Pending");
                        formData_ticketDataStatus.append('date2', date_ticketCreatedComplete2); //date requested
                        formData_ticketDataStatus.append('natureOfSupport', "Software");
                        formData_ticketDataStatus.append('hardware', "-");
                        formData_ticketDataStatus.append('software', this.ticketData.softwareType);
                        formData_ticketDataStatus.append('supportType_', "Technical Support");
                        formData_ticketDataStatus.append('mode_', "Online Remote");
                        formData_ticketDataStatus.append('assisted_by_1', this.ticketData.assisted_by_1);
                        formData_ticketDataStatus.append('assisted_by_2', "None");
                        formData_ticketDataStatus.append('clientNote_', this.ticketData.clientNote);
                        formData_ticketDataStatus.append('type', "Starbooks related");
                        formData_ticketDataStatus.append('ticket_completed', date_ticketCreatedComplete2);

                        const response_ticketData = await ticket_service.technical_addTicket_starbooks(formData_ticketData);
                        const response_ticketDataStatus = await ticket_service.technical_addTicketStatus_starbooks(formData_ticketDataStatus);
                    }
                    catch (error) {
                        this.flashMessage.warning({
                            message: 'Please fill out the form!'
                        });
                        console.log("Please fill out the form!");
                    }

                    // this.$refs.requestModalForm_internal.hide()
                    this.$refs.showReferenceCode.show() 
                    
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
            openRequestModalForm_starbooks(){
                this.$refs.requestModalForm_starbooks.show()
            },
            getTicketStatus: async function() {
                let ref_code = this.ticketData.referenceCode;

                const refCode = await ticket_service.validateRefCode(ref_code);
                let _refCode = refCode.data

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
                    this.$refs['showDetails'].show();
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
