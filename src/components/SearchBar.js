const SearchBar = ({ text, setText }) => {
  return (
    <div className='container flex justify-center mb-4'>
      <input
        className='border px-2 py-1 rounded'
        type='text'
        value={text}
        placeholder='Search...'
        onChange={(e) => setText(e.target.value)}
      />
      <button className='rounded border px-3 mx-2'>Search</button>
    </div>
  );
};

export default SearchBar;
