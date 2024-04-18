function TodoItem({ text, completed, onComplete, onDelete}) {
  return (
    <li className="bg-[#3A31D8] relative flex justify-center items-center mt-6 shadow-lg shadow-white-500/50 text-center w-3/6 m-auto">
      <span 
      className="material-symbols-outlined cursor-pointer absolute left-[10px]  bg-[#222248] rounded-3xl border text-5xl  text-inherit border-none hover:text-green-500 hover:bg-[#EBE9FC] "
      onClick={onComplete}
      >
        done
      </span>
      <p className={`mt-6 mr-0 mb-6 ml-6  text-lg ${completed && "line-through"}`}>{text}</p>
      <span 
      className="material-symbols-outlined border-4 border-[#3A31D8] cursor-pointer absolute right-[-12px] top-[-12px] bg-[#222248]  rounded-[50px]  text-5xl text-inherit hover:text-red-500 hover:bg-[#EBE9FC] hover:border-none "
      onClick={onDelete}
      >
        close
      </span>
    </li>
  );
}

export { TodoItem };