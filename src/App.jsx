import { useState } from 'react';
import data from './data';
import People from './People';

const App = () => {
  const [people, setPeople] = useState(data);

  return (
    <>
      <h2 className="title">{people.length} Birthday Reminder</h2>
      <People people={people} />
      <button className="btn" onClick={() => setPeople([])}>
        Clear List
      </button>
    </>
  );
};
export default App;
