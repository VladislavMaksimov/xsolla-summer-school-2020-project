let path = "https://raw.githubusercontent.com/xsolla/xsolla-frontend-school-2020/master/events.json";
let months = new Map();
let info;
let index = 0;

// Проверка, удовлетворяет ли концерт условиям фильтров
function checkConcert(concert) {
    let city_filter = document.getElementById("city");
    let city = city_filter.options[city_filter.selectedIndex].text;
    let month_filter = document.getElementById("month");
    let month = month_filter.options[month_filter.selectedIndex].text;

    let concert_city = concert.city;  
    let concert_month = new Date(concert.date).getMonth() + 1;

    if (city !== concert_city && city !== "All" || months.get(month) !== concert_month && month !== "All")
        return false;
    else
        return true;
}

// Добавление карточки
function getCard(concert) {
    let cards = document.getElementById("field");
    let concert_day = new Date(concert.date).getDate();

    // если концерт не проходит фильтры, возвращаем false
    if (!checkConcert(concert))
        return false;

    // создаём карточку
    let card = document.createElement("div");
    card.id = concert.id;
    card.classList.add("card");
    let cards_count = cards.children.length;
    if (cards_count === 0)
        card.classList.add("card-top-left");
    else
        if (cards_count === 1)
            card.classList.add("card-top-right");
        else
            if (cards_count % 2 === 0)
                card.classList.add("card-left");
            else
                card.classList.add("card-right");
    card.style.backgroundImage = "url(" + concert.image +")";
    cards.appendChild(card);

    // добавляем квадрат с датой
    let square = document.createElement("div");
    square.classList.add("day");
    card.appendChild(square);
    
    // добавляем день
    let day_text = document.createElement("p");
    day_text.classList.add("day-text");
    day_text.textContent = concert_day;
    square.appendChild(day_text);

    // добавляем текст на карточку
    let bottom_text = document.createElement("h2");
    bottom_text.classList.add("card-bottom-text");
    bottom_text.innerText = concert.name;
    card.appendChild(bottom_text);

    // добавляем закладку на карточку
    let trash = document.createElement("i");
    trash.classList.add("fa", "fa-trash", "card-white-trash");
    trash.addEventListener('click', deleteCard.bind(this, card.id));
    card.appendChild(trash);

    return true;
}

// Добавление месяца в множество
function getMonths(months, date) {
    let month = new Date(date).getMonth() + 1;

    switch (month) {
        case 1: return months.set("January", month);
        case 2: return months.set("February", month);
        case 3: return months.set("March", month);
        case 4: return months.set("April", month);
        case 5: return months.set("May", month);
        case 6: return months.set("June", month);
        case 7: return months.set("July", month);
        case 8: return months.set("August", month);
        case 9: return months.set("September", month);
        case 10: return months.set("October", month);
        case 11: return months.set("November", month);
        case 12: return months.set("December", month);
    }
}

// Добавление четырёх карточек перед кнопкой "Показать ещё"
function getFourCards() {
    let page = document.getElementsByClassName("page")[0];
    let more_button = document.getElementsByClassName("more-cards")[0];
    const newCardForm = document.getElementsByClassName("new-card-form")[0];
    
    let i = index;
    let j = 0;

    // добавляем карточки
    while (j < 4) {
        if (i >= info.length) {
            // если мы прошли список концертов до конца, убираем кнопку "Показать ещё"
            more_button.style.display = "none";
            newCardForm.style.display = "flex";            
            return;
        }
        else {
            if (getCard(info[i])) {
                i++;
                j++;
            }
            else
                i++;
        }
    }

    // проверка, нужна ли кнопка "Показать ещё"
    let areThereMoreCards = function(ind) {
        for(let j = ind; j < info.length; j++)
            if(checkConcert(info[j]))
                return true;
        return false;
    }

    // если нужна, то показываем кнопку, иначе убираем её
    if (areThereMoreCards(i)) {
        index = i;
        more_button.style.display = "flex";
        newCardForm.style.display = "none";   
    }
    else {
        more_button.style.display = "none";
        newCardForm.style.display = "flex";   
    }
}

// Инициализация страницы
function initPage(data) {
    info = data;
    let cities = new Set();

    for (let i = 0; i < info.length; i++) {
        // добавляем города в множество
        cities.add(info[i].city);
        // добавляем месяцы в словарь
        months = getMonths(months, info[i].date);
    }

     // добавляем названия городов в select
    for (let city of Array.from(cities).sort())
        document.getElementById("city").innerHTML += "<option>" + city + "</option>";  
    // добавляем месяцы в select  
    for (let [name, number] of months)
        document.getElementById("month").innerHTML += "<option>" + name + "</option>"; 

    // выводим первые 4 карточки
    getFourCards();
}

// Фильтрация нужных событий
function doFilter(data) {
    info = data;
    index = 0;
    let cards = document.getElementById("field");

    // чистим грид с карточками
    while (cards.firstChild) {
        cards.removeChild(cards.firstChild);
    }

    // добавляем нужные карточки
    getFourCards(); 
}

// Получение json-объекта с помощью http-запроса
function readJSON(path, func) {
    axios.get('http://localhost:3000/events')
         .then(function (response) {
            console.log(response)
            func(response.data) 
         });
}

// Скрипт при загрузке страницы
function load() {
    readJSON(path, initPage);
}

// Скрипт для фильтров
function filter() {
    readJSON(path, doFilter);
}

function getId() {
    return Math.max.apply(Math, info.map(function(card) { return card.id; }))
}

function clear() {
    months.clear();
    index = 0;

    const cards = document.getElementById("field");
    // чистим грид с карточками
    while (cards.firstChild) {
        cards.removeChild(cards.firstChild);
    }

    const cityFilter = document.getElementById("city");
    cityFilter.innerHTML = "<option>All</option>";

    const monthsFilter = document.getElementById("month");
    monthsFilter.innerHTML = "<option>All</option>";
}

// Удаление карточки
function deleteCard(id) {
    axios.delete(`http://localhost:3000/events/${id}`)
         .then(clear())
         .then(load())
}

function postCard() {
    const data = document.getElementsByClassName("postCardData");

    const id = getId() + 1;
    const name = data[0].value;
    const date = data[1].value;
    const city = data[2].value;
    const genre = data[3].value;

    const card = {
        "id": id,
        "name": name,
        "date": date,
        "city": city,
        "genre": genre,
        "image": `https://picsum.photos/id/${id}/700/500`
    };

    axios.post("http://localhost:3000/events/", card)
         .then(clear())
         .then(load);
}