$(document).ready(function () {
    $('.msg-close-button').click(function () {
        //alert('i was clicked');
        $('#msg-container').remove();
    });

    //http://www.openjs.com/scripts/events/keyboard_shortcuts/
    //shortcut.add("Ctrl+Shift+X", function () {
    //    alert("Hi there!");
    //});
    //shortcut.remove("Ctrl+B");    
    //shortcut.add("Shift+F1", function () { IntroPage.topic(); });

    shortcut.add("Shift+F1", function () { GetIntroPage(); });
    $('#aIntroHelp').click(function () { GetIntroPage(); });
    $('.intro_page_button').click(function () { GetIntroPage(); });
    $("#txtSearch").keydown(function (e) {
        var code = e.keyCode || e.which;
        //alert(e.ctrlKey);
        //alert(code);
        if (e.ctrlKey && code == 112) { //F1 keycode            
            ClickOpenModel("aOpenSearchHelp");
        }
    });
});

function GetIntroPage() {
    var sPage = window.location.pathname.substring(window.location.pathname.lastIndexOf('/') + 1).toLowerCase().replace('.aspx', '');
    //alert(sPage);

    switch (sPage) {
        case 'topickeywords':
            IntroPage.topic();
            break;
        case 'classifications':
            IntroPage.classification();
            break;
        case 'messages':
            IntroPage.messages();
            break;
        case 'savedmessages':
            IntroPage.savedmessages();
            break;
        case 'reports':
            IntroPage.reports();
            break;
        case 'crmmessages':
            IntroPage.crm();
            break;
        case 'monitordownload':
            IntroPage.downloaddata();
            break;
        case 'twitteranalytics':
            //IntroPage.engage();
            break;
        case 'twittercomparison':
            //IntroPage.comparison();
            break;
        default:
            //alert('Nobody Wins!');
    }
}

function ActMsg() {
    $('.msg-close-button').click(function () {
        //alert('i was clicked');
        $('#msg-container').remove();
    });
}
////function ShowMsg(message, type) {
////    document.getElementById("DivMsg").style.display = "";
////    document.getElementById("DivMsg").innerHTML = "";
////    if (trim(GetMsg(message, type)) != "") {
////        document.getElementById("DivMsg").innerHTML = GetMsg(message, type);
////        $('.msg-close-button').click(function () {
////            //alert('i was clicked 2');
////            $('#msg-container').remove();
////        });
////    }
////}

