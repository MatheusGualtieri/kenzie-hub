const TechItem = ({ item }) => {
  return (
    <li key={item.id}>
      <p>{item.title}</p>
      <p>{item.status}</p>
    </li>
  );
};
export default TechItem;
