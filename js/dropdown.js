const hamburger = document.getElementById("hamburger");
    const aside = document.getElementsByTagName("aside")[0];
    const hide_aside = document.getElementsByClassName("hide-aside")[0];
    let mediaQuery = window.matchMedia("(max-width: 960px)");
    let slideIndex = 0;

    showSlides(mediaQuery);
    mediaQuery.addListener(showSlides);


    //const cards = document.getElementsByClassName("card1");
    window.onload = () => {
        hamburger.addEventListener("click", () => {
            aside.classList.toggle("show");
        });
        hide_aside.addEventListener("click", () => {
            aside.classList.toggle("show");;
        });
    }
    function showSlides(mediaQueryx) {
        let i;

        let cards = document.getElementsByClassName("card1");
        if (mediaQuery.matches) {

            //var dots = document.getElementsByClassName("dot");
            for (i = 0; i < cards.length; i++) {
                cards[i].style.display = "none";
            }
            slideIndex++;
            if (slideIndex > cards.length) { slideIndex = 1 }

            cards[slideIndex - 1].style.display = "block";
            //dots[slideIndex - 1].className += " active";
            setTimeout(showSlides, 2000);// Change image every 2 seconds*/
        }
        else {
            for (i = 0; i < cards.length; i++) {
                cards[i].style.display = "block";
            }

        }


    }