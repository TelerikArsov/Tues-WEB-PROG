import { Fragment } from "react";

function Gallery() {
  const str = "some link";
  return (
    <>
      <h1>Hedy Lamarr's Todos {str} </h1>
      <img src={`xx${str}yy`} alt="Hedy Lamarr" class="photo" />
    </>
  );
}

export default function Home() {
  return (
    <div className="container">
      <Gallery />
      <Gallery />
    </div>
  );
}
