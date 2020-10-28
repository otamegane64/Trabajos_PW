const app = Vue.createApp({
   
    data() {

        return {
            titulo: 'Titulo de mi pagina en VUE, aqui',
            frutas: ['Manzana','Uva','Pera'],
            frutas2: [
                {nombre: 'Manzana', cantidad:10},
                {nombre: 'Uva', cantidad:5},
                {nombre: 'Pera', cantidad:3}
            ],
            nuevaFruta: '',
            total: 0
        }
    },
    methods: {
        agregarFruta() {
            this.frutas.push(this.nuevaFruta);
            this.frutas2.push({
                nombre: this.nuevaFruta,
                cantidad: 0
                }
            )
            this.nuevaFruta = '';
        }
    },
    computed: {
        sumarFrutas(){
            this.total = 0;
            for(fruta of this.frutas2){
                this.total = this.total + fruta.cantidad;
            }
            return this.total;

        }
    }
}
);