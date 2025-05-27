function addRow(rowData) {
    // Create a new row element
    var newRow = $("<tr>");

    $.each(rowData,function(index,value){
        newRow.append("<td>"+value+"</td>");
    })
    return newRow;
}

function filterTable(tableId, filterInput, column) {
    const filter = $('#'+filterInput).val().toUpperCase();
    $('#'+tableId+' tbody tr').each(function() {
        const rowText = $(this).find('td:eq('+column+')').text().toUpperCase(); // Targeting the first column (index 0)
        $(this).toggle(rowText.indexOf(filter) > -1);
    });
}

// Example sorting function for sorting table rows by a specific column
function sortTableRows(tableId, columnIdx, asc=true) {
    const table = document.getElementById(tableId);
    const tbody = table.querySelector('tbody');
    const rows = Array.from(tbody.querySelectorAll('tr'));

    if(asc){
        rows.sort((a, b) => {
            const aValue = a.cells[columnIdx].textContent;
            const bValue = b.cells[columnIdx].textContent;
            return aValue.localeCompare(bValue); // Use localeCompare for string sorting
        });
    }else{
        rows.sort((a, b) => {
            const aValue = a.cells[columnIdx].textContent;
            const bValue = b.cells[columnIdx].textContent;
            return bValue.localeCompare(aValue); // Use localeCompare for string sorting
        });
    }
    rows.forEach((row) => {
        tbody.appendChild(row);
    });
}
