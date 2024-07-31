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
                        <!-- <li class="nav-item mx-0 mx-lg-1">
                            <a class="nav-link py-3 px-0 px-lg-3 rounded" href="">
                                <router-link to="/login" style="color: #fff !important;">
                                Technical
                                </router-link>
                            </a>
                        </li> -->
                    </ul>
                </div>
            </div>
        </div>
        <!-- Submit a Request Section-->
        <section class="masthead page-section portfolio" id="portfolio">
            <div class="container">
                <!-- Client Type Heading-->
                <h3 class="page-section-heading text-center text-uppercase text-secondary mb-0">Client Type</h3>
                <!-- Icon Divider-->
                <div class="divider-custom">
                    <div class="divider-custom-line"></div>
                    <div class="divider-custom-icon"><i class="fas fa-star"></i></div>
                    <div class="divider-custom-line"></div>
                </div>
                <div class="row justify-content-center">
                    <!-- Employee-->
                    <div class="col-md-4 col-lg-4 mb-5">
                        <h5 class="text-center text-uppercase text-secondary mb-2">DOST-STII</h5>
                        <div class="portfolio-item mx-auto">
                            <div class="portfolio-item-caption d-flex align-items-center justify-content-center h-100 w-100">
                                <div class="portfolio-item-caption-content text-center text-white"><b-button class="bg-warning" @click="openRequestModalForm_internal()">SELECT</b-button></div>
                            </div>
                            <!-- <img class="img-fluid" src="img/portfolio/cabin.png" alt="..." /> -->
                            <img class="img-fluid" src="img/portfolio/stii-logo.png" alt="..." />
                        </div>
                    </div>
                    <!-- STARBOOKS-->
                    <div class="col-md-4 col-lg-4 mb-5">
                        <h5 class="text-center text-uppercase text-secondary mb-2">STARBOOKS</h5>
                        <div class="portfolio-item mx-auto">
                            <div class="portfolio-item-caption d-flex align-items-center justify-content-center h-100 w-100">
                                <div class="portfolio-item-caption-content text-center text-white"><b-button class="bg-warning" @click="openRequestModalForm_starbooks()">SELECT</b-button></div>
                            </div>
                            <img class="img-fluid" src="img/portfolio/starbooks-logo.png" alt="..." />
                        </div>
                    </div>
                    <!-- Other Agency-->
                    <div class="col-md-4 col-lg-4 mb-5">
                        <h5 class="text-center text-uppercase text-secondary mb-2">Other Agency</h5>
                        <div class="portfolio-item mx-auto">
                            <div class="portfolio-item-caption d-flex align-items-center justify-content-center h-100 w-100">
                                <div class="portfolio-item-caption-content text-center text-white"><b-button class="bg-warning" @click="openRequestModalForm_external()">SELECT</b-button></div>
                            </div>
                            <img class="img-fluid" src="img/portfolio/dost3.png" alt="..." />
                        </div>
                    </div>
                </div>
            </div>
        </section>
        <b-modal size="xl" id="requestModalForm_internal" ref="requestModalForm_internal" hide-footer title="Ticket Request for DOST-STII Employee">
            <div class="">
                <div class="">
                    <form class="loginForm" id="loginForm" v-on:submit.prevent="createTicket">
                            <div class="">
                                    
                                    <div style="margin-botton: 15px">
                                        <span style="font-size: 12px; color: red; font-style: italic; ">* Required Fields</span>
                                    </div>
                                    <div class="row">
                                        <div class="col-md-6 col-lg-6 mb-0">
                                            <b-form-group class="group" id="form_employeeId">
                                                <label for="employee_code" class="label" style="color:black; font-weight: bold"><span style="font-size: 12px; color: red">*</span>Employee ID:</label>
                                                <b-form-input required v-model="ticketData.employee_code" id="employee_code" name="employee_code" type="text" class="input" style="text-transform:uppercase; background: #fff; border: 1px solid #ced4da !important; color: black"></b-form-input>
                                                <!-- <input required v-model="ticketData.employee_code" id="employee_code" name="employee_code" type="text" class="input" style="text-transform:uppercase; background: #fff; border: 1px solid #ced4da !important; color: black" /> -->
                                            </b-form-group>   
                                        </div>
                                        <div class="col-md-6 col-lg-6 mb-0">
                                            <b-form-group class="group" id="form_employeeId">
                                                <label for="employee_code" class="label" style="color:black; font-weight: bold"><span style="font-size: 12px; color: red">*</span>Request Type:</label>
                                                <b-form-select v-model="ticketData.supportType" :options="options_supportType"></b-form-select>
                                            </b-form-group> 
                                        </div>
                                    </div>
                                    <div class="row">
                                        <div class="col-md-6 col-lg-6 mb-0">
                                            <b-form-group class="group" id="form_division">
                                                <label for="type" class="label" style="color:black; font-weight: bold"><span style="font-size: 12px; color: red">*</span>Concerned Division:<span style="font-style: italic; font-size: 10px; text-transform: none"></span></label>
                                                <label for="type" class="label" style="color:black;">OD-MISPS<span style="font-style: italic; font-size: 10px; text-transform: none"></span></label>
                                                <!-- <select required v-model="ticketData.concerned_division" id="divisionOption" name="divisionOption">
                                                    <option value="" disabled>Select here</option>
                                                    <option value="FAD">FAD</option>
                                                    <option value="IRAD">IRAD</option>
                                                    <option value="CRPD">CRPD</option>
                                                    <option value="OD-MISPS">OD-MISPS</option>
                                                </select> -->
                                            </b-form-group>
                                        </div>
                                        <div class="col-md-6 col-lg-6 mb-0">
                                            <b-form-group class="group" id="ODMISPS_sections">
                                                <label for="type" class="label" style="color:black; font-weight: bold"><span style="font-size: 12px; color: red">*</span>Concerned Section/Unit:<span style="font-style: italic; font-size: 10px; text-transform: none"></span></label>
                                                <label for="type" class="label" style="color:black;">IT Unit<span style="font-style: italic; font-size: 10px; text-transform: none"></span></label>
                                                <!-- <select required v-model="ticketData.concerned_section" id="divisionOption" name="divisionOption">
                                                    <option value="" disabled>Select here</option>
                                                    <option value="ITU">IT Unit</option>
                                                    <option value="OD" disabled>Office of the Director</option>
                                                    <option value="Planning" disabled>Planning Section</option>
                                                </select> -->
                                            </b-form-group>
                                        </div>
                                    </div>
                                    <b-form-group class="group" id="form_remarks">
                                        <label for="clientNote" class="label" style="color:black; font-weight: bold"><span style="font-size: 12px; color: red">*</span>Describe the problem that needed support: <span style="font-style: italic; font-size: 10px"></span></label>
                                        <b-form-textarea required v-model="ticketData.clientNote" id="clientNote" name="clientNote" placeholder="Type here..." rows="3" max-rows="3" style="background: #fff !important; color: black"></b-form-textarea>
                                    </b-form-group>
                            </div>
                            <b-form-group class="group">
                                <b-button id="sub-btn" type="submit" class="sub-btn button" style="color:white; background-color: rgb(20 73 171) !important;">Submit</b-button>
                            </b-form-group>
                    </form>
                </div>
            </div>
        </b-modal>
        <b-modal size="xl" id="requestModalForm_external" ref="requestModalForm_external" hide-footer title="Ticket Request for Other Agency">
            <div class="">
                <div class="">
                    <b-form class="loginForm" id="loginForm" v-on:submit.prevent="createTicket_external">
                            <div class="">
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

                                <b-form-group class="group" id="form_remarks">
                                    <label for="clientNote" class="label" style="color:black; font-weight: bold"><span style="font-size: 12px; color: red">*</span>Remarks: <span style="font-style: italic; font-size: 10px">(Venue, other deatils, etc.)</span><span style="font-style: italic; font-size: 10px"></span></label>
                                    <b-form-textarea required v-model="ticketData.clientNote" id="clientNote" placeholder="Type here..." rows="5" max-rows="5" style="background: #fff !important; color: black"></b-form-textarea>
                                </b-form-group>
                            </div>
                            <b-form-group class="group">
                                <b-button type="submit" class="block" style="background-color: #1161ee !important;" variant="outline-success">Submit</b-button>
                            </b-form-group>
                    </b-form>
                </div>
            </div>
        </b-modal>
        <b-modal size="xl" id="requestModalForm_starbooks" ref="requestModalForm_starbooks" hide-footer title="Ticket Request for STARBOOKS Support">
            <div class="">
                <div class="">
                    <b-form class="loginForm" id="loginForm" v-on:submit.prevent="createTicket_starbooks">
                            <div class="">
                                <div style="margin-botton: 15px">
                                    <span style="font-size: 12px; color: red; font-style: italic; ">* Required Fields</span>
                                </div>
                                <div class="row">
                                    <div class="col-md-6 col-lg-6 mb-0">
                                        <b-form-group class="group" id="form_externalEventDate">
                                            <label for="entryDate" class="label" style="color:black; font-weight: bold"><span style="font-size: 12px; color: red">*</span>Entry Date:</label>
                                            <b-form-input pattern="\d{1,2}/\d{1,2}/\d{4}" required v-model="ticketData.entryDate" id="entryDate" type="date" class="input" style="text-transform:uppercase; background: #fff; border: 1px solid #ced4da !important; color: black"></b-form-input>
                                        </b-form-group>
                                    </div>
                                    <div class="col-md-6 col-lg-6 mb-0">
                                        <b-form-group class="group" id="form_externalName">
                                            <label for="externalName" class="label" style="color:black; font-weight: bold"><span style="font-size: 12px; color: red">*</span>Support Type:</label>
                                            <b-form-select v-model="ticketData.softwareType" :options="drop_software_sb"></b-form-select>
                                        </b-form-group>
                                    </div>
                                </div>
                                <div class="row">
                                    <div class="col-md-3 col-lg-3 mb-0">
                                        <b-form-group class="group" id="form_externalName">
                                            <label for="externalName" class="label" style="color:black; font-weight: bold"><span style="font-size: 12px; color: red">*</span>Last Name:</label>
                                            <b-form-input required v-model="ticketData.lName" id="lName" type="text" class="input" style="text-transform:uppercase; background: #fff; border: 1px solid #ced4da !important; color: black"></b-form-input>
                                        </b-form-group>
                                    </div>
                                    <div class="col-md-3 col-lg-3 mb-0">
                                        <b-form-group class="group" id="form_externalName">
                                            <label for="externalName" class="label" style="color:black; font-weight: bold"><span style="font-size: 12px; color: red">*</span>First Name:</label>
                                            <b-form-input required v-model="ticketData.fName" id="fName" type="text" class="input" style="text-transform:uppercase; background: #fff; border: 1px solid #ced4da !important; color: black"></b-form-input>
                                        </b-form-group>
                                    </div>
                                    <div class="col-md-3 col-lg-3 mb-0">
                                        <b-form-group class="group" id="form_employeeId">
                                            <label for="sex" class="label" style="color:black; font-weight: bold"><span style="font-size: 12px; color: red">*</span>Sex:</label>
                                            <b-form-select v-model="ticketData.sex" :options="options_sex"></b-form-select>
                                        </b-form-group> 
                                    </div>
                                    <div class="col-md-3 col-lg-3 mb-0">
                                        <b-form-group class="group" id="form_externalName">
                                            <label for="externalName" class="label" style="color:black; font-weight: bold"><span style="font-size: 12px; color: red">*</span>Email:</label>
                                            <b-form-input required v-model="ticketData.email" id="email" type="text" class="input" style="background: #fff; border: 1px solid #ced4da !important; color: black"></b-form-input>
                                        </b-form-group>
                                    </div>
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
                                            <label for="sex" class="label" style="color:black; font-weight: bold"><span style="font-size: 12px; color: red">*</span>Assisted By:</label>
                                            <b-form-select v-model="ticketData.assisted_by_1" :options="drop_assistedBy_sb"></b-form-select>
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
                            </div>
                            <b-form-group class="group">
                                <b-button type="submit" class="block" style="background-color: #1161ee !important;" variant="outline-success">Submit</b-button>
                            </b-form-group>
                    </b-form>
                </div>
            </div>
        </b-modal>
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
    #sub-btn:hover{
        color:rgb(233, 229, 229) !important;
        box-shadow: 3px 5px #838486;
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
                { value: 'Other', text: 'Other..' }
            ],
            options_sex: [
                { value: null, text: 'Please select an option', disabled: true },
                { value: 'Male', text: 'Male' },
                { value: 'Female', text: 'Female' },
            ],
			drop_software_sb: [{ text: '(SELECT HERE)', value: null, disabled: true }, 	'Installation', 
																		'Assistance'],
            drop_assistedBy_sb: [{ text: '(SELECT HERE)', value: null, disabled: true }, 	'None', 
																		'Jomar Rabanera'],
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
            specificRequest: '',
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

                    if (this.empEmail === ""){
                        this.empEmail = "-";
                        console.log("No Email");
                    } else if (this.empEmail != ""){
                        this.empEmail = this.empEmail;
                        console.log(this.empEmail);
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

            let activity_id = 3;
            let activity_date = date_ticketCreatedComplete;
            let ticket_id = this.ticketData_update.reference_code;

            let formData_activityLog = new FormData();
            formData_activityLog.append('activity_id', activity_id);
            formData_activityLog.append('activity_date', activity_date);
            formData_activityLog.append('ticket_id', ticket_id);
            const response_activityLog = await ticket_service.addActivityLog(formData_activityLog);

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

            // let finalName = this.ticketData.fName + " " + this.ticketData.mName + " " + this.ticketData.lName;
            let finalName = this.ticketData.fName + " " + this.ticketData.lName;
            

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
                formData_ticketData.append('externalOtherType',_comment);
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
            

            let activity_id = 3;
            let activity_date = date_ticketCreatedComplete;
            let ticket_id = this.ticketData_update.reference_code;

            let formData_activityLog = new FormData();
            formData_activityLog.append('activity_id', activity_id);
            formData_activityLog.append('activity_date', activity_date);
            formData_activityLog.append('ticket_id', ticket_id);
            const response_activityLog = await ticket_service.addActivityLog(formData_activityLog);


            this.$refs.requestModalForm_external.hide()
            this.$refs.showReferenceCode.show() 
          
                    
            // document.getElementById("form_RequestTypeOther").style.display = "none"; 

            this.flashMessage.success({
                    message: 'Ticket Submitted Successfully!'
            });
            console.log("Ticket Submitted Successfully!");
        },
        createTicket_starbooks: async function() {
			const date = new Date();
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
			let date_ticketCreatedComplete = monthName + " " + currentDay + " " + currentYear + " " + getHours + ":" + getMinutes + " " + newformat;

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
                formData_ticketDataStatus.append('status', 'New');
                formData_ticketDataStatus.append('entry_date', date_ticketCreated);
                formData_ticketDataStatus.append('reference_code', this.ref_code);

                const response_ticketData = await ticket_service.technical_addTicket_starbooks(formData_ticketData);
                const response_ticketDataStatus = await ticket_service.addTicketStatus_Pending(formData_ticketDataStatus);
            }
            catch (error) {
                this.flashMessage.warning({
                    message: 'Please fill out the form!'
                });
                console.log("Please fill out the form!");
            }
            

            let activity_id = 3;
            let activity_date = date_ticketCreatedComplete;
            let ticket_id = this.ticketData_update.reference_code;

            let formData_activityLog = new FormData();
            formData_activityLog.append('activity_id', activity_id);
            formData_activityLog.append('activity_date', activity_date);
            formData_activityLog.append('ticket_id', ticket_id);
            const response_activityLog = await ticket_service.addActivityLog(formData_activityLog);

            this.$refs.requestModalForm_internal.hide()
            this.$refs.showReferenceCode.show() 
            
            this.flashMessage.success({
                message: 'Ticket Submitted Successfully!'
            });
            console.log("Ticket Submitted Successfully!");
        },
		copyReferenceCode(){
			var copyText = document.getElementById("myInput");
            let ref_ = copyText.value;
			// copyText.select();
			// copyText.setSelectionRange(0, 99999); 
			// navigator.clipboard.writeText(copyText.value);

                const textarea = document.createElement('textarea');
                textarea.value = ref_;
                // console.log("aa " + textarea.value);
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
