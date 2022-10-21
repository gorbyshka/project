window.onload = function () {
    let preloader = document.getElementById('preloader');
    preloader.classList.add('hide-preloader');
    setInterval(function () {
        preloader.classList.add('preloader-hidden');
    }, 1000);
}

document.addEventListener('DOMContentLoaded', () => {

    const mediaFiles = document.querySelectorAll('img, video');
    let i = 0

    Array.from(mediaFiles).forEach((file, index) => {
        file.onload = () => {
            i++

            percents.innerHTML = ((i * 100) / mediaFiles.length).toFixed(1)

            if (i === mediaFiles.length) {
                preloader.classList.add('preloader--hide')
                percents.innerHTML = 100
            }
        }
    })

})

const animItems = document.querySelectorAll('._anim-items');

if (animItems.length > 0) {
    window.addEventListener('scroll', animOnScroll);
    function animOnScroll(params) {
        for (let index = 0; index < animItems.length; index++) {
            const animItem = animItems[index];
            const animItemHeight = animItem.offsetHeight;
            const animItemOffset = offset(animItem).top;
            const animStart = 4;

            let animItemPoint = window.innerHeight - animItemHeight / animStart;
            if (animItemHeight > window.innerHeight) {
                animItemPoint = window.innerHeight - window.innerHeight / animStart;
            }

            if ((pageYOffset > animItemOffset - animItemPoint) && pageYOffset < (animItemOffset + animItemHeight)) {
                animItem.classList.add('_activee');
            } else {
                if (!animItem.classList.contains('_anim-no-hide')) {
                    animItem.classList.remove('_activee');
                }
            }
        }
    }
    function offset(el) {
        const rect = el.getBoundingClientRect(),
            scrollLeft = window.pageXOffset || document.documentElement.scrollLeft,
            scrollTop = window.pageYOffset || document.documentElement.scrollTop;
        return { top: rect.top + scrollTop, left: rect.left + scrollLeft }
    }

    setTimeout(() => {
        animOnScroll();
    }, 1000);
}

window.onscroll = function showHEader() {

    var header = document.querySelector('.header');

    if (window.pageYOffset > 50) {
        header.classList.add('header_fixed');
    } else {
        header.classList.remove('header_fixed');
    }

}

const iconMenu = document.querySelector('.menu__icon');
if (iconMenu) {
    const menuBody = document.querySelector('.dws-menu');
    iconMenu.addEventListener("click", function (e) {
        document.body.classList.toggle('lock');
        iconMenu.classList.toggle('__active');
        menuBody.classList.toggle('__active');
    });
}