function ShowMsg(messageid, type) {
    document.getElementById("DivMsg").style.display = "";
    document.getElementById("DivMsg").innerHTML = "";
    var message = "";
    $.ajax({
        type: "POST",
        url: "ServerCallService.aspx/ValidationMessages",
        data: "{'MessageId':" + messageid + "}",
        contentType: "application/json; charset=utf-8",
        dataType: "json",
        success: function (msg) {
            //alert(msg.d);
            message = msg.d;
            if ($.trim(GetMsg(message, type)) != "") {
                document.getElementById("DivMsg").innerHTML = GetMsg(message, type);
                $('.msg-close-button').click(function () {
                    //alert('i was clicked 2');
                    $('#msg-container').remove();
                });
            }
        },
        fail: function (msg) {
            alert("Err");
        }
    });


}
function ShowMsgOld(messageid, type) {
    document.getElementById("DivMsg").style.display = "";
    document.getElementById("DivMsg").innerHTML = "";
    var message = "test";
    if ($.trim(GetMsg(message, type)) != "") {
        document.getElementById("DivMsg").innerHTML = GetMsg(message, type);
        $('.msg-close-button').click(function () {
            //alert('i was clicked 2');
            $('#msg-container').remove();
        });
    }
}
function ShowMsgCustom(message, type) {
    document.getElementById("DivMsg").style.display = "";
    document.getElementById("DivMsg").innerHTML = "";
    if ($.trim(GetMsg(message, type)) != "") {
        document.getElementById("DivMsg").innerHTML = GetMsg(message, type);
        $('.msg-close-button').click(function () {
            //alert('i was clicked 2');
            $('#msg-container').remove();
        });
    }
}
function ShowMsgHTML(message) {
    document.getElementById("DivMsg").style.display = "";
    document.getElementById("DivMsg").innerHTML = "";
    if ($.trim(message) != "") {
        document.getElementById("DivMsg").innerHTML = message;
        $('.msg-close-button').click(function () {
            //alert('i was clicked 2');
            $('#msg-container').remove();
        });
    }
}
function HideMsg() {
    document.getElementById("DivMsg").innerHTML = "";
}
function GetMsg(message, msg_type) {
    var returnMsg = "";
    if ($.trim(message) != "") {
        returnMsg = MsgHTML(message, msg_type, "", true);
    }
    return returnMsg;
}
function MsgHTML(message, msg_type, position, IsClose) {

    if ($.trim(position) == "")
    { position = "msg-top-right"; }

    var sbmessage = "";

    sbmessage += "<div id=\"msg-container\" class=\"" + position + "\">";
    sbmessage += "<div class=\"msg msg-" + msg_type + "\">";
    if (IsClose == true) {
        sbmessage += "<a class=\"msg-close-button\">×</a>";
    }
    //sbmessage += "<div class=\"msg-title\">Toastr Notifications</div>";
    sbmessage += "<div class=\"msg-message\">" + message + "</div>";
    sbmessage += "</div>";
    sbmessage += "</div>";

    //================position
    //.msg-top-right            //Top Right
    //.msg-bottom-right         //Bottom Right
    //.msg-bottom-left          //Bottom Left
    //.msg-top-left             //Top Left
    //.msg-top-center           //Top Center
    //.msg-bottom-center        //Bottom Center
    //.msg-top-full-width       //Top Full Width
    //.msg-bottom-full-width    //Bottom Full Width

    return sbmessage;
}

function OpenDisplay(DivId) {
    document.getElementById(DivId).style.display = "";
}
function CloseDisplay(DivId) {
    document.getElementById(DivId).style.display = "none";
}

function ClickOpenModel(Control) {
    document.getElementById(Control).click();
}
function ClickCloseModel(Control) {
    document.getElementById(Control).click();
}

function GetCustomJsonObj(str) {
    //if (str != "")
    //{ str = "{ \"data\" : " + str + "}"; }
    if (str != null && str != "" && str != "[]") {
        return JSON.parse(str);
    }
    else { return null }
}

function LoadingBig() {
    return "<img src=\"assets/img/ajax-loading.gif\" alt=\"loading...\" />";
}
function Loading() {
    return "<img src=\"assets/img/loading.gif\" alt=\"loading...\" />";
}

function trim(text) {
    return $.trim(text);
}

function EmailCheck(EmailID) {

    var at = "@"
    var dot = "."
    var lat = EmailID.indexOf(at)
    var lstr = EmailID.length
    var ldot = EmailID.indexOf(dot)
    if (EmailID.indexOf(at) == -1) {
        //alert("Invalid E-mail ID")
        return false
    }

    if (EmailID.indexOf(at) == -1 || EmailID.indexOf(at) == 0 || EmailID.indexOf(at) == lstr) {
        //alert("Invalid E-mail ID")
        return false
    }

    if (EmailID.indexOf(dot) == -1 || EmailID.indexOf(dot) == 0 || EmailID.indexOf(dot) == lstr) {
        //alert("Invalid E-mail ID")
        return false
    }

    if (EmailID.indexOf(at, (lat + 1)) != -1) {
        //alert("Invalid E-mail ID")
        return false
    }

    if (EmailID.substring(lat - 1, lat) == dot || EmailID.substring(lat + 1, lat + 2) == dot) {
        //alert("Invalid E-mail ID")
        return false
    }

    if (EmailID.indexOf(dot, (lat + 2)) == -1) {
        //alert("Invalid E-mail ID")
        return false
    }

    if (EmailID.indexOf(" ") != -1) {
        //alert("Invalid E-mail ID")
        return false
    }
    return true
}

