var MessagesView = {


  $chats: $('#chats'),


  initialize: function() {
  // create empty html element
  // use jquery to append data to html element
    // var htmlEl = '<div></div>';

    // $('#chats').append("HELLLOOOO");

  },

  render: function(data) {
    var messages = '';

    // console.log(data.results);
    let mv = new MessageView();
    for (i = 0; i < data.results.length; i++) {
      messages += mv.render(data.results[i]);
    }
    $('#chats').append(messages);
    // var $messageDisplay = $("<div>", {id: 'messages'});
    // $('#chats').append($messageDisplay);
  },




  renderMessage: function(msg) {
    // var messageComplie = render2(msg);
    // $('#chats').append(messageComplie);

  }
  //create renderMessage method
  // append ._template(data.results) to $chat




};