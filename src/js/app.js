const nameEL = document.getElementById('name');
const priceEL = document.getElementById('price');
const categoryEL = document.getElementById('category');
const buttonEl = document.getElementById('add');
const itemsEl = document.getElementById('items');
const countEl = document.getElementById('items-count');
const resultEl = document.getElementById('result');
let sumAll = 0

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
    resultEl.textContent = itemObject.name+ '' +itemObject.price + '' +itemObject.category
}



// function sumPurchases(){
//     let total = 0;
//     for (const li of itemsEl.children) {
//         const price = li.children[1];
//         total += price.textContent;
//     }
//     return total
// }



buttonEl.addEventListener('click', () =>{
    const nameValue = nameEL.value;
    const priceValue = priceEL.value;
    const categoryValue = categoryEL.value;
    sumAll = sumAll + priceValue*1
    const itemEl = document.createElement('li');
    itemEl.className = 'list-group-item';
    itemsEl.appendChild(itemEl);

    const nameItemEL = document.createElement('div');
    const priceItemEl = document.createElement('div');
    const categoryItemEL = document.createElement('div');
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
        sumAll = sumAll - priceValue*1
        const maxObject = calculMost();
        updateResult(maxObject);
        countEl.textContent = sumAll;
    });


    const maxObject = calculMost();
    updateResult(maxObject);
    countEl.textContent = sumAll;

    nameEL.value = priceEL.value = categoryEL.value = '';
})