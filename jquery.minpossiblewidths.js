(function() {
  jQuery.fn.minPossibleWidths = function(options) {
    var minWidths, settings;

    settings = jQuery.extend({
      maxRowCount: 20,
      minPossibleWidth: 0,
      minWidths: {},
      incrementAllBy: 0
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
        var colspanExists, width;

        colspanExists = jQuery(this).attr('colspan');
        console.log(jQuery(this).attr('class'));
        if (jQuery(this).hasClass('skipWidth') || (typeof colspanExists !== 'undefined' && colspanExists !== false)) {
          console.log('skipping');
          width = 0;
        } else {
          width = jQuery(this).text().width(jQuery(this).css('font'));
        }
        if (!minWidths[index]) {
          if (width > settings.minPossibleWidth) {
            return minWidths[index] = width + settings.incrementAllBy;
          } else {
            return minWidths[index] = settings.minPossibleWidth;
          }
        } else if (minWidths[index] < width) {
          return minWidths[index] = width + settings.incrementAllBy;
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
    var f, o, textWidthCalculator, w;

    if ($('#textWidthCalculator').length === 0) {
      textWidthCalculator = '<div id="textWidthCalculator" style="position: absolute; float: left; white-space: nowrap; visibility: hidden;"></div>';
      $('body').append(textWidthCalculator);
    }
    f = font || '12px arial';
    o = $('#textWidthCalculator').text(this).css({
      'font': f
    });
    return w = o.width();
  };

}).call(this);

