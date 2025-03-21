const pInput = document.getElementById('product');
const qInput = document.getElementById('quantity');
const addBtn = document.getElementById('add');



addBtn.addEventListener('click', ()=>{
    const pValue = pInput.value;
    const qValue = qInput.value;

    pInput.value='';
    qInput.value='';
    renderCart(pValue, qValue);
    saveToLocalStorage(pValue, qValue);
})

function renderCart(pValue, qValue) {
    const cartDiv = document.getElementById('renderedProducts');
    const iProduct = document.createElement('div');
    
    iProduct.innerText=`
    ${pValue} : ${qValue}
    `
    cartDiv.appendChild(iProduct);
}

function getStoredCart() {
    let cart = {};
    const storedCart = localStorage.getItem('cart');
    if (storedCart) {
        cart = JSON.parse(storedCart);
    }
    return cart;
}

function saveToLocalStorage(pValue, qValue) {
    const cart = getStoredCart();
    cart[pValue] = qValue;
    //cart[pValue] - value inside a variable need to set with [] notation

    const stringedCart = JSON.stringify(cart);
    localStorage.setItem('cart', stringedCart)
}

function renderFromLocalStorage() {
    const cart = getStoredCart();
    for (const product in cart) {
        const quantity = cart[product];//Inside object to get a value of a property-  if property value stays inside a variable, [] notation needs to be used
        renderCart(product, quantity);
    }
}

renderFromLocalStorage()