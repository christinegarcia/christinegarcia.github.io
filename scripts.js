/* Smooth scroll */

function smoothScroll(location) {
    document.querySelector(location).scrollIntoView({
        behavior: 'smooth', 
        block: 'start'
    });
}

/* Wrong button, panel 1 */

// From https://www.w3schools.com/howto/howto_css_modals.asp

var modal = document.getElementById("myModal");
var btnWrong = document.getElementById("btn-wrong");
var span = document.getElementsByClassName("close")[0];

btnWrong.onclick = function() {
    modal.style.display = "block";
}

span.onclick = function() {
    modal.style.display = "none";
}

window.onclick = function(event) {
    if (event.target == modal) {
        modal.style.display = "none";
    }
}

/* Right button, panel 1 */
var punsSection = document.getElementById("puns1");
var btnRight = document.getElementById("btn-right");

btnRight.onclick = function() {
    punsSection.style.display = "flex";
    smoothScroll("#puns1");
}

/* Wrong button, pre-gifts panel */

var modal2 = document.getElementById("myModal2");
var btnWrong2 = document.getElementById("btn-wrong2");
var span = document.getElementsByClassName("close")[1];

btnWrong2.onclick = function() {
    modal2.style.display = "block";
}

span.onclick = function() {
    modal2.style.display = "none";
}

/* Right button, pre-gifts panel */
var giftSection = document.getElementById("gift");
var btnRight2 = document.getElementById("btn-right2");

btnRight2.onclick = function() {
    giftSection.style.display = "flex";
    smoothScroll("#gift");
}

/* Puns, section 1 */
var answer1 = document.getElementById("ans1");
var btnAns1 = document.getElementById("btnAns1");
var btnForward1 = document.getElementById("btnForward1");
var punsSection2 = document.getElementById("puns2");

btnAns1.onclick = function() {
    answer1.style.opacity = "1";
    btnAns1.style.display = "none";
    btnForward1.style.display = "inline-block";
}

btnForward1.onclick = function() {
    punsSection2.style.display = "flex";
    smoothScroll("#puns2");
}

/* Puns, section 2 */
var answer2 = document.getElementById("ans2");
var btnAns2 = document.getElementById("btnAns2");
var btnForward2 = document.getElementById("btnForward2");
var punsSection3 = document.getElementById("puns3");

btnAns2.onclick = function() {
    answer2.style.opacity = "1";
    btnAns2.style.display = "none";
    btnForward2.style.display = "inline-block";
}

btnForward2.onclick = function() {
    punsSection3.style.display = "flex";
    smoothScroll("#puns3");
}

/* Puns, section 3 */
var answer3 = document.getElementById("ans3");
var btnAns3 = document.getElementById("btnAns3");
var btnForward3 = document.getElementById("btnForward3");
var punsSection4 = document.getElementById("puns4");

btnAns3.onclick = function() {
    answer3.style.opacity = "1";
    btnAns3.style.display = "none";
    btnForward3.style.display = "inline-block";
}

btnForward3.onclick = function() {
    punsSection4.style.display = "flex";
    smoothScroll("#puns4");
}

/* Puns, section 4 */
var answer4 = document.getElementById("ans4");
var btnAns4 = document.getElementById("btnAns4");
var forward4 = document.getElementById("forward4");
var btnForward4 = document.getElementById("btnForward4");
var moveOn = document.getElementById("noMorePuns");

btnAns4.onclick = function() {
    answer4.style.opacity = "1";
    btnAns4.style.display = "none";
    btnForward4.style.display = "inline-block";
}

btnForward4.onclick = function() {
    moveOn.style.display = "flex";
    smoothScroll("#noMorePuns");
}

/* Domain names sections */

var seriousNames = document.getElementById("seriousNames");
var sillyNames = document.getElementById("sillyNames");
var btnSeriousNames = document.getElementById("btnSeriousNames");
var btnSillyNames = document.getElementById("btnSillyNames");

btnSeriousNames.onclick = function() {
    sillyNames.style.display = "none";
    seriousNames.style.display = "flex";
}

btnSillyNames.onclick = function() {
    seriousNames.style.display = "none";
    sillyNames.style.display = "flex";
}

