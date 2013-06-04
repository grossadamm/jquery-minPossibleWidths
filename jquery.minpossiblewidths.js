(function() {
  jQuery.fn.minPossibleWidths = function(maxRowCount) {
    var minWidths;

    minWidths = new Array();
    jQuery(this).find('tr').each(function(rowCount) {
      jQuery(this).find('td').each(function(index) {
        var width;

        width = $(this).text().width(jQuery(this).css('font'));
        if (!minWidths[index]) {
          return minWidths[index] = width;
        } else if (minWidths[index] < width) {
          return minWidths[index] = width;
        }
      });
      if (rowCount > maxRowCount) {
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
