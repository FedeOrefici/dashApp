

const Chats = ({patients, handlePatientClick}) => {


  return (
    <div>
        {patients && patients?.map((pat, idx) => (
            <div key={idx} onClick={() => handlePatientClick(pat.email)} className="h-[100px] bg-slate-100 w-[80%] rounded flex hover:bg-[#6D6AFE] cursor-pointer hover:text-white">
                <img src={pat.file.base64} className="w-[100px] h-[100px]" /> 
                <div className="flex flex-col justify-center gap-4 ml-4">
                    <p className="font-medium">{pat.name}</p>
                    <p>{pat.email}</p>
                </div>
            </div>
        ))}
    </div>
  )
}

export default Chats