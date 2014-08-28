
(function($) {
	$.fn.customizeCRInput = function(options) {
		var options = $.extend({
			checked_class : "checked"
		}, options);

		return this.each(function(){
			var input = $(this);
			input.on("change",function(){
				var is_checked = input.is(":checked");
				var type = input.attr("type");
				var id = input.attr("id");
				var label = $("label[for="+id+"]");
				if (type == "checkbox") {
					if (input.is(":checked")) {
						label.addClass(options.checked_class);
					} else {
						label.removeClass(options.checked_class);
					}
				} else if (type == "radio") {
					$("input[name="+input.attr("name")+"]").each(function(idx){
						$("label[for="+$(this).attr("id")+"]").removeClass(options.checked_class);
					});
					label.addClass(options.checked_class);
				}
			});
		});
	};
})(jQuery);
