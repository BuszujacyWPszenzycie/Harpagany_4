const arrowIcon = document.querySelector('.header__icon')
const modal = document.querySelector('.modal')
const allNavItems = document.querySelectorAll('.nav__item')

let images = ['team_1', 'team_2', 'team_3', 'team_4', 'team_5', 'team_6']

console.log(images)

const showModal = () => {
	modal.classList.toggle('show-modal')
	arrowIcon.classList.toggle('show-modal-icon')
}

allNavItems.forEach(item =>
	item.addEventListener('click', () => {
		modal.classList.remove('show-modal')
		arrowIcon.classList.remove('show-modal-icon')
	})
)

let indexChange = 0

const aboutImg = document.querySelector('.about__img')

const changePicture = () => {
	aboutImg.src = `./img/${images[indexChange]}.jpg`
	indexChange > 4 ? (indexChange = 0) : indexChange++
	console.log(indexChange)
}

arrowIcon.addEventListener('click', showModal)

changePicture()

window.onload = function () {
	setInterval(changePicture, 4000)
}
