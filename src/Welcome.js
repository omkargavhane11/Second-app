export function Welcome({ pic, name }) {
  return (
    <div className="user-profile">
      <img src={pic} alt="img not found" />
      <h1>{name}</h1>
    </div>
  );
}
