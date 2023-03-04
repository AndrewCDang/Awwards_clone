const currentDate = new Date();
const x = 0;
const pastDate = new Date(currentDate.getTime() - (x * 24 * 60 * 60 * 1000));
let selectedDate = pastDate.toString().slice(4,15).split('');
selectedDate.splice(6,1,', ');
const presentedDate = selectedDate.join('')

console.log(presentedDate)