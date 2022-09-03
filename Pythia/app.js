const btn = document.getElementById('btn');
const answer = document.querySelector('.answer');

btn.addEventListener('click', function(){
let number = Math.random();

if (number < 0.5){
    answer.textContent = 'YES!';
    document.body.style.backgroundColor = "green";
} else if (number > 0.5){
    answer.textContent = 'NO!';
    document.body.style.backgroundColor = "red";
} else {
    answer.textContent = "I am afraid I can't make that decision for you";
    document.body.style.backgroundColor = "gray";
}
});