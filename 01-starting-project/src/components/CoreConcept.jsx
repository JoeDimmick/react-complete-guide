// Version 1
// function CoreConcept(props){
//   return(
//      <li>
//         <img src={props.image} alt={props.title} />
//         <h3>{props.title}</h3>
//         <p>{props.description}</p>
//      </li>
//   )
// }
// 1. Long form of implimenting the above component
//      <CoreConcept title={ CORE_CONCEPTS[0].title } description={CORE_CONCEPTS[0].description} image={CORE_CONCEPTS[0].image} />
// 2. implementation using the spread operator
//      <CoreConcept {...CORE_CONCEPTS[1]} />

//object destructuring - both the implementation examples above work with object destructuring.
export default function CoreConcept({image, title, description}){
  return(
     <li>
        <img src={image} alt={title} />
        <h3>{title}</h3>
        <p>{description}</p>
     </li>
  )
}
