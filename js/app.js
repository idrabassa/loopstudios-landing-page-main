document.querySelector('.hamburguer').addEventListener('click',function(){
    const offsetwindow=document.querySelector('.wrap-window');
    
    // offsetwindow.classList.add('overlay')
    offsetwindow.style.width='100%';
    const closeWindow=document.createElement('a').classList.add('closeW');
          
    // offsetwindow.innerHTML=`
    //                         <div><img src="./images/logo.svg">
    //                         <a class='closeW'><img src="./images/icon-close.svg"></a></div>
    //                         <ul class="navbar-menu">
    //                         <li><a href="#">About</a></li>
    //                         <li><a href="#">Careers</a></li>
    //                         <li><a href="#">Events</a></li>
    //                         <li><a href="#">Products</a></li>
    //                         <li><a href="#">Support</a></li>
    //                         </ul>`;
    // console.log(offsetwindow);
    
})


document.querySelector('.closeW').addEventListener('click',function(e){
    // console.log(document.querySelector('.closeW'))
    
    const offsetwindow=document.querySelector('.wrap-window');
    offsetwindow.style.width='0%';
    // if (offsetwindow.classList.contains('overlay')) {
        
    //     offsetwindow.classList.remove('overlay');
        
    // }
    e.preventDefault();
})



