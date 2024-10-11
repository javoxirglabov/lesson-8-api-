const user = document.querySelector('#users')

const API_LINK = 'https://jsonplaceholder.typicode.com/users'
async function getData(api) {
	const response = await fetch(api)
	response
		.json()
		.then(res => createCard(res))
		.catch(err => console.log(err))
}
getData(API_LINK)

console.log(user)
function createCard(data) {
	data.forEach(users => {
		let box = document.createElement('div')
		// div.classList.add("card")  buyerdanham card qoshsa boladi
		box.className = 'card'
		box.innerHTML = `
		<h3 class="title">${users.name}</h3>
		<p class="text">${users.email}</p>`

		user.appendChild(box)
	})
}
