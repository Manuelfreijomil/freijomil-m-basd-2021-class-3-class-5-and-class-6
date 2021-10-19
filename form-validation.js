//Name validation
window.onload = function () {
    var Name = document.getElementById('full-name');

    Name.onblur=validateName;
    Name.onfocus=hideContentName;

    function validateName(e){
        if (lookForNumber(Name.value)===1){
            document.getElementById('error-full-name').textContent="Contain a number.";
            return ;
        }
        if(Name.value.length <6){
            document.getElementById('error-full-name').textContent="Name too short.";
            return;
        }
        if(Name.value.indexOf(" ") === -1){
            document.getElementById('error-full-name').textContent="No Surname.";
            return ;
        }else{
            return;
        }
    }

    function lookForNumber(a) {
        var flag = 0;
        for (i = 0; i < a.length; i++) {
            if (a.charCodeAt(i) >= 48 && a.charCodeAt(i) <= 57) {
                flag = 1;
                return flag;
            }
        }
        return flag;
    }

    function hideContentName(e){
        document.getElementById('error-full-name').textContent="";
    }


    //Email Validation

    var Email = document.getElementById('email');

    Email.onblur=validateEmail;
    Email.onfocus=hideContentEmail;

    function validateEmail(e){
        if(Email.value.indexOf("@") === -1){
            document.getElementById('error-email').textContent="Lack of @ in the email.";
            return;
        }
        if(Email.value.indexOf(".com") === -1){
            document.getElementById('error-email').textContent=" Missing '.com ' in the email.";
            return;
        }
        if(Name.value.indexOf(" ") === -1){
            document.getElementById('error-email').textContent="There is an space.";;
            return ;
        }      
    }

    function hideContentEmail(e){
        document.getElementById('error-email').textContent="";
    }

    //Password Validation
    var Password = document.getElementById('password');

    Password.onblur=validatePassword;
    Password.onfocus=hideContentPassword;

    function validatePassword(e){
        if(Password.value.length < 8){
            document.getElementById('error-password').textContent="Password too short.";
            return;
        }
        if(lookForUpperLetter(Password.value) === 0){
            document.getElementById('error-password').textContent="No upper letters.";
            return;
        }
        if(lookForLowerLetter(Password.value) === 0){
            document.getElementById('error-password').textContent="No lower letters.";
            return;
        }
        if(lookForNumber(Password.value) === 0){
            document.getElementById('error-password').textContent="No numbers.";
            return;
        }
        if(Password.value.indexOf(" ") !== -1){
            document.getElementById('error-password').textContent="There is an space.";
            return ;
        }
        //validating that there is no special charecters.look it up on internet and found that solution
        if ( /[^A-Za-z\d]/.test(Password.value)) {
            document.getElementById('error-password').textContent="There is an special character.";
            return ;
        }
    }
    function lookForUpperLetter(a) {
        var flag = 0;
        for (i = 0; i < a.length; i++) {
            if (a.charCodeAt(i) >= 65 && a.charCodeAt(i) <= 90) {
                flag = 1;
                return flag;
            }
        }
        return flag;
    }
    function lookForLowerLetter(a) {
        var flag = 0;
        for (i = 0; i < a.length; i++) {
            if (a.charCodeAt(i) >= 97 && a.charCodeAt(i) <= 122) {
                flag = 1;
                return flag;
            }
        }
        return flag;
    }
    function hideContentPassword(e){
        document.getElementById('error-password').textContent=""
    }

    //Repet Password Validation
    var Rpassword = document.getElementById('repet-password');

    Rpassword.onblur=validateRePassword;
    Rpassword.onfocus=hideContentRePassword;

    function validateRePassword(e){
        if(Password.value === Rpassword.value){
            return;
        }else{
            document.getElementById('error-r-password').textContent="Passwords are not the same.";
            return;
        }
    }
    function hideContentRePassword(e){
        document.getElementById('error-r-password').textContent=""
    }

    //Age Validation
    var Age = document.getElementById('age');

    Age.onblur=validateAge;
    Age.onfocus=hideContentAge;

    function validateAge (e){
        if(lookForNumber(Age.value) === 0){
            document.getElementById('error-age').textContent="No numbers.";
            return;
        }
        if(Age.value.length > 2){
            document.getElementById('error-age').textContent="Too old.";
            return;
        }
        if(Age.value % 1 !== 0){
            document.getElementById('error-age').textContent="Is not integer.";
            return;
        }
        if(Age.value < 18){
            document.getElementById('error-age').textContent="Is under 18.";
            return;
        }
    }
    function hideContentAge(e){
        document.getElementById('error-age').textContent="";
    }

    // Phone Validation
    var Phone = document.getElementById('phone');

    Phone.onblur=validatePhone;
    Phone.onfocus=hideContentPhone;

    function validatePhone(e){
        if(lookForNumber(Phone.value) == 0){
            document.getElementById('error-phone').textContent="Not all characters are numbers.";
            return;
        }
        if(Phone.value.length < 7){
            document.getElementById('error-phone').textContent="Phone number short.";
            return;
        }
        if(Phone.value.indexOf(" ") !== -1){
            document.getElementById('error-phone').textContent="Phone number contain spaces.";
            return;
        }
        if(Phone.value.indexOf("-") !== -1){
            document.getElementById('error-phone').textContent="Phone number contain hyphen.";
            return;
        }
        if(Phone.value.indexOf("(") !== -1){
            document.getElementById('error-phone').textContent="Phone number contain parenthesis.";
            return;
        }
        if(Phone.value.indexOf(")") !== -1){
            document.getElementById('error-phone').textContent="Phone number contain parenthesis.";
            return;
        }
        if (/^([0-9]+)$/.test(Phone.value)){
          return;
        }else{
          document.getElementById('error-phone').textContent="You have entered an invalid phone number!"
          return;
        }
    }
    function hideContentPhone(e){
        document.getElementById('error-phone').textContent="";
    }

    //Address validation
    var Address = document.getElementById('address');

    Address.onblur=validateAdress;
    Address.onfocus=hideContentAdress;

    function validateAdress(e){
        if(lookForNumber(Address.value) === 0){
            document.getElementById('error-address').textContent="Adress does not contain a number."
            return;
        }
        if(lookForLowerLetter(Address.value) === 0 && lookForUpperLetter(Address.value)=== 0){
            document.getElementById('error-address').textContent="Adress does not contain letters."
            return;
        }
        if(Address.value.length < 7){
            document.getElementById('error-address').textContent="Adress too short."
            return;
        }
        if(Address.value.indexOf(" ") === -1){
            document.getElementById('error-address').textContent="Addres does not contain spaces.";
            return;
        }
        var simbolos= /^([A-Za-z0-9]+( [A-Za-z0-9]+)?)$/;
        if(simbolos.test(Address.value)){
            return;
        }else{
            document.getElementById('error-address').textContent="You have entered an invalid address!"
            return;
        }
    }
    function hideContentAdress(e){
        document.getElementById('error-address').textContent="";
    }

    //City Validation
    var City = document.getElementById('city');

    City.onblur=validateCity;
    City.onfocus=hideContentCity;

    function validateCity(e){
        if(lookForNumber(City.value) === 1){
            document.getElementById('error-city').textContent="City contains numbers."
            return;
        }
        if(lookForLowerLetter(City.value) === 0 && lookForUpperLetter(City.value)=== 0){
            document.getElementById('error-city').textContent="City does not contain letters."
            return;
        }
        if(City.value.length < 3){
            document.getElementById('error-city').textContent="City too short."
            return;
        }
    }
    function hideContentCity(e){
        document.getElementById('error-city').textContent="";
    }

    // Zip Validation

    var Zip = document.getElementById('zip-code');

    Zip.onblur=validateZip;
    Zip.onfocus=hideContentZip;

    function validateZip(e){
        if(Zip.value.length < 3){
            document.getElementById('error-zip').textContent="Zip code too short."
            return;
        }
        if(/^([A-Za-z0-9]+( [A-Za-z0-9]+)?)$/.test(Zip.value)){
            return;
        }else{
            document.getElementById('error-zip').textContent="You have entered an invalid Zip Code!"
            return;
        }

    }
    function hideContentZip(e){
        document.getElementById('error-zip').textContent="";
    }

    //DNI Validation
    var Dni = document.getElementById('dni');

    Dni.onblur=validateDni;
    Dni.onfocus=hideContentDni;

    function validateDni(e){
        if (/^([^0-9]+)$/.test(Dni.value)){
            document.getElementById('error-dni').textContent="You have entered an invalid Dni number!"
            return;
        }
        if(Dni.value.length < 7){
            document.getElementById('error-dni').textContent="Dni too short!";
            return;
        }
        if(Dni.value.length > 8){
            document.getElementById('error-dni').textContent="Dni too long!";
            return;
        }
    }
    function hideContentDni(e){
        document.getElementById('error-dni').textContent="";
    }



    //Botton Validation

    var Btm=document.getElementById('btm');
    var errorsArray=[];

    Btm.onclick=validateBtm

    function validateBtm(e){
        e.preventDefault();
        var errorFullName=document.getElementById('error-full-name')
        var errorEmail=document.getElementById('error-email')
        var errorPassword=document.getElementById('error-password')
        var errorRpassword=document.getElementById('error-r-password')
        var errorAge=document.getElementById('error-age')
        var errorPhone=document.getElementById('error-phone')
        var errorAddress=document.getElementById('error-address')
        var errorCity=document.getElementById('error-city')
        var errorZip=document.getElementById('error-zip')
        var errorDni=document.getElementById('error-dni')
    
        var errors=[errorFullName.innerHTML,errorEmail.innerHTML,errorPassword.innerHTML,errorRpassword.innerHTML,errorAge.innerHTML,errorPhone.innerHTML,errorAddress.innerHTML,errorCity.innerHTML,errorZip.innerHTML,errorDni.innerHTML]

        for(var i=0; i < 9 ; i++){
            if(lookForUpperLetter(errors[i]) === 1){
                switch(i){
                    case 0:    
                        errorsArray.push('Nombre completo: '+ errors[i]);
                        break;
                    case 1:
                        errorsArray.push('Email: '+ errors[i]);
                        break;
                    case 2:
                        errorsArray.push('Contraseña: '+ errors[i]);
                        break;
                    case 3:
                        errorsArray.push('Repetir contraseña: '+ errors[i]);
                        break;
                    case 4:
                        errorsArray.push('Edad: '+ errors[i]);
                        break;
                    case 5:
                        errorsArray.push('Teléfono: '+ errors[i]);
                        break;
                    case 6:
                        errorsArray.push('Dirección: '+ errors[i]);
                        break;
                    case 7:
                        errorsArray.push('Ciudad: '+ errors[i]);
                        break;
                    case 8:
                        errorsArray.push('Código Postal: '+ errors[i]);
                        break;
                    case 9:
                        errorsArray.push('Dni: '+ errors[i]);
                        break;

                    
                }
            }
        }
        if(errorsArray.length !== 0){
            alert(errorsArray.join('\n'));
        }else{
            var allOk=[`Nombre completo: ${Name.value}`,`Email: ${Email.value}`,`Contraseña: ${Password.value}`,`Repet password: ${Rpassword.value}`,`Edad : ${Age.value}`,`Teléfono: ${Phone.value}`,`Dirección: ${Address.value}`,`Ciudad: ${City.value}`,`Código Postal: ${Zip.value}`,`Dni: ${Dni.value}`];
            alert(allOk.join('\n'));
        }
        
}
}
