console.log(`
    Привет! Звук громкий, осторожно:)

Ваша оценка - 126 баллов 
Отзыв по пунктам ТЗ:
Не выполненные/не засчитанные пункты:
1) есть кнопка звука при клике по которой можно включить/отключить звук 

2) переводится цитата дня т.е цитата отображается на текущем языке приложения. Сама цитата может быть другая 

3) в качестве источника изображений может использоваться Flickr API 

4) если источником получения фото указан API, в настройках приложения можно указать тег/теги, для которых API будет присылает фото 

5) в настройках приложения можно скрыть/отобразить любой из блоков, которые находятся на странице: время, дата, приветствие, цитата дня, прогноз погоды, аудиоплеер, список дел/список ссылок/ваш собственный дополнительный функционал 

6) Скрытие и отображение блоков происходит плавно, не влияя на другие элементы, которые находятся на странице, или плавно смещая их 

7) настройки приложения сохраняются при перезагрузке страницы 

8) ToDo List - список дел (как в оригинальном приложении) или Список ссылок (как в оригинальном приложении) или Свой собственный дополнительный функционал, по сложности аналогичный предложенным 

Выполненные пункты:
1) время выводится в 24-часовом формате, например: 21:01:00 
2) время обновляется каждую секунду - часы идут. Когда меняется одна из цифр, остальные при этом не меняют своё положение на странице (время не дёргается) 
3) выводится день недели, число, месяц, например: "Воскресенье, 16 мая" / "Sunday, May 16" / "Нядзеля, 16 траўня" 
4) текст приветствия меняется в зависимости от времени суток (утро, день, вечер, ночь). Проверяется соответствие приветствия текущему времени суток 
5) пользователь может ввести своё имя. При перезагрузке страницы приложения имя пользователя сохраняется 
6) ссылка на фоновое изображение формируется с учётом времени суток и случайного номера изображения (от 01 до 20). Проверяем, что при перезагрузке страницы фоновое изображение изменилось. Если не изменилось, перезагружаем страницу ещё раз 
7) изображения можно перелистывать кликами по стрелкам, расположенным по бокам экрана.Изображения перелистываются последовательно - после 18 изображения идёт 19 (клик по правой стрелке), перед 18 изображением идёт 17 (клик по левой стрелке) 
8) изображения перелистываются по кругу: после двадцатого изображения идёт первое (клик по правой стрелке), перед 1 изображением идёт 20 (клик по левой стрелке) 
9) при смене слайдов важно обеспечить плавную смену фоновых изображений. Не должно быть состояний, когда пользователь видит частично загрузившееся изображение или страницу без фонового изображения. Плавную смену фоновых изображений не проверяем: 1) при загрузке и перезагрузке страницы 2) при открытой консоли браузера 3) при слишком частых кликах по стрелкам для смены изображения 
10) при перезагрузке страницы приложения указанный пользователем город сохраняется, данные о нём хранятся в local storage 
11) для указанного пользователем населённого пункта выводятся данные о погоде, если их возвращает API. Данные о погоде включают в себя: иконку погоды, описание погоды, температуру в °C, скорость ветра в м/с, относительную влажность воздуха в %. Числовые параметры погоды округляются до целых чисел 
12) выводится уведомление об ошибке при вводе некорректных значений, для которых API не возвращает погоду (пустая строка или бессмысленный набор символов) 
13) при загрузке страницы приложения отображается рандомная цитата и её автор 
14) при перезагрузке страницы цитата обновляется (заменяется на другую). Есть кнопка, при клике по которой цитата обновляется (заменяется на другую) 
15) при клике по кнопке Play/Pause проигрывается первый трек из блока play-list, иконка кнопки меняется на Pause 
16) при клике по кнопке Play/Pause во время проигрывания трека, останавливается проигрывание трека, иконка кнопки меняется на Play 
17) треки пролистываются по кругу - после последнего идёт первый (клик по кнопке Play-next), перед первым - последний (клик по кнопке Play-prev) 
18) трек, который в данный момент проигрывается, в блоке Play-list выделяется стилем 
19) после окончания проигрывания первого трека, автоматически запускается проигрывание следующего. Треки проигрываются по кругу: после последнего снова проигрывается первый. 
20) добавлен прогресс-бар в котором отображается прогресс проигрывания 
21) при перемещении ползунка прогресс-бара меняется текущее время воспроизведения трека 
22) над прогресс-баром отображается название трека 
23) отображается текущее и общее время воспроизведения трека 
24) добавлен регулятор громкости, при перемещении ползунка регулятора громкости меняется громкость проигрывания звука 
25) можно запустить и остановить проигрывания трека кликом по кнопке Play/Pause рядом с ним в плейлисте 
26) переводится язык и меняется формат отображения даты 
27) переводится приветствие и placeholder 
28) переводится прогноз погоды в т.ч описание погоды и город по умолчанию 
29) переводятся настройки приложения, при переключении языка приложения в настройках, язык настроек тоже меняется 
30) в качестве источника изображений может использоваться Unsplash API 
31) в настройках приложения можно указать язык приложения (en/ru или en/be)  
32) в настройках приложения можно указать источник получения фото для фонового изображения: коллекция изображений GitHub, Unsplash API, Flickr API 
 `)

