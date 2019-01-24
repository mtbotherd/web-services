$(document).ready(function() {

    // Metro Transit Web services
    // Get Providers
    $('#jsGetProviders').click(function() {
        var providers = $('.providers');

        providers.text('Getting data from the server...');

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

        routes.text('Getting data from the server...');

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

        directions.text('Getting data from the server...');

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

        stops.text('Getting data from the server...');

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

    // Get Departures
    $('#jsGetDepartures').click(function() {
        var departures = $('.departures');

        departures.text('Getting data from the server...');

        $.ajax({
            type: 'GET',
            url: 'http://svc.metrotransit.org/NexTrip/11167?format=json',
            dataType: 'json',
            success: function(data) {
                console.log(data);
                var output = '<table class="table table-striped"><thead><tr><th>Block Number</th><th>Departure Text</th><th>Departure Time</th><th>Description</th><th>Gate</th><th>Route</th><th>Route Direction</th><th>Terminal</th><th>Vehicle Heading</th><th>Vehicle Latitude</th><th>Vehicle Longitude</th></tr></thead><tbody>';
                for (var i in data) {
                    output += '<tr><td>' +
                        data[i].BlockNumber +
                        '</td><td>' +
                        data[i].DepartureText +
                        '</td><td>' +
                        data[i].DepartureTime +
                        '</td><td>' +
                        data[i].Description +
                        '</td><td>' +
                        data[i].Gate +
                        '</td><td>' +
                        data[i].Route +
                        '</td><td>' +
                        data[i].RouteDirection +
                        '</td><td>' +
                        data[i].Terminal +
                        '</td><td>' +
                        data[i].VehicleHeading +
                        '</td><td>' +
                        data[i].VehicleLatitude +
                        '</td><td>' +
                        data[i].VehicleLongitude +
                        '</td></tr>';
                }
                output += '</tbody></table>';
                departures.html(output);
                $('#jsGetDepartures').hide();
            }
        });
    });

    // Get Timepoint Departures
    $('#jsGetTimepointDepartures').click(function() {
        var timepointDepartures = $('.timepoint-departures');

        timepointDepartures.text('Getting data from the server...');

        $.ajax({
            type: 'GET',
            url: 'http://svc.metrotransit.org/NexTrip/5/4/7SOL?format=json',
            dataType: 'json',
            success: function(data) {
                console.log(data);
                var output = '<table class="table table-striped"><thead><tr><th>Block Number</th><th>Departure Text</th><th>Departure Time</th><th>Description</th><th>Gate</th><th>Route</th><th>Route Direction</th><th>Terminal</th><th>Vehicle Heading</th><th>Vehicle Latitude</th><th>Vehicle Longitude</th></tr></thead><tbody>';
                for (var i in data) {
                    output += '<tr><td>' +
                        data[i].BlockNumber +
                        '</td><td>' +
                        data[i].DepartureText +
                        '</td><td>' +
                        data[i].DepartureTime +
                        '</td><td>' +
                        data[i].Description +
                        '</td><td>' +
                        data[i].Gate +
                        '</td><td>' +
                        data[i].Route +
                        '</td><td>' +
                        data[i].RouteDirection +
                        '</td><td>' +
                        data[i].Terminal +
                        '</td><td>' +
                        data[i].VehicleHeading +
                        '</td><td>' +
                        data[i].VehicleLatitude +
                        '</td><td>' +
                        data[i].VehicleLongitude +
                        '</td></tr>';
                }
                output += '</tbody></table>';
                timepointDepartures.html(output);
                $('#jsGetTimepointDepartures').hide();
            }
        });
    });

    // Get Vehicle Locations
    $('#jsGetVehicleLocations').click(function() {
        var vehicleLocations = $('.vehicle-locations');

        vehicleLocations.text('Getting data from the server...');

        $.ajax({
            type: 'GET',
            url: 'http://svc.metrotransit.org/NexTrip/VehicleLocations/0?format=json',
            dataType: 'json',
            success: function(data) {
                console.log(data);
                var output = '<table class="table table-striped"><thead><tr><th>Bearing</th><th>Block Number</th><th>Direction</th><th>Location Time</th><th>Odometer</th><th>Route</th><th>Speed</th><th>Terminal</th><th>Vehicle Latitude</th><th>Vehicle Longitude</th></tr></thead><tbody>';
                for (var i in data) {
                    output += '<tr><td>' +
                        data[i].Bearing +
                        '</td><td>' +
                        data[i].BlockNumber +
                        '</td><td>' +
                        data[i].Direction +
                        '</td><td>' +
                        data[i].LocationTime +
                        '</td><td>' +
                        data[i].Odometer +
                        '</td><td>' +
                        data[i].Route +
                        '</td><td>' +
                        data[i].Speed +
                        '</td><td>' +
                        data[i].Terminal +
                        '</td><td>' +
                        data[i].VehicleLatitude +
                        '</td><td>' +
                        data[i].VehicleLongitude +
                        '</td></tr>';
                }
                output += '</tbody></table>';
                vehicleLocations.html(output);
                $('#jsGetVehicleLocations').hide();
            }
        });
    });
});