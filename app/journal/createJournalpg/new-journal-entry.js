import React, { useState } from 'react';
import { connect } from "@planetscale/database";


function CreateJournal() {
  const [entry, setEntry] = useState({
    date: new Date().toISOString().slice(0, 10),
    title: '',
    mood: '',
    text: '',
  });

  const handleInput = (e) => {
    e.persist();
    setEntry({ ...entry, [e.target.name]: e.target.value });
  };

  const handleMoodSelect = (e) => {
    setEntry({ ...entry, mood: e.target.value });
  };
  
  /*
  Yeah were not using axios
  const saveEntry = (e) => {
    e.preventDefault();

    const data = {
        date: entry.date,
        title: entry.title,
        mood: entry.mood,
        text: entry.text
    }

    axios.post('').then();
  }

  const onSubmit = async (e) => {
    e.preventDefault();
    const data = {
      date: entry.date,
      title: entry.title,
      mood: entry.mood,
      text: entry.text
  }
    await axios.post("")
  }
*/

  return (
    <div className="bg-cover bg-[url('/cj_background.png')] bg-center bg-no-repeat h-screen" style={{ height: '100vh' }}>
      <div className="card-body">
        <form className="text-center" onSubmit={(e) =>onSubmit(e)}>
          <div className="mb-3 d-flex flex-column">
           
            <div>
                <h4 style={{ padding: '5px' }} >
                    Title
                </h4>
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
          <div className="mb-3 d-flex flex-column">
            <div>
                <h4 style={{ padding: '5px' }}>
                    Mood
                </h4>
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
          <div className="mb-3 d-flex flex-column">
          <div>
                <h4 style={{ padding: '5px' }}>
                    Text
                </h4>
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
            <button type="submit" className="btn btn-primary">
              Save Entry
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default CreateJournal;

/*
const CreateJournal = ({ onAddEntry }) => {
    const [entry, setEntry] = useState('');
    const [date, setDate] = useState('');
    const [mood, setMood] = useState('mood');
    const [title, setTitle] = useState('');

    const handleSubmit = (event) => {
        event.preventDefault();

        const item = {
            entry,
            date,
            mood,
            title
        };

        onAddEntry(item);

        setEntry('');
        setDate('');
        setMood('mood');
        setTitle('');
    };

    return (
        <div className="max-w-md mx-auto mt-10 p-6 bg-gray-100 rounded-lg shadow-lg">
            <form onSubmit={handleSubmit}>
                <div className="mb-4">
                    <label htmlFor="entry" className="block text-gray-700 font-bold mb-2">
                        Entry
                    </label>
                    <textarea
                        id="entry"
                        value={entry}
                        onChange={(e) => setEntry(e.target.value)}
                        className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                        placeholder="Write your journal entry..."
                    ></textarea>
                </div>
                <div className="mb-4">
                    <label htmlFor="date" className="block text-gray-700 font-bold mb-2">
                        Date
                    </label>
                    <input
                        type="text"
                        id="date"
                        value={date}
                        onChange={(e) => setDate(e.target.value)}
                        className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                        placeholder="Enter date..."
                    />
                </div>
                <div className="mb-4">
                    <label htmlFor="mood" className="block text-gray-700 font-bold mb-2">
                        Mood
                    </label>
                    <input
                        type="text"
                        id="mood"
                        value={mood}
                        onChange={(e) => setMood(e.target.value)}
                        className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                        placeholder="Enter mood..."
                    />
                </div>
                <div className="mb-4">
                    <label htmlFor="title" className="block text-gray-700 font-bold mb-2">
                        Title
                    </label>
                    <input
                        type="text"
                        id="title"
                        value={title}
                        onChange={(e) => setTitle(e.target.value)}
                        className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                        placeholder="Enter title..."
                    />
                </div>
                <button
                    type="submit"
                    className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                >
                    Submit
                </button>
            </form>
        </div>
    );
};

export default CreateJournal;
*/