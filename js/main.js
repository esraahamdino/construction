// Arrow Up
let up = document.querySelector(".arrow-up");
window.onscroll = function () {
    this.scrollY >= 1000 ? up.classList.add("show") : up.classList.remove("show");
}

up.onclick = function () {
    window.scrollTo({
        top: 0,
        behavior: "smooth"
    })
}

// Check If There's Local Storage Color Option
let mainColors = localStorage.getItem("color_option");

// If There's Color Item In Local Storage
if (mainColors !== null) {

    document.documentElement.style.setProperty('--main-color', mainColors);

    // Remove Active Class From All Colors List Item
    document.querySelectorAll(".colors-list li").forEach(element => {

        element.classList.remove("active");

        // Add Active Class On Element With Data-Color === Local Storage Item
        if (element.dataset.color === mainColors) {   
    
            // Add Active Class
            element.classList.add("active");
        }

    });

}

// Click On Toggle Settings Gear
document.querySelector(".toggle-settings .fa-cog").onclick = function () {
    
    // Toggle Class Fa-spin For Rotation on Self
    this.classList.toggle("fa-spin");

    // Toggle Class Open On Main Settings Box
    document.querySelector(".settings-box").classList.toggle("open");

};

// Switch Colors
const colorsLi = document.querySelectorAll(".colors-list li");

// Loop On All List Items
colorsLi.forEach(li => {
    
    // Click On Every List Items
    li.addEventListener("click", (e) => {

        // Set Color On Root
        document.documentElement.style.setProperty('--main-color', e.target.dataset.color);

        // Set Color On Local Storage
        localStorage.setItem("color_option", e.target.dataset.color);

        handleActive(e);

    });

});

// Handle Active State
function handleActive(ev) {
    
    // Remove Active Class From All Childrens
    ev.target.parentElement.querySelectorAll(".active").forEach(element => {
        
        element.classList.remove("active");

    });

    // Add Active Class On Self
    ev.target.classList.add("active");

}

// Reset Button
document.querySelector(".reset-options").onclick = function () {

    // localStorage.clear();
    localStorage.removeItem("color_option");

    // Reload Window
    window.location.reload();

};


// Create Popup With The Image
let ourGallery = document.querySelectorAll(".gallery img");

ourGallery.forEach(img => {

    img.addEventListener('click', (e) => {

        // Create Overlay Element
        let overlay = document.createElement("div");

        // Add Class To Overlay
        overlay.className = 'popup-overlay';

        // Append Overlay To The Body
        document.body.appendChild(overlay);

        // Create The Popup Box
        let popupBox = document.createElement("div");

        // Add Class To The Popup Box
        popupBox.className = 'popup-box';

        if (img.alt !== null) {
            
            // Create Heading
            let imgHeading = document.createElement("h3");

            // Create text For Heading
            let imgText = document.createTextNode(img.alt);

            // Append The Text To The Heading
            imgHeading.appendChild(imgText);

            // Append The Heading To The Popup Box
            popupBox.appendChild(imgHeading);

        }

        // Create The Image
        let popupImage = document.createElement("img");

        // Set Image Source
        popupImage.src = img.src;

        // Add Image To Popup Box
        popupBox.appendChild(popupImage);

        // Append The Popup Box To Body
        document.body.appendChild(popupBox);

        // Create The Close Span
        let closeButton = document.createElement("span");

        // Create The Close Button Text
        let closeButtonText = document.createTextNode("X");

        // Append Text To Close Button
        closeButton.appendChild(closeButtonText);

        // Add Class To Close Button
        closeButton.className = 'close-button';

        // Add Close Button To The Popup Box
        popupBox.appendChild(closeButton);

    });

});

// Close Popup
document.addEventListener("click", function (e) {
    
    if (e.target.className == 'close-button') {
        
        // Remove The Current Popup
        e.target.parentNode.remove();

        // Remove Overlay
        document.querySelector(".popup-overlay").remove();

    }

});

// Mail Validation 
let btn = document.getElementById('link1');
let message = document.getElementById('message');
let validcararr=['.','@','_'];

btn.addEventListener('click',function() {

    let email = document.getElementById('email1').value;
    let firstAt = email.indexOf('@');
    let lastAt = email.lastIndexOf('@');
    let lastDot = email.lastIndexOf('.');
    let firstChr = email.charAt(0);
    
    email = email.trim().toLowerCase();
    message.innerHTML = '';
    
    if(email.length<8){
        message.innerHTML = "Invalid Email Length";
    }
    
    else if((firstAt<2) || (firstAt!=lastAt)){
        message.innerHTML = "Error in @";
    }
    
    else if(lastDot-lastAt<3){
        message.innerHTML = "Error in Domain Name";    
    }
    
    else if(email.length-lastDot<3){
        message.innerHTML = "Error in .com";    
    }
    else if(firstChr=='@' || firstChr=='.' || firstChr=='_' || !isNaN(firstChr)){
        message.innerHTML = "Fisrt Char Error";   
    }
    else {
        var arr = [];
        for(var i=0; i<email.length; i++){
            
            if (email.charAt(i)=='.'){
                arr.push(i);
            }
                        
            if((email.charCodeAt(i)>=97 && email.charCodeAt(i)<=122)){
                continue;
            }
            else if (validcararr.indexOf(email.charAt(i))!=-1){
                continue;    
            }
            else if ((email.charCodeAt(i)>=48 && email.charCodeAt(i)<=57)) {
                continue; 
            }
            else {
                message.innerHTML = "Enter Valid Characters";
                break;
            }
        } 
    }
});