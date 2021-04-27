function validateUser() {
    var firstname = document.getElementById("firstname").value;
    var lastname = document.getElementById("lastname").value;
    var email = document.getElementById("email").value;
    var username = document.getElementById("uname").value;
    var password = document.getElementById("password").value;
    var conpassword = document.getElementById("conpassword").value;
    var mnumber  = document.getElementById("mnumber").value;
    var address = document.getElementById("address").value;
    var pincode = document.getElementById("pincode").value;

    var pwdpattern = /[ `!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?~]/;
   
    var mobilenumber= /^[0-9]{10}$/;
    // validation client side
    if(firstname == '' || lastname =='' || email =='' || username == ''|| password =='' || conpassword == '' || mnumber =='' || address =='' || pincode ==''){
        alert("Fist Name, Last Name, Email, UserName, Password, Confirm password, Mobile number, Address, Pincode is required");
        return false;

    }
    else if(!mobilenumber.test(mnumber)) {
        alert("Mobile number is required in 10 digit for 3456789870");
        return false;
    } else if((password.length <= 8) || !pwdpattern.test(password)){
        alert("password needs to be greator than 8 character and contains one special character");
        return false;

    }  else if(password != conpassword) {
        alert("password and confirm password not matching");
        return false;

    } else if(pincode.length != 6) {
        alert("Pincode can be 6 digits only like 345600");
        return false;
    }
    alert("form submitted");

}