const time = document.querySelector('.time')
const dateHTML = document.querySelector('.date')
const greeting = document.querySelector('.greeting')
const name1 = document.querySelector('.name')
const city = document.querySelector('.city')
const body = document.querySelector('body')
const prevBtn = document.querySelector('.slide-prev')
const nextBtn = document.querySelector('.slide-next')

const select_lang = document.querySelector('.change-lang')
const select_source = document.querySelector('.change-source')

const volumeRange = document.querySelector('.volume-range')
const volumeBar = document.querySelector('.volume-bar')

const image = document.querySelector('img')

const playListContainer = document.querySelector('.play-list')
const progressContainer = document.getElementById('progress-container')
const progress = document.getElementById('progress')
const currentTimeEl = document.getElementById('current-time')
const durationEl = document.getElementById('duration')
const artist = document.getElementById('artist')
const title = document.getElementById('title')
const music = document.querySelector('audio')
const prevAudioBtn = document.getElementById('prev')
const playBtn = document.getElementById('play')
const nextAudioBtn = document.getElementById('next')

music.volume = 0.1
let bgNum = String(getRandomNum()).padStart(2, '0')
let isPlay = false
let songPrevIndex = 0
let songIndex = 0

let source = 'gitHub'
let language = 'ru'

const greetingTranslation = {
    ru: 'Добрый',
    en: 'Good',
    time_of_day: '',
    langForDate: 'ru-Ru'
}

// select_lang.addEventListener('change', changeLanguage)
// select_source.addEventListener('change', changeSource)

function changeSource() {
    if (source === 'gitHub') {
        source = 'unsplash'
    } else {
        source = 'gitHub'
    }
}

function changeLanguage() {
    const date = new Date()
    if (language === 'ru') {
        name1.placeholder = "[enter Name]"
        greetingTranslation.langForDate = 'en-Us'
        language = 'en'

        if (city.value === 'Минск') {
            city.value = 'Minsk'

        }
        toggleSwitches[0].checked = true

    } else {
        name1.placeholder = "[введите Имя]"
        greetingTranslation.langForDate = 'ru-Ru'
        language = 'ru'
        if (city.value === 'Minsk') {
            city.value = 'Минск'
        }

    }
    showGreeting(date, language)
    getWeather()
}

function playSong() {
    setPLaylistIcon()
    isPlay = true
    playBtn.classList.replace('play', 'pause')
    playBtn.setAttribute('title', 'Pause')
    music.play()
}

function pauseSong() {
    isPlay = false
    playBtn.classList.replace('pause', 'play')
    playBtn.setAttribute('title', 'Play')
    music.pause()
}

function changeVolume(e) {
    let volume = e.offsetX / volumeRange.offsetWidth;

    if (volume < 0.1) {
        volume = 0;
    }
    if (volume > 0.9) {
        volume = 1;
    }
    volumeBar.style.width = `${volume * 100}%`;
    music.volume = volume;
    lastVolume = volume;
}

