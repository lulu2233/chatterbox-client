var FormView = {

  $form: $('form'),

  initialize: function() {
    FormView.$form.on('submit', FormView.handleSubmit);
  },

  handleSubmit: function(event) {
    // Stop the browser from submitting the form
    event.preventDefault();
    // $('#submit').click(function() {
    var userMsg = {
      roomname: 'lobby',
      username: App().username,
      text: $('#message').val()
    };
    $("#message").val('');
    console.log(userMsg);
    Parse.create(userMsg, ()=>{
      App.fetch();
    });
  },

  setStatus: function(active) {
    var status = active ? 'true' : null;
    FormView.$form.find('input[type=submit]').attr('disabled', status);
  }

};