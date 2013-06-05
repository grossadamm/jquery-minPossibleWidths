jQuery.fn.minPossibleWidths = (options) ->
  settings = jQuery.extend({
    maxRowCount: 20,
    minPossibleWidth: 0,
    minWidths: {}
  }, options)

  minWidths = []
  jQuery(this).find('tr').each( (rowCount) ->
    jQuery(this).find('th').each( (index) ->
      if(jQuery(this).attr('id'))
        if(settings.minWidths.hasOwnProperty(jQuery(this).attr('id')))
          minWidths[index] = settings.minWidths[jQuery(this).attr('id')]
    )

    jQuery(this).find('td').each( (index) ->
      width = jQuery(this).text().width(jQuery(this).css('font'))

      if(!minWidths[index]) # the min width for this column is not yet set
        if(width>settings.minPossibleWidth)
          minWidths[index] = width
        else
          minWidths[index] = settings.minPossibleWidth
      else if (minWidths[index] < width) #min width was already set, lets see if ours is bigger
        minWidths[index] = width
    )
    if(rowCount > settings.maxRowCount)
      # we probably have iterated enough to get an idea of the right widths
      return false
  )
  jQuery(this).find('th').each((index) ->
    if(!jQuery(this).hasClass('autoWidth'))
      jQuery(this).width(minWidths[index])
  )

String.prototype.width = (font) ->
  if($('#textWidthCalculator').length==0)
    textWidthCalculator = '<div id="textWidthCalculator" style="position: absolute; float: left; white-space: nowrap; visibility: hidden;"></div>'
    $('body').append(textWidthCalculator)
  f = font || '12px arial'
  o = $('#textWidthCalculator').text(this).css({'font': f})
  w = o.width()


