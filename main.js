const main = document.querySelector('#home')
const albums = document.querySelector('#albums')
const users = document.querySelector('#home')

const API_LINK = 'https://jsonplaceholder.typicode.com/posts'
async function getData(api) {
	const response = await fetch(api)
	response
		.json()
		.then(res => createCard(res))
		.catch(err => console.log(err))
}
getData(API_LINK)

function createCard(data) {
	data.forEach(post => {
		let box = document.createElement('div')
		// div.classList.add("card")  buyerdanham card qoshsa boladi
		box.className = 'card'
		box.innerHTML = `
		<h3 class="title">${post.title}</h3>
		<p class="text">${post.body}</p>`
		
		main.appendChild(box)
	})
}

