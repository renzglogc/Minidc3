<template>
  <div class="container-center-horizontal">
    <form class="login-1 screen" name="form2" action="form2" method="post">
      <div class="log-in">
        <div class="overlap-group2-2">
          <cards-default />
          <div class="ellipse-4"></div>
          <div v-if="!submitted">
          <button
              v-on:click.stop.prevent="submit"
              class="button-contained-primary-default"
              style="color: white"
            >
              <span style="margin-left: 115px">Login</span>
            </button>
          <div class="textfield-label-textfield-default">
            <div class="label mulish-bold-santas-gray-12px">EMAIL</div>
            <div class="overlap-group-5">
              <input
                class="textfield-31 mulish-normal-fiord-14px"
                name="textfield"
                v-model="email"
                :placeholder="inputPlaceholder"
                :type="inputType"
                required
              />
            </div>
            <div v-if="!error">
              <div class="invalid-feedback" style="color: red">
                A valid email is required!
              </div>
            </div>
          </div>
          <div class="textfield-label-icon-default">
            <div class="label-1 mulish-bold-santas-gray-12px">PASSWORD</div>
            <div class="overlap-group1-2">
              <input
                class="textfield-32 mulish-normal-fiord-14px"
                name="textfield"
                :placeholder="inputPlaceholder"
                type="password"
                v-model="password"
                required
              /><img
                class="icon-hide-active"
                src="https://anima-uploads.s3.amazonaws.com/projects/6346737d3c195ace20fe33e6/releases/6346744bfb6cd5506eea67db/img/icon---hide---active@2x.svg"
                alt="icon / hide / active"
              />
            </div>
          </div>
        </div>
          <p class="enter-your-email-and-password-below">
            {{ enterYourEmailAndPasswordBelow }}
          </p>
          <div class="minidc">{{ minidc }}</div>
          <img
            class="golog-logo-white-1-1"
            :src="gologLogoWhite1"
            alt="golog logo white 1"
          />
        </div>
      </div>
    </form>
  </div>
</template>

<script>
import CardsDefault from "./CardsDefault";
import ButtonContainedPrimaryDefault from "./ButtonContainedPrimaryDefault";
import TextfieldLabelTextfieldDefault from "./TextfieldLabelTextfieldDefault";
import TextfieldLabelIconDefault from "./TextfieldLabelIconDefault";
export default {
  name: "Login1",
  components: {
    CardsDefault,
    ButtonContainedPrimaryDefault,
    TextfieldLabelTextfieldDefault,
    TextfieldLabelIconDefault,
  },
  props: [
    "enterYourEmailAndPasswordBelow",
    "minidc",
    "gologLogoWhite1",
    "buttonContainedPrimaryDefaultProps",
    "textfieldLabelTextfieldDefaultProps",
    "textfieldLabelIconDefaultProps",
  ],
  data: function () {
        return {
            email : "",
            emailBlured : false,
            valid : false,
            submitted : false,
            password:"",
            passwordBlured:false,
            error:true,
            error2:false
        }
    },
 
    methods:{
 
        validate : function(){
            this.emailBlured = true;
            this.passwordBlured = true;
            if( this.validEmail(this.email) && this.validPassword(this.password)){
                this.valid = true;
                alert("successfully  login");
            }

        },
 
        validEmail : function(email) {
 
            var re = /(.+)@(.+){2,}\.(.+){2,}/;
            if(re.test(email.toLowerCase())){
                return true;
            }
            else{
              this.error=false;

            }
 
        },
 
        validPassword : function(password) {
            if (password.length > 6) {
                return true;

            }
            else
            alert("Password must be 8 character");
    
    
        },
 
        submit : function(){
            this.validate();
            if(this.valid){
                this.submitted = true;
                this.$router.push('/dashboard');
            }
        }
    }
};
</script>

<style>
.login-1 {
  align-items: flex-start;
  background-color: #363740;
  border: 1px none;
  display: flex;
  height: 1024px;
  padding: 178px 530px;
  width: 1440px;
}

.log-in {
  align-items: flex-start;
  border: 1px none;
  border-radius: 10px;
  box-shadow: 0px 4px 4px #00000040;
  display: flex;
  height: 582px;
  overflow: hidden;
  width: 380px;
}

.overlap-group2-2 {
  height: 655px;
  margin-left: -55px;
  margin-top: -73px;
  position: relative;
  width: 498px;
}

.ellipse-4 {
  background-color: var(--razzmatazz-2);
  border: 1px none;
  border-radius: 249px/165.5px;
  height: 331px;
  left: 0;
  position: absolute;
  top: 0;
  width: 498px;
}

.enter-your-email-and-password-below {
  color: #c4c4c4;
  font-family: var(--font-family-mulish);
  font-size: var(--font-size-xs);
  font-weight: 400;
  left: 87px;
  letter-spacing: 0.3px;
  line-height: 20px;
  position: absolute;
  text-align: center;
  top: 270px;
  white-space: nowrap;
  width: 316px;
}

.minidc {
  color: var(--white);
  font-family: var(--font-family-mulish);
  font-size: 24px;
  font-weight: 700;
  left: 87px;
  letter-spacing: 0.4px;
  opacity: 0.7;
  position: absolute;
  text-align: center;
  top: 220px;
  width: 316px;
}

.golog-logo-white-1-1 {
  height: 73px;
  left: 181px;
  object-fit: cover;
  position: absolute;
  top: 128px;
  width: 128px;
}
</style>
