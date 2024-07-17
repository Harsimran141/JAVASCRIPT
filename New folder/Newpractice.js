// var header = document.getElementById("head");
// console.log(header)
// header.textContent = 'computer'
// header.innerText = 'Math Batch Start';
// header.innerHTML = '<h1>Hello Java</h1>'
// header.style.borderBottom = '20px solid #000 ';
// header.style.color = 'red'
var li = document.getElementsByTagName('li');
li[1].textContent = 'Animation';
li[2].textContent = 'colors';
li[3].textContent = 'windows';
li[4].textContent = 'Software';
li[5].textContent = 'Physics';
li[5].textContent = 'Physics';

for(var i=0; i<li.length; i++){
    li[i].style.backgroundColor = 'green';
    
}