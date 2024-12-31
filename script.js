// // # 1st method
let button1 = document.querySelector('#button1');
let button2 = document.querySelector('#button2');
let button3 = document.querySelector('#button3');
let main = document.querySelector('#main');
main.textContent = '0';
button1.addEventListener('click', ()=>{
    let value = parseInt(main.textContent);
    value -=1;
    let ans = value.toString();
    main.textContent = ans;
});
button2.addEventListener('click', ()=>{
    let value = parseInt(main.textContent);
    value +=1;
    let ans = value.toString();
    main.textContent = ans;
});
button3.addEventListener('click', ()=>{
    main.textContent = '0';
});


// // # 2nd Method
// const countValue = document.querySelector('#main');
// const increment = () =>{
//     // get the value from UI
//     let value = parseInt(countValue.innerText);
//     // update the value
//         value +=1;
//     // Set the value on UI
//         countValue.innerText = value;
// };
// const decrement = () => {
//     // get the value from UI
//     let value = parseInt(countValue.innerText);
//     // update the value
//         value -=1;
//     // Set the value on UI
//         countValue.innerText = value;
// };


