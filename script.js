/* =========================================================
   MENU MOBILE
========================================================= */

const menuToggle = document.getElementById("menuToggle");

const navMenu = document.getElementById("navMenu");


menuToggle.addEventListener("click", function () {

    navMenu.classList.toggle("active");

});



/* =========================================================
   TUTUP MENU SETELAH LINK DIKLIK
========================================================= */

const navLinks =
    document.querySelectorAll(".nav-menu a");


navLinks.forEach(function (link) {

    link.addEventListener("click", function () {

        navMenu.classList.remove("active");

    });

});



/* =========================================================
   TAHUN OTOMATIS
========================================================= */

const currentYear =
    document.getElementById("currentYear");


currentYear.textContent =
    new Date().getFullYear();



/* =========================================================
   BACK TO TOP
========================================================= */

const backToTop =
    document.getElementById("backToTop");


window.addEventListener("scroll", function () {

    if (window.scrollY > 500) {

        backToTop.classList.add("show");

    } else {

        backToTop.classList.remove("show");

    }

});


backToTop.addEventListener("click", function () {

    window.scrollTo({

        top: 0,

        behavior: "smooth"

    });

});



/* =========================================================
   ANIMASI SEDERHANA SAAT SECTION MUNCUL
========================================================= */

const sections =
    document.querySelectorAll(".section");


const observer =
    new IntersectionObserver(

        function (entries) {

            entries.forEach(function (entry) {

                if (entry.isIntersecting) {

                    entry.target.classList.add("visible");

                }

            });

        },

        {
            threshold: 0.1
        }

    );


sections.forEach(function (section) {

    observer.observe(section);

});