let langs = document.querySelector(".items"),
    link = document.querySelectorAll("a"),
    cloth = document.querySelector(".cloth"),
    cloth2 = document.querySelector(".cloth2"),
    cloth3 = document.querySelector(".cloth3"),
    cloth4 = document.querySelector(".cloth4"),
    cloth5 = document.querySelector(".cloth5"),
    cloth6 = document.querySelector(".cloth6"),
    cloth7 = document.querySelector(".cloth7"),
    cloth8 = document.querySelector(".cloth8"),
    cloth9 = document.querySelector(".cloth9"),
    cloth10 = document.querySelector(".cloth10"),
    cloth11 = document.querySelector(".cloth11"),
    cloth12 = document.querySelector(".cloth12"),
    cloth13 = document.querySelector(".cloth13"),
    cloth14 = document.querySelector(".cloth14"),
    cloth15 = document.querySelector(".cloth15"),
    cloth16 = document.querySelector(".cloth16"),
    cloth17 = document.querySelector(".cloth17"),
    cloth18 = document.querySelector(".cloth18"),
    cloth19 = document.querySelector(".cloth19"),
    cloth20 = document.querySelector(".cloth20"),
    cloth21 = document.querySelector(".cloth21"),
    cloth22 = document.querySelector(".cloth22"),
    cloth23 = document.querySelector(".cloth23"),
    cloth24 = document.querySelector(".cloth24"),
    cloth25 = document.querySelector(".cloth25"),
    cloth26 = document.querySelector(".cloth26"),
    cloth27 = document.querySelector(".cloth27"),
    cloth28 = document.querySelector(".cloth28"),
    cloth29 = document.querySelector(".cloth29"),
    cloth30 = document.querySelector(".cloth30"),
    cloth31 = document.querySelector(".cloth31"),
    cloth32 = document.querySelector(".cloth32"),
    cloth33 = document.querySelector(".cloth33"),
    cloth34 = document.querySelector(".cloth34"),
    cloth35 = document.querySelector(".cloth35"),
    cloth36 = document.querySelector(".cloth36"),
    cloth37 = document.querySelector(".cloth37"),
    cloth38 = document.querySelector(".cloth38"),
    cloth39 = document.querySelector(".cloth39"),
    cloth40 = document.querySelector(".cloth40"),
    cloth41 = document.querySelector(".cloth41"),
    cloth42 = document.querySelector(".cloth42"),
    cloth43 = document.querySelector(".cloth43"),
    cloth44 = document.querySelector(".cloth44"),
    cloth45 = document.querySelector(".cloth45"),
    cloth46 = document.querySelector(".cloth46"),
    cloth47 = document.querySelector(".cloth47"),
    cloth48 = document.querySelector(".cloth48"),
    cloth49 = document.querySelector(".cloth49"),
    cloth50 = document.querySelector(".cloth50"),
    cloth51 = document.querySelector(".cloth51"),
    cloth52 = document.querySelector(".cloth52"),
    cloth53 = document.querySelector(".cloth53"),
    cloth54 = document.querySelector(".cloth54"),
    cloth55 = document.querySelector(".cloth55"),
    cloth56 = document.querySelector(".cloth56"),
    cloth57 = document.querySelector(".cloth57"),
    cloth58 = document.querySelector(".cloth58"),
    cloth59 = document.querySelector(".cloth59"),
    cloth60 = document.querySelector(".cloth60"),
    cloth61 = document.querySelector(".cloth61"),
    cloth62 = document.querySelector(".cloth62"),
    cloth63 = document.querySelector(".cloth63"),
    cloth64 = document.querySelector(".cloth64"),
    cloth65 = document.querySelector(".cloth65"),
    cloth66 = document.querySelector(".cloth66"),
    cloth67 = document.querySelector(".cloth67"),
    cloth68 = document.querySelector(".cloth68"),
    cloth69 = document.querySelector(".cloth69"),
    cloth70 = document.querySelector(".cloth70"),
    cloth71 = document.querySelector(".cloth71"),
    cloth72 = document.querySelector(".cloth72"),
    cloth73 = document.querySelector(".cloth73"),
    cloth74 = document.querySelector(".cloth74"),
    cloth75 = document.querySelector(".cloth75"),
    cloth76 = document.querySelector(".cloth76"),
    cloth77 = document.querySelector(".cloth77"),
    cloth78 = document.querySelector(".cloth78"),
    cloth79 = document.querySelector(".cloth79"),
    cloth80 = document.querySelector(".cloth80"),
    cloth81 = document.querySelector(".cloth81"),
    cloth82 = document.querySelector(".cloth82"),
    cloth83 = document.querySelector(".cloth83"),
    cloth84 = document.querySelector(".cloth84"),
    cloth85 = document.querySelector(".cloth85"),
    cloth86 = document.querySelector(".cloth86"),
    cloth87 = document.querySelector(".cloth87"),
    cloth88 = document.querySelector(".cloth88"),
    cloth89 = document.querySelector(".cloth89"),
    cloth90 = document.querySelector(".cloth90"),
    cloth91 = document.querySelector(".cloth91"),
    cloth92 = document.querySelector(".cloth92"),
    cloth93 = document.querySelector(".cloth93"),
    cloth94 = document.querySelector(".cloth94"),
    cloth95 = document.querySelector(".cloth95"),
    pagetitle = document.querySelector(".page-title"),
    text1 = document.querySelector(".text1"),
    text2 = document.querySelector(".text2"),
    text3 = document.querySelector(".text3"),
    text4 = document.querySelector(".text4"),
    text5 = document.querySelector(".text5"),
    text6 = document.querySelector(".text6"),
    text7 = document.querySelector(".text7"),
    text8 = document.querySelector(".text8"),
    text9 = document.querySelector(".text9"),
    text10 = document.querySelector(".text10"),
    footertext1 = document.querySelector(".footer-text1"),
    footertext2 = document.querySelector(".footer-text2"),
    footertext3 = document.querySelector(".footer-text3"),
    wavebtntext = document.querySelector(".wave-btn-text"),
    footertext4 = document.querySelector(".footer-text4"),
    footertext5 = document.querySelector(".footer-text5"),
    footertext6 = document.querySelector(".footer-text6");

