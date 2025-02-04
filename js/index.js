// slå dig løs her... 

//eksempel på at udskrive alle overskrifter i services i konsollen:
// services.forEach(service => console.log(service.headline))

function highLightText(sourceTxt, highLightTxt) {
    return sourceTxt.replace(highLightTxt, `<span class=highlight__text>${highLightTxt}</span>`)
}

// ! HERO

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
facilitiesSection.innerHTML = `
    <h2 class="facilities__title">${facilities.headline}</h2>
    `

facilities.options.forEach(facilityOption => {
    let facilitiesCard = document.createElement("div");
    facilitiesCard.classList.add("facilities__card");

    facilitiesCard.innerHTML = `
    
        <div class="facilities__img">
            <img src="${facilityOption.icon}" alt="">
        </div>
        <h3 class="facilities__title-card">${facilityOption.headline}</h3>
        <p class="facilitiies__paragraph">${facilityOption.text}</p>
        <a href="" class="facilities__link highlight__text">Show me more</a>
    `
    facilitiesSection.append(facilitiesCard)
})



// ! SITES

let sitesSection = document.querySelector(".sites")

sitesSection.innerHTML = `
<div class="sites__head">
    <h2 class="sites__title">${sites.headline}</h2>
    <p class="sites__paragraph">${sites.text}</p>
    <a href="" class="sites__button"><img src="${sites.btnicon}" alt=""> Start</a>
</div> 
`;

let sitesCards = document.createElement("div")
sitesCards.classList.add("sites__cards")
sitesSection.append(sitesCards)

sites.places.forEach(sitePlaces => {
    let sitesCard = document.createElement("div");
    sitesCard.classList.add("sites__card");

    sitesCard.innerHTML = `
        <div class="sites__img"><img src="${sitePlaces.img}" alt=""></div>
        <h3 class="sites__name">${sitePlaces.name}</h3>
        <p class="sites__city">${sitePlaces.city}</p>
        <a href="" class="sites__link highlight__text">View the Site</a>
    `

    sitesCards.append(sitesCard);
});



// ! ADVANTAGES

let advantagesSection = document.querySelector(".advantages");

advantagesSection.innerHTML = `
    <h2 class="advantages__title">Our advantages</h2>
`

advantages.forEach(advantage => {
    let advangtageCard = document.createElement("div");
    advangtageCard.classList.add("advantages__card");

    advangtageCard.innerHTML = `
        <div class="advantages__icon">
            <img src="${advantage.icon}" alt="">
        </div>
        <h3 class="advantages__headline">${advantage.headline}</h3>
        <p class="advantages__paragraph">${advantage.text}</p>
    `

    advantagesSection.append(advangtageCard)
});



// ! FOOTER

let footerSection = document.querySelector(".footer")

footerSection.innerHTML = `
    <h3 class="footer__companyname">${footer.companyText.companyName}</h3>
    <h2 class="footer__companyslogan">${footer.companyText.companySlogan}</h2>
`


// discover list

let discoverSection = document.createElement("section")
discoverSection.classList.add("discover");

discoverSection.innerHTML = `<h4 class="list__headline">${footer.discover.headline}</h4>`

let discoverList = document.createElement("ul");
discoverList.classList.add("list");

footer.discover.links.forEach(link => {
    let listItem = document.createElement("li");
    listItem.classList.add("listitem");
    listItem.innerHTML = `<a href="${link.linkURL}">${link.linkName}</a>`
    
    discoverList.append(listItem)
});

discoverSection.append(discoverList);


// manager list

let managerSection = document.createElement("section")
managerSection.classList.add("manager");

managerSection.innerHTML = `<h4 class="list__headline">${footer.manager.headline}</h4>`

let managerList = document.createElement("ul");
managerList.classList.add("list");

footer.manager.links.forEach(link => {
    let listItem = document.createElement("li");
    listItem.classList.add("listitem");
    listItem.innerHTML = `<a href="${link.linkURL}">${link.linkName}</a>`
    
    managerList.append(listItem)
});

managerSection.append(managerList);


// Assistance list

let assistanceSection = document.createElement("section")
assistanceSection.classList.add("assistance");

assistanceSection.innerHTML = `<h4 class="list__headline">${footer.assistance.headline}</h4>`

let assistanceList = document.createElement("ul");
assistanceList.classList.add("list");

footer.assistance.links.forEach(link => {
    let listItem = document.createElement("li");
    listItem.classList.add("listitem");
    listItem.innerHTML = `<a href="${link.linkURL}">${link.linkName}</a>`
    
    assistanceList.append(listItem)
});

assistanceSection.append(assistanceList);


// navigation

let nav = document.createElement("nav")
nav.classList.add("footer__nav");

nav.innerHTML = `<p class="copyright">${footer.nav.copyright}</p>`

let navList = document.createElement("ul");
navList.classList.add("menu");

footer.nav.links.forEach(link => {
    let listItem = document.createElement("li");
    listItem.classList.add("menu__item");
    listItem.innerHTML = `<a href="${link.linkURL}">${link.linkName}</a>`
    
    navList.append(listItem)
});

nav.append(navList);


footerSection.append(discoverSection, managerSection, assistanceSection, nav);









