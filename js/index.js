function add(btn) {
    
var num=btn.parentElement.children[1].value;
    
btn.parentElement.children[1].value=++num;
    
var proce=btn.parentElement.previousElementSibling.innerText;
}


function minus(btn){


var num=btn.parentElement.children[1].value;

if(num==0){
    return;
}
btn.parentElement.children[1].value=--num;
}


function check(_btn) {
    var post = document.getElementById('postEmail');
        post.addEventListener('click', function() { 
            
            var content = document.querySelector('p');

            
            var eStr = document.getElementById('email').value;

            var reg = /^([A-z0-9_-]+)@([A-z0-9_-]+)+(\.([A-z0-9_-]+))+$/g;

            if (eStr.match(reg)) {
                content.innerHTML = eStr + 'The E-mail Address is Correct';
            } else {
                content.innerHTML = eStr + ' The E-mail Address is Wrong, Please Enter Again';
            }
        })
}

    function beforeSubmit(form){
        if(form.payment_Email.value==''){
            alert('Please enter a valid email');
            form.payment_Email.focus();
            return false;
        }
        if(form.payment_first_name.value==''){
            alert('Please enter first name');
            form.payment_first_name.focus();
            return false;
        }
        if(form.payment_last_name.value==''){
            alert('Please enter last name');
            form.payment_last_name.focus();
            return false;
        }
        if(form.payment_address.value==''){
            alert('Please enter address');
            form.payment_address.focus();
            return false;
        }
        if(form.payment_city.value==''){
            alert('Please enter cuty');
            form.payment_city.focus();
            return false;
        }
        if(form.payment_country.value==''){
            alert('Please enter country');
            form.payment_country.focus();
            return false;
        }
        if(form.payment_state.value==''){
            alert('Please enter state');
            form.payment_state.focus();
            return false;
        }
        if(form.payment_code.value==''){
            alert('Please enter ZIP Code');
            form.payment_code.focus();
            return false;
        }
        if(form.payment_phone.value==''){
            alert('Please enter phone');
            form.payment_phone.focus();
            return false;
        }
        return true;
        }

        function beforeSubmit2(form){
            if(form.payment_cardholder.value==''){
                alert('Please enter Card Holder');
                form.payment_cardholder.focus();
                return false;
            }
            if(form.payment_cardnumber.value==''){
                alert('Please enter Card Number');
                form.payment_cardnumber.focus();
                return false;
            }
            if(form.payment_form_date.value==''){
                alert('Please enter Expiration Date (MM/YY)');
                form.payment_form_date.focus();
                return false;
            }
            if(form.payment_security.value==''){
                alert('Please enter Security Code');
                form.payment_security.focus();
                return false;
            }
            return true;
            }