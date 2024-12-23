import { useState } from 'react';

import { EXAMPLES } from '../../assets/data/data-with-examples.js'
import TabButton from '../tabmenu/TabButton.jsx';

export default function Examples() {

    const [selectedTopic, setSelectedTopic] = useState();

    function handleSelect(selectedButton) {
      setSelectedTopic(selectedButton);
    }

    return(
        <section id="examples">
            <h2>Examples</h2>
            <menu>
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
    );
}