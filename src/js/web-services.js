$(document).ready(function() {

    // Metro Transit Web services
    // Get Providers
    $('#jsGetProviders').click(function() {
        var providers = $('.providers');

        providers.text('Loading data from JSON source...');

        $.ajax({
            type: 'GET',
            url: 'http://svc.metrotransit.org/nextrip/providers?format=json',
            dataType: 'json',
            success: function(data) {
                console.log(data);
                var output = '<ul>';
                for (var i in data) {
                    output += '<li>' + data[i].Text + '</li>';
                }
                output += '</ul>';
                providers.html(output);
                $('#jsGetProviders').hide();
            }
        });
    });

    // Get Routes
    $('#jsGetRoutes').click(function() {
        var routes = $('.routes');

        routes.text('Loading data from JSON source...');

        $.ajax({
            type: 'GET',
            url: 'http://svc.metrotransit.org/NexTrip/Routes?format=json',
            dataType: 'json',
            success: function(data) {
                console.log(data);
                var output = '<div class="form-group"><label for="routeList">Transit routes operating today</label><select class="form-control" id="routeList">';
                for (var i in data) {
                    output += '<option>' + data[i].Description + '</option>';
                }
                output += '</select></div>';
                routes.html(output);
                $('#jsGetRoutes').hide();
            }
        });
    });

    // Get Directions
    $('#jsGetDirections').click(function() {
        var directions = $('.directions');

        directions.text('Loading data from JSON source...');

        $.ajax({
            type: 'GET',
            url: 'http://svc.metrotransit.org/NexTrip/Directions/5?format=json',
            dataType: 'json',
            success: function(data) {
                console.log(data);
                var output = '<p>';
                for (var i in data) {
                    output += data[i].Text + '<br />';
                }
                output += '</p>';
                directions.html(output);
                $('#jsGetDirections').hide();
            }
        });
    });

    // Get Stops
    $('#jsGetStops').click(function() {
        var stops = $('.stops');

        stops.text('Loading data from JSON source...');

        $.ajax({
            type: 'GET',
            url: 'http://svc.metrotransit.org/NexTrip/Stops/5/4?format=json',
            dataType: 'json',
            success: function(data) {
                console.log(data);
                var output = '<p>';
                for (var i in data) {
                    output += data[i].Text + '-' + data[i].Value + '<br />';
                }
                output += '</p>';
                stops.html(output);
                $('#jsGetStops').hide();
            }
        });
    });
});