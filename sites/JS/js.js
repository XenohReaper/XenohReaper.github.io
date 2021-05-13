///////////////////////////////////////////////////
//						KEK_1
///////////////////////////////////////////////////

let Btn = document.getElementById('Btn'),
	Short = document.getElementById('short'),
	All = document.getElementById('All');


Btn.onclick = function (){
	if(Btn.innerHTML == "Всі характеристики"){
		All.style.display = "block"
		Short.style.display = "none"
		Btn.innerHTML = "Скорочены хар."
		
	}else if(Btn.innerHTML == "Скорочены хар."){
		All.style.display = "none"
		Short.style.display = "block"
		Btn.innerHTML = "Всі характеристики"
		
	}
}
