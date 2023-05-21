const meetups = [
  { name: 'JavaScript', isActive: true, members: 100 },
  { name: 'Angular', isActive: true, members: 900 },
  { name: 'Node', isActive: false, members: 600 },
  { name: 'React', isActive: true, members: 500 },
];

const membersOnActiveMeetups = meetups => meetups

  .filter((meetup) => {
    return meetup.isActive;
  })
  .reduce((sum, meetup) => {
    return sum + meetup.members;
  }, 0);

console.log(membersOnActiveMeetups(meetups)); //1500