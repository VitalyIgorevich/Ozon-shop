import getData from "../getData"
import renderGoods from "../renderGoods"
import { chackboxFilter} from "../filters"


const chackboxAction = () => {
    const checkboxInput = document.getElementById('discount-checkbox')
    const checkboxSpan = document.querySelector('.filter-check_checkmark')

    checkboxInput.addEventListener('change', () => {
        if(checkboxInput.checked) {
            checkboxSpan.classList.add('checked')
        } else {
            checkboxSpan.classList.remove('checked')
        }
       
        getData().then((data) => {
            renderGoods(chackboxFilter(data, checkboxInput.checked))
        })

    })
}
export default chackboxAction;