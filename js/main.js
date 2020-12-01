import { fetchData } from "./modules/DataMiner.js";
import ProfCard from "./modules/TheProfCard.js";
    
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
                    message: "Hello from Vue!",
                    anotherMessage: "more text, so simple! much winning",
                    removeAformat: true,
                    showBioData: false,
                    professors: [],
                    currentProfData: {}
                },
        
                // this is the "mounted" lifecycle hook. Vue is done creating itself, and has attached itself to the "app" div on the page
                mounted: function() {
                    console.log("Vue is mounted, trying a fetch for the initial data");
                    
                    fetchData("./includes/index.php")
                        .then(data => {
                            data.forEach(prof => this.professors.push(prof));
                        })
                        .catch(err => console.error(err));            
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
                
                    // renderThumbnails(thumbs) {
                    //     let userSection = document.querySelector('.user-section'),
                    //         userTemplate = document.querySelector('#user-template').content;
                
                    //     removeChildNodes(userSection);
                
                    //     for (let user in thumbs) {
                    //         let currentUser = userTemplate.cloneNode(true),
                    //             currentUserText = currentUser.querySelector('.user').children;
                
                    //         currentUserText[1].src = `images/${thumbs[user].Image}`;
                    //         currentUserText[1].id = thumbs[user].Image;
                    //         currentUserText[2].textContent = thumbs[user].Name;
                    //         currentUserText[3].textContent = thumbs[user].Description;
                    //         // add this new user to the view
                    //         userSection.appendChild(currentUser);
                            
                    //     }
                    //         userSection.addEventListener("click", lightboxEvent);
                    // },
                    
                    showProfData(target) {
                        // remove this prof from the professors array
                        console.log('clicked to view prof bio data', target, target.name);
                        // the "this" keyword inside a vue instance REFERS to the Vue instance itself by default
        
                        // toggle the property between true and false using a ternary statement
                        this.showBioData = this.showBioData ? false : true;
        
                        // make the selected prof's data visible
                        this.currentProfData = target;
                    },            
        
                    removeProf(target) {
                        // remove this prof from the professors array
                        console.log('clicked to remove prof', target, target.name);
                        // the "this" keyword inside a vue instance REFERS to the Vue instance itself by default
        
                        // make the selected prof's data visible
                        // this.professors.splice(this.professors.indexOf(target), 1);
                        this.$delete(this.professors, target);
                    }
                },
        
                components: {
                    "prof-card": ProfCard
                }
            }).$mount("#app"); // also connects Vue to your wrapper in HTML
        })();