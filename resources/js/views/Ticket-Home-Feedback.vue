
<template>
	<div class="bg" style="padding:50px">
        <div class="ftco-section" style="height: 2080px;">
            <div class="wrap-login">
                <div class="login-html">
                    <h3 style="color:white;text-align:center">Ticket Management System</h3>
                    <br>
                    <!-- <input id="tab-1" type="radio" name="tab" class="sign-in" checked><label for="tab-1" class="tab btn-text">Create a Tciket</label> -->
                    <!-- <input id="tab-2" type="radio" name="tab" class="sign-up"><label for="tab-2" class="tab btn-text">Follow Up a Ticket</label> -->
                    <b-form class="login-form" v-on:submit.prevent="createTicket">
                        <!-- <div class="sign-in-htm"> -->
							 <b-form-group class="group">
                                <label for="user" class="label">Please Enter Reference Code</label>
                                <b-form-input id="user" type="text" class="input" style="border: 1px solid #ced4da !important;"></b-form-input>
                            </b-form-group>
                            <!-- <b-form-group class="group">
                                <input type="submit" class="tab button"  style="background-color: #1161ee !important;" value="Submit" >
                            </b-form-group> -->
                            <b-form-group class="group">
								<b-button type="submit" class="tab button" style="background-color: #1161ee !important;" variant="outline-success"	>Submit</b-button>
                            </b-form-group>
                        <!-- </div> -->
                            <!-- <div class="hr"></div> -->
                        <!-- <div class="sign-up-htm mt-5">
                            <b-form-group class="group">
                                <label for="user" class="label">Please Enter Reference Code</label>
                                <b-form-input id="user" type="text" class="input" style="border: 1px solid #ced4da !important;"></b-form-input>
                            </b-form-group>
                            <b-form-group class="group">
                                <input type="submit" class="tab button"  style="background-color: #1161ee !important;" value="Submit" >
                            </b-form-group>
                        </div> -->
                    </b-form>

					<b-modal id="showReferenceCode" ref="showReferenceCode" hide-footer title="Please secure a copy of your Reference Code for follow up.">
						<div class="d-block text-center">
						<input type="text" v-model="this.ticketData_update.reference_code" id="myInput" disabled>
						</div>
						<b-button class="mt-3" variant="info" block @click="copyReferenceCode()">Copy</b-button>
					</b-modal>
                </div>
            </div>
			<FlashMessage></FlashMessage>
        </div>
	</div>
</template>


<script>
import * as ticket_service from '../services/ticket_service';

export default {
    data() {
        return {
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
                remarks:'',
                reference_code:''
            },
            ticketData_update:{
                reference_code:''
			},
			drop_type: [{ text: '(SELECT TYPE HERE)', value: null }, 	'Livestream', 
																		'Technical Support', 
																		'Information System', 
																		'TWG'],
			drop_hardware: [{ text: '(SELECT HARDWARE HERE)', value: null}, 'Troubleshooting', 
																			'Evaluation', 
																			'Network', 
																			'Testing', 
																			'Consultation', 
																			'Assistance' ],
			drop_software: [{ text: '(SELECT SOFTWARE HERE)', value: null}, 'Installation', 
																			'Data Retrieval', 
																			'Virus/Malwares', 
																			'Data Conversion/Uploading/Processing', 
																			'Reformat', 
																			'Download', 
																			'Assistance' ],

            errors : '',
            }
    },
    mounted() {
    },
    methods: {
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

			let currentDateTime = `${currentYear}${currentMonth}${currentDay}`;
			let referenceCode = currentDateTime+'-'+'00'+time;

			let formData_ticketData = new FormData();
            formData_ticketData.append('employee_code', this.ticketData.employee_code); 	//employee code
            formData_ticketData.append('type', this.ticketData.type); 						//type
            // formData_ticketData.append('hardware', this.ticketData.hardware); 				//hardware
            // formData_ticketData.append('software', this.ticketData.software); 				//software
            formData_ticketData.append('remarks', this.ticketData.remarks); 				//remarks
            formData_ticketData.append('reference_code', referenceCode); 					//referenceCode
			this.ticketData_update.reference_code = referenceCode;

			
			let formData_ticketDataStatus = new FormData();
			formData_ticketDataStatus.append('status', 'Pending');
			formData_ticketDataStatus.append('ticket_created', date_ticketCreated);
			formData_ticketDataStatus.append('reference_code', referenceCode);

            try {
                const response_ticketData = await ticket_service.addTicket(formData_ticketData);
                console.log(response_ticketData);

                const response_ticketDataStatus = await ticket_service.addTicketStatus_Pending(formData_ticketDataStatus);
                console.log(response_ticketDataStatus);

                
                
                this.flashMessage.success({
					message: 'Ticket Submitted Successfully!'
				});
				// Swal.fire({
				// 	title: 'Success!',
				// 	text: 'Ticket Submitted Successfully!',
				// 	icon: 'success',
				// 	confirmButtonText: 'Cool'
				// })
				// Swal.fire({
				// 	icon: 'success',
				// 	title: 'Success!...',
				// 	text: 'Ticket Submitted Successfully!',
				// 	footer: '<a href="">Why do I have this issue?</a>'
				// })
                this.ticketData = {
                    employee_code:'',
					type:'',
					hardware:'',
					software:'',
					remarks:'',
                	reference_code:''
                }
                
            } catch (error) {
                switch (error.response.status) {
                    case 422:
                        this.errors = error.response.data.errors;
                        break;
                    default:
                        this.flashMessage.error({
                            message: 'Some error occurred, Please try again!',
                            time: 5000
                        });
                    break;
                }
            }
			this.$refs.showReferenceCode.show()
        },
		copyReferenceCode(){
			var copyText = document.getElementById("myInput");
			copyText.select();
			copyText.setSelectionRange(0, 99999); 
			navigator.clipboard.writeText(copyText.value);
		}
        
    }
}

