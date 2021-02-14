// creating code for the form//

let id = 0;

document.getElementById('create').addEventListener('click', () =>{
 let createDate= new Date();
 let table= document.getElementById('notes');
 let row= table.insertRow(1);
 row.setAttribute('id', `item-${id}`);
 row.insertCell(0).innerHTML = document.getElementById('new-activity').value;
 row.insertCell(1).innerHTML=`${createDate.getFullYear()}-${createDate.getMonth() + 1}-${createDate.getDate()}`;
 row.insertCell(2).innerHTML=document.getElementById('new-start-date').value;
 row.insertCell(3).innerHTML=document.getElementById('new-end-date').value;
 let decision=row.insertCell(4);
 decision.appendChild(createChangeMindButton(id++));
 document.getElementById('new-task').value='';
});

function createChangeMindButton(id) {
    let btn =document.createElement('button');
    btn.className ='btn btn-success';
    btn.id=id;
    btn.innerHTML ='Delete';
    btn.onclick = () =>{
        console.log(`Cahnging row with id: item-${id}`);
        let elementToDelete=document.getElementById(`item-${id}`);
        elementToDelete.parentNode.removeChild(elementToDelete);
    };
    return btn;
}
