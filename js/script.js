// toggle class active
const navbarnav = document.querySelector
('.navbar-nav');
// ketika humberger menu diklik
document.querySelector('#humberger').
onclick = () => {
    navbarnav.classList.toggle('active');
};

// klik diluar sidebar menghilangkan menu
const humberger = document.querySelector
('#humberger');

document.addEventListener('click', function(e){
    if(!humberger.contains(e.target)&& !navbarnav.contains(e.target)){
        navbarnav.classList.remove('active')
    }
})