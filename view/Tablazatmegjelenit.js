import Sor from "../view/Sor.js"

export default class Tablazatmegjelenit{
    #lista=[]
    constructor(lista, szuloElem){
        console.log(lista)
        this.#lista=lista
        this.szuloElem=szuloElem
        this.tablazatKiir()
        this.tbodyElem=$(".sorok")
        this.sorokLetrehozasa()
        this.kukaELem=$(".torol:last")
    }

    sorokLetrehozasa(){
        this.#lista.forEach(elem =>{
            elem.id=index
            new Sor(elem,this.tbodyElem)
        })
    }
    
    tablazatKiir(){
        this.szuloElem.append(
            `<table class="table table-striped">
                    <thead>
                        <tr>
                            <td>Szakdolgozat</td>
                            <td>Határidő</td>
                            <td class="torol">torol</td>
                        </tr>
                    </thead>
                    <tbody class="sorok></tbody>
                </table>
                `)

    }
}