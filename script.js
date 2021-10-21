$(function () {
    const szuloElem = $("article");
    const sablonElem = $(".lampa");
    const meret = 9;
     const Lampatomb = [];
    

    for (var index = 0; index < meret; index++) {
        
            const ujElem = sablonElem.clone().appendTo(szuloElem);
            const lampa = new Lampa(ujElem,index);
            Lampatomb.push(lampa);
        
    }

    sablonElem.remove();
    
     $(window).on("lampaKattintas", (event)=>{
        
  
        if(event.detail.id === 0){           
           Lampatomb[1].atvalt();
           Lampatomb[3].atvalt();
        }else if(event.detail.id === 1){           
           Lampatomb[0].atvalt();
           Lampatomb[2].atvalt();
           Lampatomb[4].atvalt();
        }else if(event.detail.id === 2){           
           Lampatomb[1].atvalt();
           Lampatomb[5].atvalt();
        }else if(event.detail.id === 3){           
           Lampatomb[4].atvalt();
           Lampatomb[0].atvalt();
           Lampatomb[6].atvalt();
        }else if(event.detail.id === 4){           
           Lampatomb[1].atvalt();
           Lampatomb[3].atvalt();
           Lampatomb[5].atvalt();
           Lampatomb[7].atvalt();
        }else if(event.detail.id === 5){           
           Lampatomb[2].atvalt();
           Lampatomb[4].atvalt();
           Lampatomb[8].atvalt();
        }else if(event.detail.id === 6){           
           Lampatomb[7].atvalt();
           Lampatomb[3].atvalt();
        }else if(event.detail.id === 7){           
           Lampatomb[6].atvalt();
           Lampatomb[8].atvalt();
           Lampatomb[4].atvalt();
        }else if(event.detail.id === 8){           
           Lampatomb[7].atvalt();        
           Lampatomb[5].atvalt();
        }
        
        
       
    });
    
});


