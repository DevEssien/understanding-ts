// const inputElement = document.querySelector('input')! as HTMLInputElement;
const inputElement = <HTMLInputElement>document.querySelector('input')!;

inputElement.value = 'Hi there';

interface ErrorContainer {
    [prop: string]: string;
}

const errorBag: ErrorContainer = {
    email: 'No email provided',
    username: 'Username must start with a character',
    nationality: 'Nigeria'
}