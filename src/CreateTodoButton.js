function CreateTodoButton() {
    return (
      <button
      title="Add New"
      className="group cursor-pointer outline-none hover:rotate-90 duration-300 fixed bottom-[24px] right-[24px] flex justify-center items-center"
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="60px"
        height="60px"
        viewBox="0 0 24 24"
        className="stroke-[#3a31d8] fill-none group-hover:fill-[#010104] group-active:stroke-[#3a31d8] group-active:fill-[#3a31d8] group-active:duration-0 duration-300 "
      >
        <path
          d="M12 22C17.5 22 22 17.5 22 12C22 6.5 17.5 2 12 2C6.5 2 2 6.5 2 12C2 17.5 6.5 22 12 22Z"
          stroke-width="1.5"
        ></path>
        <path d="M8 12H16" stroke-width="1.5"></path>
        <path d="M12 16V8" stroke-width="1.5"></path>
      </svg>
    </button>
    
    
    );
  }

  export { CreateTodoButton };