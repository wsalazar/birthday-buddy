import Person from "./Person"

const People = ({people}) => {
  return (
   <>
   {people.map((person) => {
     return <Person key={person.id} {...person}/>
   })}
   </>
  )
}
export default People