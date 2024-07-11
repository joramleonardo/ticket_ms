import Vue from 'vue';
import Router from 'vue-router';
import LoginPage from './views/Login.vue';


//TICKETS
import Ticket_Home from './views/Ticket-Home.vue';
import Ticket_Home_Technical from './views/Ticket-Home-Technical.vue';
import Ticket_Home_Request from './views/Ticket-Home-Request.vue';
import Ticket_Home_FollowUp from './views/Ticket-Home-FollowUp.vue';
import Ticket_Home_Feedback from './views/Ticket-Home-Feedback.vue';
import Ticket_Rating from './views/Rating.vue';

import Ticket_Home_SuperAdmin from './views/Ticket-Home-SuperAdmin.vue';
import Ticket_SuperAdmin_Dashboard from './views/Ticket-Admin-Dashboard.vue';
import Ticket_SuperAdmin_Status from './views/Ticket-Status.vue';
import Ticket_SuperAdmin_Pending from './views/Ticket-Pending.vue';
import Ticket_SuperAdmin_Approved from './views/Ticket-Approved.vue';
import Ticket_SuperAdmin_InProgress from './views/Ticket-InProgress.vue';
import Ticket_SuperAdmin_Completed from './views/Ticket-Completed.vue';
import Ticket_SuperAdmin_Closed from './views/Ticket-Closed.vue';
import Ticket_SuperAdmin_Rescheduled from './views/Ticket-Rescheduled.vue';

import Ticket_Home_Admin from './views/Ticket-Home-Admin.vue';
import Ticket_Admin_Dashboard from './views/Ticket-Admin-Dashboard.vue';
import Ticket_Admin_Status from './views/Ticket-Status.vue';
import Ticket_Admin_Pending from './views/Ticket-Pending.vue';
import Ticket_Admin_Approved from './views/Ticket-Approved.vue';
import Ticket_Admin_InProgress from './views/Ticket-InProgress.vue';
import Ticket_Admin_Completed from './views/Ticket-Completed.vue';
import Ticket_Admin_Closed from './views/Ticket-Closed.vue';
import Ticket_Admin_Rescheduled from './views/Ticket-Rescheduled.vue';

import Ticket_Home_Staff from './views/Ticket-Home-Staff.vue';
import Ticket_Staff_Status from './views/Ticket-Status.vue';
import Ticket_Staff_Pending from './views/Ticket-Pending.vue';
import Ticket_Staff_Approved from './views/Ticket-Approved.vue';
import Ticket_Staff_InProgress from './views/Ticket-InProgress.vue';
import Ticket_Staff_Completed from './views/Ticket-Completed.vue';
import Ticket_Staff_Closed from './views/Ticket-Closed.vue';
import Ticket_Staff_Rescheduled from './views/Ticket-Rescheduled.vue';


import Ticket_Home_Public from './views/Ticket-Public-Home.vue';
import Ticket_Public_Dashboard from './views/Ticket-Public-Dashboard.vue';
import Ticket_Public_Status from './views/Ticket-Public-Status.vue';
import Ticket_Public_Completed from './views/Ticket-Public-Completed.vue';

import Ticket_New_Employee from './views/New_Ticket_Employee.vue';
import Ticket_New_STARBOOKS from './views/New_Ticket_starbooks.vue';
import Ticket_New_Agency from './views/New_Ticket_OtherAgency.vue';


Vue.use(Router);

