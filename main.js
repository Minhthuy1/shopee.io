var star=document.querySelectorAll('.home-product-item__rating-icon')

for(let i=0;i<star.length;i++){
    star[i].onclick=function(){
        star[i].style.color="yellow"
}
}
var like=document.querySelector('.home-product-item__like')
like.onclick=function(){
    document.querySelector('.home-product-item__like-icon-empty').style.display="none"
    document.querySelector('.home-product-item__like-icon-fill').style.display="block"
}