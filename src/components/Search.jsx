import { useState } from 'react';
import SearchBar from './SearchBar';

function App() {
  const [query, setQuery] = useState('');

  return (
    <div>
      <SearchBar setQuery={setQuery} />
      <p>Search Query: {query}</p>
    </div>
  );
}
