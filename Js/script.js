window.onscroll = () => {
    if (window.scrollY > 80) {
        document.querySelector(".header").classList.add('active');
    } else {
        document.querySelector(".header").classList.remove('active');
    }
}

window.addEventListener("resize", function() {
    if (window.innerWidth < 768) {
        document.querySelector(".img-box").classList.remove('active');
    };
});

let ImgBox = document.querySelector(".main-img");
let imgWrap = document.querySelector(".img-wrap");
let topImg = document.getElementById("topImg");
let line = document.getElementById("line");


topImg.style.width = ImgBox.offsetWidth + "px";
let leftSpace = ImgBox.offsetLeft;
ImgBox.onmousemove = (e) => {
    let boxwidth = (e.pageX - leftSpace) + "px";
    imgWrap.style.width = boxwidth;
    line.style.left = boxwidth;
}


/*Menu open*/

let menu = document.getElementsByClassName('menu');
let nav = document.getElementsByClassName('left_nav');
menu[0].onclick = () => {
    nav[0].classList.add('active');

}


/*Menu close*/

let close = document.getElementsByClassName('close');
let cross = document.getElementById('cross');

close[0].onclick = () => {
    nav[0].classList.remove('active');

}

// setTimeout(() => {
//     window.location.reload(1);
// }, 10000);