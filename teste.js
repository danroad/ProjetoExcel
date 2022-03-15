
//leitura de excel

let tbody = document.getElementById('tab-body')


function generateTableHead(tbo0dy,data){
	;
	let row = tbody.insertRow();
	for (let key of data) {
		let td = document.createElement('td');
		let text = document.createTextNode(key);
		td.appendChild(text);
		row.appendChild(td);
	}
}




function generateTableRows(tbody,data){
	let newRow = tbody.insertRow(-1);
	data.map((row,index)=>{
		let newCell = newRow.insertCell();
		let newText = document.createTextNode(row);

		if ((row=1) && (index = 1)){


		}
		newCell.appendChild(newText)
	})

}



var input = document.getElementById('input')

input.addEventListener('change', function() {
  readXlsxFile(input.files[0]).then(function(data) {
	var i = 1;
	data.map((row,index)=>{

		
		if(i==0){
			let table = document.getElementById('tbl-data');
			generateTableHead(table,row);

	
		}
	

		if(i>0) {
			let table = document.getElementById('tbl-data');
			generateTableRows(table,row);

		};
	
	
	});

	});




});



// busca


$(function(){
	$("#origem").keyup(function(){		

		var index = $(this).parent().index();
		// Indica a coluna + ()
		var nth = "#tbl-data td:nth-child("+(3).toString()+")";
		var valor = $(this).val().toUpperCase();
		$("#tbl-data tr").show();
		$(nth).each(function(){
			if($(this).text().toUpperCase().indexOf(valor) < 0){
				$(this).parent().hide();
			}
		});
	});

	$("#origem").blur(function(){
		$(this).val("");
	});	
});



$(function(){
	$("#destino").keyup(function(){		

		var index = $(this).parent().index();
		// Indica a coluna + ()
		var nth = "#tbl-data td:nth-child("+(4).toString()+")";
		var valor = $(this).val().toUpperCase();
		$("#tbl-data tr").show();
		$(nth).each(function(){
			if($(this).text().toUpperCase().indexOf(valor) < 0){
				$(this).parent().hide();
			}
		});
	});

	$("#destino").blur(function(){
		$(this).val("");
	});	
});



$(function(){
	$("#data").click(function(){
		
		
		let tempo = document.getElementById('#data');
		tempo = new Date(tempo);

		var index = $(this).parent().index();
		// Indica a coluna + ()
		var nth = "#tbl-data td:nth-child("+(1).toString()+")";
		var valor = tempo
		$("#tbl-data tr").show();
		$(nth).each(function(){
			if($(this).indexOf(valor) < 0){
				$(this).parent().hide();
			}
		});
	});

	$("#data").blur(function(){
		$(this).val("");
	});	
});


$(function(){
	$("#status").mouseout(function(){		

		var index = $(this).parent().index();
		// Indica a coluna + ()
		var nth = "#tbl-data td:nth-child("+(6).toString()+")";
		var valor = $(this).val().toUpperCase();
		$("#tbl-data tr").show();
		$(nth).each(function(){
			if($(this).text().toUpperCase().indexOf(valor) < 0){
				$(this).parent().hide();
			}
		});
	});

	$("#status").blur(function(){
		$(this).val("");
	});	
});


$(function(){
	$("#tipo").click(function(){		

		var index = $(this).parent().index();
		// Indica a coluna + ()
		var nth = "#tbl-data td:nth-child("+(7).toString()+")";
		var valor = $(this).val().toUpperCase();
		$("#tbl-data tr").show();
		$(nth).each(function(){
			if($(this).text().toUpperCase().indexOf(valor) < 0){
				$(this).parent().hide();
			}
		});
	});

	$("#tipo").blur(function(){
		$(this).val("");
	});	
});










function deletaColuna(){

	const tbDelCol = document.getElementById('#tbl-data')

	 // Getting the rows in table.
	 var linhaTb = tbDelCol.rows;  
  
	 // Removing the column at index(1).  
	 var i = 7; 
	 for (var j = 0; j < linhaTb.length; j++) {

		 // Deleting the ith cell of each row.
		 linhaTb[j].deleteCell(i);
	 }
	 
}