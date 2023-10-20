(function ($) {
	'use strict';
	$(document).ready(gt3_grid_list_core);

	jQuery(document).on("yith_wcwl_reload_fragments", gt3_grid_list_core);

	var _localStorage = localStorage.getItem('gt3_gridlist_woo');

	function gt3_grid_list_core() {

		var $controls_wrapper = jQuery('.gt3-gridlist-toggle'),
			$controls = $controls_wrapper.children();

		var $products = jQuery('.site-main > ul.products, .site-main > div > ul.products, .gt3_theme_core.gt3-shop-list > ul.products, #gridlist-toggle, .yit-wcan-container > ul.products');

		$controls_wrapper.on('click', 'a', function (event) {
			event.preventDefault();

			var $target = jQuery(event.currentTarget);

			var old = _localStorage;

			$controls.removeClass('active');
			$target.addClass('active');

			if (old === $target.attr('id')) return;
			_localStorage = $target.attr('id');
			localStorage.setItem('gt3_gridlist_woo', _localStorage);

			$products.fadeOut(300, function () {
				fix_columns();
				jQuery(this).addClass(_localStorage).removeClass(old).fadeIn(300);
			});
		});

		function fix_columns() {
			var columns_count = $products.attr('data-columns'),
				columns_ext_count = parseInt(columns_count) + 1;

			$products.removeClass('columns-' + columns_ext_count);

			if (_localStorage == 'grid-extended') {
				$products.removeClass('columns-' + columns_count);
				$products.addClass('columns-' + columns_ext_count);
			} else {
				$products.addClass('columns-' + columns_count);
			}
		}

		if (_localStorage) {
			$products.addClass(localStorage.getItem('gt3_gridlist_woo'));
		}

		$controls.removeClass('active');
		$controls_wrapper.find('#' + _localStorage).addClass('active');
		fix_columns();

	}

})(jQuery);
