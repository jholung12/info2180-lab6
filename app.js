$(document).ready(function() {
    var xmlBtn = $('#search');

    xmlBtn.on('click', function() {
        $.ajax('superheroes.php', {
            method: "GET",
            dataType: 'xml'
        }).done(function(response) {
            var people = $(response).find('person');
            console.log($('#results').append("<ul></ul>"));
            $(people).each(function() {
                $('#results ul').append('<li>' + $(this).find('name').text() + '</li>');
            });
        }).fail(function() {
            alert('There was a problem with the request.');
        });
    });
});
