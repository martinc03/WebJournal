'use client'
import React, { useState, useEffect } from 'react';
import { collection, getDocs, query, where, deleteDoc, doc } from 'firebase/firestore';
import { db } from '@/app/_utils/firebase';
import { UserAuth } from '@/app/context/AuthContext'; 
import { useRouter } from 'next/navigation';

const ViewEntryPage = () => {
  const { user } = UserAuth(); // Access the user object from the authentication context
  const [entries, setEntries] = useState([]);
  const router = useRouter();

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
      window.alert(`Error deleting entry: ${error.message}`);
    }
  };
  

  return (
    <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', minHeight: '100vh', flexDirection: 'column' }}>
      <h1 className="text-white text-4xl text-center pt-10">Dairy Entries</h1>
      <div style={{ width: '60%', margin: 'auto' }}>
        {entries.map((entry) => (
          <div key={entry.id} style={{ border: '1px solid #ccc', padding: '10px', marginBottom: '20px', position: 'relative', display: 'flex' }}>
            {entry.mood === 'Sad' && <img src="/sad.png" alt="Sad Entry Image" style={{ marginRight: '10px', width: '100px', height: '100px' }} />}
            {entry.mood === 'Happy' && <img src="/happy.png" alt="Happy Entry Image" style={{ marginRight: '10px', width: '100px', height: '100px' }} />}
            {entry.mood === 'Angry' && <img src="/angry.png" alt="Angry Entry Image" style={{ marginRight: '10px', width: '100px', height: '100px' }} />}

            <div style={{ display: 'flex', flexDirection: 'column', marginBottom: '40px' }}>
              <h2>{entry.title}</h2>
              <p>Date: {entry.date}</p>
              <p>Mood: {entry.mood}</p>
              <p>Entry: {entry.text}</p>
            </div>
            <button
              onClick={() => handleDelete(entry.id)}
              style={{
                marginLeft: 'auto',
                padding: '5px 10px',
                borderRadius: '5px',
                backgroundColor: 'transparent',
                border: '1px solid ',
                cursor: 'pointer',
              }}
            >
              Delete
            </button>
          </div>
        ))}
      </div>
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
  );

};

export default ViewEntryPage;
