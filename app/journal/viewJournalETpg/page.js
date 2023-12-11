'use client'
import React, { useState, useEffect } from 'react';
import { collection, getDocs, query, where, deleteDoc, doc } from 'firebase/firestore';
import { db } from '@/app/_utils/firebase';
import { UserAuth } from '@/app/context/AuthContext'; // Import the useAuth hook from your AuthContext

const ViewEntryPage = () => {
  const { user } = UserAuth(); // Access the user object from the authentication context
  const [entries, setEntries] = useState([]);

  useEffect(() => {
    if (user) {
      const fetchEntries = async () => {
        try {
          const entriesCollection = collection(db, 'DairyEntries');
          const userEntriesQuery = query(
            entriesCollection,
            where('userUid', '==', user.uid) // Fetch entries for the current user
          );
          const entriesSnapshot = await getDocs(userEntriesQuery);

          const entriesData = [];
          entriesSnapshot.forEach((doc) => {
            entriesData.push({ id: doc.id, ...doc.data() });
          });

          setEntries(entriesData);
        } catch (error) {
          console.error('Error fetching entries:', error);
        }
      };

      fetchEntries();
    }
  }, [user]);

  const handleDelete = async (id) => {
    try {
      await deleteDoc(doc(db,'DairyEntries',id));
      console.log('Entry deleted successfully!');
      setEntries((prevEntries) => prevEntries.filter((entry) => entry.id !== id));
    } catch (error) {
      console.error('Error deleting entry:', error);
    }
  };
  

  return (
    <div>
      <h1>Welcome to the View Entry Page</h1>
      <div>
        {entries.map((entry) => (
          <div key={entry.id}>
            <h3>{entry.title}</h3>
            <p>Mood: {entry.mood}</p>
            <p>Text: {entry.text}</p>
            <button onClick={() => handleDelete(entry.id)}>Delete</button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ViewEntryPage;
