var MessagesView = {

  $chats: $('#chats'),
  friends: false,


  initialize: function() {

  },

  render: function(data) {
    var messages = '';

    // console.log(data.results);
    let mv = new MessageView();
    let username = data.results.username;
    for (i = 0; i < data.results.length; i++) {
      if (data.results[i].text) {
        messages += mv.render(data.results[i]);
      }
    }
    $('#chats').append(messages);
  },




  renderMessage: function(msg) {
    var mv = new MessageView();
    var messageCompile = mv.render(msg);
    
    $('#chats').append(messageCompile);
  },

  friends: function() {


    var friend = new Friends();
    if (friend.status === true) {
      $('#chats').append(friend);
    }

  }



};