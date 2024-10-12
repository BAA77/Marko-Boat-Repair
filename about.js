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
    let about = document.querySelector(".about");
    if (header.getBoundingClientRect().bottom >= about.getBoundingClientRect().top) {
        header.style.background = "var(--primary)";
        header.style.boxShadow = "2px 0px 7px black";
    } else {
        header.style.background = "#0a5a8546";
        header.style.boxShadow = "0px 0px 0px transparent";
    }
});

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