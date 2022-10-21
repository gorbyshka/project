window.onload = function () {
    let preloader = document.getElementById('preloader');
    preloader.classList.add('hide-preloader');
    setInterval(function () {
        preloader.classList.add('preloader-hidden');
    }, 800);
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
    }, 5000);
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
    catalogtitle = document.querySelector(".catalog-title"),
    blackfriday = document.querySelector(".black-friday"),
    cards = document.querySelector(".cards"),
    cards2 = document.querySelector(".cards2"),
    cards3 = document.querySelector(".cards3"),
    cards4 = document.querySelector(".cards4"),
    cards5 = document.querySelector(".cards5"),
    cards6 = document.querySelector(".cards6"),
    cards7 = document.querySelector(".cards7"),
    cards8 = document.querySelector(".cards8"),
    cards9 = document.querySelector(".cards9"),
    cards10 = document.querySelector(".cards10"),
    cards11 = document.querySelector(".cards11"),
    cards12 = document.querySelector(".cards12"),
    shop = document.querySelector(".shop"),
    text1 = document.querySelector(".text1"),
    whyarewe = document.querySelector(".why-are-we"),
    text2 = document.querySelector(".text2"),
    priority2 = document.querySelector(".priority2"),
    priority3 = document.querySelector(".priority3"),
    priority4 = document.querySelector(".priority4"),
    text3 = document.querySelector(".text3"),
    text4 = document.querySelector(".text4"),
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
        catalogtitle.textContent = data[attr].catalogtitle
        blackfriday.textContent = data[attr].blackfriday
        cards.textContent = data[attr].cards
        cards2.textContent = data[attr].cards2
        cards3.textContent = data[attr].cards3
        cards4.textContent = data[attr].cards4
        cards5.textContent = data[attr].cards5
        cards6.textContent = data[attr].cards6
        cards7.textContent = data[attr].cards7
        cards8.textContent = data[attr].cards8
        cards9.textContent = data[attr].cards9
        cards10.textContent = data[attr].cards10
        cards11.textContent = data[attr].cards11
        cards12.textContent = data[attr].cards12
        shop.textContent = data[attr].shop
        text1.textContent = data[attr].text1
        whyarewe.textContent = data[attr].whyarewe
        text2.textContent = data[attr].text2
        priority2.textContent = data[attr].priority2
        priority3.textContent = data[attr].priority3
        priority4.textContent = data[attr].priority4
        text3.textContent = data[attr].text3
        text4.textContent = data[attr].text4
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
        catalogtitle: "Каталог Тканин",
        blackfriday: "Чорна п'ятниця -50%",
        cards: "ШОВК САТИН ВІРМАНІ ПРИНТ",
        cards2: "ШОВК САТИН ВІРМАНІ ПРИНТ",
        cards3: "ШОВК САТИН ВІРМАНІ ПРИНТ",
        cards4: "ШОВК САТИН ВІРМАНІ ПРИНТ",
        cards5: "ШОВК САТИН ВІРМАНІ ПРИНТ",
        cards6: "ШОВК САТИН ВІРМАНІ ПРИНТ",
        cards7: "ШОВК САТИН ВІРМАНІ ПРИНТ",
        cards8: "ШОВК САТИН ВІРМАНІ ПРИНТ",
        cards9: "ШОВК САТИН ВІРМАНІ ПРИНТ",
        cards10: "ШОВК САТИН ВІРМАНІ ПРИНТ",
        cards11: "ШОВК САТИН ВІРМАНІ ПРИНТ",
        cards12: "ШОВК САТИН ВІРМАНІ ПРИНТ",
        shop:"Інтернет магазин тканин",
        text1:"У період масового виробництва дедалі більше рідкістю стають вироби, у яких відчувається індивідуальність. Ви не хочете носити одяг, зшитий поточним методом, без урахування ваших потреб та переваг? Втомилися від стандартних меблів та штор у своєму будинку? Ця проблема вирішується. І одяг, і штори, і оббивку для м'яких меблів, і постільна білизна можна пошити на замовлення. А почати слід із вибору тканини. Саме від неї багато в чому залежить, чи вийде вишитий виріб таким, як ви задумали. Наш інтернет магазин тканин може запропонувати варіанти практично на будь-який випадок життя. У нас зібрано все найпопулярніше, тому вам більше не потрібно відвідувати різні торгові точки в пошуках оптимального вирішення своєї проблеми. Коли б вам не знадобилися тканини, інтернет-магазин відкрито для вас. Ми працюємо не лише по Одесі. Перебуваючи у будь-якій точці України, можна купити тканину онлайн у нашому магазині.",
        whyarewe:"Чому ми?",
        text2:"У нашому магазині на вас чекають атлас і сатин, гіпюр і мереживо, плащово-курткові, пальтові та костюмні тканини, штучна шкіра та хутро, шовку, шифони, джинс та багато іншого. Тут можна підібрати інтер'єрні тканини, які перетворять ваш будинок, допоможуть створити в ньому саме ту атмосферу, про яку ви мрієте. Не так вже й важко знайти в Україні магазин, який пропонує купити тканини через інтернет в роздріб та гуртом. Чому варто купувати у нас?",
        priority2: "У каталозі представлено понад 20 000 позицій тканин.",
        priority3: "Ми прагнемо забезпечити високу якість сервісу та при цьому зробити наш товар доступним за ціною.",
        priority4: "Передбачено декілька зручних варіантів оплати та доставки.",
        text3:"Незважаючи на різноманітність товару, позаздрити якому може практично будь-який магазин України, купити тканина оптом чи в роздріб у нас ви зможете, не докладаючи зусиль. У каталозі передбачена можливість сортування за типами матеріалу, забарвленням, складом, дизайном та регіоном. виробництва. Задавши необхідні параметри, ви дуже швидко знайдете саме те, що вас цікавить.",
        text4:"Ми запрошуємо вас розпочати подорож у світі тканин. Сподіваємося, що, якось здійснивши покупку, ви будете повертатися сюди знову і знову.",
        footertext1:"ДІЗНАЙТЕСЯ ПЕРШИМИ ПРО НОВІ ТРЕНДИ, НОВИНКИ, ЗНИЖКИ",
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

