<template>
    <div id="layoutSidenav_nav">
        <nav class="sb-sidenav accordion sb-sidenav-dark" id="sidenavAccordion">
            <div class="sb-sidenav-menu">
                <div class="nav">
                    <!-- <router-link to="/ticket/admin/dashboard" class="nav-link collapsed" href="#" data-toggle="collapse" data-target="#" aria-expanded="false" aria-controls="" exact>
                        <div class="sb-nav-link-icon">
                            <i class="fas fa-chart-line"></i>
                        </div>
                        Dashboard
                    </router-link> -->

                    <router-link to="/ticket/superadmin/status" class="nav-link collapsed" href="#" data-toggle="collapse" data-target="#collapse_sciencejourno" aria-expanded="false" aria-controls="collapse_accountmanagement" exact>
                        <div class="sb-nav-link-icon">
                            <i class="fas fa-list-ul"></i>
                        </div>
                        Tickets
                        <div class="sb-sidenav-collapse-arrow">
                            <i class="fas fa-angle-down"></i>
                        </div>
                    </router-link>
                    <div class="collapse" id="collapse_sciencejourno" aria-labelledby="headingOne" data-parent="#sidenavAccordion" >
                        <nav class="sb-sidenav-menu-nested nav">
                            <router-link to="/ticket/superadmin/pending" class="nav-link" exact>
                                <div class="sb-nav-link-icon">
                                    <i class="fas fa-circle" style="color: #17a2b8"></i>
                                </div>
                                Pending
                            </router-link>
                            <router-link to="/ticket/superadmin/approved" class="nav-link" exact>
                                <div class="sb-nav-link-icon">
                                    <i class="fas fa-circle" style="color: #007bff"></i>
                                </div>
                                Assigned
                            </router-link>
                            <router-link to="/ticket/superadmin/inprogress" class="nav-link" exact>
                                <div class="sb-nav-link-icon">
                                    <i class="fas fa-circle" style="color: #ffc107"></i>
                                </div>
                                In Progress
                            </router-link>
                            <router-link to="/ticket/superadmin/completed" class="nav-link" exact>
                                <div class="sb-nav-link-icon">
                                    <i class="fas fa-circle" style="color: #28a745"></i>
                                </div>
                                Completed
                            </router-link>
                            <!-- <router-link to="/ticket/superadmin/closed" class="nav-link" exact>
                                <div class="sb-nav-link-icon">
                                    <i class="fas fa-circle" style="color: #343a40"></i>
                                </div>
                                Closed
                            </router-link>
                            <router-link to="/ticket/superadmin/rescheduled" class="nav-link" exact>
                                <div class="sb-nav-link-icon">
                                    <i class="fas fa-circle" style="color: #dc3545"></i>
                                </div>
                                Rescheduled
                            </router-link> -->
                            
                        </nav>
                    </div>

                    <router-link to="/login" class="nav-link collapsed" href="#" data-toggle="collapse" data-target="#" aria-expanded="false" aria-controls="" exact>
                        <div class="sb-nav-link-icon">
                            <i class="fas fa-arrow-right"></i>
                        </div>
                        Logout
                    </router-link>

                    
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