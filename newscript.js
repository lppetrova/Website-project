$(document).ready(function() {  
    const collection = document.body.children[0].children;
    console.log(collection)
    let i=0;

    while(i<4){
      $('.open'+i).on('click', function(){
        $('.open'+i).slideUp();
        //collection[i+1].classList.remove('visually-hidden');
        $('.open' + (i+1)).slideDown();
        i++;
      })
      $('.open'+(i+1)).toggle();
      i++;
    }
    
    i = 0;
  });
  
  
  
  
  