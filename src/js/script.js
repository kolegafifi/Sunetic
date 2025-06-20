const burger = document.querySelector('.nav__burger')
const dropoutNavClose = document.querySelector('.dropout-nav__close')
const dropoutNav = document.querySelector('.dropout-nav')
const dropoutNavItems = document.querySelectorAll('.dropout-nav__items__item')
const goUpBtn = document.querySelector('.go-up')
// !!!!!!!!
// wycena instalacji
const pradZl = document.querySelector('#zaprad')
const magtak = document.querySelector('#magtak')
const magnie = document.querySelector('#magnie')
const wycen = document.querySelector('.calc-form__actual-calc__send')
// !!!!!
const zapotrzebowanie = document.querySelector('.zapotrzebowanie')
const magazynCena = document.querySelector('.magazyn-cena')
const wynikInstalacji = document.querySelector('.wynik-instalacji')
let kwh
let kosztInstalacji

const handleWycena = () => {
	const piec = document.querySelector('input[name="piec"]:checked')
	const magazyn = document.querySelector('input[name="magazyn"]:checked')
	kwh = 0
	kosztInstalacji = 0
	kwh = pradZl.value / 1.12
	kwh *= 12
	if (!magazyn) {
		zapotrzebowanie.textContent = 'Nie wybrano pieca'
	} else if (magazyn.value === 'tak') {
		if (kwh <= 2000) {
			magazynCena.textContent = '18999zł'
			kosztInstalacji += 18999
		} else if (kwh >= 2000 && kwh <= 7000) {
			magazynCena.textContent = '24999zł'
			kosztInstalacji += 24999
		} else if (kwh > 7000 && kwh <= 12000) {
			magazynCena.textContent = '27999zł'
			kosztInstalacji += 27999
		} else {
			magazynCena.textContent = 'Zamówienie Niestandardowe, Skontaktuj się z nami'
			kosztInstalacji += 0
		}
	} else {
		magazynCena.textContent = 'Nie chcesz magazynu'
		kosztInstalacji += 0
	}
	if (pradZl.value == 0) {
		kosztInstalacji.textContent = 'Niepełne informacje'
	} else if (pradZl.value != 0) {
		if (kwh <= 2000) {
			kosztInstalacji += 8000
		} else if (kwh >= 2000 && kwh <= 7000) {
			kosztInstalacji += 21000
		} else if (kwh > 7000 && kwh <= 12000) {
			kosztInstalacji += 37000
		} else {
			magazynCena.textContent = 'Zamówienie Niestandardowe, Skontaktuj się z nami'
		}
	}
	zapotrzebowanie.textContent = `${kwh.toFixed(1)} kWh`
	wynikInstalacji.textContent = `${kosztInstalacji} zł`
}
wycen.addEventListener('click', a => {
	a.preventDefault()
	handleWycena()
})

//  !!!!!!!!!!!!!!!!!!!!!!!!
const handleDropoutNav = () => {
	if (!dropoutNav.classList.contains('show-dropout-nav')) {
		dropoutNav.classList.add('show-dropout-nav')
	} else {
		dropoutNav.classList.remove('show-dropout-nav')
	}
}
dropoutNavItems.forEach(item => {
	item.addEventListener('click', handleDropoutNav)
})
window.addEventListener('scroll', () => {
	if (window.scrollY > 600) {
		goUpBtn.classList.add('show-go-up')
	} else {
		goUpBtn.classList.remove('show-go-up')
	}
})

goUpBtn.addEventListener('click', () => {
	window.scrollTo({ top: 0 })
})
burger.addEventListener('click', handleDropoutNav)
dropoutNavClose.addEventListener('click', handleDropoutNav)