const popupLinks = document.querySelectorAll('.popup-link');
const body = document.querySelector('body');
const lockPadding = document.querySelectorAll('.lock-padding');

let unlock = true;

const timeout = 800;

if (popupLinks.length > 0) {
    for (let index = 0; index < popupLinks.length; index++) {
        const popupLink = popupLinks[index];
        popupLink.addEventListener("click", function (e) {
            const popupName = popupLink.getAttribute('href').replace('#', '');
            const curentPopup = document.getElementById(popupName);
            popupOpen(curentPopup);
            e.preventDefault();
        })
    }
}
const popupCloseIcon = document.querySelectorAll('.close-popup');
if (popupCloseIcon.length > 0) {
    for (let index = 0; index < popupCloseIcon.length; index++) {
        const el = popupCloseIcon[index];
        el.addEventListener('click', function (e) {
            popupClose(el.closest('.popup'));
            e.preventDefault();
        });
    }
}

function popupOpen(curentPopup) {
    if (curentPopup && unlock) {
        const popupActive = document.querySelector('.popup.open');
        if (popupActive) {
            popupClose(popupActive, false);
        } else {
            bodyLock();
        }
        curentPopup.classList.add('open');
        curentPopup.addEventListener("click", function (e) {
            if (!e.target.closest('.popup__content')) {
                popupClose(e.target.closest('.popup'));
            }
        });
    }
}
function popupClose(popupActive, doUnlock = true) {
    if (unlock) {
        popupActive.classList.remove('open');
        if (doUnlock) {
            bodyUnLock();
        }
    }
}

function bodyLock() {
    const lockPaddingValue = window.innerWidth - document.querySelector('.catalog').offsetWidth + 'px';

    if (lockPadding.length > 0) {
        for (let index = 0; index < lockPadding.length; index++) {
            const el = lockPadding[index];
            el.style.paddingRight = lockPaddingValue;
        }
    }
    body.style.paddingRight = lockPaddingValue;
    body.classList.add('lock');

    unlock = false;
    setTimeout(function () {
        unlock = true;
    }, timeout);
}

function bodyUnLock() {
    setTimeout(function () {
        if (lockPadding.length > 0) {
            for (let index = 0; index < lockPadding.length; index++) {
                const el = lockPadding[index];
                el.style.paddingRight = '0px';
            }
        }
        body.style.paddingRight = '0px';
        body.classList.remove('lock');
    }, timeout);

    unlock = false;
    setTimeout(function () {
        unlock = true;
    }, timeout);
}

document.addEventListener('keydown', function (e) {
    if (e.which === 27) {
        const popupActive = document.querySelector('.popup.open');
        popupClose(popupActive);
    }
});

$(document).ready(function () {
    $('.slider').slick({
        arrows: true,
        dots: true,
        slidesToShow: 3,
        autoplay: true,
        speed: 1000,
        autoplaySpeed: 800,
        responsive: [
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 2
                }
            },
            {
                breakpoint: 550,
                settings: {
                    slidesToShow: 1
                }
            }
        ]
    });
});


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
