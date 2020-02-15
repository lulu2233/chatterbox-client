var MessagesView = {

  messages: [],
  $chats: $('#chats'),

  initialize: function() {
  // create empty html element
  // use jquery to append data to html element
    // var htmlEl = '<div></div>';

    // $('#chats').append("HELLLOOOO");

  },

  render: function(data) {
    // var $messageDisplay = $("<div>", {id: 'messages'});
    // $('#chats').append($messageDisplay);


    // for (var i = 0; i < data.results.length; i++) {
    //   var messageText = data.results[i].text;
    //   var username = data.results[i].username;
    //   var roomName = data.results[i].roomname;
    //   $($messageDisplay).append(username+ ": " + '\r\n');
    //   $($messageDisplay).append(messageText + '\r\n');
    //   // $($messageDisplay).append("<p>" + roomName + "</p>");
    // }
    this.messages = data.results.map((message) => {
      return MessageView.render(message);
    });

    this.$chats.append(this.messages);

  },
  renderMessage: function(data) {

  }
  //create renderMessage method
  // append ._template(data.results) to $chat




};