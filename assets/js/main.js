const { 
    createApp 
} = Vue

  createApp({
    data() {
      return {
        list: [
            {
                text: "dare da mangiare al gatto",
                done: false
            },
            {
                text: "pulire lettiera",
                done: false
            },
            {
                text: "coccolare il gatto",
                done: false
            }
        ],
        message: ""
      }
    },
    methods: {
        svolto(posizione) {
            if (this.list[posizione].done){
                this.list[posizione].done = false;
            } else {
                this.list[posizione].done = true;
            }
        },
        remove(posizione) {
            this.list.splice(posizione,1);
        },
        aggiungi() {
            let newItem = {
                text: this.message,
                done: false
            }
            this.list.push(newItem);
            this.message = "";
        }
    }
  }).mount('#app')