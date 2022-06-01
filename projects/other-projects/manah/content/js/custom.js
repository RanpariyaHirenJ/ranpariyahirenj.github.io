$(document).ready(function() {
    $("#menu1 .master-menu").click(function() {
        $("#link-bottom1").slideToggle();
    });
    $("#menu2 .master-menu").click(function() {
        $("#link-bottom2").slideToggle();
    });
    $(".top-bar .bar").click(function() {
        $(".main").addClass("width-resize")
    });
    $(".main-dashboard .open-navigation-bar").click(function() {
        $(".main").removeClass("width-resize")
    });
    $(".slide-edit").click(function() {
        $(".add-and-edit").animate({
            right: '0'
        });
    });
    $(".cancel-btn").click(function() {
        $(".add-and-edit").animate({
            right: '-650px'
        });
    });
    $('#chooseFile').bind('change', function() {
        var filename = $("#chooseFile").val();
        if (/^\s*$/.test(filename)) {
            $(".file-upload").removeClass('active');
            $("#noFile").text("No file chosen...");
        } else {
            $(".file-upload").addClass('active');
            $("#noFile").text(filename.replace("C:\\fakepath\\", ""));
        }
    });
});