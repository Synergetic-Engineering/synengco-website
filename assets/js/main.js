/*
	Forty by HTML5 UP
	html5up.net | @ajlkn
	Free for personal and commercial use under the CCA 3.0 license (html5up.net/license)
*/

var latest_operation_table = null;
var comments_table = null;


(function($) {

	skel.breakpoints({
		xlarge: '(max-width: 1680px)',
		large: '(max-width: 1280px)',
		medium: '(max-width: 980px)',
		small: '(max-width: 736px)',
		xsmall: '(max-width: 480px)',
		xxsmall: '(max-width: 360px)'
	});

	/**
	 * Applies parallax scrolling to an element's background image.
	 * @return {jQuery} jQuery object.
	 */
	$.fn._parallax = (skel.vars.browser == 'ie' || skel.vars.browser == 'edge' || skel.vars.mobile) ? function() { return $(this) } : function(intensity) {

		var	$window = $(window),
			$this = $(this);

		if (this.length == 0 || intensity === 0)
			return $this;

		if (this.length > 1) {

			for (var i=0; i < this.length; i++)
				$(this[i])._parallax(intensity);

			return $this;

		}

		if (!intensity)
			intensity = 0.25;

		$this.each(function() {

			var $t = $(this),
				on, off;

			on = function() {

				$t.css('background-position', 'center 100%, center 100%, center 0px');

				$window
					.on('scroll._parallax', function() {

						var pos = parseInt($window.scrollTop()) - parseInt($t.position().top);

						$t.css('background-position', 'center ' + (pos * (-1 * intensity)) + 'px');

					});

			};

			off = function() {

				$t
					.css('background-position', '');

				$window
					.off('scroll._parallax');

			};

			skel.on('change', function() {

				if (skel.breakpoint('medium').active)
					(off)();
				else
					(on)();

			});

		});

		$window
			.off('load._parallax resize._parallax')
			.on('load._parallax resize._parallax', function() {
				$window.trigger('scroll');
			});

		return $(this);

	};



	/**
	 * virtual-well demo Select2
	 */

	function formatWells(well) {
		if (well.loading) return well.text;

	    var markup = "<div class='secondary select2-formatrepo'>" +
	        "<div>" + well.name + "</div>";

	    if (well.description) {
	    	markup += "<div>" + well.createdAt + "</div>";
	    }

	    markup += "<div>" +
	     	"<div><i class='fa fa-flash'></i> Set Depth =" + well.set_depth + "</div>" +
	        "</div>";

	    markup += "</div>";

	    return markup;
	}

	function formatSelection(well) {
      	return well.name || well.text;
    }


	var $select2 = $(".select2-well-info").select2({
	   	ajax: {
	    	url: "https://bjwk5fmzfb.execute-api.ap-southeast-2.amazonaws.com/dev/virtual-well",
	     	dataType: 'json',
	     	delay: 250,
	     	data: function (params) {
	       		return {
	         		q: params.term, // search term
	         		page: params.page
	       		};
	     	},
	     	processResults: function (data, params) {
		       	// parse the results into the format expected by Select2
		       	// since we are using custom formatting functions we do not need to
		       	// alter the remote JSON data, except to indicate that infinite
		       	// scrolling can be used
		       	params.page = params.page || 1;
		       	return {
		         	results: data,
		         	pagination: {
		           		more: (params.page * 30) < data.length
		         	}
		       	};
	     	},
	     	cache: true
	   	},
	   	escapeMarkup: function (markup) { return markup; },
	   	minimumInputLength: 0,
	   	templateResult: formatWells,
	   	templateSelection: formatSelection,
		containerCssClass: "secondary",
		dropdownCssClass: "secondary"
	})
	.on("select2:selecting", function(e) { 
		var well_id = e.params.args.data.id;
		$.get("https://bjwk5fmzfb.execute-api.ap-southeast-2.amazonaws.com/dev/virtual-well/" + well_id,// + "/history",
			function(data) {
				window.location.hash = well_id;
				console.log('new data', data)
				$('#well-results').removeClass("hidden");
				$('#well-update').removeClass("hidden");
				// Update chart
					series = [
							{
							name: 'Speed (rpm)',
							data: [
								{x: new Date(143134652600), y: 53},
								{x: new Date(143234652600), y: 50},
								{x: new Date(143340052600), y: 55},
								{x: new Date(143366652600), y: 50},
								{x: new Date(143410652600), y: 50},
								{x: new Date(143508652600), y: 52},
								{x: new Date(143569652600), y: 58},
								{x: new Date(143579652600), y: 55}
							]
							},
							{
							name: 'Torque (N m)',
							data: [
								{x: new Date(143134652600), y: 43},
								{x: new Date(143234652600), y: 45},
								{x: new Date(143334652600), y: 40},
								{x: new Date(143384652600), y: 43},
								{x: new Date(143568652600), y: 46}
							]
							}
						]
					
					if (data.name == 'DMY_WH123') {
						series = [
								{
								name: 'Speed (rpm)',
								data: [
									{x: new Date(143134652600), y: 53},
									{x: new Date(143234652600), y: 40},
									{x: new Date(143340052600), y: 45},
									{x: new Date(143366652600), y: 40},
									{x: new Date(143410652600), y: 20},
									{x: new Date(143508652600), y: 32},
									{x: new Date(143569652600), y: 18},
									{x: new Date(143579652600), y: 11}
								]
								},
								{
								name: 'Torque (N m)',
								data: [
									{x: new Date(143134652600), y: 53},
									{x: new Date(143234652600), y: 35},
									{x: new Date(143334652600), y: 30},
									{x: new Date(143384652600), y: 30},
									{x: new Date(143568652600), y: 10}
								]
								}
							]

					}
					var chart = new Chartist.Line('.ct-chart', {
						series: series
						}, {
						axisX: {
							type: Chartist.FixedScaleAxis,
							divisor: 5,
							labelInterpolationFnc: function(value) {
							return moment(value).format('MMM D');
							},
						},
						plugins: [
							Chartist.plugins.legend()
						]
					});

				// Update recent operation table
					var dataSet = [
						[ "Name", data.name ],
						[ "Location", data.location ],
						[ "Field Compressor Station", data.fcs ],
						[ "Set Depth (m)", data.set_depth ],
						[ "Bottom Hole Pressure (kPa)", data.bottom_hole_pressure ],
					];

					if (latest_operation_table) latest_operation_table.destroy();
					latest_operation_table = $('#latest-operation').DataTable({
						data: dataSet,
						columns: [
							{ title: "Attribute" },
							{ title: "Value" }
						],
						lengthChange: false
					});

				// Update comments
					var comments = [
						["Alex", "13/11/2016 9:50am", "Feild crew says they should be done tomorrow"],
						["Mary", "15/11/2016 10:23am", "It's is back on-line and performing well so far"] 
					];
					if (data.name == 'DMY_WH123') {
						var comments = [
							["Kate", "12/12/2016 9:50am", "Seems like this well is behaving strange"],
							["Stu", "12/12/2016 10:23am", "Looks as though the water flow is dropping off"] 
						];
					}

					if (comments_table) comments_table.destroy();
					comments_table = $('#comments').DataTable({
						data: comments,
						columns: [
							{ title: "Name" },
							{ title: "Time" },
							{ title: "Comment" }
						],
						lengthChange: false
					});

			}
		);
	});


	$(function() {

		var	$window = $(window),
			$body = $('body'),
			$wrapper = $('#wrapper'),
			$header = $('#header'),
			$banner = $('#banner');

		// Disable animations/transitions until the page has loaded.
			$body.addClass('is-loading');

			$window.on('load pageshow', function() {
				window.setTimeout(function() {
					$body.removeClass('is-loading');
				}, 100);
			});

		// Clear transitioning state on unload/hide.
			$window.on('unload pagehide', function() {
				window.setTimeout(function() {
					$('.is-transitioning').removeClass('is-transitioning');
				}, 250);
			});

		// Fix: Enable IE-only tweaks.
			if (skel.vars.browser == 'ie' || skel.vars.browser == 'edge')
				$body.addClass('is-ie');

		// Fix: Placeholder polyfill.
			$('form').placeholder();

		// Prioritize "important" elements on medium.
			skel.on('+medium -medium', function() {
				$.prioritize(
					'.important\\28 medium\\29',
					skel.breakpoint('medium').active
				);
			});

		// Scrolly.
			$('.scrolly').scrolly({
				offset: function() {
					return $header.height() - 2;
				}
			});

		// Tiles.
			var $tiles = $('.tiles > article');

			$tiles.each(function() {

				var $this = $(this),
					$image = $this.find('.image'), $img = $image.find('img'),
					$link = $this.find('.link'),
					x;

				// Image.

					// Set image.
						$this.css('background-image', 'url(' + $img.attr('src') + ')');

					// Set position.
						if (x = $img.data('position'))
							$image.css('background-position', x);

					// Hide original.
						$image.hide();

				// Link.
					if ($link.length > 0) {

						$x = $link.clone()
							.text('')
							.addClass('primary')
							.appendTo($this);

						$link = $link.add($x);

						$link.on('click', function(event) {

							var href = $link.attr('href');

							// Prevent default.
								event.stopPropagation();
								event.preventDefault();

							// Start transitioning.
								$this.addClass('is-transitioning');
								$wrapper.addClass('is-transitioning');

							// Redirect.
								window.setTimeout(function() {

									if ($link.attr('target') == '_blank')
										window.open(href);
									else
										location.href = href;

								}, 500);

						});

					}

			});

		// Header.
			if (skel.vars.IEVersion < 9)
				$header.removeClass('alt');

			if ($banner.length > 0
			&&	$header.hasClass('alt')) {

				$window.on('resize', function() {
					$window.trigger('scroll');
				});

				$window.on('load', function() {

					$banner.scrollex({
						bottom:		$header.height() + 10,
						terminate:	function() { $header.removeClass('alt'); },
						enter:		function() { $header.addClass('alt'); },
						leave:		function() { $header.removeClass('alt'); $header.addClass('reveal'); }
					});

					window.setTimeout(function() {
						$window.triggerHandler('scroll');
					}, 100);

				});

			}

		// Banner.
			$banner.each(function() {

				var $this = $(this),
					$image = $this.find('.image'), $img = $image.find('img');

				// Parallax.
					$this._parallax(0.275);

				// Image.
					if ($image.length > 0) {

						// Set image.
							$this.css('background-image', 'url(' + $img.attr('src') + ')');

						// Hide original.
							$image.hide();

					}

			});

		// Menu.
			var $menu = $('#menu'),
				$menuInner;

			$menu.wrapInner('<div class="inner"></div>');
			$menuInner = $menu.children('.inner');
			$menu._locked = false;

			$menu._lock = function() {

				if ($menu._locked)
					return false;

				$menu._locked = true;

				window.setTimeout(function() {
					$menu._locked = false;
				}, 350);

				return true;

			};

			$menu._show = function() {

				if ($menu._lock())
					$body.addClass('is-menu-visible');

			};

			$menu._hide = function() {

				if ($menu._lock())
					$body.removeClass('is-menu-visible');

			};

			$menu._toggle = function() {

				if ($menu._lock())
					$body.toggleClass('is-menu-visible');

			};

			$menuInner
				.on('click', function(event) {
					event.stopPropagation();
				})
				.on('click', 'a', function(event) {

					var href = $(this).attr('href');

					event.preventDefault();
					event.stopPropagation();

					// Hide.
						$menu._hide();

					// Redirect.
						window.setTimeout(function() {
							window.location.href = href;
						}, 250);

				});

			$menu
				.appendTo($body)
				.on('click', function(event) {

					event.stopPropagation();
					event.preventDefault();

					$body.removeClass('is-menu-visible');

				})
				.append('<a class="close" href="#menu">Close</a>');

			$body
				.on('click', 'a[href="#menu"]', function(event) {

					event.stopPropagation();
					event.preventDefault();

					// Toggle.
						$menu._toggle();

				})
				.on('click', function(event) {

					// Hide.
						$menu._hide();

				})
				.on('keydown', function(event) {

					// Hide on escape.
						if (event.keyCode == 27)
							$menu._hide();

				});

		// Virtual Well Select2
		if (window.location.hash) {
			var well_id = window.location.hash.substring(1);
			$.get("https://bjwk5fmzfb.execute-api.ap-southeast-2.amazonaws.com/dev/virtual-well/" + well_id,
				function(data) {
					$select2.select2("trigger", "select", {data: data});
				}
			);
		}



	});


})(jQuery);