function ContentShorten() {
    $(".comment").shorten({
        "showChars": 50,
        "moreText": "See More",
        "lessText": "Less",
    });
}
function numberWithCommas(x) {
    return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
}

function OpenDivPopups(msg) {
    document.getElementById("DivPopups").innerHTML = msg;
}
function CloseDivPopups() {
    document.getElementById("DivPopups").innerHTML = "";
}

function OpenQuickView(strTitle, strContent) {
    CloseQuickView();

    document.getElementById("DivMonitorQuickViewTitle").innerHTML = strTitle;
    document.getElementById("ulMonitorQuickViewContent").innerHTML = strContent;

    document.getElementById("DivMonitorQuickView").style.display = "block";
    document.getElementById("DivMonitorQuickView1").style.display = "none";
    document.getElementById("DivMonitorQuickView2").style.display = "block";
    document.getElementById("DivMonitorQuickView3").style.display = "block";
    var winHeight = $(window).height();
    //alert($("#ulMonitorQuickViewContent").height());

    if ($("#ulMonitorQuickViewContent").height() < (winHeight - 150)) {
        winHeight = $("#ulMonitorQuickViewContent").height() + 160;
    }

    document.getElementById("DivMonitorQuickView4").style.height = (winHeight - 150) + "px";
    $("#DivMonitorQuickView3").find(".slimScrollDiv").css({ "height": "" + (winHeight - 120) + "" });

}
function CloseQuickView() {
    document.getElementById("DivMonitorQuickView").style.display = "none";
    document.getElementById("DivMonitorQuickView1").style.display = "none"; //block
    document.getElementById("DivMonitorQuickView2").style.display = "none";
    document.getElementById("DivMonitorQuickView3").style.display = "none";
    //document.getElementById("DivMonitorQuickViewTitle").innerHTML = "";
    //document.getElementById("ulMonitorQuickViewContent").innerHTML = "";

    document.getElementById("DivMonitorQuickView4").style.height = (500 - 150) + "px";
    $("#DivMonitorQuickView3").find(".slimScrollDiv").css({ "height": "" + (500 - 150) + "" });
}

function RemoveHtmlTag(ControlId) {
    var olddiv = document.getElementById(ControlId);
    if (olddiv && olddiv.parentNode && olddiv.parentNode.removeChild) {
        olddiv.parentNode.removeChild(olddiv);
    }
}

function ReloadPage() {
    window.location.reload();
}

//http://www.codedisqus.com/CJVkWWeegP/how-to-convert-html-table-to-excel-with-multiple-sheet.html
//http://jsfiddle.net/qxLn3h86/48/
//http://jquer.in/random-jquery-plugins-for-superior-websites/tableexport/              //export pdf, etc
function ExportToExcelTable(ExcelName, TableData) {
    $('body').prepend("<form method='post' action='exportPage.aspx' style='top:-3333333333px;' id='tempForm'><input type='hidden' name='excelname' value='" + ExcelName + "' ><input type='hidden' name='data' value='" + escape(TableData) + "' ></form>");
    $('#tempForm').submit();
    $("tempForm").remove();
}

function GetSearchText() {
    return $('#txtSearch').val();
}
function ValidateAdvancedSearch() {
    if (trim($('#txtSearch').val()) == "") { return false; } else { return true; }
}

//==========Grid Hover Methods

function ValidateDatalist(DatalistId) {
    var collection = document.getElementById(DatalistId).getElementsByTagName('INPUT');
    var IsOneChecked = 0;
    for (var x = 0; x < collection.length; x++) {
        if (collection[x].type.toUpperCase() == 'CHECKBOX') {
            if (collection[x].checked == true) {
                IsOneChecked = 1;
            }
        }
    }
    if (IsOneChecked == 1) {
        return true;
    }
    else {
        return false;
    }
}

