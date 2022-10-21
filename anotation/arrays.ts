const favoriteShows: string[] = ["Friends", "The Office", "Breaking bad"];

const dates = [new Date(), new Date()];

const meals: string[][] = [["breakfast"], ["lunch"], ["dinner"]];

//* help with inference
const office = favoriteShows[1];
const lastKnown = favoriteShows.pop();

//* prevent incompatible values
favoriteShows.push(100);

//* help ith methods
favoriteShows.map((show: string) => {
  return show.concat();
});

//* arrays have multiple types
const holidays: (Date | string)[] = [new Date(), "2022-01-01"];
