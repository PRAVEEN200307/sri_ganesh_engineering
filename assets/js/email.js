const validate = new window.JustValidate('#contactForm');

validate
    .addField('#fullName', [
        {
            rule: 'required',
            errorMessage: "name is required",
        },
        {
            rule: 'minLength',
            value: 3,
        },
        {
            rule: 'maxLength',
            value: 15,
        },
    ]).addField('#email_id', [
        {
            rule: 'required',
            errorMessage: "email is required",
        },
        {
            rule: 'email',
        },
    ]).addField('#message', [
        {
            rule: 'required',
            errorMessage: "message is required",
        },
    ])


validate.onSuccess((event) => {
        event.preventDefault();
        var params = {
            from_name: document.getElementById("fullName").value,
            email_id: document.getElementById("email_id").value,
            message: document.getElementById("message").value
        }
        emailjs.send("service_ykjs8ga", "template_6az87sr", params).then(function(res) {
            const popupEl=document.querySelector('.popup')
            popupEl.style.display="flex"
            document.forms.emailForm.reset();
        })
});


const popupCloseBtn =document.querySelector('#closeBtn');

popupCloseBtn.addEventListener('click',()=>{
    const popupEl=document.querySelector('.popup')
    popupEl.style.display="none"
})

document.addEventListener('click',()=>{
    const popupEl=document.querySelector('.popup')
    popupEl.style.display="none"
})