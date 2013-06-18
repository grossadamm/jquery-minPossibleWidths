# jquery-minPossibleWidths

A very simple jquery plugin to set the th widths of a table to the smallest possible width without causing the text to line break.

## Installation

Include script *after* the jQuery library (unless you are packaging scripts somehow else):

    <script src="/path/to/jquery.minpossiblewidths.js"></script>

## Usage

### Options

    {
        maxRowCount: int,
        minPossibleWidth: int,
        minWidths: {
            some_th_id : int
        }
    }

* maxRowCount - You can specify the max number of rows to iterate through before stopping measuring column widths
* minPossibleWidth - A global minimum that the found minimum cannot be below.
* minWidths - Specify a minimum that any column (via <th> id) cannot be below.
* incrementAllBy - Add this number to every calculated width. Very helpful if you have a negative dropshadow that might be making the calculation just a hair off. 

Any column with a th that has a class of autoWidth will not have the width set. However it will still be iterated over for width determination.

Additionally, any td that has a class of skipWidth or that has a colspan will be skipped when calculating the widths for that column.

### Example

Set the max row count:

    $('#myCoolTable').minPossibleWidths({
        maxRowCount : 20,
    })

Set a minimum width for a specific column that the found width cannot be less than:

    $('#myCoolTable').minPossibleWidths({
        minWidths : {
            titleCol : 150
        }
    })
