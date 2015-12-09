define(["utils/localization"],function(a){function b(b){var d=["<form>",'<label for="copy-modal-title">',a("Enter a title for the copied history"),":","</label><br />",'<input id="copy-modal-title" class="form-control" style="width: 100%" ','value="',b.defaultCopyName,'" />',"<br />","<p>",a("Choose which datasets from the original history to include:"),"</p>",'<input name="copy-what" type="radio" id="copy-non-deleted" value="copy-non-deleted" checked />','<label for="copy-non-deleted"> ',a("Copy only the active (non-deleted) datasets"),"</label><br />",'<input name="copy-what" type="radio" id="copy-all" value="copy-all" />','<label for="copy-all"> ',a("Copy all datasets, including deleted ones"),"</label><br />","</form>"].join("");return b.isAnon?c()+d:d}function c(){return['<div class="warningmessage">',a("As an anonymous user, unless you login or register, you will lose your current history "),a("after making a copy of this history. "),a("You can"),' <a href="/user/login">',a("login here"),"</a> ",a("or")," ",' <a href="/user/create">',a("register here"),"</a>.","</div>"].join("")}function d(b){if(!b){if(!Galaxy.modal.$("#invalid-title").size()){$("<p/>").attr("id","invalid-title").css({color:"red",margin:"8px 0px 8px 0px"}).addClass("bg-danger").text(a("Please enter a valid history title")).insertAfter(Galaxy.modal.$("#copy-modal-title"))}return!1}return b}function e(){return $(["<p>",'<span class="fa fa-spinner fa-spin"></span> ',a("Copying history"),"...","</p>"].join("")).css({"margin-top":"8px"})}function f(c,f){function g(b){var d="copy-all"===Galaxy.modal.$('input[name="copy-what"]:checked').val(),f=e();Galaxy.modal.$(".modal-body").empty().append(f),Galaxy.modal.$("button").prop("disabled",!0),c.copy(!0,b,d).done(function(a){i.resolve(a)}).fail(function(){alert(a("History could not be copied. Please contact a Galaxy administrator")),i.rejectWith(i,arguments)}).always(function(){Galaxy.modal.hide()})}function h(){var a=Galaxy.modal.$("#copy-modal-title").val();d(a)&&g(a)}if(f=f||{},!Galaxy||!Galaxy.modal)return c.copy();var i=jQuery.Deferred(),j=_.escape(c.get("name")),k="Copy of '"+j+"'",l=f.closing_callback;return f.height="auto",f.closing_callback=function(a){a&&i.reject({cancelled:!0}),l&&l(a)},Galaxy.modal.show(_.extend({title:a("Copying history")+' "'+j+'"',body:$(b({defaultCopyName:k,isAnon:!0})),buttons:{Cancel:function(){Galaxy.modal.hide()},Copy:h},closing_events:!0},f)),$("#copy-modal-title").focus().select(),$("#copy-modal-title").on("keydown",function(a){13===a.keyCode&&(a.preventDefault(),h())}),i}return f});
//# sourceMappingURL=../../../maps/mvc/history/copy-dialog.js.map