link.forEach(el => {
    el.addEventListener("click", () => {
        langs.querySelector(".active").classList.remove("active");
        el.classList.add("active");

        let attr = el.getAttribute("language")

        cloth.textContent = data[attr].cloth
        cloth2.textContent = data[attr].cloth2
        cloth3.textContent = data[attr].cloth3
        cloth4.textContent = data[attr].cloth4
        cloth5.textContent = data[attr].cloth5
        cloth6.textContent = data[attr].cloth6
        cloth7.textContent = data[attr].cloth7
        cloth8.textContent = data[attr].cloth8
        cloth9.textContent = data[attr].cloth9
        cloth10.textContent = data[attr].cloth10
        cloth11.textContent = data[attr].cloth11
        cloth12.textContent = data[attr].cloth12
        cloth13.textContent = data[attr].cloth13
        cloth14.textContent = data[attr].cloth14
        cloth15.textContent = data[attr].cloth15
        cloth16.textContent = data[attr].cloth16
        cloth17.textContent = data[attr].cloth17
        cloth18.textContent = data[attr].cloth18
        cloth19.textContent = data[attr].cloth19
        cloth20.textContent = data[attr].cloth20
        cloth21.textContent = data[attr].cloth21
        cloth22.textContent = data[attr].cloth22
        cloth23.textContent = data[attr].cloth23
        cloth24.textContent = data[attr].cloth24
        cloth25.textContent = data[attr].cloth25
        cloth26.textContent = data[attr].cloth26
        cloth27.textContent = data[attr].cloth27
        cloth28.textContent = data[attr].cloth28
        cloth29.textContent = data[attr].cloth29
        cloth30.textContent = data[attr].cloth30
        cloth31.textContent = data[attr].cloth31
        cloth32.textContent = data[attr].cloth32
        cloth33.textContent = data[attr].cloth33
        cloth34.textContent = data[attr].cloth34
        cloth35.textContent = data[attr].cloth35
        cloth36.textContent = data[attr].cloth36
        cloth37.textContent = data[attr].cloth37
        cloth38.textContent = data[attr].cloth38
        cloth39.textContent = data[attr].cloth39
        cloth40.textContent = data[attr].cloth40
        cloth41.textContent = data[attr].cloth41
        cloth42.textContent = data[attr].cloth42
        cloth43.textContent = data[attr].cloth43
        cloth44.textContent = data[attr].cloth44
        cloth45.textContent = data[attr].cloth45
        cloth46.textContent = data[attr].cloth46
        cloth47.textContent = data[attr].cloth47
        cloth48.textContent = data[attr].cloth48
        cloth49.textContent = data[attr].cloth49
        cloth50.textContent = data[attr].cloth50
        cloth51.textContent = data[attr].cloth51
        cloth52.textContent = data[attr].cloth52
        cloth53.textContent = data[attr].cloth53
        cloth54.textContent = data[attr].cloth54
        cloth55.textContent = data[attr].cloth55
        cloth56.textContent = data[attr].cloth56
        cloth57.textContent = data[attr].cloth57
        cloth58.textContent = data[attr].cloth58
        cloth59.textContent = data[attr].cloth59
        cloth60.textContent = data[attr].cloth60
        cloth61.textContent = data[attr].cloth61
        cloth62.textContent = data[attr].cloth62
        cloth63.textContent = data[attr].cloth63
        cloth64.textContent = data[attr].cloth64
        cloth65.textContent = data[attr].cloth65
        cloth66.textContent = data[attr].cloth66
        cloth67.textContent = data[attr].cloth67
        cloth68.textContent = data[attr].cloth68
        cloth69.textContent = data[attr].cloth69
        cloth70.textContent = data[attr].cloth70
        cloth71.textContent = data[attr].cloth71
        cloth72.textContent = data[attr].cloth72
        cloth73.textContent = data[attr].cloth73
        cloth74.textContent = data[attr].cloth74
        cloth75.textContent = data[attr].cloth75
        cloth76.textContent = data[attr].cloth76
        cloth77.textContent = data[attr].cloth77
        cloth78.textContent = data[attr].cloth78
        cloth79.textContent = data[attr].cloth79
        cloth80.textContent = data[attr].cloth80
        cloth81.textContent = data[attr].cloth81
        cloth82.textContent = data[attr].cloth82
        cloth83.textContent = data[attr].cloth83
        cloth84.textContent = data[attr].cloth84
        cloth85.textContent = data[attr].cloth85
        cloth86.textContent = data[attr].cloth86
        cloth87.textContent = data[attr].cloth87
        cloth88.textContent = data[attr].cloth88
        cloth89.textContent = data[attr].cloth89
        cloth90.textContent = data[attr].cloth90
        cloth91.textContent = data[attr].cloth91
        cloth92.textContent = data[attr].cloth92
        cloth93.textContent = data[attr].cloth93
        cloth94.textContent = data[attr].cloth94
        cloth95.textContent = data[attr].cloth95
        pagetitle.textContent = data[attr].pagetitle
        text1.textContent = data[attr].text1
        text2.textContent = data[attr].text2
        text3.textContent = data[attr].text3
        text4.textContent = data[attr].text4
        text5.textContent = data[attr].text5
        text6.textContent = data[attr].text6
        text7.textContent = data[attr].text7
        text8.textContent = data[attr].text8
        text9.textContent = data[attr].text9
        text10.textContent = data[attr].text10
        footertext1.textContent = data[attr].footertext1
        footertext2.textContent = data[attr].footertext2
        footertext3.textContent = data[attr].footertext3
        wavebtntext.textContent = data[attr].wavebtntext
        footertext4.textContent = data[attr].footertext4
        footertext5.textContent = data[attr].footertext5
        footertext6.textContent = data[attr].footertext6
    })
})

