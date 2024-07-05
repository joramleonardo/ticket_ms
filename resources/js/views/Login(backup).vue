
<template>
<div class="bg">
    <div class="ftco-section" style="height: 2080px;">
      <div class="">
          <div class="">
            <div class="main">
                <!-- <figure>
                        <img src="images/1a.jpg"/>
                </figure> -->
              
                <!-- <div class="headline">
                    <h2 class="text-headline">Sex-Disaggregated Data</h2>
                </div> -->
                <b-form class="login-form" v-on:submit.prevent="login">
                  <div class="sign-in-htm">
							      <div class="">
                      <div class="">
                        <b-form-group class="group">
                            <label for="username" class="text-small-uppercase">Username</label>
                            <b-form-input  class="input" style="background: #fff; border: 1px solid #ced4da !important; color: black" id="username" name="username" type="text" required v-model="user.username"></b-form-input>
                        </b-form-group>
                        <b-form-group class="group">
                            <label for="email" class="text-small-uppercase">Password</label>
                            <b-form-input  class="input" style="background: #fff; border: 1px solid #ced4da !important; color: black" id="email" name="email" type="password" required v-model="user.password"></b-form-input>
                        </b-form-group>
                        <!-- <input class="text-small-uppercase" id="submit" type="submit" value="LOGIN"> -->
                        <b-form-group class="group">
                          <b-button id="submit" type="submit" class="tab button" style="background-color: #1161ee !important;" variant="outline-success"	>Login</b-button>
                        </b-form-group>
                      </div>
                      
                    </div>
                  </div>
                </b-form>
            </div>
          </div>
      </div>
    </div>
</div>
</template>

