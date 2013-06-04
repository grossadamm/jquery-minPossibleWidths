jQuery.fn.minPossibleWidths = (maxRowCount) ->
  minWidths = new Array()
  jQuery(this).find('tr').each( (rowCount) ->
    jQuery(this).find('td').each( (index) ->
      width = $(this).text().width(jQuery(this).css('font'))
      if(!minWidths[index])
        minWidths[index] = width
      else if (minWidths[index] < width)
        minWidths[index] = width
    )
    if(rowCount > maxRowCount)
      # we probably have iterated enough to get an idea of the right widths
      return false
  )
  jQuery(this).find('th').each((index) ->
    if(!jQuery(this).hasClass('autoWidth'))
      jQuery(this).width(minWidths[index])
  )

String.prototype.width = (font) ->
  f = font || '12px arial'
  o = $('#textWidthCalculator').text(this).css({'font': f})
  w = o.width()
