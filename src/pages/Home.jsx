import MovieCard from "../components/MovieCard";

function Home() {
  const movies = [
    { id: 1, title: "John Wick", release_date: "2020" },
    { id: 2, title: "Avengers", release_date: "2022" },
    { id: 3, title: "Finding Nemo", release_date: "2021" },
  ];

  return (
    <div className="home">
      <div className="movies-grid">{}</div>
    </div>
  );
}

export default Home;
