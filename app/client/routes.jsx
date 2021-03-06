FlowRouter.route('/', {
  name: 'home',
  action: function() {
    ReactLayout.render(App, {
      content: <NotesList />
    });
  }
});

FlowRouter.route('/', {
  name: 'home',
  action: function() {
    ReactLayout.render(App, {
      content: <NotesList />
    });
  }
});

FlowRouter.route('/login', {
  name: 'login',
  action: function() {
    ReactLayout.render(App, {
      content: <Login />
    });
  }
});

FlowRouter.route('/register', {
  name: 'register',
  action: function() {
    ReactLayout.render(App, {
      content: <Register />
    });
  }
});

FlowRouter.route('/logout', {
  name: 'logout',
  action: function() {
    Meteor.logout(function(){
      FlowRouter.go('/login');
      sAlert.info("You've been signed out.", {effect: 'stackslide', position: 'top-left', timeout: 2000,});
    });
  }
});

FlowRouter.notFound = {
  action: function() {
   FlowRouter.go('home');
  }
};
