let links = document.querySelector("header ul");
let toggle = document.querySelector(".toggle");

// Open And Close The Toggle When You Click At It.
toggle.onclick = function(e) {
    this.classList.toggle("active-menu")
    links.classList.toggle("open")

    if(!toggle.classList.contains("active-menu")) {
        links.style.display = "none"
    }  else{
        links.style.display = "block"

    }

    // change the background of the open class when you click on the toggle

    if (links.classList.contains("open")) {
        links.style.background = "linear-gradient(to right, #111, #222)";
    } else {
        links.style.background = "none"
    }
    
    e.stopPropagation();

}

links.onclick = function(e) {
    e.stopPropagation();
}

// Close The Toggle When You Click On Anything exept The open class
document.addEventListener("click", (e) => {

    if(e.target !== links && e.target !== toggle) {

        if (toggle.classList.contains("active-menu")) {
            links.classList.toggle("open")
            toggle.classList.toggle("active-menu")
        }

        if(!toggle.classList.contains("active-menu")) {
            links.style.display = "none"
        }  else{
            links.style.display = "block"
    
        }
    }

})

// The width of spans will complate auto when you make a scroll

let spans = document.querySelectorAll(".skills .skill-box .progres span");
let skills = document.querySelector(".skills");
let allSec = document.querySelectorAll("section");

window.onscroll = function() {
    if (window.pageYOffset > (skills.offsetTop + skills.offsetHeight - window.innerHeight -150)) {
        spans.forEach(span => {
            span.style.width = span.dataset.progres;
        })
    }
    
    // when the section is on the viewport he will be active    
    allSec.forEach( (sec) => {
        
        sec.getBoundingClientRect().bottom >= 200 && sec.getBoundingClientRect()
        .top <= 200  ? sec.classList.add("active-class")
        : sec.classList.remove("active-class");            
        
    })

    // bullets will be appear when landing page hidden
    if (window.scrollY >= 695) {
        document.querySelector(".nav-bullets").style.display = "block"
    } else {
        document.querySelector(".nav-bullets").style.display = "none"    
    }
}

let buls = document.querySelectorAll(".nav-bullets .bul");
// when you click on any bullet the section thet you ckicked at will be on the viewport and the hash will change to the name of the sec that you clicked at.
buls.forEach(bul => {
    bul.addEventListener("click", (e) => {
        location.hash = e.target.dataset.sec
        document.querySelector(e.target.dataset.sec).scrollIntoView({
            behavior: "smooth"
        })
    })
})

// when you click at the btn that in the landing page that called "see more" the viewport will be the about section.
document.querySelector(".landing h2").onclick = () => {
    document.querySelector(".about").scrollIntoView({});
    location.hash = document.querySelector(".about").id;
}

// Show More And Show Less Bottons
let allboxs = document.querySelectorAll(".img-box");
let btn = document.querySelector(".btn");
let btn2 = document.querySelector(".btn2");

btn.addEventListener("click", () => {
    allboxs.forEach(box => {
        if (box.dataset.display === "hidden") {
            if(box.classList.contains("hid")) {
                box.classList.remove("hid")
                btn.style.display = "none"
                btn2.style.display = "block"
            }
        }
    })
})
btn2.addEventListener("click", () => {
    allboxs.forEach(box => {
        if (box.dataset.display === "hidden") {
            if(!box.classList.contains("hid")) {
                box.classList.add("hid")
                btn.style.display = "block"
                btn2.style.display = "none"
            }
        }
    })
});

const sr = ScrollReveal({
    origin: "top",
    distance: "80px",
    duration: 2000,
    reset: false,
    opacity: 0, 
})

sr.reveal(".landing h4", {delay: 200, opacity: 0})
sr.reveal(".logo", {origin: "left"})


let i = 0;
let theFirstPara = "Front-End-Developer";

function autoWriting() {
    if (i < theFirstPara.length) {
        document.querySelector(".firstP").innerHTML += theFirstPara[i];
        setTimeout(autoWriting, 50)
        i++
    }
}
autoWriting()

let ii = 0;
let theSecPara = "I Have Made Amazing Templates";
console.log(theSecPara);
function autoWriting2() {
    if (ii < theSecPara.length) {
        document.querySelector(".secP").innerHTML += theSecPara[ii];
        setTimeout(autoWriting2, 50)
        ii++
    }
}
setTimeout(autoWriting2, theFirstPara.length * 50)


let index = 0;
document.querySelector(".btnQoute").addEventListener("click", () => {
    randomArr = [
        ` 
        <div class="cont-name">
        <div class="qoute-cont">
        <q> an video is not simply a trademark, a design, a slogan or an easily remembered pic. its a studiously crafted personality
        profile of an individual, institution, corporation, product or service.</q>
        </div></div>
        <div class="qoute-made">anyone</div>
        `,
        `            
        <div class="cont-name">
        <div class="qoute-cont">
        <q> an film is not simply a trademark, a design, a slogan or an easily remembered pic. its a studiously crafted personality
        profile of an individual, institution, corporation, product or service.</q>
    </div></div>
    <div class="qoute-made">any</div>
`
    ]

    document.querySelector(".qoute .container").innerHTML = randomArr[index];

    index++;

    if (index == 2) {
        index = 0;
    }

})