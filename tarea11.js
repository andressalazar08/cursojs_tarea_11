/*
Crea un nuevo fichero JS que contenga las siguientes líneas

- Una clase llamada "Estudiante" que tenga:
- Una variable llamada nombre
- Otra variable lista llamada asignaturas con 3 asignaturas: Javascript, HTML, CSS
- Un método "obtenDatos" que devuelva un objeto con las propiedades nombre y asignaturas
- Crea una nueva instancia de "Estudiante"
- Haz la llamada al método obtenDatos
*/

class Estudiante{
    constructor(nombre){
        this.nombre=nombre
        this.asignaturas=["Javascript", "HTML", "CSS"]

    }

    obtenDatos(){
        return {
            prop1:this.nombre,
            prop2:this.asignaturas
        }
    }

}

const est1 = new Estudiante("Andrés Felipe")
console.log(est1.obtenDatos())
console.log(est1.obtenDatos().prop1)
console.log(est1.obtenDatos().prop2)