$(document).ready(function(){

  var Andy = new Player('red', 'sports', 81, '#player1');
  var Sam = new Player('black', 'sports', 80, '#player2');


  function Player(color, type, keyCode, id){
    $('body').on("keyup", function (event){
      if (event.keyCode===keyCode){
        $(id).offset({left:position += 50});
        console.log($(document).width());
        getWinner(id, position);
      }
    });
    this.color = color;
    this.type = type;
    this.id = id;
    var position = 135;
  }

  function getWinner(id, position){
    if (position >= $(window).width()) {
      alert(id + ' is the winner!');
    }
  }

  // Button to reset the board
  $("#reset").on("click", function handleClick(){
    location.reload();
  });
});
