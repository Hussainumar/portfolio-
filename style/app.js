const sections = document.querySelectorAll('.section');
const sectBtns = document.querySelectorAll('.controlls');
const sectBtn = document.querySelectorAll('.control');
const  test = document.getElementsByClassName('.main-content');
 
function Pagechange() {
// button click active 
for (let i = 0; i < sectBtn.length; i++) {
    sectBtn[i].addEventListener('click', function() {
        let currentBtn = document.querySelectorAll('.active-btn');
        currentBtn[0].className = currentBtn[0].className.replace('active-btn', ' ')
        this.className += 'active-btn' 
    }) 
};
// section Active Class
sectBtns.addEventListener('click', (e)=>{
    console.log(e.target.id)
  })
 } 
 Pagechange();


//  const id = e.target.dataset.id;
//     console.log(e.target)
//     if (id) {
//         //remove selected from  the other btns
//         sectBtns.forEach((btn) => {
//             btn.classList.remove('active')
//         })
//         e.target.classList.add('active')
//         // hide other section 
//         sections.forEach((section) => {
//     sections.classList.remove('active')        
//         })
//         const element = document.getElementById(id)
//         element.classList.add('active')
//     }