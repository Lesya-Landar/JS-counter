let buttonsContainer = document.querySelector('#content-container');
let cartCounterLabel = document.querySelector('#cart-counter');
let cartCounter = 0;
let cartPrice = 0;

console.log(buttonsContainer);

function btnClickHandler (e) {
  let target = e.target;
  if (target.classList.contains('item-actions__cart')) {
    cartCounter++;
    cartCounterLabel.innerHTML = cartCounter;
    if (cartCounter === 1) cartCounterLabel.style.display = 'block';
    let mockData = target.parentElement.previousElementSibling.innerHTML;

    mockData = +mockData.replace(/^\$(\d+)\s\D+(\d+).*/gu, '$1.$2');

    cartPrice = Math.round ((cartPrice + mockData) * 100) / 100;
  
    let restoreHTML = target.innerHTML;

    target.innerHTML = 'Added' + ' ' + cartPrice.toFixed(2);

    buttonsContainer.removeEventListener ('click', btnClickHandler);
    target.disabled = true;

    setTimeout (function () {
      target.innerHTML = restoreHTML;
      buttonsContainer.addEventListener('click', btnClickHandler);
      target.disabled = false;
    }, 2000);
  }
  
  
}

buttonsContainer.addEventListener('click', btnClickHandler);

