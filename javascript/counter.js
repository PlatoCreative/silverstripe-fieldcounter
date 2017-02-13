(function($){

	$.entwine('ss', function($){
		/* Provide character stats on defined fields */
		$("input[data-fieldcounter], textarea[data-fieldcounter]").entwine({
			onkeyup: function(){
				this.updateStats();
			},
			onkeydown: function(e){
				/* prevent new line in description */
				if ((e.which && e.which == 13) || (e.keyCode && e.keyCode == 13)) {
					e.preventDefault();
				}
                var position = e.target.selectionStart;
                // remove extra spaces at start and end
                this.val(this.val().replace(/^\s+|\s\s+$/gm," "));
                // prevent new lines or tabs
                this.val(this.val().replace(/(\r\n|\n|\r)/g,""));
                // move cursor back to original postion after trimming
                e.target.selectionEnd = position;
			},
			onmatch: function(){
				if (!$('#' + this.attr('id') + 'Stats').length) {
					this.after('<span class="fieldstats" id="' + this.attr('id') + 'Stats' + '"></span>');
				}
				this.updateStats();
			},
			updateStats: function(){
				var chars = this.val().length;
				var maxlength = this.data('fieldcounter');
                var almostAtMax = (80 / 100) * maxlength;
				if (maxlength) {
					if (chars >= maxlength) {
						$('#' + this.attr('id') + 'Stats').addClass('over').removeClass('near');
					} else if (chars >= almostAtMax) {
                        $('#' + this.attr('id') + 'Stats').addClass('near');
                    } else {
						$('#' + this.attr('id') + 'Stats').removeClass('over').removeClass('near');
					}
					var result = maxlength-chars;
					$('#' + this.attr('id') + 'Stats').html("Characters remaining: <strong>" + result + "</strong>");
				}
			}
		});

	});

})(jQuery);
