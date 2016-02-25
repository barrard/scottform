if (Meteor.isClient) {
//sets up the login routine
Session.set('imNotInYet', true)
// Session.set('addInterview', false)
// Session.set('imScott', false)

//Welcome Screen?
Template.welcome.helpers({
  stateofme:function(){
    console.log(Session.get('imScott')+" imScot")
    console.log(Session.get('huhuh')+" huhuh")
    console.log(Session.get('addInterview')+" addInterview")
    console.log(Session.get('imNotInYet')+" imNotInYet")
  }
})

Template.welcome.events({
  'click #yesplease':function(){
    Session.set('imNotInYet', true)
  }
})

//body helpers
  Template.body.helpers({
    imScott:function(){
      return Session.get('imScott')
    },

    imNotInYet:function(){
      return Session.get('imNotInYet')
      if (Session.get('imNotInYet')) {
        console.log('WHOWO!')
      };
      console.log(Session.get('imNotInYet'))
    },
      imScott:function(){
        if (Session.get('imScott')) {
        console.log('imScott is true')
        };
        return Session.get('imScott')
      }
  })
  //end body helpers

  //main template events
  Template.main.events({
    'click #logoutBtn': function(e){
      e.preventDefault()
      Session.set('imNotInYet', true)
      Session.set('imScott', false)

    },
    'click .prime':function(e){
      e.preventDefault()
      Session.set('addInterview', true)
      console.log('addInterview......true')
    }
  });//end main.events

  //main.helpers
  Template.main.helpers({
   addInterview:function(){
      if (Session.get('addInterview')===true) {
      console.log('addInterview is now true body helper')
      };
      return Session.get('addInterview')
    }
  })


  //login helpers
  Template.login.helpers({

  });


 
 Template.login.events({
  'click #loginBtn': function(e){
    e.preventDefault();
    console.log('CLICKED THE LOGING BUTTON!!!')
    Session.set('imScott', true)
    Session.set('imNotInYet', false)
      console.log(Session.get('imNotInYet') +"  imnotinyet")
  }
 });



}

if (Meteor.isServer) {
  Meteor.startup(function () {
    // code to run on server at startup
  });
}
