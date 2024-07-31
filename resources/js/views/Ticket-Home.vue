<template>

    <div id="home-top">
            <div class="navbar navbar-expand-lg bg-dark text-uppercase fixed-top">
                <div class="container">
                    <button class="navbar-toggler text-uppercase font-weight-bold bg-warning text-white rounded" type="button" data-bs-toggle="collapse" data-bs-target="#navbarResponsive" aria-controls="navbarResponsive" aria-expanded="false" aria-label="Toggle navigation">
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
            <header class="masthead text-white text-center" style="background-color: #004A98 !important">
                <div class="container d-flex align-items-center flex-column">
                    <img class="masthead-avatar mb-5" src="img/avataaars.svg" alt="..." />
                    <h1 class="masthead-heading text-uppercase mb-0">Ticket Management System</h1>
                    <div class="divider-custom divider-light">
                        <div class="divider-custom-line"></div>
                        <div class="divider-custom-icon"><i class="fas fa-star"></i></div>
                        <div class="divider-custom-line"></div>
                    </div>
                    <p class="masthead-subheading font-weight-light mb-0">Need help? Submit your request to our support teams</p>
                    <br>
                    <div class="portfolio-item-caption d-flex align-items-center justify-content-center h-200 w-200">
                        <div class="portfolio-item-caption-content text-center text-white">
                            <b-button class="bg-warning">
                            <router-link to="/request" style="color: #fff !important;">
                                    Submit a Request
                                </router-link>
                            </b-button>
                            
                        </div>
                    </div>
                </div>
            </header>
            <section class="page-section portfolio" id="contact" style="color: #6c757d !important;">
                <div class="container" style="color: #6c757d !important;">
                    <h2 class="page-section-heading text-center text-uppercase text-secondary">Contact Us</h2>
                    <div class="divider-custom" style="color: #6c757d !important;">
                        <div class="divider-custom-line"></div>
                        <div class="divider-custom-icon"><i class="fas fa-star"></i></div>
                        <div class="divider-custom-line"></div>
                    </div>
                    <div class="row">
                        <div class="col-lg-9 ms-auto">
                            <p class="lead text-secondary">
                            For concerns and/or feedback, you can email us at itu@stii.dost.gov.ph
                            </p></div>
                    </div>
                </div>
            </section>
            <footer class="footer text-center">
                <div class="container">
                    <div class="row">
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
                        <div class="col-lg-6 mb-5 mb-lg-0">
                            <h4 class="text-uppercase mb-4">Around the Web</h4>
                            <a class="btn btn-outline-light btn-social mx-1" href="https://www.facebook.com/dost.stii" target="_blank"><i class="fab fa-fw fa-facebook-f"></i></a>
                            <a class="btn btn-outline-light btn-social mx-1" href="https://stii.dost.gov.ph/" target="_blank"><i class="fab fa-fw fa-dribbble"></i></a>
                        </div>
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

