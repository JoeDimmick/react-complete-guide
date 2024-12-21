import { CORE_CONCEPTS } from './data.js';
import Header from './components/header/Header.jsx';
import CoreConcept from './components/coreconcepts/CoreConcept.jsx'
import TabMenu from './components/tabmenu/TabMenu.jsx';

function App() {
  return (
    <div>
      <Header/>
      <main>
        <section id ="core-concepts">
        <h2>Time to get started!</h2>
          <ul>
            <CoreConcept title={ CORE_CONCEPTS[0].title } description={CORE_CONCEPTS[0].description} image={CORE_CONCEPTS[0].image} />
            <CoreConcept {...CORE_CONCEPTS[1]} />
            <CoreConcept title={ CORE_CONCEPTS[2].title } description={CORE_CONCEPTS[2].description} image={CORE_CONCEPTS[2].image} />
            <CoreConcept title={ CORE_CONCEPTS[3].title } description={CORE_CONCEPTS[3].description} image={CORE_CONCEPTS[3].image} />
          </ul>
        </section>
        <section id="examples">
          <h2>Examples</h2>
          <menu>
            <TabMenu label="Components"/>
            <TabMenu label="JSX"/>
            <TabMenu label="Props"/>
            <TabMenu label="State"/>
          </menu>
        </section>
      </main>
    </div>
  );
}

export default App;