let data = {

    ukraine: {
        cloth: "Каталог тканин",
        cloth2: "Для одягу",
        cloth3: "Атлас, Сатін",
        cloth4: "Гіпюр",
        cloth5: "Шкіра",
        cloth6: "Костюмні",
        cloth7: "Льон",
        cloth8: "Хутро",
        cloth9: "Паєтки",
        cloth10: "Пальтові",
        cloth11: "Плащівка",
        cloth12: "Підкладкові",
        cloth13: "Прикладні",
        cloth14: "Фатін",
        cloth15: "Бавовняні",
        cloth16: "Шовк",
        cloth17: "Для будинку",
        cloth18: "Декоративні",
        cloth19: "Махрові",
        cloth20: "Оббивні",
        cloth21: "Рушникові",
        cloth22: "Постільні",
        cloth23: "Скатертні",
        cloth24: "Штори",
        cloth25: "Вибране",
        cloth26: "Італійські тканини",
        cloth27: "Новинки Італії 2022",
        cloth28: "Шовк Італія",
        cloth29: "Принти Італія",
        cloth30: "Костюмна Італія",
        cloth31: "Пальтова Італія",
        cloth32: "Підкладка Італія",
        cloth33: "Трикотаж Італія",
        cloth34: "Спорт Італія",
        cloth35: "Льон Італія",
        cloth36: "Сатін Італія",
        cloth37: "Актуальні принти",
        cloth38: "Однотонні новинки",
        cloth39: "Костюмна клітка",
        cloth40: "Мілітарі та Камуфляж",
        cloth41: "Розпродаж",
        cloth42: "За видами",
        cloth43: "Кулір",
        cloth44: "Твід",
        cloth45: "Твіл",
        cloth46: "Тенсел",
        cloth47: "Тік",
        cloth48: "З Блиском",
        cloth49: "З Дитячим малюнком",
        cloth50: "У Рубчик",
        cloth51: "З вишивкою",
        cloth52: "Тканина із Гліттером",
        cloth53: "Зі Стеклярусом",
        cloth54: "Віскоза",
        cloth55: "На Хутрі",
        cloth56: "Утеплювач",
        cloth57: "Льон",
        cloth58: "Мішковина",
        cloth59: "Муслін",
        cloth60: "Паєтка",
        cloth61: "Пальтова",
        cloth62: "Плащівка",
        cloth63: "Підкладка",
        cloth64: "Оксамит",
        cloth65: "Біфлекс",
        cloth66: "Бавовна",
        cloth67: "Вафельна",
        cloth68: "Віскоза",
        cloth69: "Габардін",
        cloth70: "Гіпюр",
        cloth71: "Горфе",
        cloth72: "Дайвін",
        cloth73: "Двонитка",
        cloth74: "За призначенням",
        cloth75: "Для Халатів",
        cloth76: "Для пелюшок",
        cloth77: "Для Пледів",
        cloth78: "Для Покривал",
        cloth79: "Для Подушок",
        cloth80: "Для пляжу",
        cloth81: "Для Білизни",
        cloth82: "Для Сорочок",
        cloth83: "Для Рюкзаків",
        cloth84: "Для Сарафанів",
        cloth85: "Для весілля",
        cloth86: "Для Скатертей",
        cloth87: " Для малюнків",
        cloth88: "Для піджаків",
        cloth89: "Для Спідниць",
        cloth90: "Для Сукнь",
        cloth91: "Для Костюмів",
        cloth92: "Для Декору",
        cloth93: "Для Жіночого",
        cloth94: "Для спорту",
        cloth95: "Соц мережі",
        pagetitle: "Про компанію",
        text1: "Вашій увазі представлені 252 полиці з тканинами, з яких 72 спеціально відведені для чоловічої. лінії. В даний момент на нашому складі налічується понад 10 000 тканин і кілька разів на сезон ми поповнюємо наш асортимент. Наш асортимент тканин - це широкий діапазон складів, головним чином це натуральні тканини. Усі основні бази тканин зимового та літнього асортименту задовольнять будь-які потреби покупця в ціні, якості та обсягах товару.",
        text2: "Кожен сезон ми отримуємо тканини з останніми хітами у сфері дизайну, які були представлені на світових подіумах Мілана, Парижа, Нью-Йорка та Токіо.",
        text3: "Наші постачальники – це найкращі виробники вовни та шовку в Італії, трикотажу та мережива Франції.",
        text4: "Наша компанія є безпосереднім представником відомих фабрик на ринку України та спеціалізується на продажі Європейських тканин для світових будинків моди, а також для ринку широкого вжитку.",
        text5: "Наші клієнти – це великі та середні виробництва одягу, дизайн студії та ательє.",
        text6: "Тривалий час в Одесі був відсутній магазин, який би зосереджував у собі різноманіття тканин та фурнітури. Покупцям було складно підібрати собі усі складові готового виробу у комплексі. Процес викликав незручності та тимчасові витрати.",
        text7: "З цієї причини, за ці роки, було суттєво втрачено культуру пошиття виробів «під себе» і «для себе».",
        text8: "Виявилося, що набагато легше купувати готові вироби. У цьому вони завжди відповідали індивідуальним вимогам клієнтів. Адже у Вас чи Ваших близьких постійно виникає бажання чи привід виглядати ефектно, індивідуально, красиво та зручно одночасно. Основне завдання, яке стояло перед нами – створення єдиного магазину, де покупець зможе підібрати різні види тканин і фурнітури для себе, змінити що-небудь в інтер'єрі свого будинку,скористатися послугами ательє.",
        text9: "І, найголовніше, щоб це все відбувалося у комфортних умовах за високого рівня обслуговування та прийнятних цінах. Частину планів уже реалізовано.",
        text10: "На даний момент ми пропонуємо понад 20000 позицій тканин та фурнітури. При цьому ми постійно розширюватимемо спектр послуг та асортименту. Ми постійно працюємо над цим і інформуватимемо Вас. Магазин відкрито для Вас щодня!",
        footertext1: "ДІЗНАЙТЕСЯ ПЕРШИМИ ПРО НОВІ ТРЕНДИ, НОВИНКИ, ЗНИЖКИ",
        footertext2: "Приймаємо до оплати",
        footertext3: "МИ У СОЦМЕРЕЖАХ",
        wavebtntext: "Оформити замовлення",
        footertext4: "Оформлення замовлення",
        footertext5: "Залишити замовлення",
        footertext6: "Про компанію"

    }
}