function GridValidateCheckBox1(Gridid, CheckBoxColumnId) {
    try {
        //get reference of GridView control
        //var grid = document.getElementById("<%= grdLanguage.ClientID %>");
        var grid = document.getElementById(Gridid);
        //variable to contain the cell of the grid
        var cell;
        var flag;

        if (grid.rows.length > 0) {
            //loop starts from 1. rows[0] points to the header.
            for (i = 0; i < grid.rows.length; i++) {
                //get the reference of first column
                cell = grid.rows[i].cells[CheckBoxColumnId];

                //loop according to the number of childNodes in the cell
                for (j = 0; j < cell.childNodes.length; j++) {
                    //if childNode type is CheckBox                 
                    if (cell.childNodes[j].type == "checkbox") {
                        //assign the status of the Select All checkbox to the cell checkbox within the grid
                        if (cell.childNodes[j].checked == true) {
                            flag = "1";
                        }
                    }
                }
            }
        }
        if (flag == "1") {
            return true;
        }
        else {
            return false;
        }
    }
    catch (e) {
        return false;
    }
}

function GridValidateCheckBox(Gridid) {
    try {
        //get reference of GridView control
        //var grid = document.getElementById("<%= grdLanguage.ClientID %>");
        var grid = document.getElementById(Gridid);
        //variable to contain the cell of the grid
        var cell;
        var flag;

        if (grid.rows.length > 0) {
            //loop starts from 1. rows[0] points to the header.
            for (i = 0; i < grid.rows.length; i++) {
                var inputs = grid.rows[i].getElementsByTagName('input');
                if (inputs != null && inputs.length != 0) {
                    if (inputs[0].type == "checkbox") {
                        if (inputs[0].checked) {
                            flag = "1";
                        }
                    }
                }
            }
        }
    }
    catch (e) {
        //        return false;
    }
    if (flag == "1") {
        return true;
    }
    else {
        ShowMsg(1, "error");
        return false;
    }
}

function ValidateNewUserAdd() {
    if ($.trim($("#txtFirstName").val()) == "")
    { ShowMsg(1002, "error"); return false; }
    else if ($.trim($("#txtLastName").val()) == "")
    { ShowMsg(1003, "error"); return false; }
    else if ($.trim($("#txtLoginId").val()) == "")
    { ShowMsg(1008, "error"); return false; }
    else if ($.trim($("#txtPhoneNo").val()) == "")
    { ShowMsg(1009, "error"); return false; }
    if (ValidateDatalist('dlGroups') == false)
    { ShowMsg(1010, "error"); return false; }
    //if (trim($("#ddlNewUserRoles").val()) == "")
    //{ ShowMsg(1012, "error"); return false; }
}

function ValidateExistingUserAdd() {
    if (GridValidateCheckBox('gridExistingUsers') == false) {
        ShowMsg(1007, "error"); return false;
    }
}

function ValidateAddGroup() {
    if ($.trim($("#txtNewGroupName").val()) == "")
    { ShowMsg(1006, "error"); return false; }
}

function ValidateMyProfile() {
    if (trim($("#txtFirstName").val()) == "")
    { ShowMsg(1002, "error"); return false; }

    if (trim($("#txtlastName").val()) == "")
    { ShowMsg(1003, "error"); return false; }

    if (trim($("#txtPhoneNumber").val()) == "")
    { ShowMsg(1004, "error"); return false; }

    if (trim($("#ddlTimeZone").val()) == "")
    { ShowMsg(1005, "error"); return false; }
}

function ValidateMyProfilePassword() {
    if (trim($("#txtPassword").val()) == "") {
        ShowMsg(1000, "error");
        document.getElementById("divPassword").className = "has-error";
        return false;
    }
    else {
        document.getElementById("divPassword").className = "";
    }

    if (trim($("#txtNewPassword").val()) == "") {
        ShowMsg(1000, "error");
        document.getElementById("divNewPassword").className = "has-error";
        return false;
    }
    else {
        document.getElementById("divNewPassword").className = "";
    }

    if (trim($("#txtNewPassword").val()).length < 6) {
        ShowMsg(1011, "error");
        document.getElementById("divNewPassword").className = "has-error";
        return false;
    }
    else {
        document.getElementById("divNewPassword").className = "";
    }

    if (trim($("#txtConfirmPassword").val()) == "") {
        ShowMsg(1000, "error");
        document.getElementById("divConfirmNewPassword").className = "has-error";
        return false;
    }
    else {
        document.getElementById("divConfirmNewPassword").className = "";
    }

    if (trim($("#txtNewPassword").val()) != trim($("#txtConfirmPassword").val())) {
        ShowMsg(1001, "error");
        document.getElementById("divNewPassword").className = "has-error";
        document.getElementById("divConfirmNewPassword").className = "has-error";
        return false;
    }
    else {
        document.getElementById("divNewPassword").className = "";
        document.getElementById("divConfirmNewPassword").className = "";
    }
}

