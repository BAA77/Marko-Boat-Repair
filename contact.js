// language toggle
[...document.querySelectorAll(".lang-select")].forEach((e) => {
    e.addEventListener("click", () => {
        if (document.querySelector("#header-fa-caret").classList.contains("fa-caret-down")) {
            document.querySelector("#header-fa-caret").classList.replace("fa-caret-down", "fa-caret-up");
            document.querySelector(".lang-switch-pro").style.display = "block";
        } else {
            document.querySelector("#header-fa-caret").classList.replace("fa-caret-up", "fa-caret-down");
            document.querySelector(".lang-switch-pro").style.display = "none";
        }
    })
});

document.addEventListener("click", (e) => {
    if (e.target != document.querySelector("#header-fa-caret")
        && e.target != document.querySelector("#f-flag")
        && e.target != document.querySelector("#s-flag")) {
        document.querySelector("#header-fa-caret").classList.replace("fa-caret-up", "fa-caret-down");
        document.querySelector(".lang-switch-pro").style.display = "none";
    }
});

// menu toggle
const menu = document.querySelector(".h-bottom-nbar");
const hdNav = document.querySelector(".h-bottom-nav");
let menuNav = true;
menu.addEventListener("click", () => {
    if (menuNav) {
        menuNav = false;
        hdNav.style.display = "block";
        hdNav.style.opacity = "1";

        if (menu.textContent.trim() == "Menu") {
            menu.textContent = "Close";
        } else if (menu.textContent.trim() == "Jelovnik") {
            menu.textContent = "Blizak";
        }
    } else {
        menuNav = true;
        hdNav.style.display = "none";
        hdNav.style.opacity = "0";

        if (menu.textContent.trim() == "Close") {
            menu.textContent = "Menu";
        } else if (menu.textContent.trim() == "Blizak") {
            menu.textContent = "Jelovnik";
        }
    }
});

// header background change on scroll

window.addEventListener("scroll", () => {
    let header = document.querySelector(".header");
    let heroText = document.querySelector(".contact");
    if (header.getBoundingClientRect().bottom >= heroText.getBoundingClientRect().top) {
        header.style.background = "var(--primary)";
        header.style.boxShadow = "2px 0px 7px black";
    } else {
        header.style.background = "#0a5a8546";
        header.style.boxShadow = "0px 0px 0px transparent";
    }
});

// section reveal
window.addEventListener("scroll", () => {
    let vertReveal = [...document.querySelectorAll(".vert-reveal")];
    vertReveal.forEach((e) => {
        if (e.getBoundingClientRect().top <= window.innerHeight - 100) {
            e.classList.add("reveal-vert");
        } else {
            e.classList.remove("reveal-vert");
        }
    });

    let hrzReveal = [...document.querySelectorAll(".hrz-reveal")];
    hrzReveal.forEach((e) => {
        if (e.getBoundingClientRect().top <= window.innerHeight - 100) {
            e.classList.add("reveal-hrz");
        } else {
            e.classList.remove("reveal-hrz");
        }
    });

    let hrzOppReveal = [...document.querySelectorAll(".hrz-opp-reveal")];
    hrzOppReveal.forEach((e) => {
        if (e.getBoundingClientRect().top <= window.innerHeight - 100) {
            e.classList.add("reveal-hrz-opp");
        } else {
            e.classList.remove("reveal-hrz-opp");
        }
    });


    let scaleReveal = [...document.querySelectorAll(".scale-reveal")];
    scaleReveal.forEach((e) => {
        if (e.getBoundingClientRect().top <= window.innerHeight - 100) {
            e.classList.add("reveal-scale");
        } else {
            e.classList.remove("reveal-scale");
        }
    });
});

// contact us
function contactUs() {
    try {Email.send({
        Host: "smtp.elasticemail.com",
        Username: "regnantugboga@gmail.com",
        Password: "2AB9795659A5CB93CBAE3CE34C2A53152B1A",
        To: 'regnanttycoon@gmail.com',
        From: "regnantugboga@gmail.com",
        Subject: "MARKO BOAT REPAIR ENQUIRY",
        Body: "PROSPECT NAME: " + " " + document.querySelector("#customer-name").value + "<br>" + "<br>"
            + "<br> PHONE: " + " " + document.querySelector("#customer-phone").value + "<br>" + "<br>"
            + "<br> EMAIL: " + " " + document.querySelector("#customer-email").value + "<br>" + "<br>"
            + "<br> ENQUIRY: " + " " + document.querySelector("#customer-msg").value + "<br>" + "<br>"
    }).then(() => {
        window.location.reload(true);
        window.alert("Enquiry is on its way to the team");
    })}
    catch (error) {
        alert(`${error}`);
    }

}

function contactUsCrt() {
    try {Email.send({
        Host: "smtp.elasticemail.com",
        Username: "regnantugboga@gmail.com",
        Password: "2AB9795659A5CB93CBAE3CE34C2A53152B1A",
        To: 'regnanttycoon@gmail.com',
        From: "regnantugboga@gmail.com",
        Subject: "UPIT ZA POPRAVAK PLOVILA MARKO",
        Body: "IME POTENCIJALNOG KLIJENTA: " + " " + document.querySelector("#customer-name").value + "<br>" + "<br>"
            + "<br> TELEFON: " + " " + document.querySelector("#customer-phone").value + "<br>" + "<br>"
            + "<br> E-POŠTA: " + " " + document.querySelector("#customer-email").value + "<br>" + "<br>"
            + "<br> UPIT: " + " " + document.querySelector("#customer-msg").value + "<br>" + "<br>"
    }).then(() => {
        window.location.reload(true);
        window.alert("Upit je na putu do tima");
    })}
    catch (error) {
        alert(`${error}`);
    }

}

//newsletter subscription
function subscribe() {
    Email.send({
        Host: "smtp.elasticemail.com",
        Username: "regnantugboga@gmail.com",
        Password: "2AB9795659A5CB93CBAE3CE34C2A53152B1A",
        To: 'regnanttycoon@gmail.com',
        From: "regnantugboga@gmail.com",
        Subject: "Marko Boat Repair Newsletter Subscription",
        Body: "Someone has just subscribed to Marko Boat Repair newsletter" + "<br>" + "<br>"
            + "<br> EMAIL: " + " " + document.querySelector("#subscription-email").value + "<br>" + "<br>" + "<br>"
    }).then(() => {
        window.location.reload(true);
        window.alert("Newsletter Subscription was successful");
    });
}

function subscribeCrt() {
    Email.send({
        Host: "smtp.elasticemail.com",
        Username: "regnantugboga@gmail.com",
        Password: "2AB9795659A5CB93CBAE3CE34C2A53152B1A",
        To: 'regnanttycoon@gmail.com',
        From: "regnantugboga@gmail.com",
        Subject: "Marko Boat Repair Newsletter Pretplata",
        Body: "Netko se upravo pretplatio na Marko Boat Repair newsletter" + "<br>" + "<br>"
            + "<br> E-POŠTA: " + " " + document.querySelector("#subscription-email").value + "<br>" + "<br>" + "<br>"
    }).then(() => {
        window.location.reload(true);
        window.alert("Pretplata na newsletter bila je uspješna");
    });
}