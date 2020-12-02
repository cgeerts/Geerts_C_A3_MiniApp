export default {
    name: "MiniData",

    props: ["mini"],
    
    // data needs to be a function insde a component
    data: function() {
        return {
            miniModel: this.mini.Model,
            miniType: this.mini.Type,
            hidden: false,
        }
    },

    template: `<li :class="{'mini-hidden':hidden}">
                    <img :src="'images/' + mini.Image" :alt='mini.Model + " image"'>
                    <p>{{ mini.Type }} - {{ mini.Model }}</p>
                    
                    <a href="#" class="remove-mini" @click.prevent="$emit('show-mini', mini.ID)">View Details</a>
                    <a href="#" class="remove-mini" @click.prevent="hideMini()">Remove Car</a>
                </li>`,

    created: function() {
        console.log(`created ${this.mini.Type}'s card`);
    },

    methods: {
        logClicked() {
            console.log(`fired from inside ${this.mini.Type}'s component`);
        },

        hideMini() {
            console.log(`hideMini`);
            this.hidden=true;
        }, 
    }
}