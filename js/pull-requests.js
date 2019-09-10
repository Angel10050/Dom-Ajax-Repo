let ulspace = document.querySelector("#pull-requests-list");
let inputSpace = document.querySelector(".inputName");
inputSpace.value;

fetch("https://api.github.com/repos/codeyourfuture/js-exercises/pulls")
  .then(val => val.json())
  .then(request => {
    request.forEach(element => {
      let tagli = document.createElement("li");
      let tagA = document.createElement("a");

      tagli.className = "litag";
      tagA.className = "aTag";

      ulspace.appendChild(tagli);
      tagli.appendChild(tagA);

      tagA.id = element.user.login;
      tagA.innerHTML = element.title;
      tagA.href = element.html_url;
    });
  });

let iteracion = inputSpace.addEventListener("keyup", function(event) {
  let value = inputSpace.value;
  console.log(value);
  let toArr = [...document.querySelectorAll(".aTag")];

  for (var i of toArr) {
    if (value === i.id) {
      ulspace.innerHTML = "";
      return ulspace.appendChild(i);
    }
  }
});

/* 
inputSpace.addEventListener("keyup", function(event) {

	let value = inputSpace.value
	console.log(value);
	let toArr = [...document.querySelectorAll('.aTag')];

	for(var i of toArr){

	}

	 toArr.map(function (element){
		
		 if(value === element.id ){
			ulspace.innerHTML =''
			return ulspace.appendChild(element)
			}
	})
})	 */

/* let ulForLiPullRequest = document.querySelector('#pull-requests-list')
fetch('https://api.github.com/repos/codeyourfuture/js-exercises/pulls')
	.then((val) => val.json())
	.then((data) => {
		elemetsFromApi = data;
		printingPullRqs(elemetsFromApi)
	})

function printingPullRqs(elemetsFromApi) {
	elemetsFromApi.forEach(element => {

		let acreated = document.createElement('a')
		let liCreated = document.createElement('li');

		liCreated.className = 'licontenedor'
		acreated.className = 'aTag'

		ulForLiPullRequest.appendChild(liCreated)

		liCreated.appendChild(acreated)

		acreated.innerHTML = element.title

		acreated.id = element.user.login

	});

}


let theInput = document.querySelector('.inputName')

theInput.addEventListener('keyup', filterPullRq)

function filterPullRq() {

	const arrOfNodes = [...document.querySelectorAll('.aTag')]
	console.log(arrOfNodes);
	const term = theInput.value


	let filtrando = arrOfNodes.filter((item) => {
		const anchor = document.querySelector('.aTag')
		item = anchor
		item.includes(term)
		console.log(anchor);
	})
	ulForLiPullRequest.innerHTML = ''



	filtrando.forEach(item => ulForLiPullRequest.appendChild(item))
} */
