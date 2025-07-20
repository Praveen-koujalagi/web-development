const mongoose = require('mongoose');
const Chat = require('./models/chat.js');

main().then(() => {
  console.log('Connected to MongoDB');
}).catch(err => console.log(err));

async function main() {
  await mongoose.connect('mongodb://127.0.0.1:27017/whatsapp'); 
  
}


Chat.insertMany([{
  from: 'Alice',
  to: 'Bob',
  message: 'Hello Bob!',
  createdAt: new Date() // new Date is used to set the current date and time
}, {
  from: 'Bob',
  to: 'Alice',
  message: 'Hi Alice!',
  createdAt: new Date()
},
{
  from: 'Charlie',
  to: 'Alice',
  message: 'Hey Alice, how are you?',
  createdAt: new Date()
},
{
  from: 'Alice',
  to: 'Charlie',
  message: 'I am good, thanks! How about you?',
  createdAt: new Date()
},
{
  from: 'Bob',
  to: 'Charlie',
  message: 'Hello Charlie, nice to meet you!',
  createdAt: new Date()
}]);

Chat.save()
  .then(() => console.log('Chats saved successfully'))
  .catch(err => console.log('Error saving chats:', err));