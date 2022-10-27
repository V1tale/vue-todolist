const {createApp} = Vue;
createApp ({
    data() {
        return {
            index: 0,
            items: [],
            newItem: {
                    todo: null,
                    done: false,
            },
        }
    },
    methods: {
        pushItem: function() {
            this.items.push({...this.newItem});
            todo = "";
        },
        deleteItem(i) {
            this.items[i].todo = null;
        },
        toggleDone(j) {
            this.items[j].done = true 

            } 
        }







}).mount("#app");