import getData from "../getData"
import renderGoods from "../renderGoods"
import {FilterPrice} from "../filters"



const priceFilter = () => {
    const minInput = document.getElementById('min')
    const maxInput = document.getElementById('max')
    const checkboxInput = document.getElementById('discount-checkbox')
    const checkboxSpan = document.querySelector('.filter-check_checkmark')

    minInput.addEventListener('input', () => {
        getData().then((data) => {
            renderGoods(FilterPrice(data, minInput.value, maxInput.value ))
        })
    })

    maxInput.addEventListener('input', () => {
        getData().then((data) => {
            renderGoods(FilterPrice(data, minInput.value, maxInput.value ))
        })
    })

   
}

export default priceFilter