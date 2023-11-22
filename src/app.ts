// const inputElement = document.querySelector('input')! as HTMLInputElement;
const inputElement = <HTMLInputElement>document.querySelector('input')!;

inputElement.value = 'Hi there';