function createCollection(event){
    event.preventDefault()
    const top_id = top_images[top_currentIndex].id
    const bottom_id = bottom_images[bottom_currentIndex].id
    const shoe_id = shoe_images[shoe_currentIndex].id

    const url_collection = `/api/collection/create?top_id=${top_id}&btm_id=${bottom_id}&shoe_id=${shoe_id}&weather=${weather_type}`
    console.log(url_collection)

    const form = event.target

    const data = Object.fromEntries(new FormData(form))



    fetch(url_collection,
        {
            method: "POST",
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(data)
          }).then(res => res.json()).then(data=>console.log(data))
}


function readCollection(event){


    const dropDown = document.querySelector('#drop-down')
    

     user_collection.forEach(function (type) {
      const user_collection_list = document.createElement('option')
      user_collection_list.value = type['id']
      user_collection_list.textContent = type['name']
      dropDown.appendChild(user_collection_list)
    })

}