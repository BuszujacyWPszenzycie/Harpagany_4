const arrowIcon = document.querySelector('.header__icon')
const modal = document.querySelector('.modal')

const showModal = () => {
	modal.classList.toggle('show-modal')
	arrowIcon.classList.toggle('show-modal-icon')
}

arrowIcon.addEventListener('click', showModal)
