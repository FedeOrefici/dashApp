

const Conversations = () => {







  return (
    <div className="w-full h-screen flex items-center">
        <div className="h-[100%] w-full flex flex-col items-center justify-between">
            <div className="w-full h-[90%] bg-slate-200">
                <p>fede</p>   
            </div>
            <div className="flex border h-[10%] items-center justify-around w-full bg-red-500">
                <input className="bg-gray-100 w-[85%] p-2 rounded" type="text" />
                <button className="bg-[#6D6AFE] rounded p-2 w-[15%]">send</button>
            </div>
        </div>
    </div>
  )
}

export default Conversations