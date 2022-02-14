function updateProductNumber(product, price, isInCreasing) {
    const productInput = document.getElementById(product + '-number');
    let productNumber = productInput.value;
    if (isInCreasing == true) {
        productNumber = parseInt(productNumber) + 1;
    }
    else if (productNumber > 0) {
        productNumber = parseInt(productNumber) - 1;
    }
    productInput.value = productNumber;
    const productTotal = document.getElementById(product + '-total');
    productTotal.innerText = productNumber * price;
    calculateTotal()

}

function getInputValue(product) {
    const productInput = document.getElementById(product + '-number');
    const productNumber = parseInt(productInput.value);
    return productNumber;
}
function calculateTotal() {
    const phoneTotal = getInputValue('phone') * 1219;
    const caseTotal = getInputValue('case') * 59;
    const subTotal = phoneTotal + caseTotal;
    const tax = subTotal / 10;
    const totalPrice = subTotal + tax;

    document.getElementById('sub-total').innerText = subTotal;
    document.getElementById('tax-amount').innerText = tax;
    document.getElementById('total-price').innerText = totalPrice;
}


// function phoneNoOne(oneNoPhone) {
//     const phoneInput = document.getElementById('phone-input');
//     let inputvalue = phoneInput.value;
//     if (oneNoPhone == true) {
//         inputvalue = parseInt(inputvalue) + 1;
//     }
//     else if (inputvalue > 0) {
//         inputvalue = parseInt(inputvalue) - 1;
//     }
//     phoneInput.value = inputvalue;
//     const phonePrice = document.getElementById('phone-price');
//     phonePrice.innerText = inputvalue * 1219;
// }

// Phone no---1
document.getElementById('phone-plus').addEventListener('click', function () {
    updateProductNumber('phone', 1219, true);
})
document.getElementById('phone-minus').addEventListener('click', function () {
    updateProductNumber('phone', 1219, false);
})
// // Phone no---1
// document.getElementById('phone-plus').addEventListener('click', function () {
//     phoneNoOne(true);
// })
// document.getElementById('phone-minus').addEventListener('click', function () {
//     phoneNoOne(false);
// })


// phone----2

document.getElementById('case-plus').addEventListener('click', function () {
    updateProductNumber('case', 59, true);
})
document.getElementById('case-minus').addEventListener('click', function () {
    updateProductNumber('case', 59, false);
})


