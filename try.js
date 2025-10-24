document.getElementById('myButton').addEventListener('click', function changemessage(){
document.getElementById('message').textContent= ('I told you it would change');
console.log('Button clicked');
});

console.log('message loaded successfully');

document.getElementById('myButton').style.color = 'white';
document.getElementById('myButton').style.backgroundColor = 'green';