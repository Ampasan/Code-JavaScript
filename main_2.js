const siswa1 = {
  nama: "Tono",
  age: 20,
  grades: [90, 85, 88],
};

const siswa2 = {
  nama: "Tini",
  age: 22,
  grades: [78, 82, 85],
};

const mergedStudent = {
  nama: "Tono dan Tini",
  age: (siswa1.age + siswa2.age) / 2,
  grades: [...siswa1.grades, ...siswa2.grades],
};

console.log(mergedStudent);

const FavData = {
  user: {
    id: 1,
    name: "Naufal",
    age: 18,
    favorites: {
      books: ["2010", "Overlord", "Solo Leveling"],
      movies: ["Your Name", "You Are the Apple of My Eye"],
    },
  },
};

const {
  user: {
    name,
    age,
    favorites: { movies },
  },
} = FavData;

console.log(name);
console.log(age);
console.log(movies);

const event = {
  eventName: "Workshop KSM Android",
  date: "2024-10-10",
  attendees: ["Valtrizt", "Billy"],
};

function addAttendees(event, newAttendees) {
  const { eventName, date, attendees } = event;

  const updatedEvent = {
    eventName,
    date,
    attendees: [...attendees, ...newAttendees],
  };

  return updatedEvent;
}

const newAttendees = ["Naufal", "Pak Dengklek"];

const updatedEvent = addAttendees(event, newAttendees);
console.log(updatedEvent);