const playList = [{
        name: 'Bebe_Rexha_-_Sacrifice_Gorgon_City_Remix_Gorgon_City_Remix_72969324',
        displayName: 'Sacrifice rmx',
        artist: 'Bebe Rexha',
    }, {
        name: 'T-killah',
        displayName: 'Люби меня люби',
        artist: 'T-killah',
    },

    {
        name: 'Keanu_Silva_-_Pump_Up_The_Jam_Record_Mix_72347776',
        displayName: 'Pump Up The Jam',
        artist: 'Keanu Silva',
    },
    {
        name: 'Asking_Alexandria_-_Into_The_Fire_51250561',
        displayName: 'Into The Fire',
        artist: 'Asking Alexandria',
    },
]

for (let i = 0; i < playList.length; i++) {
    const li = document.createElement('li')
    li.classList.add('play-item')
    li.id = i
    li.textContent = playList[i].displayName
    li.addEventListener('click', (e) => {
        songPrevIndex = songIndex
        songIndex = e.target.id
        loadSong(playList[songIndex])
        playSong()
    })
    playListContainer.append(li)
}

function loadSong(song) {
    title.textContent = song.displayName
    artist.textContent = song.artist
    music.src = `assets/sounds/${song.name}.mp3`
    image.src = `assets/img/${song.name}.jpg`
}


function setPLaylistIcon() {
    playListContainer.children[songPrevIndex].classList.remove('item-active')
    playListContainer.children[songIndex].classList.add('item-active')
}

function prevSong() {
    songPrevIndex = songIndex
    songIndex--
    if (songIndex < 0) {
        songIndex = playList.length - 1
    }
    loadSong(playList[songIndex])
    playSong()
}

function nextSong() {
    songPrevIndex = songIndex
    songIndex++
    if (songIndex > playList.length - 1) {
        songIndex = 0
    }
    loadSong(playList[songIndex])
    playSong()
}

function updateProgressBar(e) {
    if (isPlay) {
        const { duration, currentTime } = e.srcElement
        const progressPercent = (currentTime / duration) * 100
        progress.style.width = `${progressPercent}%`
        const durationMinutes = Math.floor(duration / 60)
        let durationSeconds = Math.floor(duration % 60)
        if (durationSeconds < 10) {
            durationSeconds = `0${durationSeconds}`
        }
        if (durationSeconds) {
            durationEl.textContent = `${durationMinutes}:${durationSeconds}`
        }
        const currentMinutes = Math.floor(currentTime / 60)
        let currentSeconds = Math.floor(currentTime % 60)
        if (currentSeconds < 10) {
            currentSeconds = `0${currentSeconds}`
        }
        currentTimeEl.textContent = `${currentMinutes}:${currentSeconds}`
    }
}

function setProgressBar(e) {
    const width = this.clientWidth
    const clickX = e.offsetX
    const { duration } = music
    music.currentTime = (clickX / width) * duration
}

function getSlideNext() {
    bgNum = (+bgNum)
    if (bgNum < 20) {
        bgNum++
        bgNum = String(bgNum).padStart(2, '0')
    } else {
        bgNum = '01'
    }
    setBg(source)
}

function getSlidePrev() {
    bgNum = (+bgNum)
    if (bgNum > 1) {
        bgNum--
        bgNum = String(bgNum).padStart(2, '0')
    } else {
        bgNum = '20'
    }
    setBg(source)
}

function getRandomNum() {
    return Math.floor(Math.random() * (20 - 1) + 1)
}

async function getLinkToImage() {
    const date = new Date()
    const timeOfDay = getTimeOfDay(date).toLowerCase()

    // if () {
    imageTag = timeOfDay
        // } else {

    // }

    const img = new Image()
    const url = `https://api.unsplash.com/photos/random?orientation=landscape&query=nature,${imageTag}&client_id=Z7lXF6YqyjVaQ95GkEzDHBt6jNoULaRmikGsAGkkPLA`

    try {
        const res = await fetch(url)
        const data = await res.json()
        img.src = data.urls.regular
        img.onload = () => {
            body.style.backgroundImage = "url(" + img.src + ")"
        }

    } catch (error) {
        alert('error')
    }
}


