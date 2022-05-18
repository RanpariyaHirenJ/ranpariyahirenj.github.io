$(function () {
    var coll = $("body").find(".collapsible");
    var i;

    for (i = 0; i < coll.length; i++) {
        coll[i].addEventListener("click", function () {
            this.classList.toggle("active");

            var content = this.nextElementSibling;
            if (content.style.maxHeight) {
                content.style.maxHeight = null;
            } else {
                content.style.maxHeight = content.scrollHeight + "px";
            }
        });
    }

    // $("body").find('[isdate="yes"]').each(function () {
    //     $(this).datepicker({
    //         changeMonth: true,
    //         changeYear: true,
    //         showAnim: "slideDown",
    //         dateFormat: "dd/mm/yy",
    //     });
    // })

     $("#fromDate").datepicker({
            changeMonth: true,
            changeYear: true,
            showAnim: "slideDown",
            dateFormat: "dd-mm-yy",
            maxDate: 0,
			onSelect: function(selected) {
				$("#toDate").datepicker("option", "minDate", selected);
			}
        });

    $("#toDate").datepicker({
        changeMonth: true,
        changeYear: true,
        showAnim: "slideDown",
        dateFormat: "dd-mm-yy"
       
    });

    $("body").find(".cm-e-menu").css({
        "left": (($(".topContainer").outerWidth() - $(".cm-e-menu").outerWidth()) / 2) + "px"
    })

    $("body").find(".submitBtn").click(function () {
        var frmID = $(this).attr("frm-id"); 

        if ($(this).attr("confirm-delete") !== undefined) {
            var resp = confirm("Are you sure you want to delete these records?");

            if (resp == false) {
                return;
            }
        }
        if (form_validate_jquery("#" + frmID)) {
            $("#" + frmID).submit();
        }
    })
	
			



	$('.choose-category').autocomplete({
	  	source: function (request, response) {
			$.ajax({
				 url: "ManageCategory/autocomplete/"+(request.term?request.term:"all"),
				 type: "GET",
				 data: request,
				 success: function (data) {
					response($.map($.parseJSON(data), function (el) {
						return {
							 	value: el.name,
                            	id: el.category_id
						};
					}));
				}
			});
		},
	  	minLength: 2,
	  	select: function( event, ui ) {			
		console.log( "Selected: " + ui.item.value + " aka " + ui.item.id );
		$(this).val(ui.item.value);
		$("#parent_id").val(ui.item.id);
		$("#top").prop('checked',false);
	  }
	});	

	$(document).on("click","#top",function(){
		$("#path, #parent_id").val("");
	});

	$('select[data-selected]').each(function(){
        $(this).find('option[value="'+$(this).data('selected')+'"]').attr("selected","selected");
    });

	
	$("#delete-record").click(function(){
		if(confirm("Are you sure you want to delete these records?")){
	
			$("#table-form").submit();
		}
	});
	
	function post(path, data) {
		var form = $('<form></form>');
		var field = $('<input></input>');
		
		form.attr("method", "post");
		form.attr("action", path);
		form.attr("target", "_blank");
			
		field.attr("type", "hidden");
		field.attr("name", "data");
		field.attr("value", data);
		
		form.append(field);
		
		field = $('<input></input>');
		
		field.attr("type", "hidden");
		field.attr("name", "action");
		field.attr("value", "printvouchers");
		
		form.append(field);
	
		// The form needs to be a part of the document in
		// order for us to be able to submit it.
		$(document.body).append(form);
		form.submit();
	}  
})