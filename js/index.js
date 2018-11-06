// For header onscroll hide
var prevScrollpos = window.pageYOffset;
window.onscroll = function() {
        var currentScrollPos = window.pageYOffset;
        if (prevScrollpos > currentScrollPos) {
            document.querySelector("header").style.top = "0";
        } else {
            document.querySelector("header").style.top = "-39px";
        }
        prevScrollpos = currentScrollPos;
    }
    // header onscroll end

// For document Loader
document.onreadystatechange = function() {
        setTimeout(function() {
            if (document.readyState == "complete") {
                document.querySelector(".loaderContainer").className = "loaderContainer removeLoader";
            } else {
                document.querySelector(".loaderContainer").className = "loaderContainer";
            }
        }, 3000)
    }
    // document Loader end