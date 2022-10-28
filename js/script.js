const {createApp} = Vue;
createApp ({
    data() {
        return {
            index: 0,
            items: [],
            newItem: {
                    todo: "",
                    done: false,
            },
        }
    },
    methods: {
        pushItem: function() {
            if (this.newItem.todo != "") {
                this.items.push({...this.newItem});
                this.newItem.todo = "";
            }
        },
        deleteItem(i) {
            this.items.splice(i, 1);
        },
        toggleDone(j) {
            if (this.items[j].done == false) {
                this.items[j].done = true 
            } else {
                this.items[j].done = false  
            }

            } 
        }







}).mount("#app");