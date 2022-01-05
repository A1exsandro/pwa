const params = {
    headers: {
        Accept: 'application/json',
        'Content-Type': 'applitation/json'
    }
}

const URL = "https://stormy-brook-79548.herokuapp.com/api"

function getNews(subject) {
    return fetch(`${URL}/${subject}`, params)
    .then((response) => response.json())
    .catch((err) =>{
        console.error('Ocoreu em err', err)
    })
}

function getNewsById(subject, id) {
    return fetch(`${URL}/${subject}/${id}`, params)
    .then((response) => response.json())
    .catch((err) =>{
        console.error('ocoreu em err', err)
    })
}


export default {
    getNews,
    getNewsById
}
