import { useState } from 'react';

//Create an editable today's entry page
export default function HealthHabitEntries() {
  const [editingEntries, setEditingEntries] = useState(false);
  const [addingGoal, setAddingGoal] = useState(false);
  const [isRepeatable, setRepeatable] = useState(false);
  const [numberByDate, setNumberByDate] = useState(true);
  const [editingGoal, setEditingGoal] = useState(false);
  const [weight, setWeight] = useState('');
  const [water, setWater] = useState('');
  const [sleep, setSleep] = useState('');
  //implement target number by date

  //edit entries after clicking the corresponding button
  function editEntries(e) {
    setEditingEntries(true);
  }

//   function StopEditingEntries(e) {
//     setEditingEntries(false);
//   }

function addGoal(e) {
    setAddingGoal(true);
}

function isRepeating(e) {
    setRepeatable(e.target.checked);
}

function isNumByDate(e) {
    setNumberByDate(e.target.checked);
}

function editGoal() {
    setEditingGoal(true);
}

  function changeWeight(e) {
    setWeight(e.target.value);
  }

  function changeWater(e) {
    setWater(e.target.value);
  }

  function changeSleep(e) {
    setSleep(e.target.value);
  }
  //Stop editting feature not used rn: <div onClick={StopEditingEntries}></div>

  // Aesthetic <span style={{ color: habits.exercise[day] >= goal.exercise ? 'green' : 'red' }}>
  return (
    <>

    <p> Today's Entries </p>

      <p>Weight: {weight}</p>
      <input value={weight} onChange={changeWeight} disabled={!editingEntries} />
      
      <p>Water: {water}</p>
      <input value={water} onChange={changeWater} disabled={!editingEntries} />
      
      <p>Sleep: {sleep}</p>
      <input value={sleep} onChange={changeSleep} disabled={!editingEntries} />
      <p></p>

      <button onClick={editEntries}>Edit Today's Entries</button>

      <button onClick={addGoal}>ADD GOAL</button>
      <button onClick={editGoal}>Edit/Delete Goal</button>
      <p></p>
      {addingGoal && (<label>
      <input type="checkbox" checked={isRepeatable} onChange={isRepeating} />
      Goal is {isRepeatable ? 'Repeatable' : 'One Time'}
      <input type="checkbox" checked={numberByDate} onChange={isNumByDate} />
      Goal is {isRepeatable ? 'Repeatable' : 'One Time'}
      </label>
      )}
      <p></p>
    </>
  );
<<<<<<< HEAD
}
=======
}

>>>>>>> 75d76e1e60be4014e3e864c7f8d390b1d9e453f5