let a = '';
let b = '';
let sign = '';
let finish = false;

const digit = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9', '.'];
const action = ['-', '+', 'X', '/'];

const out = document.querySelector('.calc-screen p');

function clearAll() {
    a = '';
    b = '';
    sign = '';
    finish = false;
    out.textContent = 0;
}

document.querySelector('.ac').onclick = clearAll;

document.querySelector('.buttons').onclick = (event) => {
    if (!event.target.classList.contains('btn')) return;
    if (event.target.classList.contains('ac')) return;

    out.textContent = '';
    const key = event.target.textContent;

    if (digit.includes(key)) {
        if (b === '' && sign === '') {
            a += key;

            out.textContent = a;
        }
        else if (a !== '' && b !== '' && finish) {
            b = key;
            finish = false;
            out.textContent = b;
        }
        else {
            b += key;
            out.textContent = b;
        }
        console.table(a, b, sign);
        return;
    }

    if (action.includes(key)) {
        sign = key;
        out.textContent = sign;
        console.table(a, b, sign);
        return;
    }

    if (key === '=') {
        if (b === '') b = a;
        switch (sign) {
            case "+":
                a = (+a) + (+b);
                break;
            case "-":
                a = a - b;
                break;
            case "X":
                a = a * b;
                break;
            case "/":
                if (b === '0') {
                    out.textContent = 'Ошибка';
                    a = '';
                    b = '';
                    sign = '';
                    return;
                }
                a = a / b;
                break;
        }
        finish = true;
        out.textContent = a;
        console.table(a, b, sign);
    }

}

