import './CoreConcepts.css';
import { CORE_CONCEPTS } from '../../assets/data/data-with-examples';
import CoreConcept from './CoreConcept';
import Section from '../section/Section';

export default function CoreConcepts() {
    return(
      <Section id="core-concepts">
         <h2>Time to get started!</h2>
         <h2>Core Concepts</h2>
         <section>
            <ul>
               { CORE_CONCEPTS.map( item => <CoreConcept key={item.title} {...item} /> ) }
            </ul>
         </section>
      </Section>
    );
 }