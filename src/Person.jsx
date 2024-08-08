const Person = ({id, name, age, image}) => {
  return (
        <div key={id}>
          <section>{name}</section>
          <p>{age}</p>
          <article className="person">
           <img src={image} alt={name} className="img"/>
          </article>
        </div>
  )
}
export default Person