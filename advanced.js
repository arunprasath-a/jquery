

$(document).ready(function () {
	
    var table = $('#myAdvancedTable').DataTable({
		colReorder: true		 
		});
	
    table.MakeCellsEditable({
        "onUpdate": myCallbackFunction,
        "inputCss":'my-input-class',
        "columns": [0,1,2,3],
        "allowNulls": {
            "columns": [0],
            "errorClass": 'error',
			
        },
		
        "confirmationButton": { // could also be true
            "confirmCss": 'my-confirm-class',
            "cancelCss": 'my-cancel-class'
        },
		
        "inputTypes": [
            
			{
                "column": 0,
                "type": "text",
                "options": null
            },
			
            {
                "column":1, 
                "type": "text",
                "options": null
            },
			
            {
                "column": 2,
                "type": "datepicker", // requires jQuery UI: http://http://jqueryui.com/download/
                "options": {
                    "icon": "http://jqueryui.com/resources/demos/datepicker/images/calendar.gif" // Optional
                }
            },
			
			{
                "column":3, 
                "type": "list",
                "options":  [{ "value": "chennai", "display": "chennai" },
                    { "value": "ambur", "display": "ambur" },
                    { "value": "pondy", "display": "pondy" }]
            },
             
            
        ]
    });
	
	

});


function myCallbackFunction (updatedCell, updatedRow, oldValue) {
    console.log("The new value for the cell is: " + updatedCell.data());
    console.log("The old value for that cell was: " + oldValue);
    console.log("The values for each cell in that row are: " + updatedRow.data());
}


