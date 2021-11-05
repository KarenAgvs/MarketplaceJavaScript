const main = document.getElementById('main');

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


    



