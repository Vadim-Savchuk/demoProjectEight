// ===============Nav================
function handlerMenu() {
    const burgerButton = document.querySelector('.burger');
    const nav          = document.querySelector('.nav');
    const navLinks     = document.querySelectorAll('.nav__link');

    burgerButton.addEventListener('click', () => {
        burgerButton.classList.toggle('active');

        if (burgerButton.classList.contains('active')) {
            nav.classList.add('active');
            document.body.classList.add('hiden');
        } else {
            nav.classList.remove('active');
            document.body.classList.remove('hiden');
        }

        navLinks.forEach(link => {
            link.addEventListener("click", () => {
                nav.classList.remove('active');
                document.body.classList.remove('hiden');
                burgerButton.classList.remove('active');
            })
        });
    });
}
handlerMenu();

//==============Active menu==========
function activeMenu() {
    const sections = document.querySelectorAll('section');
    const menuLinks = document.querySelectorAll('.nav__link');

    for (const section of sections) {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.clientHeight;

        if (window.scrollY >= sectionTop - sectionHeight / 3) {
            const sectionId = section.getAttribute('id');
            const matchingLink = document.querySelector(`.nav__link[href="#${sectionId}"]`);

            if (matchingLink) {
                menuLinks.forEach((link) => {
                    link.classList.remove('nav__link--active');
                });
                matchingLink.classList.add('nav__link--active');
            }

        } else {
            break;
        }
    }
}
window.addEventListener('scroll', activeMenu);

// ============Header fixed==========
function headerFixed() {
    const header = document.querySelector('.header');
    const searchElem = document.querySelector('.search');

    window.onscroll = () => {
        if (window.scrollY > 200) {
            header.classList.add('sticky')
            searchElem.classList.add('stickySticky')

        } else {
            header.classList.remove('sticky')
            searchElem.classList.remove('stickySticky')
        }
    }
}
headerFixed();
// ==========Hero video==============
function heroVideo() {
    const buttonPlay  = document.querySelector('.button-play');
    const videoParent = document.querySelector('.video-box');

    buttonPlay.addEventListener('click', () => {
        document.body.classList.add('hiden');

        videoParent.innerHTML = `
            <div class="video-offer">
                <div class="video-player">
                    <div class="video">
                        <iframe
                            src="https://www.youtube.com/embed/pIDwLJSZ7V0?si=jJYzan7f1AnJ0u3A"
                            title="YouTube video player" frameborder="0"
                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                            allowfullscreen>
                        </iframe>
                    </div>
                    <button class="close-overlay">&#215;</button>
                </div>
            </div>`;
    
        videoParent.appendChild()
        
    });

    videoParent.addEventListener('click', e => {
        videoParent.innerHTML = '';
        document.body.classList.remove('hiden');
    });

}

