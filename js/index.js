// slå dig løs her... 

//eksempel på at udskrive alle overskrifter i services i konsollen:
// services.forEach(service => console.log(service.headline))

console.log(hero.headline);

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
    <h1 class="hero__title">${hero.headline}</h1>
    <p class="hero__paragraph">${hero.copy}</p>
    <a href="" class="hero__button"><img src="${hero.icon}" alt=""> Explore</a>

`