</script>

<style>

	.modal-title {
		color: #2c2c2c !important;
	}
	.column {
		float: left;
		width: 50%;
		padding: 10px;
		/* height: 300px; Should be removed. Only for demonstration */
	}

	.row:after {
		content: "";
		display: table;
		clear: both;
	}

	.btn-text{
		width: 100%; 
		display: block; 
		border-radius: 25px; 
		padding: 15px;
	}
	.bg { 
	  /* background: url(images/11045150.jpg) no-repeat center center fixed; 
	  */
	  /* The image used */
	  background-image: url(/images/login-bg.png); 
	
	  /* Full height */
	  height: 100%; 
	
	  /* Center and scale the image nicely */
	  background-position: center;
	  background-repeat: no-repeat;
	  background-size: cover;
	}
	
	body{
		margin:0;
		color:#6a6f8c;
		background:#c8c8c8;
		font:600 16px/18px 'Open Sans',sans-serif;
	}
	*,:after,:before{box-sizing:border-box}
	.clearfix:after,.clearfix:before{content:'';display:table}
	.clearfix:after{clear:both;display:block}
	a{color:inherit;text-decoration:none}
	
	.wrap-login{
		width:100%;
		margin:auto;
		max-width:1025px;
		min-height:670px;
		position:relative;
	
		box-shadow:0 12px 15px 0 rgba(0,0,0,.24),0 17px 50px 0 rgba(0,0,0,.19);
	}
	.login-html{
		width:100%;
		height:100%;
		position:absolute;
		padding:50px 70px 50px 70px;
		background:rgba(40,57,101,.9);
	}
	.login-html .sign-in-htm
	/* ,.login-html .sign-up-htm */
	{
		top:0;
		left:0;
		right:0;
		bottom:0;
		position:absolute;
		transform:rotateY(180deg);
		backface-visibility:hidden;
		transition:all .4s linear;
	}
	.login-html .sign-in,
	/* .login-html .sign-up, */
	.login-form .group .check{
		display:none;
	}
	.login-html .tab,
	.login-form .group .label,
	.login-form .group .button{
		text-transform:uppercase;
	}
	.login-html .tab{
		font-size:14px;
		margin-right:15px;
		/* padding-bottom:5px; */
		margin:0 15px 10px 0;
		display:inline-block;
		border-bottom:2px solid transparent;
        background-color: #6a6f8c !important;
        text-align: center;
	}
	.login-html .sign-in:checked + .tab
	/* ,.login-html .sign-up:checked + .tab */
	{
		color:#fff;
		border-color:#1161ee;
        background-color: #1161ee !important;
	}
	.login-form{
		min-height:345px;
		position:relative;
		perspective:1000px;
		transform-style:preserve-3d;
	}
	.login-form .group{
		margin-bottom:15px;
	}
	.login-form .group .label,
	.login-form .group .input,
	.login-form .group .button{
		width:100%;
		color:#fff;
		display:block;
	}
	.login-form .group .input,
	.login-form .group .button{
		border:none;
		padding:15px 20px;
		border-radius:25px;
		background:rgba(255,255,255,.1);
	}
	.login-form .group input[data-type="password"]{
	
		-webkit-text-security:circle;
	}
	.login-form .group .label{
		color:#aaa;
		font-size:12px;
	}
	.login-form .group .button{
		background:#1161ee;
	}
	.login-form .group label .icon{
		width:15px;
		height:15px;
		border-radius:2px;
		position:relative;
		display:inline-block;
		background:rgba(255,255,255,.1);
	}
	.login-form .group label .icon:before,
	.login-form .group label .icon:after{
		content:'';
		width:10px;
		height:2px;
		background:#fff;
		position:absolute;
		transition:all .2s ease-in-out 0s;
	}
	.login-form .group label .icon:before{
		left:3px;
		width:5px;
		bottom:6px;
		transform:scale(0) rotate(0);
	}
	.login-form .group label .icon:after{
		top:6px;
		right:0;
		transform:scale(0) rotate(0);
	}
	.login-form .group .check:checked + label{
		color:#fff;
	}
	.login-form .group .check:checked + label .icon{
		background:#1161ee;
	}
	.login-form .group .check:checked + label .icon:before{
		transform:scale(1) rotate(45deg);
	}
	.login-form .group .check:checked + label .icon:after{
		transform:scale(1) rotate(-45deg);
	}
	.login-html .sign-in:checked + .tab + .tab + .login-form .sign-in-htm{
	/* .login-html .sign-in:checked + .tab + .sign-up + .tab + .login-form .sign-in-htm{ */
		transform:rotate(0);
	}
	/* .login-html .sign-up:checked + .tab + .login-form .sign-up-htm{
		transform:rotate(0);
	} */
	
	.hr{
		height:2px;
		margin:60px 0 50px 0;
		background:rgba(255,255,255,.2);
	}
	.foot-lnk{
		text-align:center;
	}
	
</style>