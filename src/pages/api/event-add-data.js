//Generic data to start Events "table"

const docRef = db.collection('events').doc('WelcomeMeeting');
await docRef.set({
  name: 'Welcome Meeting',
  date_time: 09-04-2022_1000,
  location: 'Kennesaw State University'
});

docRef = db.collection('events').doc('Meet&GreetWithTeam');
await docRef.set({
  name: 'Meet & Greet with Team',
  date_time: 09-20-2022_1400,
  location: 'Kennesaw State University'
});

docRef = db.collection('events').doc('TeamQ&A');
await docRef.set({
  name: 'Team Q&A',
  date_time: 10-10-2022_1500,
  location: 'Kennesaw State University'
});