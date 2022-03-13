$(document).ready(function() {
    $("#overlay").hover(function() {
            // this animates the hover to fade to
            $(this).css("opacity", 1)
        },
        function() {
            $(this).removeAttr("style")
        }


    )
})