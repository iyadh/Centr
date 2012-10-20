/*!
 *  Project: Centr
 *  Description: Center any DOM element against viewport or its parent element.
 *  Author: Mohamed I. GALLAH
 *  Licensed under the MIT license
 */
;(function ( $, window, document, undefined ) {
    // Create the defaults once
    var pluginName = 'centr',
        defaults = {
            to: "viewport"
        };

    // The actual plugin constructor
    function Plugin( element, options ) {
        this.element = element;

        // jQuery has an extend method that merges the
        // contents of two or more objects, storing the
        // result in the first object. The first object
        // is generally empty because we don't want to alter
        // the default options for future instances of the plugin
        this.options = $.extend( {}, defaults, options) ;

        this._defaults = defaults;
        this._name = pluginName;

        this.init();
    }

    Plugin.prototype = {

        init: function() {

            // Element Width & Height
            var elementHeight = jQuery(this.element).height();
            var elementWidth = jQuery(this.element).width();

            if (this.options.to == "viewport") {
                // Viewport Width & Height
                var viewportHeight = jQuery(document).height();
                var viewportWidth = jQuery(document).width();
                // Scroll
                var scrollTop = jQuery(window).scrollTop();
                var scrollLeft = jQuery(window).scrollLeft();

                jQuery(this.element).css({
                    "position": "absolute",
                    "top": Math.abs(((viewportHeight - elementHeight) / 2) + scrollTop) + "px",
                    "left": Math.abs(((viewportWidth - elementWidth) / 2) + scrollLeft) + "px"
                });
            }
            else if (this.options.to == "parent") {
                // Parent Width & Height
                var parentHeight = jQuery(this.element).parent().height();
                var parentWidht = jQuery(this.element).parent().width();

                jQuery(this.element).css({
                    "display": "inline-block",
                    "margin-top": Math.abs(((parentHeight - elementHeight) / 2)) + "px",
                    "margin-left": Math.abs(((parentWidht - elementWidth) / 2)) + "px"
                });
            };
        },
    };

    // A really lightweight plugin wrapper around the constructor,
    // preventing against multiple instantiations and allowing any
    // public function (ie. a function whose name doesn't start
    // with an underscore) to be called via the jQuery plugin,
    // e.g. $(element).defaultPluginName('functionName', arg1, arg2)
    $.fn[pluginName] = function ( options ) {
        var args = arguments;
        if (options === undefined || typeof options === 'object') {
            return this.each(function () {
                if (!$.data(this, 'plugin_' + pluginName)) {
                    $.data(this, 'plugin_' + pluginName, new Plugin( this, options ));
                }
            });
        } else if (typeof options === 'string' && options[0] !== '_' && options !== 'init') {
            return this.each(function () {
                var instance = $.data(this, 'plugin_' + pluginName);
                if (instance instanceof Plugin && typeof instance[options] === 'function') {
                    instance[options].apply( instance, Array.prototype.slice.call( args, 1 ) );
                }
            });
        }
    }

})( jQuery, window, document );
