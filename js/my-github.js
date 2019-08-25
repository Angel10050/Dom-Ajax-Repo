// Write code here to communicate with Github

fetch('https://api.github.com/users/angel10050/repos')
    .then(repos => repos.json())
    .then(data => data.forEach(x => {
        let myUl = document.querySelector('#repos-list')
        let myReposCount = document.querySelector('#repos-count')
        let createLi = document.createElement('li')
        let myATag = document.createElement('a')
        myUl.appendChild(createLi)
        myATag.className = 'aTag'
        createLi.appendChild(myATag)
        createLi.className = 'eachRepository'
        myATag.innerHTML = x.name
        myATag.href = x.html_url
        myReposCount.innerHTML = data.length
    }))