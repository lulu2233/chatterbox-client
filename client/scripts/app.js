var App = {

  $spinner: $('.spinner img'),

  username: 'anonymous',



  initialize: function() {
    App.username = window.location.search.substr(10);
    FormView.initialize();
    RoomsView.initialize();
    MessagesView.initialize();
    $(document).on('click', '.username', function() {
      var username = $(this).text();

      Friends.toggleStatus(username);
    }),

    // Fetch initial batch of messages
    App.startSpinner();
    App.fetch(App.stopSpinner);

  },

  fetch: function(callback = ()=>{}) {
    Parse.readAll((data) => {
      // examine the response from the server request:
      console.log(data);
      MessagesView.render(data);
      callback();
    });
  },

  // post: function(callback = ()=>{}) {
  //   Parse.create((message) => {
  //     // get message
  //     // send message to Parse -> create -> POST ajax call

  //     callback();
  //   });

  // },

  startSpinner: function() {
    App.$spinner.show();
    FormView.setStatus(true);
  },

  stopSpinner: function() {
    App.$spinner.fadeOut('fast');
    FormView.setStatus(false);
  }
};
