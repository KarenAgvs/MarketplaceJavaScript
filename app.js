const main = document.getElementById('main');
const btnshops=document.querySelector('.btn-shops');
const shopocult=document.querySelector('.shop-ocult');


shoppings=[]

create_cards();
function create_cards(){
  products.forEach((atributes)=>{
    
    console.log(products);
    const card_render = document.createElement('div');
    const card_main = document.createElement('div');
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
    btn_card.setAttribute('id','btn-card');
    price_product.classList.add('cprice_product');
    price_product.textContent=atributes.price;
    name_product.classList.add('cname_product');
    name_product.textContent=atributes.name;
    btn_card.textContent = 'Add';
    
    
    div_image.appendChild(image_card);
    card_render.appendChild(div_image);
    card_render.appendChild(price_product);
    card_render.appendChild(name_product);
    card_render.appendChild(btn_card);
    main.appendChild(card_render); 
  });
}

function Showshopping(){
  shopocult.innerHTML=''
  let listShop=[... new Set(shoppings)]

  listShop.forEach(elemnt => {
    const allproducts=products.filter(productos => {
      return productos.id === parseInt(item);
    })



  const shoppingCart = document.createElement('div');
  const name = document.createElement('p');
  const price = document.createElement('p');
  const amount = document.createElement('p');
  const add = document.createElement('button');
  const substract = document.createElement('button');
  const deleteP = document.createElement('button');


  add.textContent='>';
  substract.textContent='<';
  deleteP.textContent='x'

  shoppingCart.appendChild(name);
  shoppingCart.appendChild(price);
  shoppingCart.appendChild(amount);
  shoppingCart.appendChild(add);
  shoppingCart.appendChild(substract);
  shoppingCart.appendChild(deleteP);
}


    



