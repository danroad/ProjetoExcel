
//leitura de excel

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
			}	
		});

	});

	$("#tipo").blur(function(){
		$(this).val("");
	});	
});



botaoConfigurar =  document.getElementById('btn-configurar');
botaoConfigurar.addEventListener('click',()=>{
	let modalConf= document.getElementById('modalConfiguracao');
	let modalExibir= new bootstrap.Modal(modalConf);
	modalExibir.show()
	
})





botaoPesquisar = document.getElementById('pesquisa');


botaoPesquisar.addEventListener('click',()=>{
	relatorioAtendida(3001,1);

})

function relatorioAtendida (ramal,linha){

	let tabela1 = document.getElementById('relatorio')
	let spanContador = document.getElementsByClassName(`.atendida[${linha}]`)
	let linhaFor = tabela1.row
	

	tabela1.map(function (){

		if((index[4].value ==`${ramal}`) && (index[6].value =='Saida')){
			let contadorAtendida = spanContador.textContent = tabelaAtendida.row
		};
	})


}




