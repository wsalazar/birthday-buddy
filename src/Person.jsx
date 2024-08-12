const Person = ({ id, name, age, image }) => {
  return (
    <div className="people" key={id}>
      <article className="person">
        <img src={image} alt={name} className="img" />
      </article>
      <section>
        <h4>{name}</h4>
        <p>Age {age}</p>
      </section>
    </div>
  );
};
export default Person;

{
  /* <article className="person"></article> */
}
