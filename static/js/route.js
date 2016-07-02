/**
 * Created by Pierre Camilli on 26/06/2016.
 */

route = Backbone.Router.extend({
    view: null,
    initialize:function(){
        console.log("INITIALIZE");
        Backbone.history.start();
        var menu = new menuView();
        this.navigate("index", {trigger: true});
    },
    routes: {
        "index":        "index",            // Index
        "skills":       "skills",           // Compétences
        "description":  "description",      // Description
        "project":      "project",          // Projets
        "contact":      "contact",          // Contact
    },
    index: function(){
        console.log("INDEX");
        this.createView(indexView);
    },
    skills: function(){
        console.log("SKILLS");
        this.createView(skillsView);
    },
    description: function(){
        console.log("DESCRIPTION");
        this.createView(descriptionView);
    },
    project: function(){
        console.log("PROJECT");
        this.createView(projectView);
    },
    contact: function(){
        console.log("CONTACT");
        this.createView(contactView);
    },
    createView: function(v){
        self = this;
        this.hideView('right', function(){
            self.view = new v();
        });

    },
    hideView: function(side, after){
        if(this.view != null){
            this.view.hide(side, after);
        }else{
            after();
        }
    }
});

myRoute = new route();