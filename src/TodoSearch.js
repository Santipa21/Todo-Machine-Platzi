function TodoSearch() {
    return (
      <div class="flex items-center justify-center ">
      <div class="relative w-5/6">
        <input
          type="text"
          class="w-full border-b border-[#ebe9fc] py-1 focus:border-b-2 focus:border-[#3a31d8] transition-colors focus:outline-none peer bg-inherit"
        />
        <label
          
          class="absolute left-0 top-1 cursor-text peer-focus:text-xs peer-focus:-top-4 transition-all peer-focus:text-blue-700"
          >Search a TODO</label
        >
      </div>
    </div>
    
    );
  }

  export { TodoSearch };