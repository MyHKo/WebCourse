setTimeout = ((original) => (func, delay) => original(func, delay + 2000))(setTimeout);
setTimeout(() => {console.log("Printed")}, 3000);
