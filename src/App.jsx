import { CORE_CONCEPTS, EXAMPLES } from './data';
import Header from './components/Header/Header';
import CoreConcept from './components/CoreConcepts/CoreConcept';
import TabButton from './components/TabButton/TabButton';
import { use, useState } from 'react';

//function UserData() {
//const user = { first: "Praj", last: "Patel", age: "20" };
//return (
//<div>
//<h2> Name : {user.last}, {user.first}</h2>
//</3>age: {user.age}</h3>
//</div>
//)
//}

function App() {
  const [selectedTopic, setSelectedTopic] = useState();
  let tabContent = <p>Please Select a topic</p>;
  if(selectedTopic){
    tabContent = (
      <div id="tab-content">
        <h3>{EXAMPLES[selectedTopic].title}</h3>
        <p>{EXAMPLES[selectedTopic].description}</p>
        <pre>
          <code>
            {EXAMPLES[selectedTopic].code}
          </code>
        </pre>

      </div>
    )
  }

  function handleSelect(selectedButton) {
    setSelectedTopic(selectedButton);
    console.log(tabContent);
  }
  return (
    <div>
      <Header />
      <main>
        <section id="core-concepts">
          <h2>Time to get started!</h2>
          <ul>
            <CoreConcept
              {
              ...CORE_CONCEPTS[0]
              }
            />
            <CoreConcept
              {
              ...CORE_CONCEPTS[1]
              }
            />
            <CoreConcept
              {
              ...CORE_CONCEPTS[2]
              }
            />
            <CoreConcept
              {
              ...CORE_CONCEPTS[3]
              }
            />
          </ul>
        </section>
        <section id="examples">
          <h2>Examples</h2>
          <menu>
            <TabButton onSelect={() => handleSelect("components")}>Components</TabButton>
            <TabButton onSelect={() => handleSelect("jsx")}>JSX</TabButton>
            <TabButton onSelect={() => handleSelect("props")}>Props</TabButton>
            <TabButton onSelect={() => handleSelect("state")}>State</TabButton>
          </menu>
          {tabContent}
        </section>
      </main>
    </div>
  );
}
export default App;
