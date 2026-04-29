





const elList = document.querySelector(".list");

const fored = pokemons.forEach((el) => {
    const elItem = document.createElement("li");
    const elSppan = document.createElement("span")
    const elSpan = document.createElement("span");
    const elText = document.createElement("p");
    const  elTitle = document.createElement("h1");
    const elImg = document.createElement("img");
    
    elTitle.textContent = el.name;
    elSpan.textContent = el.spawn_time;
    elText.textContent = el.type;
    elSppan.textContent = el.id


    

    elList.appendChild(elItem)
    elItem.appendChild(elSppan)
    elItem.appendChild(elTitle)
    elItem.appendChild(elImg);
        elItem.appendChild(elSpan)
    elItem.appendChild(elText)


            elImg.src = el.img;
            elImg.alt = el.name;

            

});

