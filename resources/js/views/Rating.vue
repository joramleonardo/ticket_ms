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
                        <li class="nav-item mx-0 mx-lg-1">
                            <a class="nav-link py-3 px-0 px-lg-3 rounded" href="">
                                <router-link to="/login" style="color: #fff !important;">
                                Technical
                                </router-link>
                            </a>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
        <section class="masthead page-section portfolio" id="contact" style="color: #6c757d !important;">
        
            <div style="" id="spinner_">
                <div class="text-center" style="margin: 10px 0 10px 0">
                    <b-spinner label="Busy"></b-spinner>
                </div>
            </div>
            <div v-if="this.ticket.internal_external === 'Internal'">
                <div class="container" style="color: #6c757d !important;">
                    <h4 class="page-section-heading text-center text-uppercase text-secondary">Ticket Details</h4>
                    <b-form-group label-cols="4" label-cols-lg="2" label-for="input-default" label="Reference No:" label-class="font-weight-bold pt-0" class="ticket_details-font">
                                 {{this.ticket.reference_code}}
                    </b-form-group>
                    <b-form-group label-cols="4" label-cols-lg="2" label-for="input-default" label="Status:" label-class="font-weight-bold pt-0" class="ticket_details-font">
                                    {{this.ticket.status}}
                    </b-form-group>
                    <b-row>
                        <b-col>
                            <b-form-group label-cols="4" label-cols-lg="4" label-for="input-default" label="Date of Request:" label-class="font-weight-bold pt-0" class="ticket_details-font">
                                            {{this.ticket.ticket_created}}
                            </b-form-group>
                        </b-col>
                        <b-col>
                            <b-form-group label-cols="4" label-cols-lg="4" label-for="input-default" label="Date Accomplished:" label-class="font-weight-bold pt-0" class="ticket_details-font">
                                            {{this.ticket.ticket_completed}}
                            </b-form-group>
                        </b-col>
                    </b-row>
                    <b-form-group label-cols="4" label-cols-lg="2" label-for="input-default" label="Client Name:" label-class="font-weight-bold pt-0" class="ticket_details-font">
                                    {{this.ticket.externalName}}
                    </b-form-group>
                    <b-form-group label-cols="4" label-cols-lg="2" label-for="input-default" label="Division:" label-class="font-weight-bold pt-0" class="ticket_details-font">
                                    {{this.ticket.empDiv}}
                    </b-form-group>
                    <b-row>
                        <b-col>
                            <b-form-group label-cols="4" label-cols-lg="4" label-for="input-default" label="Nature of Support:" label-class="font-weight-bold pt-0" class="ticket_details-font">
                                            {{this.ticket.natureOfSupport}}
                            </b-form-group>
                        </b-col>
                        <b-col>
                            <div v-if="this.ticket.natureOfSupport === 'Hardware'">
                                <b-form-group label-cols="4" label-cols-lg="4" label-for="input-default" label="Support Type:" label-class="font-weight-bold pt-0" class="ticket_details-font">
                                                {{this.ticket.hardware}}
                                </b-form-group>
                            </div>
                        <div v-if="this.ticket.natureOfSupport === 'Software'">
                                <b-form-group label-cols="4" label-cols-lg="4" label-for="input-default" label="Support Type:" label-class="font-weight-bold pt-0" class="ticket_details-font">
                                                {{this.ticket.software}}
                                </b-form-group>
                            </div>
                        </b-col>
                    </b-row>
                    <b-form-group label-cols="4" label-cols-lg="2" label-for="input-default" label="Remarks:" label-class="font-weight-bold pt-0" class="ticket_details-font">
                                    {{this.ticket.remarks}}
                    </b-form-group>
                    <b-row>
                        <b-col>
                            <b-form-group label-cols="4" label-cols-lg="4" label-for="input-default" label="Attended By:" label-class="font-weight-bold pt-0" class="ticket_details-font">
                                            {{this.ticket.attended_by}}
                            </b-form-group>
                        </b-col>
                            <b-col>
                                <div v-if="this.ticket.assisted_by_1 === ''">
                                    <b-form-group label-cols="4" label-cols-lg="4" label-for="input-default" label="Assisted By:" label-class="font-weight-bold pt-0" class="ticket_details-font">
                                                    <span style="font-style: italic"> None </span>
                                    </b-form-group>
                                </div>
                                <div v-if="this.ticket.assisted_by_1 === 'undefined'">
                                    <b-form-group label-cols="4" label-cols-lg="4" label-for="input-default" label="Assisted By:" label-class="font-weight-bold pt-0" class="ticket_details-font">
                                                    <span style="font-style: italic"> None </span>
                                    </b-form-group>
                                </div>
                                <div v-if="this.ticket.assisted_by_1 != ''">
                                    <b-form-group label-cols="4" label-cols-lg="4" label-for="input-default" label="Assisted By:" label-class="font-weight-bold pt-0" class="ticket_details-font">
                                                    {{this.ticket.assisted_by_1}}
                                    </b-form-group>
                                </div>
                            </b-col>
                    </b-row>
                    <!-- <div class="row">
                        <div class="col-lg-9 ms-auto">
                            <p class="lead text-secondary">
                            For concerns and/or feedback, you can email us at itu@stii.dost.gov.ph
                            </p></div>
                    </div> -->
                </div>
                <header class=" text-white text-center" style="background-color: #004A98 !important;">
                    <div class="container d-flex align-items-center flex-column">
                        <h1 class="masthead-heading text-uppercase mt-2">CLIENT FEEDBACK</h1>
                        <div class="divider-custom divider-light">
                        <p class="masthead-subheading font-weight-light mb-4">Please help us determine the quality of our services by ticking the appropriate option.</p>
                        </div>
                        <div class="_divider-custom divider-light ">
                            <div class="_rate">
                                <label for="star1" title="text">Very Poor</label>
                                <label for="star2" title="text">Poor</label>
                                <label for="star3" title="text">Good</label>
                                <label for="star4" title="text">Very Good</label>
                                <label for="star5" title="text">Excellent</label>
                            </div>
                        </div>
                    </div>
                    <b-form class="login-form" id="login-form" v-on:submit.prevent="submit_rating">
                        <div class="_divider-custom divider-light">
                            <div class="rate">
                                <input @click="setStatus(5)" type="radio" id="star5" name="rate" value="5" />
                                <label for="star5" title="text">5</label>
                                <input @click="setStatus(4)" type="radio" id="star4" name="rate" value="4" />
                                <label for="star4" title="text">4</label>
                                <input @click="setStatus(3)" type="radio" id="star3" name="rate" value="3" />
                                <label for="star3" title="text">3</label>
                                <input @click="setStatus(2)" type="radio" id="star2" name="rate" value="2" />
                                <label for="star2" title="text">2</label>
                                <input @click="setStatus(1)" type="radio" id="star1" name="rate" value="1" />
                                <label for="star1" title="text">1</label>
                            </div>
                        </div>
                        <div class="" style="padding: 0 300px 10px 300px; ">
                            <b-form-group label="Comments/Suggestions" label-for="textarea-lazy" class="mb-0" label-align="left" style="font-weight: bold">
                                <b-form-textarea
                                    id="_comments"
                                    placeholder="Type here.."
                                    rows="2"
                                    no-resize
                                ></b-form-textarea>
                            </b-form-group>
                            <b-form-group class="group" style="margin-top: 10px" align="left">
                                <b-button type="submit" class=" btn-submit-rating " variant="outline-success">Submit</b-button>
                                <b-button @click="showLink()" class=" btn-copy-arta-link" variant="outline-success">Copy CSM Form Link</b-button>
                            </b-form-group>
                        </div>
                    </b-form>
                </header>
            </div>
            <div v-if="this.ticket.internal_external === 'External'">
                <div v-if="this.ticket.type === 'Starbooks related'">
                    <div class="container" style="color: #6c757d !important;">
                        <h4 class="page-section-heading text-center text-uppercase text-secondary">Ticket Details</h4>
                        <b-form-group label-cols="4" label-cols-lg="2" label-for="input-default" label="Reference No:" label-class="font-weight-bold pt-0" class="ticket_details-font">
                                    {{this.ticket.reference_code}}
                        </b-form-group>
                        <b-form-group label-cols="4" label-cols-lg="2" label-for="input-default" label="Status:" label-class="font-weight-bold pt-0" class="ticket_details-font">
                                        {{this.ticket.status}}
                        </b-form-group>
                        <b-row>
                            <b-col>
                                <b-form-group label-cols="4" label-cols-lg="4" label-for="input-default" label="Date of Request:" label-class="font-weight-bold pt-0" class="ticket_details-font">
                                                {{this.ticket.ticket_created}}
                                </b-form-group>
                            </b-col>
                            <b-col>
                                <b-form-group label-cols="4" label-cols-lg="4" label-for="input-default" label="Date Accomplished:" label-class="font-weight-bold pt-0" class="ticket_details-font">
                                                {{this.ticket.ticket_completed}}
                                </b-form-group>
                            </b-col>
                        </b-row>
                        <b-row>
                            <b-col>
                                <b-form-group label-cols="4" label-cols-lg="4" label-for="input-default" label="Client Name:" label-class="font-weight-bold pt-0" class="ticket_details-font">
                                                {{this.ticket.externalName}}
                                </b-form-group>
                            </b-col>
                            <b-col>
                                <b-form-group label-cols="4" label-cols-lg="4" label-for="input-default" label="Agency:" label-class="font-weight-bold pt-0" class="ticket_details-font">
                                                {{this.ticket.externalAgency}}
                                </b-form-group>
                            </b-col>
                        </b-row>
                        <b-row>
                            <b-col>
                                <b-form-group label-cols="4" label-cols-lg="4" label-for="input-default" label="Attended By:" label-class="font-weight-bold pt-0" class="ticket_details-font">
                                                {{this.ticket.attended_by}}
                                </b-form-group>
                            </b-col>
                            <b-col>
                                <div v-if="this.ticket.assisted_by_1 === ''">
                                    <b-form-group label-cols="4" label-cols-lg="4" label-for="input-default" label="Assisted By:" label-class="font-weight-bold pt-0" class="ticket_details-font">
                                                    <span style="font-style: italic"> None </span>
                                    </b-form-group>
                                </div>
                                <div v-else-if="this.ticket.assisted_by_1 === 'undefined'">
                                    <b-form-group label-cols="4" label-cols-lg="4" label-for="input-default" label="Assisted By:" label-class="font-weight-bold pt-0" class="ticket_details-font">
                                                    <span style="font-style: italic"> None </span>
                                    </b-form-group>
                                </div>
                                <div v-else-if="this.ticket.assisted_by_1 != ''">
                                    <b-form-group label-cols="4" label-cols-lg="4" label-for="input-default" label="Assisted By:" label-class="font-weight-bold pt-0" class="ticket_details-font">
                                                    {{this.ticket.assisted_by_1}}
                                    </b-form-group>
                                </div>
                            </b-col>
                        </b-row>
                        <!-- <div class="row">
                            <div class="col-lg-9 ms-auto">
                                <p class="lead text-secondary">
                                For concerns and/or feedback, you can email us at itu@stii.dost.gov.ph
                                </p></div>
                        </div> -->
                    </div>
                    <header class=" text-white text-center" style="background-color: #004A98 !important;">
                        <div class="container d-flex align-items-center flex-column">
                            <h1 class="masthead-heading text-uppercase mt-2">CLIENT FEEDBACK</h1>
                            <div class="divider-custom divider-light">
                            <p class="masthead-subheading font-weight-light mb-4">Please help us determine the quality of our services by ticking the appropriate option.</p>
                            </div>
                            <div class="_divider-custom divider-light ">
                                <div class="_rate">
                                    <label for="star1" title="text">Very Poor</label>
                                    <label for="star2" title="text">Poor</label>
                                    <label for="star3" title="text">Good</label>
                                    <label for="star4" title="text">Very Good</label>
                                    <label for="star5" title="text">Excellent</label>
                                </div>
                            </div>
                        </div>
                        <b-form class="login-form" id="login-form" v-on:submit.prevent="submit_rating">
                            <div class="_divider-custom divider-light">
                                <div class="rate">
                                    <input @click="setStatus(5)" type="radio" id="star5" name="rate" value="5" />
                                    <label for="star5" title="text">5</label>
                                    <input @click="setStatus(4)" type="radio" id="star4" name="rate" value="4" />
                                    <label for="star4" title="text">4</label>
                                    <input @click="setStatus(3)" type="radio" id="star3" name="rate" value="3" />
                                    <label for="star3" title="text">3</label>
                                    <input @click="setStatus(2)" type="radio" id="star2" name="rate" value="2" />
                                    <label for="star2" title="text">2</label>
                                    <input @click="setStatus(1)" type="radio" id="star1" name="rate" value="1" />
                                    <label for="star1" title="text">1</label>
                                </div>
                            </div>
                            <div class="" style="padding: 0 300px 10px 300px; ">
                                <b-form-group label="Comments/Suggestions" label-for="textarea-lazy" class="mb-0" label-align="left" style="font-weight: bold">
                                    <b-form-textarea
                                        id="_comments"
                                        placeholder="Type here.."
                                        rows="2"
                                        no-resize
                                    ></b-form-textarea>
                                </b-form-group>
                                <b-form-group class="group" style="margin-top: 10px" align="left">
                                    <b-button type="submit" class=" btn-submit-rating " variant="outline-success">Submit</b-button>
                                    <b-button @click="showLink()" class=" btn-copy-arta-link" variant="outline-success">Copy CSM Form Link</b-button>
                                </b-form-group>
                            </div>
                        </b-form>
                    </header>
                </div>
                <div v-if="this.ticket.type != 'Starbooks related'">
                    <div class="container" style="color: #6c757d !important;">
                        <h4 class="page-section-heading text-center text-uppercase text-secondary">Ticket Details</h4>
                        <b-form-group label-cols="4" label-cols-lg="2" label-for="input-default" label="Reference No:" label-class="font-weight-bold pt-0" class="ticket_details-font">
                                    {{this.ticket.reference_code}}
                        </b-form-group>
                        <b-form-group label-cols="4" label-cols-lg="2" label-for="input-default" label="Status:" label-class="font-weight-bold pt-0" class="ticket_details-font">
                                        {{this.ticket.status}}
                        </b-form-group>
                        <b-form-group label-cols="4" label-cols-lg="2" label-for="input-default" label="Event Title:" label-class="font-weight-bold pt-0" class="ticket_details-font">
                                        {{this.ticket.externalEventTitle}}
                        </b-form-group>
                        <b-form-group label-cols="4" label-cols-lg="2" label-for="input-default" label="Request Date:" label-class="font-weight-bold pt-0" class="ticket_details-font">
                                        {{this.ticket.ticket_created}}
                        </b-form-group>
                        <b-row>
                            <b-col>
                                <b-form-group label-cols="4" label-cols-lg="4" label-for="input-default" label="Event Start Date:" label-class="font-weight-bold pt-0" class="ticket_details-font">
                                                {{this.ticket.externalStartDate}}
                                </b-form-group>
                            </b-col>
                            <b-col>
                                <b-form-group label-cols="4" label-cols-lg="4" label-for="input-default" label="Event End Date:" label-class="font-weight-bold pt-0" class="ticket_details-font">
                                                {{this.ticket.externalEndDate}}
                                </b-form-group>
                            </b-col>
                        </b-row>
                        <b-form-group label-cols="4" label-cols-lg="2" label-for="input-default" label="Client Name:" label-class="font-weight-bold pt-0" class="ticket_details-font">
                                        {{this.ticket.externalName}}
                        </b-form-group>
                        <b-form-group label-cols="4" label-cols-lg="2" label-for="input-default" label="Agency:" label-class="font-weight-bold pt-0" class="ticket_details-font">
                                        {{this.ticket.externalAgency}}
                        </b-form-group>
                        <b-row>
                            <b-col>
                                <b-form-group label-cols="4" label-cols-lg="4" label-for="input-default" label="Attended By:" label-class="font-weight-bold pt-0" class="ticket_details-font">
                                                {{this.ticket.attended_by}}
                                </b-form-group>
                            </b-col>
                            <b-col>
                                <div v-if="this.ticket.assisted_by_1 === ''">
                                    <b-form-group label-cols="4" label-cols-lg="4" label-for="input-default" label="Assisted By:" label-class="font-weight-bold pt-0" class="ticket_details-font">
                                                    <span style="font-style: italic"> None </span>
                                    </b-form-group>
                                </div>
                                <div v-else-if="this.ticket.assisted_by_1 === 'undefined'">
                                    <b-form-group label-cols="4" label-cols-lg="4" label-for="input-default" label="Assisted By:" label-class="font-weight-bold pt-0" class="ticket_details-font">
                                                    <span style="font-style: italic"> None </span>
                                    </b-form-group>
                                </div>
                                <div v-else-if="this.ticket.assisted_by_1 != ''">
                                    <b-form-group label-cols="4" label-cols-lg="4" label-for="input-default" label="Assisted By:" label-class="font-weight-bold pt-0" class="ticket_details-font">
                                                    {{this.ticket.assisted_by_1}}
                                    </b-form-group>
                                </div>
                            </b-col>
                        </b-row>
                        <!-- <div class="row">
                            <div class="col-lg-9 ms-auto">
                                <p class="lead text-secondary">
                                For concerns and/or feedback, you can email us at itu@stii.dost.gov.ph
                                </p></div>
                        </div> -->
                    </div>
                    <header class=" text-white text-center" style="background-color: #004A98 !important;">
                        <div class="container d-flex align-items-center flex-column">
                            <h1 class="masthead-heading text-uppercase mt-2">CLIENT FEEDBACK</h1>
                            <div class="divider-custom divider-light">
                            <p class="masthead-subheading font-weight-light mb-4">Please help us determine the quality of our services by ticking the appropriate option.</p>
                            </div>
                            <div class="_divider-custom divider-light ">
                                <div class="_rate">
                                    <label for="star1" title="text">Very Poor</label>
                                    <label for="star2" title="text">Poor</label>
                                    <label for="star3" title="text">Good</label>
                                    <label for="star4" title="text">Very Good</label>
                                    <label for="star5" title="text">Excellent</label>
                                </div>
                            </div>
                        </div>
                        <b-form class="login-form" id="login-form" v-on:submit.prevent="submit_rating">
                            <div class="_divider-custom divider-light">
                                <div class="rate">
                                    <input @click="setStatus(5)" type="radio" id="star5" name="rate" value="5" />
                                    <label for="star5" title="text">5</label>
                                    <input @click="setStatus(4)" type="radio" id="star4" name="rate" value="4" />
                                    <label for="star4" title="text">4</label>
                                    <input @click="setStatus(3)" type="radio" id="star3" name="rate" value="3" />
                                    <label for="star3" title="text">3</label>
                                    <input @click="setStatus(2)" type="radio" id="star2" name="rate" value="2" />
                                    <label for="star2" title="text">2</label>
                                    <input @click="setStatus(1)" type="radio" id="star1" name="rate" value="1" />
                                    <label for="star1" title="text">1</label>
                                </div>
                            </div>
                            <div class="" style="padding: 0 300px 10px 300px; ">
                                <b-form-group label="Comments/Suggestions" label-for="textarea-lazy" class="mb-0" label-align="left" style="font-weight: bold">
                                    <b-form-textarea
                                        id="_comments"
                                        placeholder="Type here.."
                                        rows="2"
                                        no-resize
                                    ></b-form-textarea>
                                </b-form-group>
                                <b-form-group class="group" style="margin-top: 10px" align="left">
                                    <b-button type="submit" class=" btn-submit-rating " variant="outline-success">Submit</b-button>
                                    <b-button @click="showLink()" class=" btn-copy-arta-link" variant="outline-success">Copy CSM Form Link</b-button>
                                </b-form-group>
                            </div>
                        </b-form>
                    </header>
                </div>
            </div>
        </section>
        
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
        
        <FlashMessage position="right bottom"> </FlashMessage>
