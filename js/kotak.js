var x = document.getElementsByClassName("slide");

var gaslide = false;


function padayon() {

    if (!gaslide) {

        gaslide = true;

        document.getElementsByClassName("prev")[0].classList.remove("prev");

        document.getElementsByClassName("active")[0].classList.add("prev");

        document.getElementsByClassName("active")[0].classList.remove("active");

        document.getElementsByClassName("next")[0].classList.add("active");

        document.getElementsByClassName("next")[0].classList.remove("next");

        if (document.getElementsByClassName("active")[0].nextElementSibling) {

            document.getElementsByClassName("active")[0].nextElementSibling.classList.add("next");

        } else {

            document.getElementsByClassName("unod")[0].classList.add("next");

        }

        setTimeout(function () {

            gaslide = false;

        }, 500);