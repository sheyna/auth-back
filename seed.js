'use strict';

require('dotenv').config();
const mongoose = require('mongoose');
mongoose.connect(process.env.DATABASE_URL);

// this file only needs to load once, it doesn't need to continuously listen. So I don't need to run connection validation here

const Book = require('./models/book');

// create some Book schemas and insert them into the database
// our database is very fast, but it's like hitting an API, it takes the time it takes. so it needs to be an async function
async function seed() {
  // create is a method it gets from Scheme
  // and it 
  await Book.create({
    title: 'The King of Attolia',
    description: 'By scheming and theft, the Thief of Eddis has become King of Attolia. Eugenides wanted the queen, not the crown, but he finds himself trapped in a web of his own making. Then he drags a naive young guard into the center of the political maelstrom. Poor Costis knows he is the victim of the king\'s caprice, but his contempt for Eugenides slowly turns to grudging respect. Though struggling against his fate, the newly crowned king is much more than he appears. Soon the corrupt Attolian court will learn that its subtle and dangerous intrigue is no match for Eugenides.',
    status: true,
    email: 'sheyna@codefellows.com',
  });
  console.log('The King of Attolia was added');

  await Book.create({
    title: 'Six of Crows',
    description: 'Ketterdam: a bustling hub of international trade where anything can be had for the right price — and no one knows that better than criminal prodigy Kaz Brekker. Kaz is offered a chance at a deadly heist that could make him rich beyond his wildest dreams. But he can\'t pull it off alone. . . .A convict with a thirst for revenge, a sharpshooter who can\'t walk away from a wager, a runaway with a privileged past, a spy known as the Wraith, a Heartrender using her magic to survive the slums, a thief with a gift for unlikely escapes ... Kaz\'s crew is the only thing that might stand between the world and destruction—if they don\'t kill each other first.',
    status: true,
    email: 'sheyna@codefellows.com',
  });
  console.log('Six of Crows has been added');

  await Book.create({
    title: 'Les Miserables',
    description: 'Victor Hugo\'s tale of injustice, heroism and love follows the fortunes of Jean Valjean, an escaped convict determined to put his criminal past behind him. But his attempts to become a respected member of the community are constantly put under threat: by his own conscience, when, owing to a case of mistaken identity, another man is arrested in his place; and by the relentless investigations of the dogged Inspector Javert. It is not simply for himself that Valjean must stay free, however, for he has sworn to protect the baby daughter of Fantine, driven to prostitution by poverty.',
    status: true,
    email: 'sheyna@codefellows.com',
  });
  console.log('Les Miserables has been added');

  mongoose.disconnect();
};

seed();