</div>
</template>

<style scoped>
        .divider-custom {
            margin: 1px 0 1px !important;
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

        .page-section{
            padding: 8rem 0 0 !important;
        }

        .ticket_details-font{
            color: black;
        }

        .rate {
            /* float: left; */
            /* height: 46px; */
            padding: 0 10px;
        }
        .rate:not(:checked) > input {
            position:absolute;
            top:-9999px;
        }

        ._rate:not(:checked) > label {
            /* float:right; */
            /* width:1em; */
            /* overflow:hidden; */
            white-space:nowrap;
            /* cursor:pointer; */
            font-size:17px;
            color:#ffffff;
            margin: 0 20px;
        }

        ._divider-custom {
            margin: 1px 0 1px;
            width: 100%;
            display: flex;
            justify-content: center;
            align-items: center;
        }

        .rate:not(:checked) > label {
            float:right;
            width:1em;
            overflow:hidden;
            white-space:nowrap;
            cursor:pointer;
            font-size:100px;
            color:#ffffff;
        }
        
        .rate:not(:checked) > label:before {
            content: '★ ';
        }
        .rate > input:checked ~ label {
            color: #ED262A;    
            /* color: #c59b08; */
        }
        .rate:not(:checked) > label:hover,
        .rate:not(:checked) > label:hover ~ label {
            color: #ED262A;  
            /* color: #c59b08; */
        }
        .rate > input:checked + label:hover,
        .rate > input:checked + label:hover ~ label,
        .rate > input:checked ~ label:hover,
        .rate > input:checked ~ label:hover ~ label,
        .rate > label:hover ~ input:checked ~ label {
            color: #ED262A;
            /* color: #c59b08; */
        }
</style>

<script>

import * as ticket_service from '../services/ticket_service';

export default {
    name: 'employee',
    data() {
        return {
            ticket_id : this.$route.params.id,
            ticket_internalExternal : this.$route.params.type,
            ticket: {},
            ticket_type: {},
            ticket1: [],
            ticketDetails: [],
            ticketData:{
                status:'',
                reference_code:''
            },
            assignedTicketData:{},
            employee_Email: '',
            employee_Div: '',
            errors : '',
            rate : '',
            comment : '',
            fields_internal: [
                { key: 'reference_code', label: 'Reference Code'},
                { key: 'ticket_created', label: 'Date Submitted'},
                { key: 'ticket_completed', label: 'Date Completed'},
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
            fields_moreInfo: [
                { key: 'clientNote', label: ''},
            ],
            }
    },
    mounted() {
        this.loadAllTicketDetails();
    },
    computed: {
    },
    methods: {
        a(){
            console.log("sfasfg");
        },
        getRate(value) {
            if (value == 1){
            console.log("Very Poor");
            console.log(this.ticket_id);
            }
            else if (value == 2){
            console.log("Poor");
            console.log(this.ticket_id);
            }
            else if (value == 3){
            console.log("Good");
            console.log(this.ticket_id);
            }
            else if (value == 4){
            console.log("Very Good");
            console.log(this.ticket_id);
            }
            else if (value == 5){
            console.log("Excellent");
            console.log(this.ticket_id);
            }
        },
        setStatus: async function(value) {
            if (value == 1){
                this.rate="Very Poor";
            }
            else if (value == 2){
                this.rate="Poor";
            }
            else if (value == 3){
                this.rate="Good";
            }
            else if (value == 4){
                this.rate="Very Good";
            }
            else if (value == 5){
                this.rate="Excellent";
            }
        },
        submit_rating: async function() {
            let _id = this.ticket_id;
            let _rating = this.rate;
            let comment = document.getElementById("_comments").value;
            if (comment === ""){
                this.comment = "None";
            }
            else if (comment != ""){
                this.comment = comment;
            }
            let _comment = this.comment;

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
            let getHours = date.getHours();
            let getMinutes = date.getMinutes();
            let getSeconds = date.getSeconds();
            let newformat = getHours >= 12 ? 'PM' : 'AM';
            getHours = getHours % 12;
            getHours = getHours ? getHours : 12;
            getMinutes = getMinutes < 10 ? '0' + getMinutes : getMinutes;
			let date_ticketCreated = monthName + " " + currentDay + " " + currentYear + " " + getHours + ":" + getMinutes + " " + newformat;

            let formData = new FormData();
            formData.append('rating', _rating);
            formData.append('rating_received', date_ticketCreated);
            formData.append('rating_status', "Received");
            formData.append('comments_suggestions', _comment);


            

            let activity_id = 9;
            let activity_date = date_ticketCreated;
            let ticket_id = this.ticket.reference_code;

            let formData_activityLog = new FormData();
            formData_activityLog.append('activity_id', activity_id);
            formData_activityLog.append('activity_date', activity_date);
            formData_activityLog.append('ticket_id', ticket_id);
            const response_activityLog = await ticket_service.addActivityLog(formData_activityLog);


            const response = await ticket_service.updateRating(_id, formData);
            this.flashMessage.success({
                message: 'Feedback Submitted Successfully!'
            });
        },
        loadAllTicketDetails: async function() {
            
            document.getElementById("spinner_").style.display = "block";
            console.log(this.ticket_id);
            const response = await ticket_service.loadTicketDetails_type(this.ticket_id);
            this.ticket_type = response.data[0].internal_external;
            console.log(this.ticket_type);


            if (this.ticket_type === "Internal"){
            try{
                const response = await ticket_service.loadTicketDetails(this.ticket_id);
                this.ticket = response.data[0];
                this.ticket1 = response.data;
                document.getElementById("spinner_").style.display = "none";
                console.log("Client: " + this.ticket.internal_external);
                this.totalRows = this.ticket.length;
            } catch(error) {
                this.flashMessage.error({
                message: 'Some error occured! Please try again.',
                time: 5000
                });
            }
            }
            else if (this.ticket_type === "External"){
            try{
                const response = await ticket_service.loadTicketDetails_external(this.ticket_id);
                this.ticket = response.data[0];
                this.ticket1 = response.data;                
                document.getElementById("spinner_").style.display = "none";
                console.log("Client: " + this.ticket.internal_external);
                this.totalRows = this.ticket.length;
            } catch(error) {
                this.flashMessage.error({
                message: 'Some error occured! Please try again.',
                time: 5000
                });
            }
            }
        },
        showLink: async function(data){
            if (this.ticket.internal_external === "Internal"){

                const date = new Date(this.ticket.date1);
                let currentDay= String(date.getDate()).padStart(2, '0');
                let currentMonth = String(date.getMonth()+1).padStart(2,"0");
                let currentYear = date.getFullYear();
                let currentDateTime = currentYear + "-" + currentMonth + "-" + currentDay;

                const date2 = new Date(this.ticket.date1);
                let currentDay2 = String(date.getDate()).padStart(2, '0');
                let currentMonth2 = String(date.getMonth()+1).padStart(2,"0");
                let currentYear2 = date.getFullYear();
                let currentDateTime2 = currentYear2 + "-" + currentMonth2 + "-" + currentDay2;

                let a5 = this.ticket.reference_code.replaceAll(" ", "+");
                let a6 = this.ticket.externalName.replaceAll(" ", "+");
                let a9 = currentDateTime;
                let a10 = currentDateTime2;

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
                
                const textarea = document.createElement('textarea');
                textarea.value = __link;
                textarea.style.position = 'fixed';
                textarea.style.left = '-9999px';
                document.body.appendChild(textarea);
                textarea.select();
                textarea.setSelectionRange(0, 99999);
                document.execCommand('copy');
                document.body.removeChild(textarea);
            }

            else if (this.ticket.internal_external === "External"){

                const date = new Date(this.ticket.date1);
                let currentDay= String(date.getDate()).padStart(2, '0');
                let currentMonth = String(date.getMonth()+1).padStart(2,"0");
                let currentYear = date.getFullYear();
                let currentDateTime = currentYear + "-" + currentMonth + "-" + currentDay;

                const date2 = new Date(this.ticket.date2);
                let currentDay2 = String(date2.getDate()).padStart(2, '0');
                let currentMonth2 = String(date2.getMonth()+1).padStart(2,"0");
                let currentYear2 = date2.getFullYear();
                let currentDateTime2 = currentYear2 + "-" + currentMonth2 + "-" + currentDay2;

                console.log("this is external");
                let a5 = this.ticket.reference_code.replaceAll(" ", "+");
                let a6 = this.ticket.externalName.replaceAll(" ", "+"); 
                let a7 = this.ticket.externalAgency.replaceAll(" ", "+");
                let a8 = currentDateTime; 
                let a9 = currentDateTime2; 

                let __link = "https://docs.google.com/forms/d/e/1FAIpQLSdG0armoL-XLSz6T2BpXJ_JUMU1tg-NDxaf40q6qgpsMmJjhg/viewform?usp=pp_url"
                + "&entry.478303025=" + a6
                + "&entry.1637951943=" + a5
                + "&entry.292814853=" + a7
                + "&entry.1555563534=" + a8
                + "&entry.1650701328=" + a9;

                const textarea = document.createElement('textarea');
                textarea.value = __link;
                textarea.style.position = 'fixed';
                textarea.style.left = '-9999px';
                document.body.appendChild(textarea);
                textarea.select();
                textarea.setSelectionRange(0, 99999);
                document.execCommand('copy');
                document.body.removeChild(textarea);
            }

            this.flashMessage.success({
                message: 'Link Copied Successfully!'
            });
        },
    }
}

</script>