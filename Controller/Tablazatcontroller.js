import Tablazatmodell from "../Modell/Tablazatmodell.js";
import Tablazatmegjelenit from "../view/Tablazatmegjelenit.js";

export default class Tablazatcontroller{
    constructor(){
        //példányosítja a view és példányosítja a Modellt
        this.tModell=new Tablazatmodell()
        const lista=this.tModell.getlist()
        console.log("controller", lista)
        this.megjelenit=new Tablazatmegjelenit(lista, $(".tarolo"))
        this.torlesEsemeny()
    }
    torlesEsemeny(){
        $(window).on("torles",(event)=>{
            console.log(event.detail)
            let index=event.detail.id
        })
    }

}