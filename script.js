      var nameInput=document.getElementById("name")

      var email=document.getElementById("email")

      var password=document.getElementById("password")

      var nameError=document.getElementById("nameError")

      var emailError=document.getElementById("emailError")

      var passwordError=document.getElementById("passwordError")

      var submitbtn=document.getElementById("submitbtn")

      var form=document.getElementById("Registrationform")

      var Successfull=document.getElementById("Successfull")

      // Validation Form
      function validateform(){
            
        var isNameValid=false
            
        var isEmailValid=false
            
        var isPasswordValid=false
            
         // Name Validation
      if(nameInput.value.trim() ===""){
            
        nameError.textContent="Name is Required"
            
        isNameValid=false
            
      }
            
      else{
            
        nameError.textContent=""
            
        isNameValid=true
      }
            
      // Email Validation
            
      var emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
            
      if(email.value.trim() ===""){
            
        emailError.textContent="Email is Required"
            
        isEmailValid=false
      }
            
      else if(!emailPattern.test(email.value)){
            
        emailError.textContent="Enter a Valid email Address"
            
        isEmailValid=false
      }
            
      else{
            
        emailError.textContent=""
            
        isEmailValid=true
      }
            
      // Password Validation
            
      if(password.value.length<6){
            
        passwordError.textContent="Password must Contain at least 6 letters"
            
        isPasswordValid=false
      }
            
      else{
            
        passwordError.textContent=""
            
        isPasswordValid=true
      }
            
      // Enable button Only When all fields are valid
      submitbtn.disabled=!(isNameValid && isEmailValid && isPasswordValid)
      }

    //  Real Time Validation 
      nameInput.addEventListener("input", validateform);

      email.addEventListener("input", validateform);

      password.addEventListener("input", validateform);

      // form Submission
      form.addEventListener("submit",function(event){
            
        event.preventDefault()
            
        Successfull.textContent="Registration Successfull!"
            
        form.reset()
            
        submitbtn.disabled=true
            
      })
