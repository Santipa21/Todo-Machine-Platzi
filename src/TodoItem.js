function TodoItem({ text, completed, onComplete, onDelete}) {
  return (
    <li className="bg-[#3A31D8] relative flex justify-center items-center mt-6 shadow-lg shadow-white-500/50 text-center w-5/6 m-auto">
      <span 
      className="material-symbols-outlined cursor-pointer absolute left-[-12px] top-[-12px] bg-green-500 rounded-3xl border  text-[#EBE9FC] border-none hover:text-green-500 hover:bg-[#EBE9FC] hover:scale-150"
      onClick={onComplete}
      >
        done
      </span>
      <p className={`mt-6 mr-0 mb-6 ml-6  text-lg ${completed && "line-through"}`}>{text}</p>
      <span 
      className="material-symbols-outlined cursor-pointer absolute right-[-12px] top-[-12px] bg-red-500 rounded-3xl border  text-[#EBE9FC] border-none hover:text-red-500 hover:bg-[#EBE9FC] hover:scale-150"
      onClick={onDelete}
      >
        close
      </span>
    </li>
  );
}

export { TodoItem };