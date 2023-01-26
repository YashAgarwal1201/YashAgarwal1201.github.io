
document.addEventListener("DOMContentLoaded", () => {
	console.log('i am ready')
	//mainNav()
	fetch("data.json")
	.then(res => res.json())
	.then(data => console.log(data))
})