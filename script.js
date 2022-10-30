const App = {
    data() {
        return {
            inputValue: "",
            notes: []
        }
    },
    methods:{
        // Получаем event
        inputHandler(event){
            this.inputValue = event.target.value
        },
        // Добавляем запись
        addNote(){
            if(this.inputValue !== ""){
                this.notes.push(this.inputValue)
                this.inputValue = ""
            }
            
        },
        removeNote(i, event){
            this.notes.splice(i, 1)        
        }
    }
}

Vue.createApp(App).mount('#app')
