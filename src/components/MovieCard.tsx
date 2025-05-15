type MovieCardProps = {
  name: string;
  title: string;
  image: string;
  description: string;
};
export default function MovieCard(props: MovieCardProps) {
  return (
    <div className="flex justify-center">
    <div className="p-4 bg-blue-600 mb-4 w-80 mt-5 m-auto">
      <img src={"https://image.tmdb.org/t/p/w500" +props.image} alt="หนังดี" />
      <h2 className="text-3xl text-center mt-4">{props.title}{props.name}</h2>
      <p className="text-center">{props.description}</p>
    </div>
    </div>
  );
}
