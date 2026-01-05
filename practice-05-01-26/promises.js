let a = Promise.all([
	new Promise((resolve, reject) => {
		resolve({id:1, name: 'Jogn'})
	}),
	new Promise((resolve, reject) => {
		resolve({newName: 'John'})
	})
]).then((result) => {
	result[0].name = result[1].newName
	user = {... result[0]}
	console.log(user);
})

let user = {}


console.log(user)
