const elList = document.querySelector(".list");
const elSelect = document.querySelector(".js-select");

const fored = pokemons.forEach((el) => {

    const elItem = document.createElement("li");
    const elSppan = document.createElement("span")
    const elSpan = document.createElement("span");
    const elText = document.createElement("p");
    const  elTitle = document.createElement("h1");
    const elImg = document.createElement("img");
    const elOption = document.createElement("option")

    elTitle.textContent = el.name;
    elSpan.textContent = el.spawn_time;
    elText.textContent = el.type;
    elSppan.textContent = el.id;
    elOption.textContent = el.type[0];
  

    elList.appendChild(elItem);
    elItem.appendChild(elSppan);
    elItem.appendChild(elTitle);
    elItem.appendChild(elImg);
     elItem.appendChild(elSpan);
    elItem.appendChild(elText);
    elSelect.appendChild(elOption)

    elImg.src = el.img;
    elImg.alt = el.name;

});



elSelect.addEventListener("change", function(){
    const selectVal = elSelect.value;
    const foreached = pokemons.forEach((el, i) => {
//  console.log(el.type[0]);
   const elItem = document.createElement("li");
    const elSppan = document.createElement("span")
    const elSpan = document.createElement("span");
    const elText = document.createElement("p");
    const  elTitle = document.createElement("h1");
    const elImg = document.createElement("img");
    const elOption = document.createElement("option")

    elTitle.textContent = el.name;
    elSpan.textContent = el.spawn_time;
    elText.textContent = el.type;
    elSppan.textContent = el.id;
    elOption.textContent = el.type[0];

    elList.appendChild(elItem);
    elItem.appendChild(elSppan);
    elItem.appendChild(elTitle);
    elItem.appendChild(elImg);
     elItem.appendChild(elSpan);
    elItem.appendChild(elText);
    elSelect.appendChild(elOption)

    elImg.src = el.img;
    elImg.alt = el.name;    
    });
   
     const pokeForEchaed = pokemons.forEach(el => {
         if (el.type.includes(selectVal)){
        console.log(el);
    }
      const foreached = pokemons.forEach((el, i) => {
   const elItem = document.createElement("li");
    const elSppan = document.createElement("span")
    const elSpan = document.createElement("span");
    const elText = document.createElement("p");
    const  elTitle = document.createElement("h1");
    const elImg = document.createElement("img");
    const elOption = document.createElement("option")

    elTitle.textContent = el.name;
    elSpan.textContent = el.spawn_time;
    elText.textContent = el.type;
    elSppan.textContent = el.id;
    elOption.textContent = el.type[0];

    elList.appendChild(elItem);
    elItem.appendChild(elSppan);
    elItem.appendChild(elTitle);
    elItem.appendChild(elImg);
     elItem.appendChild(elSpan);
    elItem.appendChild(elText);
    elSelect.appendChild(elOption)

    elImg.src = el.img;
    elImg.alt = el.name;    
    });
   
    })
    
})

