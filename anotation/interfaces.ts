interface Movie {
  title: string;
  date: Date;
  rating: number;
  genre: string[];

  report(): string;
}

interface Detail {
  report(): string;
}

const currentMovie = {
  title: "dune",
  date: new Date(2021, 9, 24),
  rating: 8.2,
  genre: ["action", "adventure", "drama"],
  report() {
    return `Title: ${this.title}`;
  },
};

const musicTrack = {
  genre: "rock",
  exclusive: true,
  duration: 120,
  report(): string {
    return `Current son: ${this.genre}`;
  },
};

// const logMovie = (movie: Movie): void => {
//   console.log(`Title: ${movie.title}`);
//   console.log(`Release Date: ${movie.date}`);
//   console.log(`Rating: ${movie.rating}`);
//   console.log(`Genre: ${movie.genre.join(", ")}`);

//   console.log(movie.report());
// };
// logMovie(currentMovie);

const logDetail = (item: Detail): void => {
  console.log(item.report());
};

logDetail(currentMovie);
logDetail(musicTrack);
