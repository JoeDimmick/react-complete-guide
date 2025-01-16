import { useState } from 'react';

import { EXAMPLES } from '../../assets/data/data-with-examples.js';
import Tabs from '../tabmenu/Tabs.jsx';
import Section from '../section/Section';
import TabButton from '../tabmenu/TabButton.jsx';

import './Examples.css';

export default function Examples() {

    const [selectedTopic, setSelectedTopic] = useState();

    function handleSelect(selectedButton) {
      setSelectedTopic(selectedButton);
    }

    return(
        <Section title="Examples" id="examples">
        <Tabs
            buttons={
                <>
                    <TabButton label='Components' isSelected={selectedTopic === 'components'} onClick={() => handleSelect('components')} />
                    <TabButton label='JSX' isSelected={selectedTopic === 'jsx'} onClick={() => handleSelect('jsx')}/>
                    <TabButton label='Props' isSelected={selectedTopic === 'props'} onClick={() => handleSelect('props')}/>
                    <TabButton label='State' isSelected={selectedTopic === 'state'} onClick={() => handleSelect('state')}/>
                </>
            }
        >
        {!selectedTopic ? <p>Please select a topic.</p> : (
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
        </Tabs>

      </Section>
    );
}