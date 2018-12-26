$(document).ready(function() {

    /////////////////////////////////////////
    // Ajax example using vanilla Javascript
    /////////////////////////////////////////
    // var btn = document.getElementById("request");
    // var bio = document.getElementById("bio");
    //
    // var request = new XMLHttpRequest();
    //
    // request.onreadystatechange = function() {
    //     if (request.readyState === 4) {
    //         bio.style.border = "1px solid #e8e8e8";
    //         if (request.status === 200) {
    //             bio.innerHTML = request.responseText;
    //         } else {
    //             bio.innerHTML = "An error occurred during your request: " + request.status + " " + request.statusText;
    //         }
    //     }
    // }
    //
    // request.open("Get", "txt/providers.json");
    //
    // btn.addEventListener("click", function() {
    //     this.style.display = "none"; // Hides the button when clicked.
    //     request.send();
    // });

    /////////////////////////////
    // Ajax example using jquery
    /////////////////////////////
    // var $btn2 = $("#request2");
    // var $bio2 = $("#bio2");
    //
    // $btn2.on("click", function() {
    //     $(this).hide(); // Hides the button when clicked.
    //     $bio2.load("txt/Routes.xml", completeFunction);
    // });
    //
    // function completeFunction(responseText, textStatus, request) {
    //     $bio2.css("border", "1px solid #e8e8e");
    //     if (textStatus == "error") {
    //         $bio2.text("An error occurred during your request: " + request.status + " " + request.statusText);
    //     }
    // }

    ////////////////////////////////////////////////////
    // Ajax example using jQuery and the ajax function.
    ////////////////////////////////////////////////////
    var $list = $(".m-info");
    var $message = $(".m-message");
    var $modal = $(".modal");
    var $framework;

    $(".boxes a").on("click", function(e) {
        e.preventDefault();

        $framework = $(this).text();

        $.ajax({
                url: "json/sample.json",
                dataType: "json",
            }).done(successFunction)
            .fail(errorFunction)
            .always(alwaysFunction);
    });

    function successFunction(data) {
        if (data.length > 0) {
            for (var i = 0; i < data.length; i++) {
                if ($framework === data[i].name) {
                    $list.show();
                    $message.hide();

                    $list.find('li:nth-of-type(2)').text($framework);
                    $list.find('li:nth-of-type(4)').text(data[i].currentVersion);
                    $list.find('li:nth-of-type(6)').text(data[i].numberOfStars);
                    $list.find('li:nth-of-type(8)').html('<a href="%20+%20data%5Bi%5D.url%20+%20" target="_blank">' + data[i].url + '</a>');
                    break;
                } else {
                    $list.hide();
                    $message.text("No data received fro your response!");
                }
            }
        }
    }

    function errorFunction(request, textStatus, errorThrown) {
        $list.hide();
        $message.text("An error occurred during your request: " + request.status + " " + textStatud + " " + errorThrown);
    }

    function alwaysFunction() {
        $modal.addClass("active");
    }
});