heroVideo();
// =============Slider===============
const swiper = new Swiper('.swiper', {

    direction: 'horizontal',
    slidesPerView: 2,
    spaceBetween: 40,
    slidesPerGroup: 2,

    keyboard: {
        enable: true,
    },

    pagination: {
        el: '.slider__people',
        type: 'fraction',
        renderFraction: function (currentClass, totalClass) {
            return '<span class="' + currentClass + '"></span>' +
                '/' +
                '<span class="' + totalClass + '"></span>' +
                ' People'
        }
    },

    navigation: {
        nextEl: '.slider__button-next',
        prevEl: '.slider__button-prev ',
    },

    scrollbar: {
        el: '.slider__row',
    },

    breakpoints: {
        320: {
            slidesPerView: 1,
            spaceBetween: 20
        },
        768: {
            slidesPerView: 2,
        }
    }
});
// ===========Calendar===========
function calendarChanges() {
    const dateInput     = document.querySelector('#date');
    const calendarOffer = document.querySelector('.calendar-offer');
    const closeCalendar = document.querySelector('.closse-calendar');

    dateInput.addEventListener("focus", () => {
        calendarOffer.classList.add('active')
    });

    closeCalendar.addEventListener('click', () => {
        calendarOffer.classList.remove('active')
    });

    var Calendar = function (t) {
        this.divId = t.RenderID ? t.RenderID : '[data-render="calendar"]', this.DaysOfWeek = t.DaysOfWeek ? t.DaysOfWeek : ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"], this.Months = t.Months ? t.Months : ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];
        var e = new Date;
        this.CurrentMonth = e.getMonth(), this.CurrentYear = e.getFullYear();
        var r = t.Format;
        this.f = "string" == typeof r ? r.charAt(0).toUpperCase() : "M"
    };
    Calendar.prototype.nextMonth = function () {
        11 == this.CurrentMonth ? (this.CurrentMonth = 0, this.CurrentYear = this.CurrentYear + 1) : this.CurrentMonth = this.CurrentMonth + 1, this.divId = '[data-active="false"] .render', this.showCurrent()
    }, Calendar.prototype.prevMonth = function () {
        0 == this.CurrentMonth ? (this.CurrentMonth = 11, this.CurrentYear = this.CurrentYear - 1) : this.CurrentMonth = this.CurrentMonth - 1, this.divId = '[data-active="false"] .render', this.showCurrent()
    }, Calendar.prototype.previousYear = function () {
        this.CurrentYear = this.CurrentYear - 1, this.showCurrent()
    }, Calendar.prototype.nextYear = function () {
        this.CurrentYear = this.CurrentYear + 1, this.showCurrent()
    }, Calendar.prototype.showCurrent = function () {
        this.Calendar(this.CurrentYear, this.CurrentMonth)
    }, Calendar.prototype.checkActive = function () {
        1 == document.querySelector(".months").getAttribute("class").includes("active") ? document.querySelector(".months").setAttribute("class", "months") : document.querySelector(".months").setAttribute("class", "months active"), "true" == document.querySelector(".month-a").getAttribute("data-active") ? (document.querySelector(".month-a").setAttribute("data-active", !1), document.querySelector(".month-b").setAttribute("data-active", !0)) : (document.querySelector(".month-a").setAttribute("data-active", !0), document.querySelector(".month-b").setAttribute("data-active", !1)), setTimeout(function () {
            document.querySelector(".calendar .header").setAttribute("class", "header active")
        }, 200), document.querySelector("body").setAttribute("data-theme", this.Months[document.querySelector('[data-active="true"] .render').getAttribute("data-month")].toLowerCase())
    }, Calendar.prototype.Calendar = function (t, e) {
        "number" == typeof t && (this.CurrentYear = t), "number" == typeof t && (this.CurrentMonth = e);
        var r = (new Date).getDate(),
            n = (new Date).getMonth(),
            a = (new Date).getFullYear(),
            o = new Date(t, e, 1).getDay(),
            i = new Date(t, e + 1, 0).getDate(),
            u = 0 == e ? new Date(t - 1, 11, 0).getDate() : new Date(t, e, 0).getDate(),
            s = "<span>" + this.Months[e] + " &nbsp; " + t + "</span>",
            d = '<div class="table">';
        d += '<div class="row head">';
        for (var c = 0; c < 7; c++) d += '<div class="cell">' + this.DaysOfWeek[c] + "</div>";
        d += "</div>";
        for (var h, l = dm = "M" == this.f ? 1 : 0 == o ? -5 : 2, v = (c = 0, 0); v < 6; v++) {
            d += '<div class="row">';
            for (var m = 0; m < 7; m++) {
                if ((h = c + dm - o) < 1) d += '<div class="cell disable">' + (u - o + l++) + "</div>";
                else if (h > i) d += '<div class="cell disable">' + l++ + "</div>";
                else {
                    d += '<div class="cell' + (r == h && this.CurrentMonth == n && this.CurrentYear == a ? " active" : "") + '"><span>' + h + "</span></div>", l = 1
                }
                c % 7 == 6 && h >= i && (v = 10), c++
            }
            d += "</div>"
        }
        d += "</div>", document.querySelector('[data-render="month-year"]').innerHTML = s, document.querySelector(this.divId).innerHTML = d, document.querySelector(this.divId).setAttribute("data-date", this.Months[e] + " - " + t), document.querySelector(this.divId).setAttribute("data-month", e)

        document.querySelector(this.divId).addEventListener("click", function (event) {
            if (event.target.tagName === "SPAN" && !event.target.classList.contains("disable")) {
                const selectedDate = new Date(
                    t,
                    e,
                    parseInt(event.target.textContent)
                );

                function addZero(num) {
                    if (num >= 0 && num <= 9) {
                        return '0' + num;
                    } else {
                        return num;
                    }
                }

                const day = selectedDate.getDate();
                const month = selectedDate.getMonth() + 1; // Додайте 1, оскільки місяці в JavaScript починаються з 0
                const year = selectedDate.getFullYear();

                const value = `${addZero(day)}.${addZero(month)}.${year}`

                const input = document.querySelector('#date');
                input.value = value;
            }
        }.bind(this));

    }, window.onload = function () {
        var t = new Calendar({
            RenderID: ".render-a",
            Format: "M"
        });
        t.showCurrent(), t.checkActive();
        var e = document.querySelectorAll(".header [data-action]");
        for (i = 0; i < e.length; i++) e[i].onclick = function () {
            if (document.querySelector(".calendar .header").setAttribute("class", "header"), "true" == document.querySelector(".months").getAttribute("data-loading")) return document.querySelector(".calendar .header").setAttribute("class", "header active"), !1;
            var e;
            document.querySelector(".months").setAttribute("data-loading", "true"), this.getAttribute("data-action").includes("prev") ? (t.prevMonth(), e = "left") : (t.nextMonth(), e = "right"), t.checkActive(), document.querySelector(".months").setAttribute("data-flow", e), document.querySelector('.month[data-active="true"]').addEventListener("webkitTransitionEnd", function () {
                document.querySelector(".months").removeAttribute("data-loading")
            }), document.querySelector('.month[data-active="true"]').addEventListener("transitionend", function () {
                document.querySelector(".months").removeAttribute("data-loading")
            })
        }
    };
}

