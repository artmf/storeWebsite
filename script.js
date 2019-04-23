/** Add any JavaScript you need to this file. */
var cardArr = [];
var check = false;

//card constructor
function Cards(type, img, name, size, price, description) {
    this.type = type;
    this.img = img;
    this.name = name;
    this.size = size; //make sure to send and array of sizes
    this.price = price;
    this.description = description;
}

Cards.prototype.createCard = function() {
    var cardDiv = document.querySelector(`#cardsDiv`);

    var card = document.createElement(`div`);
    card.classList.add(`card`);
    card.style = `width: 10rem;`;

    var img = document.createElement(`img`);
    img.src = `images/` + this.img;
    img.classList.add(`card-img-top`);
    card.appendChild(img);

    var cardBody = document.createElement(`div`);
    cardBody.classList.add(`card-body`);

    var name = document.createElement(`h5`);
    name.classList.add(`card-title`);
    name.innerHTML = this.name;
    cardBody.appendChild(name);

    var type = document.createElement(`h6`);
    type.innerHTML = this.type;
    cardBody.appendChild(type);

    this.size.forEach(function(element) {
        var size = document.createElement(`input`);

        size.type = `button`;
        size.value = element;
        cardBody.appendChild(size);
    });

    var price = document.createElement(`p`);
    price.classList.add(`card-text`);
    price.innerHTML = `$` + this.price;
    cardBody.appendChild(price);

    var description = document.createElement(`p`);
    description.innerHTML = this.description;
    cardBody.appendChild(description);

    var addBtn = document.createElement(`a`);
    addBtn.href = `#`;
    addBtn.classList.add(`btn`, `btn-primary`);
    addBtn.innerHTML = "Add to Cart";
    cardBody.appendChild(addBtn);

    var heart = document.createElement(`i`);
    heart.classList.add(`heart`, `far`, `fa-heart`, `color`, `btn`);
    heart.type = `Favourite`;
    cardBody.appendChild(heart);

    card.appendChild(cardBody);
    cardDiv.appendChild(card);
};

//Clear cards
function clear() {
    var cardDiv = document.querySelector(`#cardsDiv`);

    cardDiv.innerHTML = ``;
}

/*//Shopping cart hover div
var cart = document.querySelector("#cart");
var cartUl = document.querySelector("#cartUl");

var remCartHidden = function() {
    cartUl.classList.remove(`hidden`);
    console.log(`test`);
};

var addCartHidden = function() {
    cartUl.classList.add(`hidden`);
};

cart.addEventListener(`mouseover`, remCartHidden);
cart.addEventListener("mouseout", addCartHidden);

//add to cart
var cartButton = document.querySelector(`.cartButton`)

var addCart = function(e) {
    e.preventDefault();
    e.stopPropagation();
    var h = e.target;

    if (h.classList.contains(`far`)) {
        h.classList.remove(`far`);
        h.classList.add(`fas`);
    } else if (h.classList.contains(`fas`)) {
        h.classList.remove(`fas`);
        h.classList.add(`far`);
    }
};*/

//Home button
var home = document.querySelector(`#home`);

home.addEventListener(`click`, window.onload);

//All
var all = document.querySelector(`#all`);

function clickAll(e) {
    e.preventDefault();
    clear();

    if (check) {
        //check is set to true when it is clicked for the first time by any of "Select by Type" link
        takeClassOut(); //remove the last clicked style
    }

    cardArr.forEach(function(element) {
        element.createCard();
    });

    all.classList.add(`clicked`);
    heartEvent();
    check = true;
}

all.addEventListener(`click`, clickAll);

//Woman sorting
var woman = document.querySelector(`#woman`);

function womanSort(e) {
    e.preventDefault();
    clear();

    if (check) {
        takeClassOut(); //remove the last clicked style
    }

    cardArr.forEach(function(element) {
        if (element.type === `Woman` || element.type === `Unisex`) {
            element.createCard();
        }
    });

    woman.classList.add(`clicked`);
    heartEvent();
    check = true;
}

