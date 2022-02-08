export default class SectionMenu {
    constructor(menuId) {
        this.menu = document.getElementById(menuId)
        this.buttons = Array.from(this.menu.children)
        this.sections = document.querySelectorAll(`[data-linked-menu=${menuId}]`)
        this.activeDivIndex = 0
        this.events()
    }

    events() {
        this.buttons.forEach(el => {
            el.addEventListener('click', e => this.onClick(e))
        })
        console.log(this.sections[0])
    }

    onClick = async (e) => {
        const showDiv = e.target.dataset.showDiv

        e.preventDefault()

        if (showDiv !== this.activeDivIndex) {

            this.handleHideItem(this.activeDivIndex)
            window.setTimeout(() => {
                this.handleShowItem(showDiv)
            }, 310)


            this.activeDivIndex = showDiv
        }

        // this.handleShowItem(e)
    }

    handleShowItem = async (divIndex) => {
        const button = this.buttons[divIndex]
        const section = this.sections[divIndex]

        button.classList.add('active')
        section.classList.add('d-lg-flex')

        window.setTimeout(() => {
            return section.classList.add('show-div--is-active')
        }, 300)
    }

    handleHideItem = async (divIndex) => {
        const button = this.buttons[divIndex]
        const section = this.sections[divIndex]

        button.classList.remove('active')
        section.classList.remove('show-div--is-active')
        window.setTimeout(() => {
            return section.classList.remove('d-lg-flex')
        }, 300)
    }
}