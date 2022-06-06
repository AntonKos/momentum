const settings = document.querySelector('.wrapper')
const settings_item = document.querySelector('.settings-icon')
const toggleTextLang = document.querySelector('.toggle-text-lang')
const toggleTextSource = document.querySelector('.toggle-text-source')
const toggleSwitches = document.querySelectorAll('.toggle-switch')
const langSwitch = document.querySelector('.switch-lang')
const sourceSwitch = document.querySelector('.switch-source')
const settingsTitle = document.querySelector('.settings-title')

const labelLang = document.querySelector('.label-lang')
const labelSource = document.querySelector('.label-source')

window.addEventListener('click', () => {
    if (settings.style.display === 'flex') {
        settings.style.display === 'none'
    }
})
settings_item.addEventListener('click', () => {

    if (settings.style.display === 'none') {
        settings.style.display = 'flex'
    } else {
        settings.style.display = 'none'
    }

})

for (let i = 0; i < toggleSwitches.length; i++) {

    toggleSwitches[i].addEventListener('change', (e) => {

        if (e.target.checked) {
            if (e.target.id === 'switch-lang') {
                labelLang.textContent = 'Language'
                labelSource.textContent = 'Image Source'
                settingsTitle.textContent = 'Settings'
                e.target.parentElement.previousElementSibling.textContent = 'Eng'
                changeLanguage()
                getWeather()
            } else {
                e.target.parentElement.previousElementSibling.textContent = 'Unsplash'
                changeSource()
            }
        } else {
            if (e.target.id === 'switch-lang') {
                labelLang.textContent = 'Язык'
                labelSource.textContent = 'Источник изображений'
                settingsTitle.textContent = 'Настройки'
                e.target.parentElement.previousElementSibling.textContent = 'Ru'
                changeLanguage()
                getWeather()
            } else {
                e.target.parentElement.previousElementSibling.textContent = 'GitHub'
                changeSource()
            }
        }
    })

}