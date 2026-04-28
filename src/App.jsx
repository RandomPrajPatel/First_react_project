import { EXAMPLES } from './data';
import Header from './components/Header/Header';
import { useState } from 'react';
import CoreConcepts from './components/CoreConcepts/CoreConcepts';
import Examples from './components/Examples';

function App() {
  const [selectedTopic, setSelectedTopic] = useState();

  let tabContent = <p>Please Select a topic</p>;

  if (selectedTopic) {
    tabContent = (
      <div id="tab-content">
        <h3>{EXAMPLES[selectedTopic].title}</h3>
        <p>{EXAMPLES[selectedTopic].description}</p>
        <pre>
          <code>{EXAMPLES[selectedTopic].code}</code>
        </pre>
      </div>
    );
  }

  function handleSelect(topic) {
    setSelectedTopic(topic);
  }

  return (
    <div>
      <Header />
      <main>
        <CoreConcepts />

        <Examples
          selectedTopic={selectedTopic}
          handleSelect={handleSelect}
        />

        {tabContent}
      </main>
    </div>
  );
}

export default App;