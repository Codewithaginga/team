export default function Arrray() {
  const cities = ["Nairobi", "Kigali", "Mogadishu", "Dodoma"];

  return (
    <div>
      {cities.map((city, key) => {
        return <h1 key={key}>{city}</h1>;
      })}
    </div>
  );
}