<script>
    import * as authServices from '../services/auth_service';

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
                try {
                    console.log("aaaa")
                    const response = await authServices.login(this.user);
                    // this.$router.push('/admin');
                    console.log(response.token_scope)
                    console.log(response.user.name)
                    if(response.token_scope == 'superadmin'){
                        this.$router.push('/ticket/superadmin/status');
                    } 
                    else if(response.token_scope == 'admin'){
                        this.$router.push('/ticket/admin/status');
                    } 
                    else if(response.token_scope == 'staff'){
                        this.$router.push('/ticket/staff/status');
                    } 
                    // else if(response.token_scope == 'author_hr'){
                    //     this.$router.push('/author/hr/dashboard');
                    // }
                    // } else if(response.token_scope == 'author_lib'){
                    //     this.$router.push('/author/library/dashboard');
                    // } else if(response.token_scope == 'author_pjs'){
                    //     this.$router.push('/author/pjs/dashboard');
                    // } else if(response.token_scope == 'author_sja'){
                    //     this.$router.push('/author/sja/dashboard');
                    // } else if(response.token_scope == 'author_starbooks'){
                    //     this.$router.push('/author/starbooks/dashboard');
                    // } else if(response.token_scope == 'author_dostv'){
                    //     this.$router.push('/author/dostv/dashboard');
                    // }
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

<style>

/* Structure */

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

img {
  height: 100%;
  width: 100%;
}

.main input[type=submit] {
  background: #fff;
  height: 2.75rem;
  margin: 1em auto auto;
}

@media (min-width: 768px) {
  .main input[type=submit] {
    background: #fff;
    bottom: 2.75rem;
    left: 2.55rem;
    height: 2.75rem;
    padding: 0 3rem;
    /* position: absolute; */
  }
}

.main input[type=password],
.main input[type=text] {
  height: 60px;
  margin: 0 0 1.15rem;
  width: 100%;
}

figure {
  overflow: hidden;
  position: relative;
  width: 100%;
}

@media (min-width: 768px) {
  figure {
    float: left;
    height: 100%;
    position: relative;
    width: 50%;
    /* top: 46%; */
  }
}

.main form {
  overflow: hidden;
  padding: 10%;
  position: relative;
  /* width: 80%; */
}

@media (min-width: 768px) {
  .main form {
    /* float: left; */
    /* height: 78%; */
    padding: 3%;
    /* width: 50%; */
    top: 10%;
  }
}

.main {
  margin: 30px auto auto;
  overflow: hidden;
  position: relative;
  width: 90%;
}

@media (min-width: 768px) {
  .main {
    height: 500px;
    left: 50%;
    margin: auto;
    position: absolute;
    transform: translate(-50%, -50%);
    top: 50%;
    width: 400px;
  }
}

.headline {
  position: absolute;
  top: 8vw;
  width: 100%;
}

@media (min-width: 768px) {
  .headline {
    position: absolute;
    top: 3.4rem;
    width: 50%;
  }
}

/* Skin */
/* 
* {
  margin: 0;
  padding: 0;
}

body {
  background: #74bdb7;
  font: 700 16px 'Montserrat', sans-serif;
} */

.main input[type=password],
.main input[type=text] {
  background: none;
  border: none;
  border-bottom: 2px solid #74bdb7;
  box-sizing: border-box;
  outline: none;
}

.main input[type=password]:required,
.main input[type=text]:required {
  box-shadow: none;
  outline: none;
}

.main input[type=submit] {
  background: #f37b56;
  border: none;
  color: #fff;
  padding: 0 2rem;
  width: 50%;
}

.main input[type=submit]:hover,
.main input[type=submit]:focus {
  background: #f79577;
  cursor: pointer;
  outline: none;
}

.main .inputs--filled label {
  transform: translate(0, 0);
}

.main .inputs--invalid input {
  animation: shake 0.3s cubic-bezier(.36,.07,.19,.97) both;
  background: url(//my-assets.netlify.com/codepen/dailyui-001/ico-invalid.svg) center right no-repeat;
  border-bottom: 2px solid #f37b56;
  box-shadow: none;
  color: #f37b56;
  transform: translate3d(0, 0, 0);
}

@keyframes shake {
  0%, 100% {
    transform: translate3d(0, 0, 0);
  }

  33% {
    transform: translate3d(-6px, 0, 0);
  }

  66% {
    transform: translate3d(6px, 0, 0);
  }
}

.main .inputs--invalid label {
  color: #f37b56;
}

.main label {
  display: inline-block;
  transform: translate(0, 1.25rem);
  transition: 0.15s;
}

.main {
  background: rgba(40,57,101,.9);
  border-radius: 0.25rem;
  box-shadow: 0 6px 22px rgba(0, 0, 0, 0.1);
}

.text-headline {
  color: #74bdb7;
  letter-spacing: 0.4rem;
  font: 700 1.4em 'Montserrat';
  text-align: center;
  text-transform: uppercase;
}

@media (min-width: 768px) {
  .text-headline {
    font: 700 1.625rem 'Montserrat';
  }
}

.text-body {
  color: #354c58;
  font: 700 16px 'Montserrat', sans-serif;
}

.text-small-uppercase {
  color: #ffff;
  font: 700 14px 'Montserrat';
  letter-spacing: .08rem;
  text-transform: uppercase;
  padding: 20px 0;
}

.text-subheadline {
  color: #f37b56;
  left: -.17rem;
  letter-spacing: .143rem;
  font: 700 0.652rem 'Montserrat';
  margin-bottom: 1.5rem;
  position: relative;
  text-align: center;
  text-transform: uppercase;
}

@media (min-width: 768px) {
  .text-subheadline {
    font: 700 0.75rem 'Montserrat';
  }
}

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
	
	.login-wrap{
		width:100%;
		margin:auto;
		max-width:1025px;
		min-height:670px;
		position:relative;
		background:url(https://raw.githubusercontent.com/khadkamhn/day-01-login-form/master/img/bg.jpg) no-repeat center;
		box-shadow:0 12px 15px 0 rgba(0,0,0,.24),0 17px 50px 0 rgba(0,0,0,.19); 
    
	}
	.login-html{
		width:100%;
		height:100%;
		position:absolute;
		padding:50px 70px 50px 70px;
		/* background:rgba(40,57,101,.9); */
	}
	.login-html .sign-in-htm,
	.login-html .sign-up-htm{
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
	.login-html .sign-up,
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
	.login-html .sign-in:checked + .tab,
	.login-html .sign-up:checked + .tab{
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
	.login-html .sign-in:checked + .tab + .sign-up + .tab + .login-form .sign-in-htm{
		transform:rotate(0);
	}
	.login-html .sign-up:checked + .tab + .login-form .sign-up-htm{
		transform:rotate(0);
	}
	
	.hr{
		height:2px;
		margin:60px 0 50px 0;
		background:rgba(255,255,255,.2);
	}
	.foot-lnk{
		text-align:center;
	}
</style>