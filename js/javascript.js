

const images = [
    {
        url: "<img src ='http://www.viaggiareonline.it/wp-content/uploads/2014/11/sweden_148857365.jpg'>",
        title: 'Svezia',
        description: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Et temporibus voluptatum suscipit tempore aliquid deleniti aut veniam.'
    },

    {
        url: "<img src ='https://static1.evcdn.net/images/reduction/1513757_w-1920_h-1080_q-70_m-crop.jpg'>",
        title: '  Perù',
        description: ' class ="d-none" Lorem ipsum, dolor sit amet consectetur adipisicing elit. Et temporibus voluptatum suscipit tempore aliquid deleniti aut veniam.'
    },

    {
        url: "<img src ='https://img.itinari.com/pages/images/original/0d3ed180-d22d-48e8-84df-19c4d888b41f-62-crop.jpg?ch=DPR&dpr=2.625&w=1600&s=7ebd4b5a9e045f41b4e0c7c75d298d6c'>",
        title: 'Chile',
        description: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Et temporibus voluptatum suscipit tempore aliquid deleniti aut veniam.'
    },
    {
        url: "<img src ='https://static1.evcdn.net/images/reduction/1583177_w-1920_h-1080_q-70_m-crop.jpg'>",
        title: 'Argentina',
        description: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Et temporibus voluptatum suscipit tempore aliquid deleniti aut veniam.'
    },
    {
        url: "<img src ='https://cdn.sanity.io/images/24oxpx4s/prod/ed09eff0362396772ad50ec3bfb728d332eb1c30-3200x2125.jpg?w=1600&h=1063&fit=crop'>",
        title: 'Colombia',
        description: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Et temporibus voluptatum suscipit tempore aliquid deleniti aut veniam.'
    },
];

const foto = document.getElementById('foto')



for (let i = 0; i < images.length; i++){

    foto.innerHTML += '<li class ="d-none">'+ '<h2>' + images[i].title + '</h2>'+'<span>' + images[i].description + '</span>'+'<span>' + images[i].url + '</span>'+'</li>';
    
    
    
    

}  

const rightButton = document.getElementById('special-button')

const allLi = document.querySelectorAll('li')
console.log(allLi)


let counter = 0;

    
rightButton.addEventListener('click', function () {

    console.log(counter)


    if (counter < (allLi.length - 1)) {
        allLi[counter].classList.add("d-none");
    
        counter ++;
    
        allLi[counter].classList.remove("d-none");
    
        
        
    }
    else if(counter == (allLi.length - 1)) {
        allLi[counter].classList.add("d-none");
    
        counter = 0;
    
        allLi[counter].classList.remove("d-none");
    
        
        
    }




});









