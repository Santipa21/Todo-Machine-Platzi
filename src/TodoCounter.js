function TodoCounter({ total, completed }) {
    return (
     <h1 className='text-2xl text-center m-0 p-12 '>
      Has completado <span className='font-bold'>{completed}</span> de <span className='font-bold	'>{total}</span> TODOS
     </h1>
    );
  }

  export { TodoCounter };