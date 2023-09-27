// данный метод вернёт входящие данные в виде строки
function dataToJson(data) {
    return JSON.stringify(data);
};

// данный метод вернёт входящую строку в виде данных
function jsonToData(data) {
    return JSON.parse(data);
};

// данный метод вернёт данные из LocalStorage
function getCartData() {
    return localStorage.getItem('cartData');
};

// данный метод запишет наши данные в LocalStorage
function setCartData(data) {
    localStorage.setItem('cartData', data);
};

// метод addToCart будет получать в качестве параметра объект товара
// объект будет иметь два ключа id и name
function addToCart(product) {
    // первым шагом будем получать текущее состояние корзины
    let cart = getCartData();

    // в случае, если данных по ключу в LocalStorage нет, то cart будет содержать null
    // если cart имеет null, записываем туда пустой массив
    cart = cart ? jsonToData(cart) : [];

    // добавим продукт в список корзины и запишем в LocalStorage
    cart.push(product);
    setCartData(dataToJson(cart));
}

// метод удаляющий элемент из корзины
// в качестве параметра получает id товара
function removeFromCart(id) {
    // получим состояние корзины и преобразуем JSON в JavaScript данные
    let cart = jsonToData(getCartData());
    
    // создадим новый список корзины, в который перенесём все данные
    // кроме удаляемого элемента
    let newCart = [];
    for (let i = 0; i < cart.length; i++) {
        if (cart[i].id != id) {
            newCart.push(cart[i])
        }
    }

    // проведём преобразование новой карзины в JSON и запишем в LocalStorage
    setCartData(dataToJson(newCart));
}

