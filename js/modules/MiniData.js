export default {
    name: "MiniData",

    props: ["mini"],
    
    // data needs to be a function insde a component
    data: function() {
        return {
            myName: this.prof.name,
            myRole: this.prof.role,
            program: "IDP"
        }
    },


    template: `<li>
                    <img :src="'images/' + prof.avatar" :alt='prof.name + " image"'>
                    <p>Prof Name: {{ prof.name }}</p>
                    
                    <a href="" class="remove-prof">Show {{prof.name}}'s info</a>
                    <a href="" class="remove-prof">Remove {{prof.name}}</a>
                    </li>`,

    created: function() {
        console.log(`created ${this.prof.name}'s card`);
    },

    methods: {
        logClicked() {
            console.log(`fired from inside ${this.prof.name}'s component`);
        }
    }
}