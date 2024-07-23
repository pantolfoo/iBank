const menuIcon = document.querySelector('.menu-icon');
const navMobile = document.querySelector('.nav-mobile');

menuIcon.addEventListener('click', () => {
    navMobile.style.display = navMobile.style.display === 'block' ? 'none' : 'block'; 
});