const routes = [
    
    {
        path: '/home',
        name: 'home',
        component: Ticket_Home
    },

    {
        path: '/home/technical',
        name: 'home/technical',
        component: Ticket_Home_Technical
    },
    
    {
        path: '/request',
        name: 'request',
        component: Ticket_Home_Request
    },
    {
        path: '/followup',
        name: 'followup',
        component: Ticket_Home_FollowUp
    },
    {
        path: '/feedback',
        name: 'feedback',
        component: Ticket_Home_Feedback
    },
    
    {
        path: '/rating/:id',
        name: 'rating',
        component: Ticket_Rating
    },

    //Ticket Routes
    //SUPER ADMIN ROUTES
    {
        path: '/ticket/superadmin/',
        name: 'ticket-superadmin',
        component: Ticket_Home_SuperAdmin,
        children: [
            {
                path: '/ticket/superadmin/dashboard',
                name: 'ticket-superadmin-dashboard',
                component: Ticket_SuperAdmin_Dashboard,
            },
            {
                path: '/ticket/superadmin/status',
                name: 'ticket-superadmin-status',
                component: Ticket_SuperAdmin_Status,
            },
            {
                path: '/ticket/superadmin/pending',
                name: 'ticket-superadmin-pending',
                component: Ticket_SuperAdmin_Pending,
            },
            {
                path: '/ticket/superadmin/approved',
                name: 'ticket-superadmin-approved',
                component: Ticket_SuperAdmin_Approved,
            },
            {
                path: '/ticket/superadmin/inprogress',
                name: 'ticket-superadmin-inprogress',
                component: Ticket_SuperAdmin_InProgress,
            },
            {
                path: '/ticket/superadmin/completed',
                name: 'ticket-superadmin-completed',
                component: Ticket_SuperAdmin_Completed,
            },
            {
                path: '/ticket/superadmin/closed',
                name: 'ticket-superadmin-closed',
                component: Ticket_SuperAdmin_Closed,
            },
            {
                path: '/ticket/superadmin/rescheduled',
                name: 'ticket-superadmin-rescheduled',
                component: Ticket_SuperAdmin_Rescheduled,
            }
        ],
    },
    //ADMIN ROUTES
    {
        path: '/ticket/admin/',
        name: 'ticket-admin',
        component: Ticket_Home_Admin,
        children: [
            {
                path: '/ticket/admin/dashboard',
                name: 'ticket-admin-dashboard',
                component: Ticket_Admin_Dashboard,
            },
            {
                path: '/ticket/admin/status',
                name: 'ticket-admin-status',
                component: Ticket_Admin_Status,
            },
            {
                path: '/ticket/admin/pending',
                name: 'ticket-admin-pending',
                component: Ticket_Admin_Pending,
            },
            {
                path: '/ticket/admin/approved',
                name: 'ticket-admin-approved',
                component: Ticket_Admin_Approved,
            },
            {
                path: '/ticket/admin/inprogress',
                name: 'ticket-admin-inprogress',
                component: Ticket_Admin_InProgress,
            },
            {
                path: '/ticket/admin/completed',
                name: 'ticket-admin-completed',
                component: Ticket_Admin_Completed,
            },
            {
                path: '/ticket/admin/closed',
                name: 'ticket-admin-closed',
                component: Ticket_Admin_Closed,
            },
            {
                path: '/ticket/admin/rescheduled',
                name: 'ticket-admin-rescheduled',
                component: Ticket_Admin_Rescheduled,
            },
            {
                path: '/ticket/admin/new/employee',
                name: 'ticket-admin-new-employee',
                component: Ticket_New_Employee,
            },
            {
                path: '/ticket/admin/new/agency',
                name: 'ticket-admin-new-agency',
                component: Ticket_New_Agency,
            },
            {
                path: '/ticket/admin/new/starbooks',
                name: 'ticket-admin-new-starbooks',
                component: Ticket_New_STARBOOKS,
            }
        ],
    },
    //STAFF ROUTES
    {
        path: '/ticket/staff/',
        name: 'ticket-staff',
        component: Ticket_Home_Staff,
        children: [
            {
                path: '/ticket/staff/status',
                name: 'ticket-staff-status',
                component: Ticket_Staff_Status,
            },
            {
                path: '/ticket/staff/approved',
                name: 'ticket-staff-approved',
                component: Ticket_Staff_Approved,
            },
            {
                path: '/ticket/staff/inprogress',
                name: 'ticket-staff-inprogress',
                component: Ticket_Staff_InProgress,
            },
            {
                path: '/ticket/staff/completed',
                name: 'ticket-staff-completed',
                component: Ticket_Staff_Completed,
            },
            {
                path: '/ticket/staff/closed',
                name: 'ticket-staff-closed',
                component: Ticket_Staff_Closed,
            },
            {
                path: '/ticket/staff/rescheduled',
                name: 'ticket-staff-rescheduled',
                component: Ticket_Staff_Rescheduled,
            },
            {
                path: '/ticket/staff/new/employee',
                name: 'ticket-staff-new-employee',
                component: Ticket_New_Employee,
            },
            {
                path: '/ticket/staff/new/agency',
                name: 'ticket-staff-new-agency',
                component: Ticket_New_Agency,
            },
            {
                path: '/ticket/staff/new/starbooks',
                name: 'ticket-staff-new-starbooks',
                component: Ticket_New_STARBOOKS,
            }
        ],
    },
    //PUBLIC ROUTES
    {
        path: '/ticket/public/',
        name: 'ticket-public',
        component: Ticket_Home_Public,
        children: [
            {
                path: '/ticket/public/dashboard',
                name: 'ticket-public-dashboard',
                component: Ticket_Public_Dashboard,
            },
            {
                path: '/ticket/public/status',
                name: 'ticket-public-status',
                component: Ticket_Public_Status,
            },
            {
                path: '/ticket/public/completed',
                name: 'ticket-public-completed',
                component: Ticket_Public_Completed,
            }
            // {
            //     path: '/ticket/public/approved',
            //     name: 'ticket-public-approved',
            //     component: Ticket_Staff_Approved,
            // },
            // {
            //     path: '/ticket/public/inprogress',
            //     name: 'ticket-public-inprogress',
            //     component: Ticket_Staff_InProgress,
            // },
        ],
    },
    

    //Login Routes
    {
        path: '/login',
        name: 'login',
        component: LoginPage
    },
    {
        path: '/',
        name: '',
        component: Ticket_Home
    }
];

const router = new Router({
    routes: routes,
    linkActiveClass: 'active'
});

export default router;