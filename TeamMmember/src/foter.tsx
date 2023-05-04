export default function Foter() {
  const age = 30;

  const isGreen = true;

  return (
    <div>
      {age >= 15 ? <h1>Small Boys</h1> : <h1>Big Boys</h1>}
      <h1 style={{ color: isGreen ? "maroon" : "greenyellow" }}>Color</h1>
    </div>
  );
}
