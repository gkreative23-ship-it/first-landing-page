const firstName=document.getElementById('.input1');
const secondName=document.getElementById('.input2');
const thirdName=document.getElementById('.input3');

const formInput=JSON.parse(localStorage.getItem('input')) || [];



function clickButton() {
    const firstNameInput=firstName.value;
    const secondNameInput=secondName.value;
    const thirdNameInput=thirdName.value;

    formInput.push(firstNameInput);
    formInput.push(secondNameInput);
    formInput.push(thirdNameInput);

    localStorage.setItem('input', JSON.stringify(formInput));
}