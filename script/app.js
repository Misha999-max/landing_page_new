const clickHidden = document.querySelector('.header__bottom-nav_burger'),
	hiddenMenu = document.querySelector('.hidden__menu-active'),
	closeBtn = document.querySelector('.hidden__menu-active_close')

clickHidden.addEventListener('click', () => {
	hiddenMenu.classList.add('hidden__menu-active-hidden')
})

closeBtn.addEventListener('click', () => {
	hiddenMenu.classList.remove('hidden__menu-active-hidden')
})
