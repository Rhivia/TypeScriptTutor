import { User } from './models/User';

const user = new User({});

user.set({ name: 'Hacker Man', age: 99999 });

console.log(user.get('name'));
console.log(user.get('age'));

user.on('change', () => {
  console.log('change');
});

user.on('save', () => {
  console.log('save');
});

user.trigger('change');
user.trigger('save');
user.trigger('asdasd');
console.log(user);
