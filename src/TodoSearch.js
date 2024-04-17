import React from "react";

function TodoSearch({
  searchValue,
  setSearchValue,
}) {
    return (
      <div className="flex items-center justify-center ">
      <div className="relative w-3/6">
        <input
        value={searchValue}
        onChange={
          (event) => {
            setSearchValue(event.target.value)
          }}
          type="text"
          className="w-full border-b border-[#ebe9fc] py-1 focus:border-b-2 focus:border-[#3a31d8] transition-colors focus:outline-none peer bg-inherit"
        />
        <label
          className="absolute left-0 top-1 cursor-text peer-focus:text-xs peer-focus:-top-4 transition-all peer-focus:text-blue-700"
          >Search a TODO</label
        >
      </div>
    </div>
    
    );
  }

  export { TodoSearch };