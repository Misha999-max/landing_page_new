const clickHidden = document.querySelector('.header__bottom-nav_burger'),
	hiddenMenu = document.querySelector('.hidden__menu-active'),
	closeBtn = document.querySelector('.hidden__menu-active_close'),
	btnPay = document.querySelector('.btn_pay'),
	btnPayClose = document.querySelector('.hidden__buy-item-close'),
	hiddenBuy = document.querySelector('.hidden__buy')

clickHidden.addEventListener('click', () => {
	hiddenMenu.classList.add('hidden__menu-active-hidden')
})

closeBtn.addEventListener('click', () => {
	hiddenMenu.classList.remove('hidden__menu-active-hidden')
})

btnPay.addEventListener('click', () => {
	hiddenBuy.classList.add('hidden__buy-active')
})

btnPayClose.addEventListener('click', () => {
	console.log('hello')
	hiddenBuy.classList.remove('hidden__buy-active')
})

// ----------------- Slider -------------------------

$('.single-item').slick({
	dots: true,
	infinite: true,
	speed: 500,
	slidesToShow: 1,
	slidesToScroll: 1,
})

//   coutDown -----------

document.addEventListener('DOMContentLoaded', function () {
	const deadline = new Date(2024, 01, 12)
	// id таймера
	let timerId = null
	// склонение числительных
	function declensionNum(num, words) {
		return words[
			num % 100 > 4 && num % 100 < 20
				? 2
				: [2, 0, 1, 1, 1, 2][num % 10 < 5 ? num % 10 : 5]
		]
	}
	// вычисляем разницу дат и устанавливаем оставшееся времени в качестве содержимого элементов
	function countdownTimer() {
		const diff = deadline - new Date()
		if (diff <= 0) {
			clearInterval(timerId)
		}

		const hours = diff > 0 ? Math.floor(diff / 1000 / 60 / 60) % 24 : 0
		const minutes = diff > 0 ? Math.floor(diff / 1000 / 60) % 60 : 0
		const seconds = diff > 0 ? Math.floor(diff / 1000) % 60 : 0

		$hours.textContent = hours < 10 ? '0' + hours : hours
		$minutes.textContent = minutes < 10 ? '0' + minutes : minutes
		$seconds.textContent = seconds < 10 ? '0' + seconds : seconds

		$hours.dataset.title = declensionNum(hours, ['час', 'часа', 'часов'])
		$minutes.dataset.title = declensionNum(minutes, [
			'минута',
			'минуты',
			'минут',
		])
		$seconds.dataset.title = declensionNum(seconds, [
			'секунда',
			'секунды',
			'секунд',
		])
	}
	// получаем элементы, содержащие компоненты даты
	const $hours = document.querySelector('.hours')
	const $minutes = document.querySelector('.minutes')
	const $seconds = document.querySelector('.secunds')
	// вызываем функцию countdownTimer
	countdownTimer()
	// вызываем функцию countdownTimer каждую секунду
	timerId = setInterval(countdownTimer, 1000)
})
