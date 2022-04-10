import renderCart from "./renderCart"
import postData from "./postData"

const cart = () => {
    const openCart = document.getElementById('cart')
    const modalCart = document.querySelector('.cart')
    const closeCart = document.querySelector('.cart-close')

    const goodsWrapper = document.querySelector('.goods')
    const cartWrapper = document.querySelector('.cart-wrapper')

    const cartTotal = document.querySelector('.cart-total > span')
    const cartSendBtn = document.querySelector('.cart-confirm')

    const counterBasket = document.querySelector('.counter')

    openCart.addEventListener('click', (event) => {
        // Достаем обьект с нужным id  и записываем новый массив
        const cart = localStorage.getItem('cart') ? JSON.parse(localStorage.getItem('cart')) : []

        modalCart.style.display= 'flex'

        renderCart(cart)

        //Подсчет суммы товаров
        cartTotal.textContent = cart.reduce((sum, goodItem) => {
            return sum + goodItem.price
        }, 0)
    })

    closeCart.addEventListener('click', (event) => {
        modalCart.style.display= 'none'
    })

    // Добавляем товар в корзину
    goodsWrapper.addEventListener('click', (event) => {
        if(event.target.classList.contains('btn-primary')){
            const card = event.target.closest('.card')
            
            const key = card.dataset.key

            // Получаем весь массив из localStorage
            const goods = JSON.parse(localStorage.getItem('goods'))
           

            // Достаем обьект с нужным id  и записываем новый массив
            const cart = localStorage.getItem('cart') ? JSON.parse(localStorage.getItem('cart')) : []
            
            const goodItem = goods.find((item) => {
                return item.id === +key
            })
            
            cart.push(goodItem)

            localStorage.setItem('cart', JSON.stringify(cart))
        
    }

        printBasket()
    })

    const printBasket = () => {
        const cart = localStorage.getItem('cart') ? JSON.parse(localStorage.getItem('cart')) : []
        counterBasket.textContent = cart.length
    }

    // Удаляем товар из карзины
    cartWrapper.addEventListener('click', (event) => {
        if(event.target.classList.contains('btn-primary')) {
            const cart = localStorage.getItem('cart') ? JSON.parse(localStorage.getItem('cart')) : []
            const card = event.target.closest('.card')
            const key = card.dataset.key

            const index = cart.findIndex((item) => {
                return item.id === +key

            })
            cart.splice(index, 1)
            localStorage.setItem('cart', JSON.stringify(cart))

            renderCart(cart)
             //Подсчет суммы товаров
        cartTotal.textContent = cart.reduce((sum, goodItem) => {
            return sum + goodItem.price
        }, 0)
        }

        printBasket()
    })

      // Кнопка оформления заказа
      cartSendBtn.addEventListener('click', () => {
        const cart = localStorage.getItem('cart') ? JSON.parse(localStorage.getItem('cart')) : []
        
        postData(cart).then(() => {
            localStorage.removeItem('cart')

            renderCart([])

            cartTotal.textContent = 0

            printBasket()

            modalCart.style.display = 'none'
        })
    })

} 
export default cart