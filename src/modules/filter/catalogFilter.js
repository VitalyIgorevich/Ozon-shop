import getData from "../getData"
import renderGoods from "../renderGoods"
import {categoryFilter} from "../filters"



const catalogFilter = () => {
    const catlogBtn = document.querySelector('.catalog-button')
    const catalogModal = document.querySelector('.catalog')
    const catalogModalItems = document.querySelectorAll('.catalog li')

    let isOpen = false


    catlogBtn.addEventListener('click', (event) => {
        isOpen = !isOpen

        if (isOpen) {
            catalogModal.style.display = "block"
        } else {
            catalogModal.style.display = "none"
        }
    })

    catalogModalItems.forEach((item) => {
        item.addEventListener('click', (event) => {
            const text = item.textContent

            getData().then((data) => {
                renderGoods(categoryFilter(data, text))
            })
        })
    })


}


export default catalogFilter;
