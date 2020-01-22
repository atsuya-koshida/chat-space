$(function(){
      function buildHTML(message){
        if ( message.image ) {
          var html =
            `<div class="message" data-message-id=${message.id}>
              <div class="message__upper-info">
                <div class="message__upper-info--talker">
                  ${message.user_name}
                </div>
                <div class="message__upper-info--date">
                  ${message.created_at}
                </div>
              </div>
              <div class="message__text">
                <p class="message__text__content">
                  ${message.content}
                </p>
              </div>
              <img src=${message.image} >
            </div>`
          return html;
        } else {
          var html =
            `<div class="message" data-message-id=${message.id}>
              <div class="message__upper-info">
                <div class="message__upper-info--talker">
                  ${message.user_name}
                </div>
                <div class="message__upper-info--date">
                  ${message.created_at}
                </div>
              </div>
              <div class="message__text">
                <p class="message__text__content">
                  ${message.content}
                </p>
              </div>
            </div>`
          return html;
        };
      }
  $('#new_message').on("submit", function(e){
    e.preventDefault();
    var formData = new FormData(this);
    var url = $(this).attr('action');
    $.ajax({
      type: 'POST',
      url: url,
      data: formData,
      dataType: 'json',
      processData: false,
      contentType: false
    })
    .done(function(data){
      console.log(data)
      var html = buildHTML(data);
    })
  });
});