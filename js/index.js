// slå dig løs her... 

//eksempel på at udskrive alle overskrifter i services i konsollen:
// services.forEach(service => console.log(service.headline))

console.log(hero.headline);

function highLightText(sourceTxt, highLightTxt) {
    return sourceTxt.replace(highLightTxt, `<span class=highlight__text>${highLightTxt}</span>`)
}

// ! Initialise hero html

let heroSection = document.querySelector(".hero");

let heroImgDiv = document.createElement("div");
heroImgDiv.classList.add("hero__img");

let heroHeadlineDiv = document.createElement("div");
heroHeadlineDiv.classList.add("hero__headline");

heroSection.append(heroImgDiv, heroHeadlineDiv)

heroImgDiv.innerHTML = `
<img src="${hero.image}" alt="">
`
heroHeadlineDiv.innerHTML = `
    <h1 class="hero__title">${highLightText(hero.headline, "save your time")}</h1>
    <h4 class="hero__paragraph">${hero.copy}</h4>
    <a href="" class="hero__button"><img src="${hero.icon}" alt=""> Explore</a>

`
// ! SERVICES

let servicesSection = document.querySelector(".services");


services.forEach(service => {
    let servicesCard = document.createElement("div");
    servicesCard.classList.add("services__card");

    servicesCard.innerHTML = `
    <div class="services__img">
        <img src="${service.illustration}" alt="">
    </div>
    <h3 class="services__title">${service.headline}</h3>
    <p class="services__paragraph">${service.text}</p>
    <a href="" class="services__link">${highLightText(service.linktext, service.linktext)}</a>
    `
    servicesSection.append(servicesCard)
});

// ! FACILITIES

let facilitiesSection = document.querySelector(".facilities")

facilities.forEach(facility => {
    let facilitiesCard = document.createElement("div");
    facilitiesCard.classList.add("facilities__card");

    facilitiesCard.innerHTML = `
    
    `
})








