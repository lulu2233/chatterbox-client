var RoomsView = {

  $button: $('#rooms button'),
  $select: $('#rooms select'),

  // var mySelect = $('#rooms select');
  // $.each(myOptions, function(val, text) {
  //     mySelect.append(
  //         $('<option></option>').val(val).html(text)
  //     );
  // });

  initialize: function() {
    var rm = new Rooms();
    $('#rooms button').on('click', function() {
      RoomsView.renderRoom('ddd');
    });

  },

  render: function() {
  },

  renderRoom: function(roomName) {

    var rm = new Rooms();
    $('#rooms select').append(rm.render({roomname: roomName}));
  }

};
