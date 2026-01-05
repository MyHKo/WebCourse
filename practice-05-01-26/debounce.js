function fifteen(){
	console.log("15 detected");
}

function debouncer(func){
	ready = true;
	return () => {
		if(ready){
			func();
			ready = false;
			setTimeout(() => {}, 500)
		}
	}
}

let debouncedFifteen = debouncer(fifteen)
