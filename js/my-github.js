// Write code here to communicate with Github
let myUl = document.querySelector("#repos-list");
let userInput = document.querySelector("#usersInput");
let button = document.querySelector("#button");

function pass() {
  let userName = userInput.value;
  return fetch(`https://api.github.com/users/${userName}/repos`)
    .then(reposi => reposi.json())
    .then(element => {
      element.forEach(repose => {
        let myReposCount = document.querySelector("#repos-count");
        myUl.innerHTML += `<li class="repo"> 
      <a target="b_blank" href= "${repose.html_url}"> ${repose.name} </a>
      </li>`;
        myReposCount.innerHTML = element.length;
      });
    }, (myUl.innerHTML = ""));
}
button.addEventListener("click", pass);
