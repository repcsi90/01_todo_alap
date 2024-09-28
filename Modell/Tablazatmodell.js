import { TODOLIST2 } from "../Modell/adatok.js"

export default class Tablazatmodell{
    #lista=[]
    constructor(){
        this.#lista=TODOLIST2
        console.log("modell", this.#lista)
    }
    getlist(){
        //controllerrel getterel érhetem el a listát
        return this.#lista
    }
}