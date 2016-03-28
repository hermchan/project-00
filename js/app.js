$(document).ready(function(){

  var ferrari = new Car('red', 'sports', 81, '#car1');
  var porsche = new Car('black', 'sports', 80, '#car2');


  function Car(color, type, keyCode, id){
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
    var position = 10;
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
