let box = document.getElementById("container2")
let fetchdatabtn = document.getElementById("fetchdata");



fetchdatabtn.addEventListener("click", fetchuserdata);

    
function fetchuserdata(){
    let data = fetch('https://reqres.in/api/users')
    data.then(function(res){
        return res.json()
    })
    .then(function(res){
        console.log(res.data)
        showdata(res.data)
    })
}



function showdata(array){
    box.innerHTML = null
    array.forEach(function(ele){

        let div = document.createElement("div");
        div.className = "parent"
        
        let img = document.createElement("img");
        img.src = ele.avatar

        let h4 = document.createElement("h4")
        h4.textContent = `${ele.first_name} ${ele.last_name}`

        let p = document.createElement("p")
        p.textContent = ele.email

        div.append(img,h4,p)
        box.append(div)

    
    })
}






