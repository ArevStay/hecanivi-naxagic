// // const name1 = "Stray kids"
// let debut = 2018
// let members = ["Bang Chan", "Lee Know", "Changbin", "Hyunjin", "Han", "Felix", "Seungmin", "I.N"]

// console.log(debut);
// // console.log(name);
// console.log(members);

// let Coord = 0.621

// function milesToKm(miles) {
//     return miles * Coord
// }

// console.log(milesToKm(3));

// let name = "Stray kids"
// let craft = " that get fans singing along."
// function sentences(name, craft) {
   
//     return name+" always deliver high-energy performances"+craft
   
// }
// console.log(sentences(name,craft));



// const IssPosition = {
//     latitude: 49.2167,
//     longitude: -122.9167
   
   
// }

// console.log(IssPosition.latitude, IssPosition.longitude);





const asteroids = [
    { name: "2024 AB1", diameter: 120, hazardous: false },
    { name: "2024 CD2", diameter: 45, hazardous: true },
    { name: "2024 EF3",diameter: 890, hazardous: false },
    { name: "2024 GH4", diameter: 23, hazardous: true }
  ]

  const names = asteroids.map(asteroid => asteroid.name);
    console.log(names);

    const issOnly = asteroids.filter(asteroid => asteroid.hazardous);
    console.log(issOnly);

    const firstTwo = asteroids.slice(0, 2);
    console.log(firstTwo);

 const names= asteroids.filter(asteroid => asteroid.hazardous).map(asteroid => asteroid.name);
 console.log(names);
    