function SelectSingleRadiobutton(rdbtnid, gridid) {
    var rdBtn = document.getElementById(rdbtnid);
    var Parent = document.getElementById(gridid);
    var rdBtnList = Parent.getElementsByTagName("input");
    for (i = 0; i < rdBtnList.length; i++) {
        if (rdBtnList[i].type == "radio" && rdBtnList[i].id != rdBtn.id) {
            rdBtnList[i].checked = false;
        }
    }
}

//-----------------------site
function Subscribe() {
    var EmailId = escape(document.getElementById("txtSubscribeEmailId").value);
    document.getElementById("DivMsgSubscribe").innerHTML = "";
    if (trim(EmailId) != "") {
        if (EmailCheck(EmailId) == true) {
            $.ajax({
                type: "POST",
                url: "ServerCallService.aspx/Subscribe",
                data: "{'EmailId':'" + EmailId + "'"
                    + ", 'IsSubscribe':" + true
                    + "}",
                contentType: "application/json; charset=utf-8",
                dataType: "json",
                success: function (response) {
                    if (response.d != undefined && response.d != "[]") {
                        switch (response.d.Status) {
                            case 1:
                                document.getElementById("DivMsgSubscribe").innerHTML = response.d.Message;
                                document.getElementById("txtSubscribeEmailId").value = "";
                                break;
                            case 0:
                                document.getElementById("DivMsgSubscribe").innerHTML = response.d.Message;
                                break;
                        }
                    }
                },
                fail: function (response) {

                }
            });
        }
        else {
            document.getElementById("DivMsgSubscribe").innerHTML = "Invalid Email Id";
        }
    }
    return false;
}

function Contact() {
    var EmailId = escape(document.getElementById("txtContactEmail").value);
    document.getElementById("DivMsgContact").innerHTML = "";
    if (trim(EmailId) != "" && trim(document.getElementById("txtContactName").value) != ""
        && trim(document.getElementById("txtContactCompany").value) != "" && trim($('#ddlContactTypeofCompanie').val()) != ""
        && trim(document.getElementById("txtContactSubject").value) != "" && trim(document.getElementById("txtContactMessage").value) != "") {
        if (EmailCheck(EmailId) == true) {
            $.ajax({
                type: "POST",
                url: "ServerCallService.aspx/Contact",
                data: "{'Name':'" + escape(document.getElementById("txtContactName").value) + "'"
                    + ", 'EmailId':'" + EmailId + "'"
                    + ", 'Company':'" + escape(document.getElementById("txtContactCompany").value) + "'"
                    + ", 'TypeofCompanie':'" + escape($('#ddlContactTypeofCompanie').val()) + "'"
                    + ", 'Subject':'" + escape(document.getElementById("txtContactSubject").value) + "'"
                    + ", 'SkypeId':'" + escape(document.getElementById("txtContactSkypeId").value) + "'"
                    + ", 'Message':'" + escape(document.getElementById("txtContactMessage").value) + "'"
                    + "}",
                contentType: "application/json; charset=utf-8",
                dataType: "json",
                success: function (response) {
                    if (response.d != undefined && response.d != "[]") {
                        switch (response.d.Status) {
                            case 1:
                                document.getElementById("DivMsgContact").innerHTML = response.d.Message;
                                document.getElementById("txtContactName").value = "";
                                document.getElementById("txtContactEmail").value = "";
                                document.getElementById("txtContactCompany").value = "";
                                //$('#ddlContactTypeofCompanie').val()
                                $("#ddlContactTypeofCompanie").prop('selectedIndex', 0);
                                document.getElementById("txtContactSubject").value = "";
                                document.getElementById("txtContactSkypeId").value = "";
                                document.getElementById("txtContactMessage").value = "";
                                ClickCloseModel("btnContactClose");
                                break;
                            case 0:
                                document.getElementById("DivMsgContact").innerHTML = response.d.Message;
                                break;
                        }
                    }
                },
                fail: function (response) {

                }
            });
        }
        else {
            document.getElementById("DivMsgContact").innerHTML = "Invalid Email Id";
        }
    }
    return false;
}

