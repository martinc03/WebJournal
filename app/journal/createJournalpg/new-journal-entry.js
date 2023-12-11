
import React, { useState} from 'react';
import {collection,addDoc,} from 'firebase/firestore';
import { db } from '@/app/_utils/firebase';
import { UserAuth } from '@/app/context/AuthContext';
import { useRouter } from 'next/navigation';

function NewEntry() {
  const { user } = UserAuth();
  const [entry, setEntry] = useState({
    date: new Date().toISOString().slice(0, 10),
    title: '',
    mood: '',
    text: '',
  });
  const router = useRouter();

  const handleInput = (e) => {
    e.persist();
    setEntry({ ...entry, [e.target.name]: e.target.value });
  };

  const handleMoodSelect = (e) => {
    setEntry({ ...entry, mood: e.target.value });
  };

  const addEntry = async (e) => {
    e.preventDefault();
  
    try {
      if (entry.title !== '' && entry.mood !== '' && entry.text !== '') {
        // Replace 'collectionName' with your Firestore collection name
        const collectionRef = collection(db, "DairyEntries");
  
        // Add a new document to Firestore
        await addDoc(collection(db, "DairyEntries"), {
          date: new Date().toISOString().slice(0, 10),
          title: entry.title.trim(),
          mood: entry.mood.trim(),
          text: entry.text.trim(),
          userUid: user.uid,
        });
  
        // Reset the form after adding the entry
        setEntry({
          date: new Date().toISOString().slice(0, 10),
          title: '',
          mood: '',
          text: '',
        });
        console.log('Entry successfully saved to Firestore!');
        router.push('/journal/viewJournalETpg');
      } else {
        // Handle cases where any field is empty
        console.log('Please fill in all fields');
      }
    } catch (error) {
      console.error('Error adding entry:', error);
    }
  };
  return (
    <div className="bg-cover bg-[url('/cj_background.png')] bg-center bg-no-repeat h-screen" style={{ height: '100vh', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
      <div className="card-body">
        <form className="text-center" onSubmit={addEntry}>
          <div className="row mb-3">
            <div className="col">
              <div>
                <h3 style={{ padding: '5px' }}>Title</h3>
              </div>
              <input
                type="text"
                name="title"
                value={entry.title}
                onChange={handleInput}
                className="form-control"
                style={{ color: 'black' }} // Set text color to black
              ></input>
            </div>
            <div className="col">
              <div>
                <h3 style={{ padding: '5px' }}>Mood</h3>
              </div>
              <select
                name="mood"
                value={entry.mood}
                onChange={handleMoodSelect}
                className="form-control"
                style={{ color: 'black' }}
              >
                <option value="">Select Mood</option>
                <option value="Happy">Happy</option>
                <option value="Sad">Sad</option>
                <option value="Angry">Angry</option>
                {/* Add more mood options as needed */}
              </select>
            </div>
          </div>
          <div className="mb-3">
            <div>
              <h3 style={{ padding: '5px' }}>Text</h3>
            </div>
            <textarea
              name="text"
              value={entry.text}
              onChange={handleInput}
              className="form-control"
              rows="8"
              style={{ color: 'black' }} // Set text color to black
            ></textarea>
          </div>
          <div className="mb-3">
            <button type="submit" style={{border:'1px solid', padding: '10px 20px', borderRadius: '5px'}} className="btn btn-primary">
              Save Entry
            </button>
          </div>
        </form>
        <button
          onClick={() => {
            router.push('/journal');
          }}
          style={{
            position: 'fixed',
            bottom: '20px',
            right: '20px',
            padding: '10px 20px',
            borderRadius: '5px',
            color: 'white',
            border: '1px solid ',
            cursor: 'pointer',
          }}
        >
          Back
        </button>
      </div>
    </div>
  );
}

export default NewEntry;
