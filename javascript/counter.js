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
				/* prevent multiple spaces */
				this.val(this.val().replace(/\s+/g, ' '));
			},
			onmatch: function(){
				if (!$('#' + this.attr('id') + 'Stats').length) {
					this.after('<span class="fieldstats" id="' + this.attr('id') + 'Stats' + '"></span>');
				}
				this.updateStats();
			},
			updateStats: function(){
				var v = this.val().trim();
				var chars = v.replace(/\s+/g, ' ').length;
				var length = this.data('fieldcounter');
				if (length) {
					if (chars > length) {
						$('#' + this.attr('id') + 'Stats').addClass('over');
					} else {
						$('#' + this.attr('id') + 'Stats').removeClass('over');
					}
					var result = length - chars;
					$('#' + this.attr('id') + 'Stats').html("Character count: <strong>" + result + "</strong>");
				}
			}
		});

	});

})(jQuery);