//-----------------------alerts
function GetAlerts() {
    var EmailId = escape(document.getElementById("txtSubscribeEmailId").value);
    document.getElementById("DivMsgSubscribe").innerHTML = "";
    if (trim(EmailId) != "") {
        if (EmailCheck(EmailId) == true) {
            $.ajax({
                type: "POST",
                url: "ServerCallService.aspx/Subscribe",
                data: "{'EmailId':'" + EmailId + "'"
                    + ", 'IsSubscribe':" + true
                    + "}",
                contentType: "application/json; charset=utf-8",
                dataType: "json",
                success: function (response) {
                    if (response.d != undefined && response.d != "[]") {
                        switch (response.d.Status) {
                            case 1:
                                document.getElementById("DivMsgSubscribe").innerHTML = response.d.Message;
                                document.getElementById("txtSubscribeEmailId").value = "";
                                break;
                            case 0:
                                document.getElementById("DivMsgSubscribe").innerHTML = response.d.Message;
                                break;
                        }
                    }
                },
                fail: function (response) {

                }
            });
        }
        else {
            document.getElementById("DivMsgSubscribe").innerHTML = "Invalid Email Id";
        }
    }
    return false;
}

function UpdateAlerts() {

}

function isScrolledIntoView(elem) {
    var docViewTop = $(window).scrollTop();
    var docViewBottom = docViewTop + $(window).height();

    if (elem != "#") {
        var elemTop = $(elem).offset().top;
        var elemBottom = elemTop + $(elem).height();

        return ((elemBottom <= docViewBottom) && (elemTop >= docViewTop));
    }
    else {
        return false;
    }
}

function CheckInnerHtml(Control) {
    if ($.trim(document.getElementById(Control).innerHTML) == "") {
        return false
    }
    else {
        return true
    }
}

//----------------------tatsettings
function DeleteHolidays(HolidayId) {
    if (confirm("Are you sure you want to delete?")) {
        PageMethods.set_path("tatsettings.aspx");
        PageMethods.DeleteHolidays(HolidayId, DeleteHolidays_Success, DeleteHolidays_Fail);
    }
    return false;
}
function DeleteHolidays_Success(response) {

    if (response != undefined && response != "[]") {
        var objdata = $.parseJSON(response);
        if (objdata[0].Status == "1") {
            ShowMsg(objdata[0].Message, "success");
            RemoveHtmlTag("tr_" + objdata[0].HolidayId);
        }
        else {
            ShowMsgHTML(objdata[0].Message);
        }
    }
}
function DeleteHolidays_Fail(msg) {

}

function ValidateTATConfig() {
    if (trim(document.getElementById("txtOfficeStartTime").value) == "") {
        ShowMsg("Please add Office Start Time", "error");
        document.getElementById("txtOfficeStartTime").focus();
        return false;
    }
    else if (trim(document.getElementById("txtOfficeEndTime").value) == "") {
        ShowMsg("Please add Office End Time", "error");
        document.getElementById("txtOfficeEndTime").focus();
        return false;
    }
}

function ValidateHolidays() {
    if (trim(document.getElementById("txtHolidayDate").value) == "") {
        ShowMsg("Please select holiday", "error");
        document.getElementById("txtHolidayDate").focus();
        return false;
    }
    else if (trim(document.getElementById("txtHolidayReason").value) == "") {
        ShowMsg("Please add holiday name", "error");
        document.getElementById("txtHolidayReason").focus();
        return false;
    }
    else {
        return true;
    }
}