function setBg(source = 'gitHub') {
    const date = new Date()
    const timeOfDay = getTimeOfDay(date).toLowerCase()
    if (source === 'gitHub') {
        const img = new Image()

        img.src = "https://raw.githubusercontent.com/rolling-scopes-school/stage1-tasks/assets/images/" + timeOfDay + "/" + bgNum + ".jpg"
        img.onload = () => {
            body.style.backgroundImage = "url(" + img.src + ")"
        }
    } else {
        getLinkToImage()
    }

}

function setLocalStorage() {
    localStorage.setItem('name', name1.value)
    localStorage.setItem('city1', city.value)
}
window.addEventListener('beforeunload', setLocalStorage)

function getLocalStorage() {
    if (localStorage.getItem('name')) {
        name1.value = localStorage.getItem('name');
    }
    if (localStorage.getItem('city1')) {
        city.value = localStorage.getItem('city1');
    }
    getWeather()
        // changeLanguage()
}
window.addEventListener('load', getLocalStorage)

function getTimeOfDay(date, lan = 'en') {
    const hours = date.getHours()

    if (lan === 'en') {
        if (hours >= 0 && hours < 6) {
            return 'Night'
        }
        if (hours >= 6 && hours < 12) {
            return 'Morning'
        }
        if (hours >= 12 && hours < 18) {
            return 'Afternoon'
        }
        if (hours >= 18 && hours <= 23) {
            return 'Evening'
        }
    } else {
        if (hours >= 0 && hours < 6) {
            greetingTranslation.ru = 'Доброй'
            greetingTranslation.time_of_day = 'Ночи'
            return 'Night'
                // return 'Ночи'
        }
        if (hours >= 6 && hours < 12) {
            greetingTranslation.ru = 'Доброе'
            greetingTranslation.time_of_day = 'Утро'
            return 'Morning'
                // return 'Утро'
        }
        if (hours >= 12 && hours < 18) {
            greetingTranslation.ru = 'Добрый'
            greetingTranslation.time_of_day = 'День'
            return 'Afternoon'
                // return 'День'
        }
        if (hours >= 18 && hours <= 23) {
            greetingTranslation.ru = 'Добрый'
            greetingTranslation.time_of_day = 'Вечер'
            return 'Evening'
                // return 'Вечер'
        }
    }
}

function showGreeting(date, lan) {
    if (lan === 'en') {
        const timeOfDay = getTimeOfDay(date, lan)
        greeting.textContent = `${greetingTranslation.en} ${timeOfDay}`
    } else {
        const timeOfDay = getTimeOfDay(date, lan)
        greeting.textContent = `${greetingTranslation.ru} ${greetingTranslation.time_of_day}`
    }

}

function showTime() {
    const date = new Date()
    const options = { hour: 'numeric', minute: 'numeric', second: 'numeric' }
    const currentTime = date.toLocaleTimeString(greetingTranslation.langForDate, options)
    time.textContent = currentTime
    showDate(date)
    showGreeting(date, language)
    setTimeout(showTime, 1000)
}

function showDate(date) {
    const options = { weekday: 'long', month: 'long', day: 'numeric', timeZone: 'UTC' }
    const currentDate = date.toLocaleDateString(greetingTranslation.langForDate, options)
    dateHTML.textContent = currentDate
}
setBg()
showTime()
nextBtn.addEventListener('click', getSlideNext)
prevBtn.addEventListener('click', getSlidePrev)
prevAudioBtn.addEventListener('click', prevSong)
nextAudioBtn.addEventListener('click', nextSong)
music.addEventListener('ended', nextSong)
playBtn.addEventListener('click', () => (isPlay ? pauseSong() : playSong()))

music.addEventListener('ended', nextSong)
music.addEventListener('timeupdate', updateProgressBar)
progressContainer.addEventListener('click', setProgressBar)
volumeRange.addEventListener('click', changeVolume)