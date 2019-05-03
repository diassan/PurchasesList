const nameEL = document.getElementById('name');
const priceEL = document.getElementById('price');
const categoryEL = document.getElementById('category');
const buttonEl = document.getElementById('add');
const itemsEl = document.getElementById('items');
const countEl = document.getElementById('items-count');
const resultNameEl = document.getElementById('resultName');
const resultPriceEl = document.getElementById('resultPrice');
const resultCatEl = document.getElementById('resultCat');
const catEl = document.getElementById('cat');
let sumAll = 0;

function calculMost(){
    let max = {
        name: 'unname',
        price: 0,
        category: '-'
    };
    for (const li of itemsEl.children) {
        const price = li.children[1];
        if(max.price<+price.textContent){
            max.name = li.children[0].textContent;
            max.price = +li.children[1].textContent;
            max.category = li.children[2].textContent;

        }
    }
    return max;
}
function updateResult(itemObject){
    resultNameEl.textContent = itemObject.name;
    resultPriceEl.textContent = itemObject.price;
    resultCatEl.textContent = itemObject.category;
    catEl.textContent = itemObject.category
}

buttonEl.addEventListener('click', () =>{
    const nameValue = nameEL.value;
    const priceValue = priceEL.value;
    const categoryValue = categoryEL.value;
    sumAll = sumAll + priceValue*1;
    const itemEl = document.createElement('li');
    itemEl.className = 'list-group-item d-flex mt-3';
    itemsEl.appendChild(itemEl);

    const nameItemEL = document.createElement('div');
    const priceItemEl = document.createElement('div');
    const categoryItemEL = document.createElement('div');
    nameItemEL.className=priceItemEl.className=categoryItemEL.className = 'pl-5'
    nameItemEL.textContent = nameValue;
    priceItemEl.textContent = priceValue;
    categoryItemEL.textContent = categoryValue;
    itemEl.appendChild(nameItemEL);
    itemEl.appendChild(priceItemEl);
    itemEl.appendChild(categoryItemEL);


    const removeEl = document.createElement('button');
    removeEl.className = 'btn btn-danger btn-sm';
    removeEl.textContent = 'X';
    itemEl.appendChild(removeEl);

    removeEl.addEventListener('click', () => {
        itemsEl.removeChild(itemEl);
        sumAll = sumAll - priceValue*1;
        const maxObject = calculMost();
        updateResult(maxObject);
        countEl.textContent = sumAll;
    });


    const maxObject = calculMost();
    updateResult(maxObject);
    countEl.textContent = sumAll;

    nameEL.value = priceEL.value = categoryEL.value = '';
});