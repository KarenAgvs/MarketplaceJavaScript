const main = document.getElementById('main');
const btnshops=document.querySelector('.btn-shops');
const divshopping =document.querySelector('.div-shopping ');


shoppings=[]


create_cards();
function create_cards(){
  products.forEach((atributes)=>{
    const card_render = document.createElement('div');
    const div_image = document.createElement('div');
    const image_card = document.createElement('img');
    const price_product = document.createElement('p');
    const name_product = document.createElement('p');
    const btn_card = document.createElement('button');

    card_render.classList.add('card');
    div_image.classList.add('card-image');
    image_card.src=atributes.img; 
    image_card.setAttribute('alt','Image Card');
    image_card.classList.add('img'); 
    btn_card.setAttribute('id', atributes.id);
    btn_card.classList.add('btn-card');
    price_product.classList.add('cprice_product');
    price_product.textContent=atributes.price;
    name_product.classList.add('cname_product');
    name_product.textContent=atributes.name;
    btn_card.textContent = 'Add';
    btn_card.addEventListener('click',addtoShopCart);
    
    
    div_image.appendChild(image_card);
    card_render.appendChild(div_image);
    card_render.appendChild(price_product);
    card_render.appendChild(name_product);
    card_render.appendChild(btn_card);
    main.appendChild(card_render); 
  });
}


function showshopping(){
  divshopping.innerHTML=''
  let listShop= new Set(shoppings)

  listShop.forEach(elemnt => {
    const allproducts=products.filter(productos => {
      return productos.id === parseInt(elemnt);
    })

    let sumAmount=0;
     
    for (id of shoppings){
      if (id===elemnt){
        sumAmount=sumAmount+1;
      }
    }

  const shoppingCart = document.createElement('div');
  shoppingCart.classList.add('cartShopElements')
  const imageProduct=document.createElement('img');
  imageProduct.classList.add('imageProduct');
  const name = document.createElement('p');
  const price = document.createElement('p');
  const amount = document.createElement('p');
  const add = document.createElement('button');
  const substract = document.createElement('button');
  const deleteP = document.createElement('button');

  add.classList.add('botons');
  substract.classList.add('botons');
  deleteP.classList.add('botons');


  add.setAttribute('id',allproducts[0].id);
  substract.setAttribute('id',allproducts[0].id);
  deleteP.setAttribute('id',allproducts[0].id);
  name.textContent=allproducts[0].name;
  price.textContent=allproducts[0].price;
  imageProduct.src=allproducts[0].img;
  

  substract.textContent='<';
  add.textContent='>';
  deleteP.textContent='x';
  amount.textContent=sumAmount;

  

  shoppingCart.appendChild( imageProduct);
  shoppingCart.appendChild(name);
  shoppingCart.appendChild(price);
  shoppingCart.appendChild(substract);
  shoppingCart.appendChild(amount);
  shoppingCart.appendChild(add);
  shoppingCart.appendChild(deleteP);
  
  substract.addEventListener('click',subtracttoShopCart)
  deleteP.addEventListener('click',deletefromShopCart)
  add.addEventListener('click', addtoShopCart)
  divshopping.appendChild(shoppingCart); 
  
  })
}
function addtoShopCart(e){
  shoppings.push(e.target.getAttribute('id'));
  showshopping();
}

function subtracttoShopCart(e){
  let element = e.target.getAttribute('id');
  shoppings.splice(parseInt(shoppings.indexOf(element)),1)
  showshopping();
}

function deletefromShopCart(e){
  let element=e.target.getAttribute('id');

  shoppings = shoppings.filter((idElement) => {
    return idElement !== element;
  })
  showshopping();
}



btnshops.addEventListener('click', () => {
  divshopping.classList.toggle('shop-ocult');
})