calendarChanges()

let productsList = [];
let buyList = [];

// ===================Search active===================
function searchActive() {
    const searchElem = document.querySelector('.search');
    const headerButtonSearch = document.querySelector('.header__button-search');

    headerButtonSearch.addEventListener('click', () => {
        searchElem.classList.toggle('active')
        headerButtonSearch.classList.toggle('active')
    })
}
searchActive()

// ===================Get Products====================
function getProducts() {
    const data = [
        {
            id: 1,
            name: 'BRAZIL COFFEE GRED',
            rating: 4,
            price: 320,
            oldPrice: 358,
            img: 'https://gitu.net/gituimg/free-psd-mockups-download/Free-Kraft-Paper-Standing-Coffee-Bag-Mockup-PSD-Set-1.jpg'
        },
        {
            id: 2,
            name: 'BRAZIL COFFEE RED',
            rating: 4,
            price: 320,
            oldPrice: 358,
            img: 'https://gitu.net/gituimg/free-psd-mockups-download/Free-Kraft-Paper-Standing-Coffee-Bag-Mockup-PSD-Set-1.jpg'
        },
        {
            id: 3,
            name: 'BRAZIL COFFEE GREEN',
            rating: 4,
            price: 320,
            oldPrice: 358,
            img: 'https://gitu.net/gituimg/free-psd-mockups-download/Free-Kraft-Paper-Standing-Coffee-Bag-Mockup-PSD-Set-1.jpg'
        },
    ]

    return productsList = data;
}
getProducts()

