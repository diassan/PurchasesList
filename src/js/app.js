const nameEL = document.getElementById('name');
const priceEL = document.getElementById('price');
const categoryEL = document.getElementById('category');
const buttonEl = document.getElementById('add');
const itemsEl = document.getElementById('items');
const resultNameEl = document.getElementById('resultName');
const resultPriceEl = document.getElementById('resultPrice');
const resultCatEl = document.getElementById('resultCat');
const catEl = document.getElementById('cat');
const totalEl = document.getElementById('total');
const cutEL = document.getElementById('cut');
let sumAll = 0;
let sumItem = 0;

function calculMost(){
    let max = {
        name: 'unname',
        category: '-',
        price: 0
    };
    for (const li of itemsEl.children) {
        const price = li.children[2];
        if(max.price<+price.textContent){
            max.name = li.children[0].textContent;
            max.category = li.children[1].textContent;
            max.price = +li.children[2].textContent;

        }
    }
    return max;
}
function updateResult(itemObject){
    resultNameEl.textContent = itemObject.name;
    resultCatEl.textContent = itemObject.category;
    resultPriceEl.textContent = itemObject.price;
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
    sumItem = sumItem + 1;

    const nameItemEL = document.createElement('div');
    const categoryItemEL = document.createElement('div');
    const priceItemEl = document.createElement('div');
    // nameItemEL.className=categoryItemEL.className = 'pl-5';priceItemEl.className = 'pl-5'
    //nameItemEL.style.position = "absolute";
    nameItemEL.style.float = "right";
    nameItemEL.style.marginLeft = "38px";
    categoryItemEL.style.position = "absolute";
    categoryItemEL.style.float = "right";
    categoryItemEL.style.marginLeft = "298px";
    priceItemEl.style.position = "absolute";
    priceItemEl.style.float = "right";
    priceItemEl.style.marginLeft = "700px";


    // nameItemEL.className=categoryItemEL.className = 'pl-5';
    // priceItemEl.className = 'pl-5'
    nameItemEL.textContent = nameValue;
    categoryItemEL.textContent = categoryValue;
    priceItemEl.textContent = priceValue;
    itemEl.appendChild(nameItemEL);
    itemEl.appendChild(categoryItemEL);
    itemEl.appendChild(priceItemEl);


    const removeEl = document.createElement('button');
    removeEl.className = 'btn btn-danger btn-sm';
    removeEl.style.position = "absolute"
    removeEl.style.float = "left";
    removeEl.style.marginLeft = "830px"
    removeEl.textContent = 'X';
    itemEl.appendChild(removeEl);

    removeEl.addEventListener('click', () => {
        itemsEl.removeChild(itemEl);
        sumAll = sumAll - priceValue*1;
        sumItem = sumItem - 1;
        const maxObject = calculMost();
        updateResult(maxObject);
        totalEl.textContent = sumAll;
        cutEL.textContent = sumItem;
    });


    const maxObject = calculMost();
    updateResult(maxObject);
    totalEl.textContent = sumAll;
    cutEL.textContent = sumItem;

    nameEL.value = priceEL.value = categoryEL.value = '';
});