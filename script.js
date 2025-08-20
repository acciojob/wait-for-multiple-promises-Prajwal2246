//your JS code here. If required.
document.addEventListener("DOMContentLoaded", () => {
	let table = document.getElementById("output");
	let tableRow = document.createElement('tr');
	let tableData = document.createElement("td");
    tableRow.id = "loading";
	tableData.colSpan = 2;
	tableData.innerHTML = 'Loading...';

	tableRow.appendChild(tableData);
	table.appendChild(tableRow);


	//3 promises



const promise1 = ()=>{
	let t = Math.floor(Math.random()*3)+1;
	return new Promise((res,rej)=>{
		setTimeout(()=>{
			res(t)
		},t * 1000)
	});
}

const promise2=()=>{
	let t = Math.floor(Math.random()*3)+1;
	return new Promise((res,rej)=>{
		setTimeout(()=>{
			res(t);
		},t*1000)
	});
}

const promise3=()=>{
let t = Math.floor(Math.random()*3)+1;
	return new Promise((res,rej)=>{
		setTimeout(()=>{
			res(t);
		},t*1000);
	})
}

Promise.all([promise1(),promise2(),promise3()]).then((values)=>{
	table.innerHTML="";

	values.forEach((time,index)=>{
		let row = document.createElement('tr');
		let nameCell = document.createElement("td");
		let timeCell = document.createElement('td');

		nameCell.textContent = `Promise ${index+1}`;
		timeCell.textContent = time;

		row.appendChild(nameCell);
		row.appendChild(timeCell);
		table.appendChild(row);
	});
});

	
});















