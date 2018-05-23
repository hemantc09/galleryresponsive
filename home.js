/**
 * Created by Hemantc09 on 7/28/16.
 */
/* Open when someone clicks on the span element */

// window.onload=function () {
//     openNav();
// };

if(document.readyState === "complete") {
    //Already loaded!
}
else {
    //Add onload or DOMContentLoaded event listeners here: for example,
    // window.addEventListener("onload", function () {/* your code here */}, false);
    //or
    window.onload=function () {
        openNav();
    };

    //document.addEventListener("DOMContentLoaded", function () {/* code */}, false);
}
function openNav() {
    document.getElementById("myNav").style.width = "100%";
}

/* Close when someone clicks on the "x" symbol inside the overlay */
function closeNav() {
    document.getElementById("myNav").style.width = "0%";
    window.location.assign("home.html");
}