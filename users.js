const user = document.querySelector('#users')
user.style.height="100vh"
const API_LINK = 'https://jsonplaceholder.typicode.com/users'
async function getData(api) {
	const response = await fetch(api)
	response
		.json()
		.then(res => createCard(res))
		.catch(err => console.log(err))
}
getData(API_LINK)

function createCard(data) {
	data.forEach(users => {
		let box = document.createElement('div')
		let span = document.createElement('span')
		box.className = 'card'
		box.style.textAlign = 'left'
		box.innerHTML = `
		<p class="title" style="margin: 0; font-size:20px;" >${`Name: ` + users.name}</p>
		<p class="text" ><span class="span">User Name:</span>${ users.username}</p>
		<p class="text"><span class="span">Email:</span> ${users.email}</p>
		<p class="text"> <span class="span">  Adress:</span> ${
			users.address.city + ', ' + users.address.street
		}</p>
		`

		// console.log(span);

		user.appendChild(box)
	})
}
