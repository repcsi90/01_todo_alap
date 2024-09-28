export default class Sor{
    #adat={}
    constructor(adat,szuloElem){
       //console.log(adat) 
       this.#adat=adat
       this.szuloElem=szuloElem
       this.sormegjelenit()
       this.kukaELem=$("torol:last")
       this.kattintesemeny()
    }
    kattintesemeny(){
        this.kukaELem.on("click",()=>{
            
            const e=new CustomEvent("torles", {deatail:this.#adat})
            window.dispatchEvent
        })
    }
    
}