//event handler and variable declaration
const div1 = document.getElementById('first');
const div2 = document.getElementById('second');
const div3 = document.getElementById('third');

const img = document.getElementById('img');
const description = document.getElementById('description');
const price = document.getElementById('price');

const free=document.getElementById('free');
const express=document.getElementById('express');
const shippingField= document.getElementById('shipping');
const total= document.getElementById('total');

// focus function
function isSelected(element) {
    return element.classList.contains('selected');
}

//event listener
div1.addEventListener('click', function () {
    if (!isSelected(div1)) {
        div1.classList.add('selected');
        div2.classList.remove('selected');
        div3.classList.remove('selected');
    }
    img.src = 'images/1.jpg';
    description.innerText = `First-Lorem ipsum dolor sit, amet consectetur adipisicing elit. Facere eligendi doloribus         blanditiis atque quae iste odio ducimus impedit qui consectetur commodi, architecto id earum quaerat!`;
    price.innerText = '750';
    updateTotal()
});
div2.addEventListener('click', function () {
    if (!isSelected(div2)) {
        div1.classList.remove('selected');
        div2.classList.add('selected');
        div3.classList.remove('selected');
    }
    img.src = 'images/2.jpg';
    description.innerText = `Second-Lorem ipsum dolor sit, amet consectetur adipisicing elit. Facere eligendi doloribus         blanditiis atque quae iste odio ducimus impedit qui consectetur commodi, architecto id earum quaerat!`;
    price.innerText = '650';
    updateTotal()
});
div3.addEventListener('click', function () {
    if (!isSelected(div3)) {
        div1.classList.remove('selected');
        div2.classList.remove('selected');
        div3.classList.add('selected');
    }
    img.src = 'images/3.jpg';
    description.innerText = `Third-Lorem ipsum dolor sit, amet consectetur adipisicing elit. Facere eligendi doloribus         blanditiis atque quae iste odio ducimus impedit qui consectetur commodi, architecto id earum quaerat!`;
    price.innerText = '550';
    updateTotal()
});
// shipping update
free.addEventListener('click', function (){
    if (!isSelected(free)) {
        free.classList.add('selected');
        express.classList.remove('selected');
    }
    shippingField.innerText='0';
    updateTotal()
})
express.addEventListener('click', function (){
    if (!isSelected(express)) {
        free.classList.remove('selected');
        express.classList.add('selected');
    }
    shippingField.innerText='30';
    updateTotal()
})

//update total price
function updateTotal() {
const productPrice = price.innerText
const shippingCharge=shippingField.innerText;
const grandTotal=parseFloat(productPrice)+parseFloat(shippingCharge);
total.innerText=grandTotal;

}

