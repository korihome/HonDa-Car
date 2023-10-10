// CHANGE COLOR NAVBAR & HIDE_ SHOW VEHICLE POPUP
var count = "";
let list = document.getElementsByClassName("btn-changeBg");
for (const item of list) {
    item.addEventListener('click', () => {
        if (count == "") {
            item.classList.add('active')
            count = item.id;
            if (count == "btn-vehicles") {
                document.querySelector('#vehicles__popup').style.display = "block";
                document.querySelector(".nav__vehicle").classList.add("animate__fadeInDown")
                document.querySelector(".vehicle__list").classList.add("animate__fadeInUp")
                document.querySelector(".btn__close").classList.add("animate__fadeIn")
            }
        } else {
            if (count == item.id) {
                item.classList.remove('active')
                count = ""
                document.querySelector(".nav__vehicle").classList.add("animate__fadeOutUp")
                document.querySelector(".vehicle__list").classList.add("animate__fadeOutDown")
                document.querySelector(".btn__close").classList.add("animate__fadeOut")
                setTimeout(() => {
                    document.querySelector('#vehicles__popup').style.display = "none";
                    document.querySelector(".nav__vehicle").classList.remove("animate__fadeOutUp")
                    document.querySelector(".vehicle__list").classList.remove("animate__fadeOutDown")
                    document.querySelector(".btn__close").classList.remove("animate__fadeOut")
                }, 300)
            } else {
                document.getElementById(count).classList.remove('active')
                item.classList.add('active')
                count = item.id;
                if (count == "btn-vehicles") {
                    document.querySelector('#vehicles__popup').style.display = "block";
                    document.querySelector(".nav__vehicle").classList.add("animate__fadeInDown")
                    document.querySelector(".vehicle__list").classList.add("animate__fadeInUp")
                    document.querySelector(".btn__close").classList.add("animate__fadeIn")
                } else {
                    document.querySelector(".nav__vehicle").classList.add("animate__fadeOutUp")
                    document.querySelector(".vehicle__list").classList.add("animate__fadeOutDown")
                    document.querySelector(".btn__close").classList.add("animate__fadeOut")
                    setTimeout(() => {
                        document.querySelector('#vehicles__popup').style.display = "none";
                        document.querySelector(".nav__vehicle").classList.remove("animate__fadeOutUp")
                        document.querySelector(".vehicle__list").classList.remove("animate__fadeOutDown")
                        document.querySelector(".btn__close").classList.remove("animate__fadeOut")
                    }, 300)
                }
            }
        }
    })
}

// BUTTON CLOSE VEHICLE
document.querySelector('#close-vehicle').addEventListener('click', () => {
    document.querySelector(".nav__vehicle").classList.add("animate__fadeOutUp")
    document.querySelector(".vehicle__list").classList.add("animate__fadeOutDown")
    document.querySelector(".btn__close").classList.add("animate__fadeOut")
    setTimeout(() => {
        document.querySelector('#vehicles__popup').style.display = "none";
        document.querySelector(".nav__vehicle").classList.remove("animate__fadeOutUp")
        document.querySelector(".vehicle__list").classList.remove("animate__fadeOutDown")
        document.querySelector(".btn__close").classList.remove("animate__fadeOut")
    }, 300)
    document.querySelector('#btn-vehicles').classList.remove("active");
    count = ""
})

//DROPDOWN HEADER_RIGHT
let buttonList = document.getElementsByClassName("drop-link");
let dropList = document.getElementsByClassName("dropdown-item");
var count1 = "";
let searchBtn = document.querySelector("#search-dropitem");
let searchDropdown = document.querySelector("#header__search");

for (let i = 0; i < buttonList.length; i++) {
    buttonList[i].addEventListener('click', () => {
        if (count == "") {
            if (count1 === "") {
                dropList[i].classList.remove("d-none");
                count1 = i;
            } else {
                if (count1 == i) {
                    dropList[i].classList.add("d-none");
                    count1 = "";
                } else {
                    dropList[i].classList.remove("d-none");
                    let temp = +count1;
                    dropList[temp].classList.add("d-none");
                    count1 = i;
                }
            }
        }
        searchDropdown.classList.remove("show")
    })
}

searchBtn.addEventListener('click', () => {
    for (const item of dropList) {
        if (!item.classList.contains("d-none")) {
            item.classList.add('d-none');
            count1 = "";
        }
    }
})

document.querySelector("#btn-nav").addEventListener("click", () => {
    searchDropdown.classList.remove("show")
    for (const item of dropList) {
        if (!item.classList.contains("d-none")) {
            item.classList.add('d-none');
            count1 = "";
        }
    }
})

// INTRO


function isInViewport(element) {
    var rect = element.getBoundingClientRect();
    var top = rect.top + 100;
    if (rect.top >= 0 &&
        rect.left >= 0 &&
        rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
        rect.right <= (window.innerWidth || document.documentElement.clientWidth)) {
        return true;
    } else {
        return false;
    }
}

window.addEventListener("scroll", () => {
    let intro = document.getElementById("intro");
    let introItem = document.getElementsByClassName("intro__item");
    if (isInViewport(intro)) {
        for (const item of introItem) {
            item.style.left = "0";
        }
    }

    let our = document.querySelector("#our")
    let ourTitle = document.querySelector(".our__title");
    let ourContent = document.querySelector(".our__content");
    if (isInViewport(ourTitle)) {
        ourTitle.style.opacity = "1";
        ourTitle.style.transform = "translateY(0)";
    }
    if (isInViewport(ourContent)) {
        ourContent.style.opacity = "1";
        ourContent.style.transform = "translateY(0)";
    }
})
console.log(document.documentElement.clientHeight);