fetch("images.json")
.then(function(response){
    return response.json();
})
.then(function(images){
    let placeholder=document.querySelector("#card");
    let out="";
    for(let img of images){
        out+=`
        <div class="card" style="width: 18rem;">
        <img src=${img.image} class="card-img-top" alt="...">
        <div class="card-body">
          <h3>${img.title}</h3>
          <p>${img.profe}</p>
        </div>
      </div>
        `;
    }
    placeholder.innerHTML=out;
})