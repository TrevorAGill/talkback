$(document).ready(function(){
  $("button#hello").click(function(){
    $("ul#user").prepend("<li>Hello!</li>");
    $("ul#machine").prepend("<li>Sup</li>");

    $("ul#machine").children("li").first().click(function(){
      $(this).remove();
    });
    $("ul#user").children("li").first().click(function(){
      $(this).remove();
    });
  });

  $("button#goodbye").click(function(){
    $("ul#user").prepend("<li>Goodbye!</li>");
    $("ul#machine").prepend("<li>Later</li>");
    $("li").css("background-color","orange");
  });

  $("button#stop").click(function(){
    $("ul#user").prepend("<li>Stop copying me!</li>");
    $("ul#machine").prepend("<li>Nah</li>");
    $("li").css("background-color","red");
  });
});
