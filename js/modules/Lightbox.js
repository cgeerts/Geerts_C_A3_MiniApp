export default {
    name: "Lightbox",

    props: ["lightboxMiniData"],
    
    // data needs to be a function insde a component
    data: function() {
        return {
        }
    },


    template: `<div class="mini-info">
                <img :src="'images/' + lightboxMiniData.Image" :alt='lightboxMiniData.Model + " image"'>
                <p>Price: {{ lightboxMiniData.Price }}</p>
                <p>Power (HP): {{ lightboxMiniData.Power }}</p>
                <p>Fuel Consumption (100km): {{ lightboxMiniData.Consumption }}</p>
                <p>Space (L): {{ lightboxMiniData.Space }}</p>

                <button @click.prevent="$emit('show-mini', 0)">Close</button>
               </div>`,

    created: function() {

    },

    methods: {

    }
}