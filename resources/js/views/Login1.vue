
<template>
<div class="bg">
    <div class="ftco-section" style="height: 2080px;">
        <div class="main">
            <figure>
                  <!-- <img src="images/1a.jpg"/> -->
            </figure>
            <!--
            <div class="headline">
                <h2 class="text-headline">Sex-Disaggregated Data</h2>
            </div>
            -->
            <form v-on:submit.prevent="login">
                <span>
                    <label for="username" class="text-small-uppercase">Username</label>
                    <input class="text-body" id="username" name="username" type="text" required v-model="user.username">
                </span>
                <span>
                    <label for="email" class="text-small-uppercase">Password</label>
                    <input class="text-body" id="email" name="email" type="password" required v-model="user.password">
                </span>
                <input class="text-small-uppercase" id="submit" type="submit" value="LOGIN">
            </form>
        </div>
    </div>
</div>
</template>

<style>

/* Structure */

.bg { 
  /* background: url(images/11045150.jpg) no-repeat center center fixed; 
  */
  /* The image used */
  background-image: url(/images/11045150.jpg); 

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

input[type=submit] {
  background: #fff;
  height: 2.75rem;
  margin: 1em auto auto;
}

@media (min-width: 768px) {
  input[type=submit] {
    background: #fff;
    bottom: 2.75rem;
    left: 2.55rem;
    height: 2.75rem;
    padding: 0 3rem;
    /* position: absolute; */
  }
}

input[type=password],
input[type=text] {
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

form {
  overflow: hidden;
  padding: 10%;
  position: relative;
  width: 80%;
}

@media (min-width: 768px) {
  form {
    float: left;
    height: 78%;
    padding: 6%;
    width: 50%;
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
    width: 900px;
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

input[type=password],
input[type=text] {
  background: none;
  border: none;
  border-bottom: 2px solid #74bdb7;
  box-sizing: border-box;
  outline: none;
}

input[type=password]:required,
input[type=text]:required {
  box-shadow: none;
  outline: none;
}

input[type=submit] {
  background: #f37b56;
  border: none;
  color: #fff;
  padding: 0 2rem;
  width: 50%;
}

input[type=submit]:hover,
input[type=submit]:focus {
  background: #f79577;
  cursor: pointer;
  outline: none;
}

.inputs--filled label {
  transform: translate(0, 0);
}

.inputs--invalid input {
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

.inputs--invalid label {
  color: #f37b56;
}

label {
  display: inline-block;
  transform: translate(0, 1.25rem);
  transition: 0.15s;
}

.main {
  background: #f9f6ed;
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
  color: #74bdb7;
  font: 700 14px 'Montserrat';
  letter-spacing: .08rem;
  text-transform: uppercase;
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
</style>

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
                    const response = await authServices.login(this.user);
                    // this.$router.push('/admin');
                    console.log(response.token_scope)
                    if(response.token_scope == 'superadmin'){
                        this.$router.push('/superadmin/dashboard');
                    } else if(response.token_scope == 'admin'){
                        this.$router.push('/admin/dashboard');
                    } else if(response.token_scope == 'author_hr'){
                        this.$router.push('/author/hr/dashboard');
                    } else if(response.token_scope == 'author_lib'){
                        this.$router.push('/author/library/dashboard');
                    } else if(response.token_scope == 'author_pjs'){
                        this.$router.push('/author/pjs/dashboard');
                    } else if(response.token_scope == 'author_sja'){
                        this.$router.push('/author/sja/dashboard');
                    } else if(response.token_scope == 'author_starbooks'){
                        this.$router.push('/author/starbooks/dashboard');
                    } else if(response.token_scope == 'author_dostv'){
                        this.$router.push('/author/dostv/dashboard');
                    }
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