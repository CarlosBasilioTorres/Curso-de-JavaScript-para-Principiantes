 const btnEmpezar = document.getElementById('btnEmpezar')
 const ULTIMO_NIVEL = 10;

     class Juego {
         constructor() {
             this.inicializar()
             this.generaPatron()
         }

         inicializar() {                         
             this.elegirColor = this.elegirColor.bind(this)
             btnEmpezar.classList.add('hide')
             this.nivel = 0;
             this.colores = [
                 document.getElementById('celeste'),
                 document.getElementById('violeta'),
                 document.getElementById('naranja'),
                 document.getElementById('verde')
             ]
         }

         generaPatron() {
             this.secuencia = new Array(10).fill(0).map(n => Math.floor(Math.random() * 4))
             this.siguienteNivel();
         }

         siguienteNivel() {
             this.nivel++;
             this.subnivel = 0;
             this.iluminarSecuencia()
             this.buscarClick()
         }

         iluminarSecuencia() {
             setTimeout(() => {
                 for (var i = 0; i < this.nivel; i++) {
                     let color = this.colores[this.secuencia[i]];
                     setTimeout(() => this.iluminarColor(color), 1000 * i)
                 }
             }, 1000);
         }

         iluminarColor(color) {
             color.classList.add("light")
             setTimeout(() => this.apagarColor(color), 350)
         }

         apagarColor(color) {
             color.classList.remove("light")
         }


         buscarClick() {
             this.colores[0].addEventListener('click', this.elegirColor)
             this.colores[1].addEventListener('click', this.elegirColor)
             this.colores[2].addEventListener('click', this.elegirColor)
             this.colores[3].addEventListener('click', this.elegirColor)
         }

         elegirColor(e) {
             this.iluminarColor(e.target)
             if (Number(this.colores.indexOf(e.target)) === Number(this.secuencia[this.subnivel])) {
                 this.subnivel++;                 
                 if (this.subnivel == this.nivel) {
                    if(this.nivel === ULTIMO_NIVEL) {
                        swal("Felicidades!!!!","Has concluido el desafio y el juego ha terminado","success")
                        .then(()=>{
                            location.reload();
                        })
                    }else{
                        this.siguienteNivel();
                    }
                 }
             }else{
                swal("Lo sentimos","Has perdido y el juego ha terminado","error")
                .then(()=>{
                    location.reload();
                })
             }
         }

     }

 function empezarJuego() {
     var juego = new Juego()     
 }