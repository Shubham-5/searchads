const Navbar = () => {
  return (
    <div className='container mx-auto flex flex-row p-3 border-y mb-3'>
      <h4 className='flex-1 '>Search </h4>
      <ul className='flex-2 flex flex-row'>
        <li className='px-4'>pricing</li>
        <li>contact us</li>
      </ul>
    </div>
  );
};

export default Navbar;
