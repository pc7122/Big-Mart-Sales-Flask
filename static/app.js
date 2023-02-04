function onPageLoad() {
    console.log("document loaded");
    var url = "/get-outlets"; // Use this if you are NOT using nginx which is first 7 tutorials

    $.post(url, function (data, status) {
        if (data) {
            console.log(data.outlets);
            let outlets = data.outlets;
            $('#outlets').empty();
            $('#outlets').append(new Option("Choose", "", true));
            for (var i in outlets) {
                var opt = new Option(outlets[i], i);
                $('#outlets').append(opt);
            }
            $('#outlets option').first().attr('disabled', 'disabled');
        }
    });
}

window.onload = onPageLoad;