// =========Create popular list in DOM================
function popularProducts() {
    const domPopularList = document.querySelector('.popular__list');

    for (let product of productsList) {
        const domLiElem = document.createElement('li');
        domLiElem.classList.add('popular__elem');
        domLiElem.dataset.id = product.id;
        domLiElem.innerHTML = `
        <img class="popular__img" src="./assets/img/bag-cofe.jpg" alt="Our Coffee">
            <div class="popular__body">
                <div class="popular__rating accent">
                    <strong class="popular__name">Coffee</strong>
                    <span>
                        <svg width="18" height="17" viewBox="0 0 18 17" fill="none"
                            xmlns="http://www.w3.org/2000/svg">
                            <path d="M9 0.666687L11.575 5.88335L17.3333 6.72502L13.1667 10.7834L14.15 16.5167L9 13.8084L3.85 16.5167L4.83333 10.7834L0.666666 6.72502L6.425 5.88335L9 0.666687Z"
                                fill="#C99E71" 
                            <path/>
                        </svg>
                    </span>
                    <span>
                        <svg width="18" height="17" viewBox="0 0 18 17" fill="none"
                            xmlns="http://www.w3.org/2000/svg">
                            <path d="M9 0.666687L11.575 5.88335L17.3333 6.72502L13.1667 10.7834L14.15 16.5167L9 13.8084L3.85 16.5167L4.83333 10.7834L0.666666 6.72502L6.425 5.88335L9 0.666687Z"
                                fill="#C99E71" />
                        </svg>
                    </span>
                    <span>
                        <svg width="18" height="17" viewBox="0 0 18 17" fill="none"
                            xmlns="http://www.w3.org/2000/svg">
                            <path d="M9 0.666687L11.575 5.88335L17.3333 6.72502L13.1667 10.7834L14.15 16.5167L9 13.8084L3.85 16.5167L4.83333 10.7834L0.666666 6.72502L6.425 5.88335L9 0.666687Z"
                                fill="#C99E71" />
                        </svg>
                    </span>
                    <span>
                        <svg width="18" height="17" viewBox="0 0 18 17" fill="none"
                            xmlns="http://www.w3.org/2000/svg">
                            <path d="M9 0.666687L11.575 5.88335L17.3333 6.72502L13.1667 10.7834L14.15 16.5167L9 13.8084L3.85 16.5167L4.83333 10.7834L0.666666 6.72502L6.425 5.88335L9 0.666687Z"
                                fill="#C99E71" />
                        </svg>
                    </span>
                    <span>
                        <svg width="20" height="19" viewBox="0 0 20 19" fill="none"
                            xmlns="http://www.w3.org/2000/svg">
                            <path d="M10 1.66669L12.575 6.88335L18.3333 7.72502L14.1667 11.7834L15.15 17.5167L10 14.8084L4.85 17.5167L5.83333 11.7834L1.66666 7.72502L7.425 6.88335L10 1.66669Z"
                                stroke="#C99E71" stroke-width="2" stroke-linecap="round"
                                stroke-linejoin="round" />
                        </svg>
                    </span>
                </div>
                <a class="section-subtitle popular__section-subtitle" href="#">${product.name}</a>
                <div class="popular__price">
                    Price - 
                    <span class="accent">$${product.price}.00/</span>
                    <span class="popular__sell">$${product.oldPrice}</span>
                </div>
                <button class="popular__button">
                    <span>
                        <svg width="24" height="24" viewBox="0 0 24 24" fill="none"
                            xmlns="http://www.w3.org/2000/svg">
                            <path
                                d="M6 2L3 6V20C3 20.5304 3.21071 21.0391 3.58579 21.4142C3.96086 21.7893 4.46957 22 5 22H19C19.5304 22 20.0391 21.7893 20.4142 21.4142C20.7893 21.0391 21 20.5304 21 20V6L18 2H6Z"
                                stroke="white" stroke-width="2" stroke-linecap="round"
                                stroke-linejoin="round" />
                            <path d="M3 6H21" stroke="white" stroke-width="2" stroke-linecap="round"
                                stroke-linejoin="round" />
                            <path
                                d="M16 10C16 11.0609 15.5786 12.0783 14.8284 12.8284C14.0783 13.5786 13.0609 14 12 14C10.9391 14 9.92172 13.5786 9.17157 12.8284C8.42143 12.0783 8 11.0609 8 10"
                                stroke="white" stroke-width="2" stroke-linecap="round"
                                stroke-linejoin="round" />
                        </svg>
                    </span>
                    Add to cart
                </button>
                </div>`

        domPopularList.appendChild(domLiElem)
    }

    changePopularButtuns();
}
popularProducts()

// =========Change popular buttons====================
function changePopularButtuns() {
    const popularButtons = document.querySelectorAll('.popular__button');
    popularButtons.forEach(button => {
        button.addEventListener('click', (event) => {
            const card = event.target.closest('.popular__elem')

            addToCard(card.dataset.id);
            createListCard();
            notificationFromBasket();
        })
    })
}

// ===========Create basket list in DOM===============
function createListCard() {

    const basketOffer = document.querySelector('.basket');
    basketOffer.dataset.show = buyList.length > 0 ? 'show' : 'none';

    const basketList = document.querySelector('.basket__list');
    basketList.innerHTML = '';

    buyList.slice(0, 5).forEach(elem => {
        const li = document.createElement('li');
        li.classList.add('basket__elem');
        li.innerHTML = `
                                <h5 class="basket__product">${elem.name}</h5>
                                <div class="basket__quantity">1 X ${elem.price}$</div>
                                <button class="basket__delate" data-id='${elem.id}'>&#215;</button>
                                `
        basketList.appendChild(li);
    });

    changeBasketButtons();
}

// ======Change basket buttons delate=================
function changeBasketButtons() {
    const basketDelateCard = document.querySelectorAll('.basket__delate');
    basketDelateCard.forEach((button, index) => {
        button.addEventListener('click', () => {
            delateElemFromCard(index)
        });
    })
}

// ===============Add elem to card====================
function addToCard(id) {
    console.log(buyList);

    let buy = productsList.find(elem => elem.id == id);

    buyList.push(buy)
}

// ================Delate from card===================
function delateElemFromCard(indexElem) {
    buyList = buyList.filter((_, index) => index != indexElem);
    createListCard();
    notificationFromBasket();
}

// ==Notification about new product in basket`s list==
function notificationFromBasket() {
    const basketAlarm = document.querySelector('.basket__alarm');
    basketAlarm.dataset.show = buyList.length > 0 ? 'show' : 'none';
}