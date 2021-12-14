let selectedRow = null;
function onformsubmit(){
    // event.preventDefault();
    var formData = readformdata(); 

    if(formData["productcode"] !="" && formData["product"] !="" && formData["qty"] !="" && formData["perPrice"] !="")
    {
        if(selectedRow === null)
        {
        insertNewRecord(formData);
        }
        else
        {
        updateRecord(formData);

        resetform()
        }
    }
    else
    {
        alert("Please enter the details");
    }
}

// retrieve the data from the data 
function readformdata(){
    const formData = {};
    formData["productcode"] = document.getElementById("productcode").value;
    formData["product"] = document.getElementById("product").value;
    formData["qty"] = document.getElementById("qty").value;
    formData["perPrice"] = document.getElementById("perPrice").value;
    return formData;
}

// insert the data into thedata
function insertNewRecord(data){
    let table = document.getElementById("storelist").getElementsByTagName("tbody")[0];

//    insert row
    let newRow = table.insertRow(table.length);
     cell1 = newRow.insertCell(0);
        cell1.innerHTML= data.productcode;
     cell2 = newRow.insertCell(1);
        cell2.innerHTML= data.product;
     cell3 = newRow.insertCell(2);
        cell3.innerHTML= data.qty;
     cell4 = newRow.insertCell(3);
        cell4.innerHTML= data.perPrice;
     cell5 = newRow.insertCell(4);
        cell5.innerHTML= `<button onClick= 'onEdit(this)'>Edit</button> <button onClick= 'onDelete(this)'>Delete</button>`;

}
// reset data
function resetform() {
    document.getElementById('productcode').value= '';
    document.getElementById('product').value= '';
    document.getElementById('qty').value= '';
    document.getElementById('perPrice').value= '';
    selectedRow= null;
}

// edit the data
function onEdit(td) {
    selectedRow =  td.parentElement.parentElement;
    document.getElementById('productcode').value= selectedRow.cells[0].innerHTML;
    document.getElementById('product').value= selectedRow.cells[1].innerHTML;
    document.getElementById('qty').value= selectedRow.cells[2].innerHTML;
    document.getElementById('perPrice').value= selectedRow.cells[3].innerHTML;
     
}

// update data
function updateRecord(formData){
    selectedRow.cells[0].innerHTML = formData.productcode;
    selectedRow.cells[1].innerHTML = formData.product;
    selectedRow.cells[2].innerHTML = formData.qty;
    selectedRow.cells[3].innerHTML = formData.perPrice;
}

// delete the data
function onDelete(td) {
    if(confirm('Are you sure you want to delete'))
    {
        row =  td.parentElement.parentElement;
        document.getElementById('storelist').deleteRow(row.rowIndex);
    }
   resetform();
}

