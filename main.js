const petPromise = await fetch("https://learnwebcode.github.io/pet-adoption-data/pets.json")
const pets = await petPromise.json()

const template = document.querySelector("#animal-card")

const wrapper = document.createElement("div")

function decideAgeText(age) {
    if (!age) {
        return "Less than a year old"
    }

    return age > 1 `${age}` :
}

pets.forEach(pet => {
    const clone = template.content.cloneNode(true)
    clone.querySelector("h3").textContent = pet.name

    const img = clone.querySelector("img")
    img.src = pet.photo
    img.alt = `A ${pet.species} named ${pet.name}`

    const age = new Date().getFullYear() - pet.birthYear
    const ageText = decideAgeText(age)


    wrapper.appendChild(clone)
})

document.querySelector(".animals").appendChild(wrapper)


