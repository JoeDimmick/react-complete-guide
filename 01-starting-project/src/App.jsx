import { CORE_CONCEPTS } from './data.js';
import Header from './components/header/Header.jsx';
import CoreConcept from './components/coreconcepts/CoreConcept.jsx'
import TabButton from './components/tabmenu/TabButton.jsx';
import { useState } from 'react';

function App() {

  //let tabContent = 'Please select a tab.'
  const [tabContent, setTabContent] = useState('Please select a tab.')

  function handleSelect(selectedButton) {

    setTabContent(selectedButton);
    console.log(selectedButton);
}

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
          {/* using an anonymous function to then call the handleSelect() function. The anonymous function is executed when the button is clicked allowing handleSelect() to be
              called rather than passed.
              Example of passing handleSelect to the TabButton Component when the button is clicked: <TabButton onSelect={handleSelect} label="JSX"/>
              Example of using an anonymous function to execute handleSelect when the button is clicked: <TabButton onSelect={() => handleSelect()} label="Components"/>
           */}
            <TabButton label='Components' onSelect={() => handleSelect('Components')} />
            <TabButton label='JSX' onSelect={() => handleSelect('JSX')}/>
            <TabButton label='Props' onSelect={() => handleSelect('Props')}/>
            <TabButton label='State'onSelect={() => handleSelect('State')}/>
          </menu>
          {tabContent}
        </section>
      </main>
    </div>
  );
}

export default App;
