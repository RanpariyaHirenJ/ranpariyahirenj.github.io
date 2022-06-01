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
    // $(".slide-edit").click(function() {
    //     $("#add-and-edit").animate({
    //         right: '0'
    //     });
    //     $(".popup-overlay").css('display', 'block');
    // });
    // $(".popup-overlay").click(function() {
    //     $(".add-and-edit").animate({
    //         right: '-650px'
    //     });
    //     $(".popup-overlay").css('display', 'none');
    // });
    $(".cancel-btn").click(function() {
        $("#add-and-edit").animate({
            right: '-650px'
        });
        $(".popup-overlay").css('display', 'none');
    });


    $(".add-event").click(function() {
        $("#event-add-popup").animate({
            right: '0'
        });
        $(".popup-overlay").css('display', 'block');
        $("body").css("overflow", "hiddne");
    });
    $("#event-add-popup .cancel-btn").click(function() {
        $("#event-add-popup").animate({
            right: '-1200px'
        });
        $(".popup-overlay").css('display', 'none');
        $("body").css("overflow-y", "hiddne");
    });


    $(".session-name").click(function() {
        $(".session-name-popup").animate({
            right: '0'
        });
        $(".popup-overlay").css('display', 'block');
    });
    $(".popup-overlay").click(function() {
        $(".session-name-popup").animate({
            right: '-1200px'
        });
        $(".popup-overlay").css('display', 'none');
    });

    $(".session-select").click(function() {
        $(".select-modal").animate({
            right: '0'
        });
        $(".popup-overlay").css('display', 'block');
    });
    $(".popup-overlay").click(function() {
        $(".select-modal").animate({
            right: '-750px'
        });
        $(".popup-overlay").css('display', 'none');
    });
    $("#cancle-button").click(function() {
        $(".select-modal").animate({
            right: '-750px'
        });
        $(".popup-overlay").css('display', 'none');
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