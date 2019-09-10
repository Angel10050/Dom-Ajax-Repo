// Write code here to communicate with Github
let myUl = document.querySelector("#repos-list");
let userInput = document.querySelector("#usersInput");
userInput.value;

function addingName() {
  let value = userInput.value;
  userName = value;
  return nombreDeUsuario;
}

let nombreDeUsuario;
fetch(`https://api.github.com/users/${userName}/repos`)
  .then(repos => repos.json())
  .then(element => {
    element.forEach(repos => {
      let myReposCount = document.querySelector("#repos-count");

      let createLi = document.createElement("li");
      let myATag = document.createElement("a");

      myUl.appendChild(createLi);
      createLi.appendChild(myATag);

      myATag.className = "aTag";
      createLi.className = "eachRepository";

      myATag.id = repos.owner.login;
      myATag.innerHTML = repos.name;
      myATag.href = repos.html_url;
      myReposCount.innerHTML = element.length;
    });
  });
