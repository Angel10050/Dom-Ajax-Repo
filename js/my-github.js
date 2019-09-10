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

        let createLi = document.createElement("li");
        let myATag = document.createElement("a");

        myUl.appendChild(createLi);
        createLi.appendChild(myATag);

        myATag.className = "aTag";
        createLi.className = "eachRepository";

        myATag.id = repose.owner.login;
        myATag.innerHTML = repose.name;
        myATag.href = repose.html_url;
        myReposCount.innerHTML = element.length;
      });
    });
}
button.addEventListener("click", pass);