woman.addEventListener(`click`, womanSort);

//Men sorting
var men = document.querySelector(`#men`);

function menSort(e) {
    e.preventDefault();
    clear();

    if (check) {
        takeClassOut(); //remove the last clicked style
    }

    cardArr.forEach(function(element) {
        if (element.type === `Men` || element.type === `Unisex`) {
            element.createCard();
        }
    });

    men.classList.add(`clicked`);
    heartEvent();
    check = true;
}

men.addEventListener(`click`, menSort);

//Card creation
//Cards(type, img, name, size, price)
cardArr = [];

var card1 = new Cards(
    `Unisex`,
    `nike89s.jpg`,
    `Nike 89s`,
    [8, 9, 10, 11],
    89.99,
    `White model. These shoes are ideal for all day-use`
);
card1.createCard();
cardArr.push(card1);

var card2 = new Cards(
    `Woman`,
    `arezostyle.jpg`,
    `Arezo Style`,
    [6, 7, 9, 10],
    109.99,
    `Black Arezo Style was made for formal and casual use. All leather`
);
card2.createCard();
cardArr.push(card2);

var card3 = new Cards(
    "Woman",
    `carmen.jpg`,
    `Carmen`,
    [6, 7, 8, 9, 10],
    109.99,
    `90 mm thick heel. Extra Comfortable`
);
card3.createCard();
cardArr.push(card3);

var card4 = new Cards(
    "Woman",
    `lacedown.jpg`,
    `Lace Down`,
    [5, 6, 8, 9],
    75,
    `100 mm medium heel. All leather inside which makes it comfortable`
);
card4.createCard();
cardArr.push(card4);

var card5 = new Cards(
    "Woman",
    `nikeair.jpg`,
    `Nike Air`,
    [5, 6, 7, 8, 9],
    100,
    `New Nike Air. Extra technology for better comfort`
);
card5.createCard();
cardArr.push(card5);

var card6 = new Cards(
    "Unisex",
    `allstarconverse.jpg`,
    `All Star Converse`,
    [5, 7, 9, 10, 11],
    69.99,
    `Classic All Star. High ankle style`
);
card6.createCard();
cardArr.push(card6);

var card7 = new Cards(
    "Men",
    `raphael.jpg`,
    `Raphael`,
    [8, 10, 11, 12],
    119.99,
    `Raphael brown social shoes are made of leather. New Insole system that improves comfort`
);
card7.createCard();
cardArr.push(card7);

var card8 = new Cards(
    "Men",
    `adidasrocker.jpg`,
    `Adidas Rocker`,
    [8, 9, 10, 11, 12],
    79.99,
    `New Adidas Rocker. All day use`
);
card8.createCard();
cardArr.push(card8);

var card9 = new Cards(
    "Men",
    `nikefree.jpg`,
    `Nike Free`,
    [8, 9, 11, 12],
    99,
    `A new line of Nike Free shoes. Lighter and better. Ideal for running`
);
card9.createCard();
cardArr.push(card9);

var card10 = new Cards(
    "Unisex",
    `rennerstealth.jpg`,
    `Renner Stealth`,
    [6, 7, 9, 10, 11],
    49.99,
    `Renner shoes are known for their durability and low price. Extra comfort`
);
card10.createCard();
cardArr.push(card10);

heartEvent();

//Solid heart hover
function heartEvent() {
    var heart = document.querySelectorAll(`.heart`);

    var solidHeart = function(e) {
        e.preventDefault();
        e.stopPropagation();
        var h = e.target;

        if (h.classList.contains(`far`)) {
            h.classList.remove(`far`);
            h.classList.add(`fas`);
        } else if (h.classList.contains(`fas`)) {
            h.classList.remove(`fas`);
            h.classList.add(`far`);
        }
    };

    heart.forEach(function(element) {
        element.addEventListener(`click`, solidHeart);
    });
}

//Take class out
function takeClassOut() {
    all.classList.remove(`clicked`);
    woman.classList.remove(`clicked`);
    men.classList.remove(`clicked`);
}