"use strict"

window.addEventListener("load", windowLoad);

function windowLoad() {
    const htmlBlock = document.documentElement;

    const saveUserTheme = localStorage.getItem('user-theme')

    let userTheme;
    if (window.matchMedia) {
        userTheme = window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light'
    }

    window.matchMedia('(prefers-color-scheme: dark)').addEventListener('change', e => {
        !saveUserTheme ? changeTheme() : null;
    });

    const themeButton = document.querySelector('.page__theme');
    const resetButton = document.querySelector('.page__reset');
    if (themeButton) {
        themeButton.addEventListener("click", function (e) {
            resetButton.classList.add('active');
            changeTheme(true)
        });
    }

    if (resetButton) {
        resetButton.addEventListener("click", function (e) {
            resetButton.classList.remove('active');
            localStorage.setItem('user-theme', '');
        });
    }

    function setThemeClass() {
        if (saveUserTheme) {
            htmlBlock.classList.add(saveUserTheme)
            resetButton.classList.add('active');
        } else {
            htmlBlock.classList.add(userTheme)
        }
    }

    setThemeClass();

    function changeTheme(saveTheme = false) {
        let currentTheme = htmlBlock.classList.contains('light') ? 'light' : 'dark';
        let newTheme;

        if (currentTheme === 'light') {
            newTheme = 'dark';
        } else if (currentTheme === 'dark') {
            newTheme = 'light';
        }
        htmlBlock.classList.remove(currentTheme);
        htmlBlock.classList.add(newTheme);
        saveTheme ? localStorage.setItem('user-theme', newTheme) : null;
    }

}

"use strict"

const weatherBlock = document.querySelector('#weather');

async function loadWeather(e) {
    weatherBlock.innerHTML = `
    <div class="weather__loading">
        <img src="./img/Loading.gif" alt="Loading...">
    </div> ` ;


    const server = 'https://api.openweathermap.org/data/2.5/weather?units=metric&q=Odessa&appid=74880e3eb01e3a60d85ae65d0348f32b';
    const response = await fetch(server, {
        method: 'GET',
    });
    const responseResult = await response.json();

    if (response.ok) {
        getWeather(responseResult);
    } else {
        weatherBlock.innerHTML = responseResult.message;
    }
}

function getWeather(data) {
    const location = data.name;
    const temp = Math.round(data.main.temp);
    const weatherStatus = data.weather[0].main;
    const weatherIcon = data.weather[0].icon;

    const template = `   
  <div class="weather__main">
    <div class="weather__city">
        ${location}
    </div>
    <div class="weather__status">
        ${weatherStatus}
    </div>
  </div>
  <div class="weather__icon">
    <img src="http://openweathermap.org/img/w/${weatherIcon}.png" alt="${weatherStatus}">
</div>
</div>
<div class="weather__temp">
  ${temp}
</div>`;

    weatherBlock.innerHTML = template;

}

if (weatherBlock) {
    loadWeather();
}