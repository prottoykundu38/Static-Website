function fun() {

    let x = document.getElementById("un").value;

    if (x.length < 3) {
        document.getElementById('eun').innerHTML = '<br>Name Must be at least 3 character';
        document.getElementById('eun').style.color = 'red';
        document.getElementById("un").style.border = '1px solid red';
        document.getElementById('un').style.borderRadius = '5px';
        event.preventDefault();
    }

    else {
        document.getElementById('eun').innerHTML = '';
        document.getElementById("un").style.border = '';
    }


    let y = document.getElementById("em").value;
    let pattern = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    if (!pattern.test(y)) {
        document.getElementById('eem').innerHTML = '<br>Please Enter a valid email address';
        document.getElementById('eem').style.color = 'red';
        document.getElementById("em").style.border = '1px solid red';
        document.getElementById('em').style.borderRadius = '5px';
        event.preventDefault();
    }

    else {
        document.getElementById('eem').innerHTML = '';
        document.getElementById("em").style.border = '';
    }

    let z = document.getElementById("pass").value;
    let upperCase = /[A-Z]/;
    let Number = /[0-9]/;
    let SpclChar = /[!@#$%^&*(),.?":{}|<>]/;


    if (z.length < 6) {
        document.getElementById('epass').innerHTML = '<br>Password Must be at least 6 character long';
        document.getElementById('epass').style.color = 'red';
        document.getElementById("pass").style.border = '1px solid red';
        document.getElementById('pass').style.borderRadius = '5px';
        event.preventDefault();
    }

    else if (!upperCase.test(z)) {
        document.getElementById('epass').innerHTML = '<br>Password Must contain one uppercase letter';
        document.getElementById('epass').style.color = 'red';
        document.getElementById("pass").style.border = '1px solid red';
        document.getElementById('pass').style.borderRadius = '5px';
        event.preventDefault();
    }
    else if (!Number.test(z)) {
        document.getElementById('epass').innerHTML = '<br>Password Must contain number';
        document.getElementById('epass').style.color = 'red';
        document.getElementById("pass").style.border = '1px solid red';
        document.getElementById('pass').style.borderRadius = '5px';
        event.preventDefault();
    }
    else if (!SpclChar.test(z)) {
        document.getElementById('epass').innerHTML = '<br>Password Must contain one special character';
        document.getElementById('epass').style.color = 'red';
        document.getElementById("pass").style.border = '1px solid red';
        document.getElementById('pass').style.borderRadius = '5px';
        event.preventDefault();
    }
    else {
        document.getElementById('epass').innerHTML = '';
        document.getElementById("pass").style.border = '';
    }

    let w = document.getElementById("cpass").value;
    if (w != z) {
        document.getElementById('ecpass').innerHTML = '<br>Confirm password must match Password';
        document.getElementById('ecpass').style.color = 'red';
        document.getElementById("cpass").style.border = '1px solid red';
        document.getElementById('cpass').style.borderRadius = '5px';
        event.preventDefault();
    }
    else {
        document.getElementById('ecpass').innerHTML = '';
        document.getElementById("cpass").style.border = '';
    }
}