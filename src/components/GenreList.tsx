import useGenres from "../hooks/useGenres";

export default function GenreList() {
  const { genres } = useGenres();
  return (
    <div>
      {genres.map((genre) => (
        <div key={genre.id}>{genre.name}</div>
      ))}
    </div>
  );
}
