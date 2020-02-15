var MessagesView = {


  $chats: $('#chats'),


  initialize: function() {

    // $('#chats').append("HELLLOOOO");

  },

  render: function(data) {
    var messages = '';

    // console.log(data.results);
    let mv = new MessageView();
    for (i = 0; i < data.results.length; i++) {
      if (data.results[i].text) {
        messages += mv.render(data.results[i]);
      }
    }
    $('#chats').append(messages);
    // var $messageDisplay = $("<div>", {id: 'messages'});
    // $('#chats').append($messageDisplay);
  },




  renderMessage: function(msg) {
  //create renderMessage method
  // append ._template(data.results) to $chat
    var mv = new MessageView();
    var messageComplie = mv.render(msg);
    $('#chats').append(messageComplie);
  }





};