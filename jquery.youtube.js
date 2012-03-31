/** jQuery YouTube plugin
  * Adds a video from YouTube to an element
  * @author Gabriele Romanato <http://blog.gabrieleromanato.com>
  * @requires jQuery 1.4+
  *
  * Usage:  $(element).youtube(options)
  *			width: width of the iframe element (in pixels)
  *			height: height of the iframe element (in pixels)
  *			url: video's URL
  */

(function($) {
    $.fn.youtube = function(options) {
            
        var that = this;
        var settings = {
        
        	width: '425',
        	height: '344',
        	url: ''
        
        };
        
        options = $.extend(settings, options);
        
        var video = '<iframe width="' + options.width + '" height="' + options.height + 
        			'" src="' + options.url + '" frameborder="0" allowfullscreen></iframe>';
        
        
        return that.each(function() {
        	$(video).appendTo(this);
        });
        
    };
})(jQuery); 
