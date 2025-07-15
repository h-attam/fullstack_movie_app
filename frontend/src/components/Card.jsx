import { Link } from "react-router-dom";

const Card = ({ movie }) => {
  const r = +movie.rating;

  //rating'e göre renk belirle
  const color =
    r > 9
      ? "blue"
      : r > 7.5
      ? "green"
      : r > 5
      ? "orange"
      : r > 3
      ? "purple"
      : "red";
  return (
    <Link
      to={`/movie/${movie.id}`}
      className="border shadow p-3 rounded-md hover:bg-gray-200 cursor-pointer transition max-sm:flex-row max-sm:gap-5 flex flex-col"
    >
      <div className="relative">
        <img
          className="rounded w-full object-cover max-sm:max-h-[150px] max-h-[250px]"
          src={`https://picsum.photos/seed/${movie.id}/200/300`}
          alt="poster"
        />
        <span
          style={{ background: color }}
          className="absolute right-[-10px] top-[-10px] rounded-full text-white font-semibold bg-blue-500 p-1 sm:p-2"
        >
          {Number(movie.rating).toFixed(1)}
        </span>
      </div>
      <div className="flex flex-col justify-between  h-full">
        <h3 className="bold text-xl  md:mt-4 line-clamp-2">{movie.title}</h3>
        <div>
          <p>{movie.year}</p>
          <p className="flex gap-2 my-2">
            {movie.genre.map((genre, i) => (
              <span className="bg-gray-200 rounded-md py-1 px-2" key={i}>
                {genre}
              </span>
            ))}
          </p>
          <p className="bg-red-400 rounded-md py-1 px-2 w-fit text-white">
            {movie.language}
          </p>
        </div>
      </div>
    </Link>
  );
};

export default Card;
