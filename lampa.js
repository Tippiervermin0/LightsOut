class Lampa{
    constructor(elem,id){
        this.elem = elem;
        this.id = id;
        this.allapot = false;
        this.setLamp();
       
        this.elem.on("click",()=>{
            
            this.atvalt();
            this.KattintaTrigger();

        });
    }
    
     atvalt(){
        this.allapot=!this.allapot;
        this.setLamp();
    }
    
    setLamp(){
        if(this.allapot){
            this.elem.css("background-color","black");
        }else{
             this.elem.css("background-color","red");
        }
    }
    
    KattintaTrigger(){
        let esemeny = new CustomEvent("lampaKattintas", {detail:this});
        
        
        window.dispatchEvent(esemeny);
        
        
    }
    
    
}


