import { CORE_CONCEPTS } from './data';
import Header from './components/Header';
import CoreConcept from './components/CoreConcept';
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
      </main>
    </div>
  );
}
export default App;
