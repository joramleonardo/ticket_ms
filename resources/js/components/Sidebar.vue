<template>
    <div id="layoutSidenav_nav">
        <nav class="sb-sidenav accordion sb-sidenav-dark" id="sidenavAccordion">
            <div class="sb-sidenav-menu">
                <div class="nav">
                    <router-link to="/dashboard" class="nav-link collapsed" href="#" data-toggle="collapse" data-target="#" aria-expanded="false" aria-controls="" exact>
                        <div class="sb-nav-link-icon">
                            <i class="fas fa-flask"></i>
                        </div>
                        Dashboard
                    </router-link>
                    <router-link to="/admin/healthandtraining" class="nav-link collapsed" exact href="#" data-toggle="collapse" data-target="#collapse_healthandtraining" aria-expanded="false" aria-controls="collapse_accountmanagement">
                        <div class="sb-nav-link-icon">
                            <i class="fas fa-h-square"></i>
                        </div>
                        Health and Training
                        <div class="sb-sidenav-collapse-arrow">
                            <i class="fas fa-angle-down"></i>
                        </div>
                    </router-link>
                    <div class="collapse" id="collapse_healthandtraining" aria-labelledby="headingOne" data-parent="#sidenavAccordion" >
                        <nav class="sb-sidenav-menu-nested nav">
                            <router-link to="/admin/healthandtraining/employee" class="nav-link" exact>
                                <div class="sb-nav-link-icon">
                                    <i class="fas fa-list-alt"></i>
                                </div>
                                Employee
                            </router-link>
                            <router-link to="/admin/healthandtraining/training" class="nav-link" exact>
                                <div class="sb-nav-link-icon">
                                    <i class="fas fa-list-alt"></i>
                                </div>
                                Training
                            </router-link>
                            <router-link to="/admin/healthandtraining/healthcondition" class="nav-link" exact>
                                <div class="sb-nav-link-icon">
                                    <i class="fas fa-list-alt"></i>
                                </div>
                                Health Condition
                            </router-link>
                        </nav>
                    </div>

                    <router-link to="/admin/library" class="nav-link collapsed" href="#" data-toggle="collapse" data-target="#collapse_library" aria-expanded="false" aria-controls="collapse_accountmanagement" exact>
                        <div class="sb-nav-link-icon">
                            <i class="fas fa-book-open"></i>
                        </div>
                        Library
                        <div class="sb-sidenav-collapse-arrow">
                            <i class="fas fa-angle-down"></i>
                        </div>
                    </router-link>
                    <div class="collapse" id="collapse_library" aria-labelledby="headingOne" data-parent="#sidenavAccordion" >
                        <nav class="sb-sidenav-menu-nested nav">
                            <router-link to="/admin/library/client" class="nav-link" exact>
                                <div class="sb-nav-link-icon">
                                    <i class="fas fa-list-alt"></i>
                                </div>
                                Client
                            </router-link>
                            <router-link to="/admin/library/request" class="nav-link" exact>
                                <div class="sb-nav-link-icon">
                                    <i class="fas fa-list-alt"></i>
                                </div>
                                Request
                            </router-link>
                            <router-link to="/admin/library/evaluation" class="nav-link" exact>
                                <div class="sb-nav-link-icon">
                                    <i class="fas fa-list-alt"></i>
                                </div>
                                Evaluation
                            </router-link>
                            <router-link to="/admin/library/researchlog" class="nav-link" exact>
                                <div class="sb-nav-link-icon">
                                    <i class="fas fa-list-alt"></i>
                                </div>
                                Research Log
                            </router-link>
                        </nav>
                    </div>

                    <router-link to="/admin/sciencejourno" class="nav-link collapsed" href="#" data-toggle="collapse" data-target="#collapse_sciencejourno" aria-expanded="false" aria-controls="collapse_accountmanagement" exact>
                        <div class="sb-nav-link-icon">
                            <i class="fas fa-flask"></i>
                        </div>
                        Science Journo Ako
                        <div class="sb-sidenav-collapse-arrow">
                            <i class="fas fa-angle-down"></i>
                        </div>
                    </router-link>
                    <div class="collapse" id="collapse_sciencejourno" aria-labelledby="headingOne" data-parent="#sidenavAccordion" >
                        <nav class="sb-sidenav-menu-nested nav">
                            <router-link to="/admin/sciencejourno/event" class="nav-link" exact>
                                <div class="sb-nav-link-icon">
                                    <i class="fas fa-list-alt"></i>
                                </div>
                                Event
                            </router-link>
                            <router-link to="/admin/sciencejourno/speaker" class="nav-link" exact>
                                <div class="sb-nav-link-icon">
                                    <i class="fas fa-list-alt"></i>
                                </div>
                                Speaker
                            </router-link>
                            <router-link to="/admin/sciencejourno/participants" class="nav-link" exact>
                                <div class="sb-nav-link-icon">
                                    <i class="fas fa-list-alt"></i>
                                </div>
                                Participants
                            </router-link>
                        </nav>
                    </div>


                    <router-link to="/admin/pjs" class="nav-link collapsed" href="#" data-toggle="collapse" data-target="#collapse_PJS" aria-expanded="false" aria-controls="collapse_accountmanagement" exact>
                        <div class="sb-nav-link-icon">
                            <i class="fas fa-book"></i>
                        </div>
                        PJS
                        <div class="sb-sidenav-collapse-arrow">
                            <i class="fas fa-angle-down"></i>
                        </div>
                    </router-link>
                    <div class="collapse" id="collapse_PJS" aria-labelledby="headingOne" data-parent="#sidenavAccordion" >
                        <nav class="sb-sidenav-menu-nested nav">
                            <router-link to="/admin/pjs/researcher" class="nav-link" exact>
                                <div class="sb-nav-link-icon">
                                    <i class="fas fa-list-alt"></i>
                                </div>
                                Researcher
                            </router-link>
                            <router-link to="/admin/pjs/manuscript" class="nav-link" exact>
                                <div class="sb-nav-link-icon">
                                    <i class="fas fa-list-alt"></i>
                                </div>
                                Manuscript
                            </router-link>
                        </nav>
                    </div>

                    

                    <router-link to="/admin/adminusers" class="nav-link collapsed" href="#" data-toggle="collapse" data-target="#" aria-expanded="false" aria-controls="" exact>
                        <div class="sb-nav-link-icon">
                            <i class="fas fa-flask"></i>
                        </div>
                        Admin Users
                    </router-link>

                    <!--
                    <router-link to="/" class="nav-link collapsed" href="#" data-toggle="collapse" data-target="#" aria-expanded="false" aria-controls="collapse_accountmanagement" exact>
                        <div class="sb-nav-link-icon">
                            <i class="fas fa-list-alt"></i>
                        </div>
                        Logout
                    </router-link>
                    -->

                    <!--
                    <router-link to="/admin/reports/healthandtraining" class="nav-link collapsed" href="#" data-toggle="collapse" data-target="#collapse_Reports" aria-expanded="false" aria-controls="collapse_accountmanagement" exact>
                        <div class="sb-nav-link-icon">
                            <i class="fas fa-book"></i>
                        </div>
                        Reports
                        <div class="sb-sidenav-collapse-arrow">
                            <i class="fas fa-angle-down"></i>
                        </div>
                    </router-link>
                    <div class="collapse" id="collapse_Reports" aria-labelledby="headingOne" data-parent="#sidenavAccordion" >
                        <nav class="sb-sidenav-menu-nested nav">
                            <router-link to="/admin/reports/healthandtraining" class="nav-link" exact>
                                <div class="sb-nav-link-icon">
                                    <i class="fas fa-list-alt"></i>
                                </div>
                                Health and Training Report
                            </router-link>
                            <router-link to="/admin/reports/library" class="nav-link" exact>
                                <div class="sb-nav-link-icon">
                                    <i class="fas fa-list-alt"></i>
                                </div>
                                Library Report
                            </router-link>
                            <router-link to="/admin/reports/sja" class="nav-link" exact>
                                <div class="sb-nav-link-icon">
                                    <i class="fas fa-list-alt"></i>
                                </div>
                                Science Journo Ako Report
                            </router-link>
                            <router-link to="/admin/reports/pjs" class="nav-link" exact>
                                <div class="sb-nav-link-icon">
                                    <i class="fas fa-list-alt"></i>
                                </div>
                                PJS Report
                            </router-link>
                        </nav>
                    </div>
                    -->

                    
                </div>
            </div>
            <!--
            <div class="sb-sidenav-footer">
                <div class="small">Logged in as:</div>
                Start Bootstrap
            </div>
            -->
        </nav>
    </div>
</template>