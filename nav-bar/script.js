const ham = document.querySelector('.header .ham ');
const nav = document.querySelector('.header .nav-bar');
ham.addEventListener('click', () => {
	nav.classList.toggle('nav-toggle');
	ham.classList.toggle('close');
});
console.log(ham);
console.log(nav);