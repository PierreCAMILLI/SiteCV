/**
 * Created by Pierre Camilli on 26/06/2016.
 */

menuView = Backbone.View.extend({
    el: ".menu",
    // Largeur du menu
    menuWidth: 0,
    // Indique si les boutons du menu sont affichés ou non
    isDisplayed: false,
    // Informations sur les boutons du menu
    buttonsInfo:[
        {ref:"index",glyphicon:"glyphicon-home",value:"Accueil"},
        {ref:"skills",glyphicon:"glyphicon-star",value:"Compétences"},
        {ref:"description",glyphicon:"glyphicon-user",value:"Description"},
        {ref:"project",glyphicon:"glyphicon-briefcase",value:"Projets"},
        {ref:"contact",glyphicon:"glyphicon-envelope",value:"Contact"},
    ],

    initialize: function(){
        console.log("MENU");
        this.show();
    },
    // Evènements déclenchés par l'utilisateur
    events: {
        "mouseover #links button": "displayTitle",
        "mouseout #links button": "hideTitle",
        "click #links button": "navigate",
        "click #show_hide_menu": "showHideMenu"
    },
    // Affiche l'intitulé d'un bouton du menu
    displayTitle: function(ev){
        var title = $(ev.target).val();
        $("#button-title").text(title);
    },
    // Cache l'intitulé d'un bouton du menu
    hideTitle: function(ev){
        $("#button-title").text("");
    },
    // Navigue vers une nouvelle route
    navigate: function(ev){
        var road = $(ev.target).attr('href');
        myRoute.navigate(road, {trigger: true});
    },
    // Ajoute les boutons du menu
    addButtons: function(){
        var div = $(".menu #links tr");
        $.each(this.buttonsInfo, function(index, value){
            div.append('<td><button type="button" class="btn btn-default btn-lg btn-circle" href="'+value.ref+'" value="'+value.value+'"><span class="glyphicon '+value.glyphicon+'" aria-hidden="true"></span></button></td>');
        });
    },
    // Affiche le menu pour la première fois
    show: function(side){
        if(side == undefined){
            side = 'left';
        }
        this.addButtons();
        $(this.el).show('slide',{direction:side},1000);
        this.menuWidth = $(".menu").width();
        this.isDisplayed = true;
    },
    // Cache ce menu pour la dernière fois
    hide: function(side){
        if(side == undefined){
            side = 'left';
        }
        $(this.el).hide('slide',{direction:side},1000);
        this.isDisplayed = false;
    },
    // Affiche ou cache les boutons du menu
    showHideMenu: function(action){
        if(this.isDisplayed){
            this.hideMenu();
        }else{
            this.showMenu();
        }
    },
    // Affiche les boutons du menu
    showMenu: function(){
        $(".menu .glyphicon-triangle-right").removeClass( "glyphicon-triangle-right" ).addClass( "glyphicon-triangle-left" );
        $(".menu").animate({marginLeft:"5%", width:this.menuWidth},500);
        $(".menu #links").show('slide',{direction:'left'},500);
        this.isDisplayed = true;
    },
    // Cache les boutons du menu
    hideMenu: function(){
        $(".menu .glyphicon-triangle-left").removeClass( "glyphicon-triangle-left" ).addClass( "glyphicon-triangle-right" );
        $(".menu #links").hide('slide',{direction:'left'},500);
        $(".menu").animate({marginLeft:"0px", left:"0px", width:"55px"},500);
        this.isDisplayed = false;
    }
});

indexView = Backbone.View.extend({
    el: ".index",
    initialize: function(){
        this.show();
    },
    show: function(side){
        if(side == undefined){
            side = 'left';
        }
        $(this.el).show('slide',{direction:side},500);
    },
    hide: function(side, after){
        if(side == undefined){
            side = 'right';
        }
        $(this.el).hide('slide',{direction:side},500, after);
    }
});

skillsView = Backbone.View.extend({
    el: ".skills",
    initialize: function(){
        this.show();
    },
    show: function(side){
        if(side == undefined){
            side = 'left';
        }
        $(this.el).show('slide',{direction:side},500);
    },
    hide: function(side, after){
        if(side == undefined){
            side = 'right';
        }
        $(this.el).hide('slide',{direction:side},500, after);
    }
});

descriptionView = Backbone.View.extend({
    el: ".description",
    initialize: function(){
        this.show();
    },
    show: function(side){
        if(side == undefined){
            side = 'left';
        }
        $(this.el).show('slide',{direction:side},500);
    },
    hide: function(side, after){
        if(side == undefined){
            side = 'right';
        }
        $(this.el).hide('slide',{direction:side},500, after);
    }
});

projectView = Backbone.View.extend({
    el: ".project",
    initialize: function(){
        this.show();
    },
    show: function(side){
        if(side == undefined){
            side = 'left';
        }
        $(this.el).show('slide',{direction:side},500);
    },
    hide: function(side, after){
        if(side == undefined){
            side = 'right';
        }
        $(this.el).hide('slide',{direction:side},500, after);
    }
});

contactView = Backbone.View.extend({
    el: ".contact",
    initialize: function(){
        this.show();
    },
    show: function(side){
        if(side == undefined){
            side = 'left';
        }
        $(this.el).show('slide',{direction:side},500);
    },
    hide: function(side, after){
        if(side == undefined){
            side = 'right';
        }
        $(this.el).hide('slide',{direction:side},500, after);
    }
});