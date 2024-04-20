let data ={}
const url = 'https://cdn.shopify.com/s/files/1/0564/3685/0790/files/singleProduct.json?v=1701948448'
async function dataCall() {
    const response = await fetch('https://cdn.shopify.com/s/files/1/0564/3685/0790/files/singleProduct.json?v=1701948448');
    return await response.json();
}
let imageUrl=[]
dataCall().then((val) => {
    data = val;
    console.log("rahil",data);
    let heading = document.getElementsByClassName("mini-heading")
    let miniHead = document.getElementsByClassName("heading")
    let dPrice = document.getElementsByClassName("dsc-price")
    let oPrice = document.getElementsByClassName("og-price")
    let img = document.getElementsByClassName("thumbnail-img")
    for(let ele of heading)
    {
      ele.innerText=data.product.vendor  
    }
    for(let ele of miniHead)
    {
       ele.innerText=data.product.title;
    }
    for(let ele of dPrice)
    {
       ele.innerText=data.product.price;
    }
    for(let ele of oPrice)
    {
       ele.innerText=data.product.compare_at_price;
    }
    thumbnailImgSrc=['./assests/Rectangle 4.jpg','./assests/Rectangle 5.png','./assests/Rectangle 7.png','./assests/Rectangle 8.jpg']
    const imgContainer=document.getElementsByClassName("thumbnail-img");
    for(let ele of thumbnailImgSrc)
    {
       imageUrl.push(ele);
       const img=document.createElement("img");
       img.setAttribute('src',ele);
       img.classList.add('img-here')
       for(let ele of imgContainer)
       {
          ele.appendChild(img)
       }
    }
    const mimg=document.getElementsByClassName("main-img");
    const mainImage=document.createElement("img");
    // mainImage.setAttribute('src',imageUrl[0]);
    
    mainImage.setAttribute('src','./assests/main-img.png');

    mainImage.classList.add('product-img')
    for(let ele of mimg)
    {
        ele.appendChild(mainImage);
    }
    let mainImgUrl
    const getImg=document.getElementsByClassName("img-here")
    for(let i=0;i<getImg.length;i++)
    {
        getImg[i].addEventListener('click',()=>
        {
            mainImgUrl=getImg[i].src;
            
            mainImage.setAttribute('src',mainImgUrl);
            getImg[i].classList.add('active-img');
            console.log(getImg[i].classList);
            for(let j=0;j<getImg.length;j++)
            {
                if(j!=i)
                {
                    getImg[j].classList.remove('active-img');
                }
            }
        })
    }  
})
const colorbox=document.querySelectorAll(".color-box");
let last=0;
let clname='bord-lp'
let choosenColor='';
var selectedSize = "";

// Function to update the selectedSize variable when a radio button is clicked
function updateSelectedSize() {
    var radios = document.getElementsByName('size');
    for (var i = 0; i < radios.length; i++) {
        if (radios[i].checked) {
            selectedSize = radios[i].value;
            console.log("radios",radios);
            console.log("Selected Size:", selectedSize); // Debugging statement
            // document.getElementById("size").textContent = selectedSize;
            break;
        }
    }
}

// Add event listeners to the radio buttons to call the updateSelectedSize function
var sizeRadios = document.getElementsByName('size');
for (var i = 0; i < sizeRadios.length; i++) {
    sizeRadios[i].addEventListener('click', updateSelectedSize);
}
for(let i=0;i<colorbox.length;i++)
{
    colorbox[i].addEventListener('click',()=>
    {
        colorbox[last].classList.remove(clname);
        choosenColor = colorbox[i].classList[1];
        console.log("testing",colorbox[i].classList[1]);
        console.log(choosenColor);
        if(colorbox[i].classList[1]=='pink')
        {
            colorbox[i].classList.add('bord-lp')
            clname='bord-lp'
        }
       else if(colorbox[i].classList[1]=='green')
        {
            colorbox[i].classList.add('bord-gn')
            clname='bord-gn'
        }
        else if(colorbox[i].classList[1]=='blue')
        {
            colorbox[i].classList.add('bord-lb')
            clname='bord-lb'
        }
        else if(colorbox[i].classList[1]=='pink')
        {
            colorbox[i].classList.add('bord-pk')
            clname='bord-pk'
        }
        last=i;
    })
    
}
let cnt=1;
const cntBtn=document.getElementsByClassName("num")
for(let ele of cntBtn)
{
    ele.textContent=cnt;
}
const plus=document.getElementsByClassName("plus")
for(let ele of plus)
{
    ele.addEventListener('click',()=>
    {
        cnt=cnt+1;
        for(let ele of cntBtn)
{
    ele.textContent=cnt;
}
    })
}
const minus=document.getElementsByClassName("minus")
for(let ele of minus)
{
    ele.addEventListener('click',()=>
    {
        if(cnt>0)
        {
            cnt=cnt-1;
        }
        for(let ele of cntBtn)
{
    ele.textContent=cnt;
}
    })
}
const cartBtn=document.getElementsByClassName('btn-cart');
for(let ele of cartBtn){
    ele.addEventListener('click',()=>{
        let pop=document.getElementsByClassName('Popup-msg');
        for(let ele of pop){
            ele.classList.remove('hide');
            ele.classList.add('show');
        }
    document.getElementById("size").textContent = selectedSize; 
    document.getElementById("color").textContent = choosenColor;

    })
}

