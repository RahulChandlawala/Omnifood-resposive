
//MOblie nav work/////////////////////////////////////
let btn = document.querySelector('.btn-mobile-nav');
let header = document.querySelector('.header');
let menu = 0;

// btn.addEventListener('click' ,function(){
//     if(!menu){
//         header.classList.add('nav-open');
//         menu++;
//     }
//         else{
//             header.classList.remove('nav-open');
//             menu--;
//         }
// });
btn.addEventListener('click',function(){
    header.classList.toggle('nav-open')
});
/////////////////////////////////////////////////


const currentYear = new Date().getFullYear();
console.log(currentYear);

document.querySelector('.year').textContent = currentYear;
// footer.textContent = `copyright © ${currentYear} by Omnifood,Inc. All right reserved.`
