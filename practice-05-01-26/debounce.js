function fifteen(){
	console.log("15 detected");
}

let a = 0
for (let i = 0; i < 1000000; i ++){
	a = Math.floor(Math.random() * 20)
	if(a === 15)
		fifteen()
}
