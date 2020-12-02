import { fetchData } from "./modules/DataMiner.js";
import MiniData from "./modules/MiniData.js";
import Lightbox from "./modules/Lightbox.js";
    
        (() => {
        
        // Vue.component("prof-card", {
        //     props: ["prof"],
            
        //     template: `<li>
        //                     <img :src="'images/' + prof.avatar" :alt='prof.name + " image"'>
        //                     <p>Prof Name: {{ prof.name }}</p>
                            
        //                     <a href="" class="remove-prof">Show {{prof.name}}'s info</a>
        //                     <a href="" class="remove-prof">Remove {{prof.name}}</a>
        //                     </li>`,
        
        //     created: function() {
        //         console.log(`created ${this.prof.name}'s card`);
        //     }
        // });

            let vue_vm = new Vue({
                // link Vue to an element in our HTML
                //el: "#app",
        
                data: {
                    message: "MINI Canada",
                    anotherMessage: "The Lineup",
                    removeAformat: true,
                    showBioData: false,
                    cars: [],
                    currentMiniData: {},
                    showLightbox: true,
                    errorMessage: '',
                    errorMessageNotDisplayed: true,
                },
        
                // this is the "mounted" lifecycle hook. Vue is done creating itself, and has attached itself to the "app" div on the page
                mounted: function() {
                    console.log("Vue is mounted, trying a fetch for the initial data");
                    
                    fetchData("./includes/index.php")
                        .then(data => {
                            data.forEach(mini => this.cars.push(mini));
                        })
                        .catch((err) => {
                            console.error(err);
                            this.errorMessage = err;
                            this.errorMessageNotDisplayed = false;
                        });            
                },
        
                // run a method when we change our view (update the DOM with Vue)
                updated: function() {
                    console.log('Vue just updated the DOM');
                },
        
                methods: {
                    logClicked() {
                        console.log("clicked on a list item");
                    },
        
                    clickHeader() {
                        console.log("clicked on the header");
                    },
                    
                    showMiniData(mini) {
                        // remove this prof from the professors array
                        // console.log('clicked to view mini bio data', target, target.Model);
                        // // the "this" keyword inside a vue instance REFERS to the Vue instance itself by default
        
                        // // toggle the property between true and false using a ternary statement
                        // this.showBioData = this.showBioData ? false : true;
        
                        // // make the selected mini cooper data visible
                        // this.currentMiniData = target;

                        if (mini !== 0) {
                            
                            fetchData(`./includes/index.php?id=${mini}`)
                                .then(data => {
                                    // data.forEach(mini => this.cars.push(mini));
                                    this.currentMiniData = data[0];
                                })
                                .catch((err) => {
                                    console.error(err);
                                    this.errorMessage = err;
                                    this.errorMessageDisplayed = false;
                                });
                        }
                        
                        console.log(`minidata fired: ${mini}`);
                        this.showLightbox = this.showLightbox ? false : true;
                    },            
                },
        
                components: {
                    "mini-data": MiniData,
                    "lightbox": Lightbox
                }
            }).$mount("#app"); // also connects Vue to your wrapper in HTML
        })();