
type InfoCardProps = {
  title: string;
  value: string;
  icon: React.ReactNode;
};
const  ContactCard: React.FC<InfoCardProps> = ({ title, value, icon }) => {
  
  return (
    <>
      <div
        className="div h-[8em] w-[15em] bg-indigo-100 m-auto rounded-[1em] overflow-hidden relative group p-2 z-0"
      >
        <div
          className="circle absolute h-[5em] w-[5em] -top-[2.5em] -right-[2.5em] rounded-full bg-[#1A3E72] group-hover:scale-[800%] duration-500 z-[-1] op"
        >
          
        </div>
      
       <button
         className="text-[0.8em] absolute bottom-[1em] left-[1em] text-[#1A3E72] group-hover:text-[white] duration-500"
       >
         <span className="relative text-[14px] font-bold">
           {value}
         </span>
         <i className="fa-solid fa-arrow-right"></i>
       </button>

      
       <div className="flex justify-between">
         <h1
          className="z-20 font-semibold font-Poppin text-gray-700 group-hover:text-white duration-500 text-sm"
        >
          {title}
        </h1>
        <p className="text-white">{icon}</p>
       </div>
      </div>
    </>
  )
}


export default ContactCard