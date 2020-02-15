class Rooms  {
  constructor() {
    this.render = _.template(
      '<div class=\'select\'>' +
        '<div class=\'roomname\'><%- roomname %></div>' +
      '</div>'
    );
  }



}