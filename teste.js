
//IMPORTAÇÃO DO EXCEL

let tbody = document.getElementById('tab-body')



function generateTableHead(tbody,data){
	;
	let row = tbody.insertRow();
	for (let key of data) {
		let td = document.createElement('td');
		let text = document.createTextNode(key);
		td.appendChild(text);
		row.appendChild(td);
		if(text =='Nao atendida'){
			return text ='Perdida'
		}

	
		
	}
}




function generateTableRows(tbody,data){
	let newRow = tbody.insertRow(-1);
	data.map((row,index)=>{

		if(!!row ){

			
			if (row instanceof Date){

				
				if( index == 4){
					
					let date = new Date(row);
					date.setHours(date.getHours()+3)
					date = date.toLocaleTimeString('pt-BR', {  hour:'2-digit',minute:'2-digit',second:'2-digit' })
					console.log = date
					
					let newCell = newRow.insertCell()
					let newText = document.createTextNode(date);
					newCell.classList.add('tdduracao')
					newCell.appendChild(newText)
					
					
					return
				}else{
					let date =  new Date(row)
					date.setHours(date.getHours()+3)
					date = date.toLocaleTimeString('pt-BR', { month:'2-digit', day:'2-digit'})
					let newCell = newRow.insertCell()

					let newText = document.createTextNode(date);
					newCell.classList.add('tddata')
					newCell.appendChild(newText)
					return

				}
				
				
			
			}
			
	
		}


		let newCell = newRow.insertCell();
		let newText = document.createTextNode(row);

		//EDITANDO COLUNA IMPORTADA
		if (index == 0){

			newCell.classList.add('tdData')


		}
		if (index == 1){

			newCell.classList.add('tdBina')
			newCell.remove()

		}

		if (index == 2){

			newCell.classList.add('tdOrigem')



		}
		if (index == 3){

			newCell.classList.add('tdDestino')

		}
		if (index == 4){

			newCell.classList.add('tdDuracao')

		}
		if (index == 5){

			newCell.classList.add('tdStatuso')
			
			if(row =='Nao atendida'){

				let correcao = 'Perdida'
				let newText = document.createTextNode(correcao);
				newCell.appendChild(newText)
				return
				
			}
		

			

		}
		if (index == 6){

			newCell.classList.add('tdTipo')

		}
		if (index == 7){

			newCell.classList.add('tdTarifa')
			newCell.remove()

		}
		if (index == 8){

			newCell.classList.add('tdCentro')
			newCell.remove()
			
		}
	

		if ((row=1) && (index = 1)){
		

		}
		
	
		newCell.appendChild(newText)
	})


}



var input = document.getElementById('input')

input.addEventListener('change', function() {
  readXlsxFile(input.files[0]).then(function(data) {
	var i = 1;
	let spanContador =document.getElementById('sp-total') 
	spanContador = spanContador.textContent = (data.length)-1;


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



// SETOR - Filtro de busca 


$(function(){
	$("#origem").keyup(function(){		

		var index = $(this).parent().index();
		// Indica a coluna + ()
		var nth = "#tab-body td:nth-child("+(3).toString()+")";
		var valor = $(this).val().toUpperCase();
		$("#tab-body tr").show();
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
		var nth = "#tbl-data td:nth-child("+(3).toString()+")";
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
		
		
		let tempo = document.getElementById('data');
		tempo = new Date(tempo);
		tempo.toLocaleTimeString('pt-BR', { month:'2-digit', day:'2-digit'})

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
	$("#hora").click(function(){
		
		
		let tempo = document.getElementById('hora');
		tempo = new Date(tempo);
		tempo.toLocaleTimeString('pt-BR', { hour:'2-digit', minute:'2-digit'})

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

	$("#hora").blur(function(){
		$(this).val("");
	});	
});



$(function(){
	$("#status").mouseout(function(){		

		var index = $(this).parent().index();
		// Indica a coluna + ()
		var nth = "#tbl-data td:nth-child("+(5).toString()+")";
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
		var nth = "#tbl-data td:nth-child("+(6).toString()+")";
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



$(function(){
	$("#duracao").keyup(function(){		

		var index = $(this).parent().index();
		// Indica a coluna + ()
		var nth = "#tbl-data td:nth-child("+(4).toString()+")";
		var valor = $(this).val().toUpperCase();
		$("#tbl-data tr").show();
		$(nth).each(function(){
			if($(this).text().toUpperCase().indexOf(valor) < 0){
				$(this).parent().hide();
				console.log($(this).length)
			}	
		});

	});

	$("#tipo").blur(function(){
		$(this).val("");
	});	
});

//SETOR BOTAO MODAL - CONFIGURAÇÃO DE RELATÓRIO

botaoConfigurar =  document.getElementById('btn-configurar');
botaoConfigurar.addEventListener('click',()=>{
	let modalConf= document.getElementById('modalConfiguracao');
	let modalExibir= new bootstrap.Modal(modalConf);
	modalExibir.show()
	

})



function contadorLinha() {

	//Chama a tabela no DOM.
	let tableTeste = document.querySelector('#tab-body');

	//Direciona para linha (tr) e  as TD de classe especificada.
	let testeTD = tableTeste.querySelectorAll('tr .tdOrigem');
	let contador =0
	

	//Contar a quantidade de ligações para o ramal 3001.
	for (var i = 0; i < testeTD.length; i++) {
		console.log('estou no for')
        
		//filtrar as ligações com Origem 3001.
      	if ((testeTD[i].textContent)==='3001'){
            
			console.log('estou no if')
			return contador++
        }
		
    }
    	
	
}
