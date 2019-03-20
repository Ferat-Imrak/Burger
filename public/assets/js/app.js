$(document).ready(function () {

  $(".eaten").on("click", function (event) {
    event.preventDefault();

    var id = $(this).data("id");
    var eaten = $(this).data("neweaten");

    console.log(eaten);

    var devouredOrNot = {
      devoured: true
    };

    // Send the PUT request.
    $.ajax("/api/burgers/" + id, {
      type: "PUT",
      data: devouredOrNot
    }).then(
      function () {
        console.log("Burger is now eaten = ", devouredOrNot);
        // Reload the page to get the updated list
        location.reload();
      }
    );

  });


  $(".makeTheBurger").on("submit", function (event) {
    event.preventDefault();

    // var value = $("#burgerForm").val();
    // console.log(value);

    var newBurger = {
      burger_name: $("#burgerForm").val().trim(),
      devoured: true
    };

    $.ajax("/api/burgers", {
      type: "POST",
      data: newBurger
    }).then(function () {
      console.log("burger is ready");
      location.reload();
    })
  })
})