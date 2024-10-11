const album = document.querySelector('#albums')

const API_LINK = 'https://jsonplaceholder.typicode.com/albums'
async function getData(api) {
	const response = await fetch(api)
	response
		.json()
		.then(res => createCard(res))
		.catch(err => console.log(err))
}
getData(API_LINK)

console.log(album)
function createCard(data) {
	data.forEach(albums => {
		let box = document.createElement('div')
		// div.classList.add("card")  buyerdanham card qoshsa boladi
		box.className = 'card'
		box.innerHTML = `
		<h3 class="title">${albums.id}</h3>
		<p class="text">${albums.title}</p>`

		album.appendChild(box)
	})
}
