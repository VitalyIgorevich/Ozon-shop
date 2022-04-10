const getData = () => {
    return fetch('http://localhost:3000/goods')
    .then((response) => {
        if(response.ok) {
            return response.json()
        } else {
            throw new Error(`Данные не были получены, ошибка ${data.status} ${data.statusText}`)
        }
    })
    
}

export default getData