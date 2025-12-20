const manageSpinner = (status) => {
    if (status == true) {
          document.getElementById('cardsContainer').classList.add('hidden');
        document.getElementById('spinder_id').classList.remove('hidden');
       
    }
    else {
       document.getElementById('spinder_id').classList.add('hidden');
        document.getElementById('cardsContainer').classList.remove('hidden'); 
    ;
    }
}

const loadAll = () => {
    fetch('https://openapi.programming-hero.com/api/plants')
        .then(res => res.json()).then(data => showCategories_tree(data.plants));
}
loadAll();

const loadCategories = () => {
     manageSpinner(true);
    fetch("https://openapi.programming-hero.com/api/categories")
        .then(res => res.json())
        .then(data => showCategories(data.categories));
}
const catContainer = document.getElementById('cat');
const showCategories = (categoriesArr) => {
    manageSpinner(false);
    let html = "";
   categoriesArr.forEach(element => {
       html += `<button onclick="loadCategories_tree(${element.id})" class="btn cat-btn btn-neutral btn-outline md:border-0 md:btn-wide justify-start hover:bg-[#15803D]  font-normal ">
    ${element.category_name}</button>`
   });
    catContainer.innerHTML = html;
}
loadCategories();
let activeBtn = null;
catContainer.addEventListener('click', e => {
    if (!e.target.classList.contains('cat-btn')) return;
    if (activeBtn) {
        activeBtn.classList.remove('bg-[#15803D]');
    }
    activeBtn = e.target;
    activeBtn.classList.add('bg-[#15803D]');

    })

const loadCategories_tree = (cat_id) => {
    manageSpinner(true);
    const url = `https://openapi.programming-hero.com/api/category/${cat_id}`;
    fetch(url).then(res => res.json())
        .then(catInfo => showCategories_tree(catInfo.plants))
        .catch(err => console.log(err));
    
    
    
}

//spinner


const showCategories_tree = (tree) => {
  
    const cardsContainer = document.getElementById('cardsContainer');
    cardsContainer.innerHTML = " ";
    
    tree.forEach(el => {
     
        cardsContainer.innerHTML+= `
          <div id='${el.id}' class="card bg-base-100  shadow-sm">
  <figure class="p-1 h-64 bg-gray-50" >
    <img
      src="${el.image}"
      alt="${el.name}"
      class="rounded-xl w-[100%]  h-[100%] object-cover" />
  </figure>
  <div class="card-body  text-left">
    <h2  onclick="showPlantModal(${el.id})" class="card-title font-semibold w-fit">${el.name}</h2>  
    <p class="text-gray-600">${el.description}</p>
    
    <div class=" flex items-center justify-between py-2">
      <button class="btn btn-soft btn-success rounded-4xl bg-[#DCFCE7] text-[#15803D]">${el.category}</button>
      <div><p class="text-lg font-bold ">৳<span>${el.price}</span></p></div>
    </div>
    <button  class="btn btn-primary bg-[#15803D] border-0 rounded-4xl">Buy Now</button>
  </div>
</div>
        `
    })
      manageSpinner(false);
   
}
// onclick="addCart(${el.id})"

const showPlantModal = (id) => {
    const url = `https://openapi.programming-hero.com/api/plant/${id}`;
    fetch(url).then(res => res.json()).then(data => {
        data = data.plants;
        plant_modal.showModal();
        document.getElementById('show_modal').innerHTML = `
        
<div class=" flex justify-between items-center">
<span class="text-lg font-bold">${data.name} </span>
<form method="dialog">
       <button class="btn rounded-full bg-white border-0 text-xl">X</button>
      </form>
</div>
    <div class="h-72"><img src="${data.image}" alt="" class="rounded-xl h-full w-full object-cover"> </div>
   
    <h1 ><span  class="font-semibold">Category:</span> ${data.category}</h1>
    <h1><span class="font-semibold">Price:</span> ৳${data.price}</h1>
    <h1><span class="font-semibold">Description:</span>${data.description}</h1>
`


    })
    
}


// checkout
const cart_container = document.getElementById('checkoutt');
let tempCarts = [];
let carts = {};
document.getElementById('cardsContainer').addEventListener('click', e => {
    if (e.target.innerText == 'Buy Now') {
        const name = e.target.parentNode.children[0].innerText;
        const price = e.target.parentNode.children[2].children[1].children[0].children[0].innerText;
        const id = e.target.parentNode.parentNode.id;

         let key = 'id_'+id;
            if (!carts[key]) {
                carts[key] ={
                    id: id,
                    name: name,
                    price: price,
                     quantity: 1
                }
            }
            else {
                carts[key].quantity += 1;
            }
        
        showCartsItems(carts);
      
    }
    
   
    
})

const totUpdate=document.getElementById('total');
const showCartsItems = (carts) => {
    cart_container.innerHTML = " ";
    totUpdate.innerText = "0";
    let total = 0;
    Object.keys(carts).forEach(key => {
        total += (carts[key].price * carts[key].quantity);
         cart_container.innerHTML += `
<div class="bg-[#F0FDF4] flex justify-between items-center p-3 rounded-2xl mb-4">
<div>
<p class="mb-2 text-sm">${carts[key].name}</p>
<p class="text-gray-500 text-sm">৳<span>${carts[key].price}</span> x <span>${carts[key].quantity}</span></p>
</div>
<i onclick="deleteCart(${carts[key].id})" class="fa-solid fa-xmark cursor-pointer"></i>
</div>
       `
        totUpdate.innerText = total;
})

    
          
}

const deleteCart = (key) => {
    key = "id_" + key;
    delete carts[key];
    showCartsItems(carts);
}



