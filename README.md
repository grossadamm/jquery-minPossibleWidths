# jquery-minPossibleWidths

A very simple jquery plugin to set the th widths of a table to the smallest possible width without causing the text to line break.

## Installation

Include script *after* the jQuery library (unless you are packaging scripts somehow else):

    <script src="/path/to/jquery.minpossiblewidths.js"></script>

## Usage

### Options

.minPossibleWidths takes in the max number of rows it should iterate through before assuming it has the smallest possible width for that column.

Any column with a th that has a class of autoWidth will not have the width set. However it will still be iterated over for width determination.

### Example

Set the minimum possible widths:

    $('#projectsTable').minPossibleWidths(20)
