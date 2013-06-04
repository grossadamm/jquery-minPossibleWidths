(function() {
  jQuery.fn.minPossibleWidths = function(options) {
    var minWidths, settings;

    settings = jQuery.extend({
      maxRowCount: 20,
      minPossibleWidth: 0,
      minWidths: {}
    }, options);
    minWidths = [];
    jQuery(this).find('tr').each(function(rowCount) {
      jQuery(this).find('th').each(function(index) {
        if (jQuery(this).attr('id')) {
          if (settings.minWidths.hasOwnProperty(jQuery(this).attr('id'))) {
            return minWidths[index] = settings.minWidths[jQuery(this).attr('id')];
          }
        }
      });
      jQuery(this).find('td').each(function(index) {
        var width;

        width = jQuery(this).text().width(jQuery(this).css('font'));
        if (!minWidths[index]) {
          if (width > settings.minPossibleWidth) {
            return minWidths[index] = width;
          } else {
            return minWidths[index] = settings.minPossibleWidth;
          }
        } else if (minWidths[index] < width) {
          return minWidths[index] = width;
        }
      });
      if (rowCount > settings.maxRowCount) {
        return false;
      }
    });
    return jQuery(this).find('th').each(function(index) {
      if (!jQuery(this).hasClass('autoWidth')) {
        return jQuery(this).width(minWidths[index]);
      }
    });
  };

  String.prototype.width = function(font) {
    var f, o, w;

    f = font || '12px arial';
    o = $('#textWidthCalculator').text(this).css({
      'font': f
    });
    return w = o.width();
  };

}).call(this);

