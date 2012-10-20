# **Centr** #

**Centr** is lightweight (2kb minified) jQuery plugin used to center any DOM element to viewport or its parent. 

## Usage ##
It's highly recommended to use **centr** as mentionned below:

	$(window).load(function() {
		$("#element").centr(); // Default
		$(".element").centr({
			to : 'parent' // to parameter accepts "viewport" (default) or "parent".
		});
	});	


## TODO ##

* Add Window resize event support

## License ##

Centr is licensed under [MIT](https://github.com/iyadh/Centr/blob/master/MIT-LICENSE.txt).