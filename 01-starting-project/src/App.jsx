import { useState } from 'react';

import { CORE_CONCEPTS, EXAMPLES } from './assets/data/data-with-examples.js';
import Header from './components/header/Header.jsx';
import CoreConcept from './components/coreconcepts/CoreConcept.jsx'
import TabButton from './components/tabmenu/TabButton.jsx';

function App() {

  /*
    useState is a react hook provided by react. tells react when data is changed and will rerender when data is changed.
    !Important! only call hooks inside of Component Functions and only call Hooks on the top level. (not inside other inner functions)
  */
  const [selectedTopic, setSelectedTopic] = useState();
  /*
    useState() accepts an argument. The default value you want stored. The value that should be use when first rendered.
    useState always returns an array of 2 elements
      0: the currrent value of a variable for the current render cycle
      1: a function provided by react that updates the value of the first index and rerenders the component.
  */

  function handleSelect(selectedButton) {
    setSelectedTopic(selectedButton);
    /*
       when you call setSelectedTopic react "schedules" the rerender, then re-executes the component function the value is only available after
       the render is completed. so console logging after the call will result in the "previous" value being displayed in the console.
    */
    // console.log(selectedTopic);
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
            <TabButton label='Components' isSelected={selectedTopic === 'components'} onSelect={() => handleSelect('components')} />
            <TabButton label='JSX' isSelected={selectedTopic === 'jsx'} onSelect={() => handleSelect('jsx')}/>
            <TabButton label='Props' isSelected={selectedTopic === 'props'} onSelect={() => handleSelect('props')}/>
            <TabButton label='State' isSelected={selectedTopic === 'state'} onSelect={() => handleSelect('state')}/>
          </menu>
          {!selectedTopic ? <p>Please select a tpoic.</p> : (
            <div id="tab-content">
              <h3>{EXAMPLES[selectedTopic].title}</h3>
              <p>{EXAMPLES[selectedTopic].description}</p>
              <pre>
                <code>
                  {EXAMPLES[selectedTopic].code}
                </code>
              </pre>
            </div>
          )}        
        </section>
      </main>
    </div>
  );
}

export default App;
