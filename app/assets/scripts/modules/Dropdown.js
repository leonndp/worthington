export default class Dropdown {
    constructor() {
        this.dropdown = document.querySelector('.dropdown')
        this.menuContent = document.querySelector('.dropdown__menu')
        this.events()
    }

    events() {
        this.dropdown.addEventListener('click', (e) => {
            e.preventDefault()
            this.toggleTheMenu()
        })
    }

    toggleTheMenu() {
        this.menuContent.classList.toggle('dropdown__menu--is-visible')
    }
}