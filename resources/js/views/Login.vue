<template>
  <div id="page-top">

    <div class="navbar navbar-expand-lg bg-dark text-uppercase fixed-top mb-5" id="mainNav">
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
                    <!-- <li class="nav-item mx-0 mx-lg-1">
                        <a class="nav-link py-3 px-0 px-lg-3 rounded" href="">
                            <router-link to="/home/technical" style="color: #fff !important;">
                            Submit Request
                            </router-link>
                        </a>
                    </li> -->
                </ul>
            </div>
        </div>
    </div>

    <!-- Login Section-->
    <section class="masthead page-section" id="contact">
        <div class="container">
            <!-- Contact Section Heading-->
            <h2 class="page-section-heading text-center text-uppercase text-secondary mb-0">Login</h2>
            <!-- Icon Divider-->
            <div class="divider-custom">
                <div class="divider-custom-line"></div>
                <div class="divider-custom-icon"><i class="fas fa-star"></i></div>
                <div class="divider-custom-line"></div>
            </div>
            <!-- Contact Section Form-->
            <div class="row justify-content-center">
                <div class="col-lg-8 col-xl-7">
                    <form id="contactForm login-form" v-on:submit.prevent="login">
                        <!-- Name input-->
                        <div class="form-floating mb-3">
                            <input required class="form-control" id="username" type="text" placeholder="Enter your name..." v-model="user.username"/>
                            <label for="name">Usename</label>
                            <div class="invalid-feedback">A username is required.</div>
                        </div>
                        <!-- Name input-->
                        <div class="form-floating mb-3">
                            <input required class="form-control" id="email" type="password" placeholder="Enter your name..." v-model="user.password"/>
                            <label for="name">Password</label>
                            <div class="invalid-feedback">A password is required.</div>
                        </div>
                        <b-button id="submit" type="submit" class="block button" style="background-color: rgba(48, 110, 148, 0.9) !important;">Login</b-button>
                    </form>
                </div>
            </div>
        </div>
    </section>
  </div>

</template>

<script>
    import * as authServices from '../services/auth_service';
    import * as ticket_service from '../services/ticket_service';

    export default { 
        data() {
            return {
                user: {
                    username: '',
                    password: '',
                },
                isLogging: false
            }
        },
        methods: {
            login: async function () {
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
                let newformat = getHours >= 12 ? 'PM' : 'AM';
                getHours = getHours % 12;
                getHours = getHours ? getHours : 12;
                getMinutes = getMinutes < 10 ? '0' + getMinutes : getMinutes;
                let activityDate = monthName + " " + currentDay + " " + currentYear + " " + getHours + ":" + getMinutes + " " + newformat;
			
                try {
                    const response = await authServices.login(this.user);

                    if(response.token_scope == 'superadmin'){
                        this.$router.push('/ticket/superadmin/status');
                    } 
                    else if(response.token_scope == 'admin'){
                        // this.$router.push('/ticket/admin/status');
                        this.$router.push('/ticket/admin/dashboard');
                    } 
                    else if(response.token_scope == 'staff'){
                        this.$router.push('/ticket/staff/status');
                    } 
                    else if(response.token_scope == 'author_lib'){
                        this.$router.push('/ticket/public/completed');
                    } 

                    let a_username = this.user.username;
                    let activity_id = 1;
                    let activity_date = activityDate;

                    let formData_activityLog = new FormData();
                    formData_activityLog.append('username', a_username);
                    formData_activityLog.append('activity_id', activity_id);
                    formData_activityLog.append('activity_date', activity_date);
                    const response_activityLog = await ticket_service.addActivityLog(formData_activityLog);
                    

                } catch(error) {
                    this.flashMessage.error({
                    message: 'Some error occured! Please try again.',
                    time: 5000
                    });
            }
            },
        },
    }
</script>