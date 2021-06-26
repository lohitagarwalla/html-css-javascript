const card_image = document.querySelector('.card-image')
const header_name = document.querySelector('.header h3')
const header_desc = document.querySelector('.header p')
const profile_img = document.querySelector('.profile-img')
const profile_name = document.querySelector('.profile-info .name')
const profile_date = document.querySelector('.profile-info .date')

console.log(card_image, header_name, header_desc, profile_img, profile_name, profile_date)

setTimeout(() => {
    loadCard()
}, 2500);

function loadCard() {
    card_image.innerHTML = `<img src="./photo.jfif" alt="">`
    header_name.innerHTML = `Lorem ipsum dolor sit.`
    header_desc.innerHTML = `Lorem ipsum dolor sit amet consectetur adipisicing elit. Porro, illo?`
    profile_img.innerHTML = `<img src="./photo.jfif" alt="">`
    profile_name.innerHTML = `Lorem, ipsum.`
    profile_date.innerHTML = `Oct 2, 2020`
}

