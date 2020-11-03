function big_img(img) {
    let big_slider = document.getElementById("big_slider")
    big_slider.style.position = "fixed"
    big_slider.style.marginTop = "0vw"
    
    let img1 = document.getElementById("img1")
    img1.src = `image/${img}.jpg`

    let img2 = document.getElementById("img2")
    img2.src = `image/${img}-1.jpg`
}

function closed_big_img() {
    let big_slider = document.getElementById("big_slider")
    big_slider.style.position = "absolute"
    big_slider.style.marginTop = "-1000vw"
}

function feedback() {
    let userName = document.getElementById("userName")
    let userPhone = document.getElementById("userPhone")
    let userEmail = document.getElementById("userEmail")
    let userMessage = document.getElementById("userMessage")

    if (userName.value != "" && userPhone.value != "" && userEmail.value != "" && userMessage.value != "") {
        let userDate = {
            userName: userName.value,
            userPhone: userPhone.value,
            userEmail: userEmail.value,
            userMessage: userMessage.value
        }

        let service_id = "gmail"
        let template_id = "template_nX8BTPGS"
        let user_id = "user_i05opLh3d3XKKsDSWbnDS"
        
        emailjs.send(service_id, template_id, userDate, user_id)

        userName.value = ""
        userPhone.value = ""
        userEmail.value = ""
        userMessage.value = ""

        userName.style.borderColor = ""
        userPhone.style.borderColor = ""
        userEmail.style.borderColor = ""
        userMessage.style.borderColor = ""

        let message_about_send_request = document.getElementById("message_about_send_request")
        message_about_send_request.style.position = "fixed"
        message_about_send_request.style.marginTop = "0vw"
    }
    else {
        if (userName.value == "") {
            userName.style.borderColor = "rgba(202,1,13,1)"
        }
        else {
            userName.style.borderColor = ""
        }
        if (userPhone.value == "") {
            userPhone.style.borderColor = "rgba(202,1,13,1)"
        }
        else {
            userPhone.style.borderColor = ""
        }
        if (userEmail.value == "") {
            userEmail.style.borderColor = "rgba(202,1,13,1)"
        }
        else {
            userEmail.style.borderColor = ""
        }
        if (userMessage.value == "") {
            userMessage.style.borderColor = "rgba(202,1,13,1)"
        }
        else {
            userMessage.style.borderColor = ""
        }
    }
}

function closed_message() {
    let message_about_send_request = document.getElementById("message_about_send_request")
    message_about_send_request.style.position = "absolute"
    message_about_send_request.style.marginTop = "-1000vw"
}

function go_to_facebook() {
    window.open('https://www.facebook.com/Wedding-market-uzchorod-103885777664656')
}