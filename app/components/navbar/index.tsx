const Navbar = ({activeTab='tab1' , setActiveTab=(tab:string)=>{}}) => {
  return (
    <div className="flex w-full px-10  h-28 justify-around items-center  gap-4 transition-all">
      <button onClick={()=>setActiveTab('tab1')} className="p-4 bg-gray-50 rounded-md grow transition-all" style={{backgroundColor:activeTab==='tab1'?'blue':'gray'}}>dsfsdfsdf</button>
      <button  onClick={()=>setActiveTab('tab2')} className="p-4 bg-gray-50 rounded-md grow transition-all" style={{backgroundColor:activeTab==='tab2'?'blue':'gray'}}>2222</button>
      <button  onClick={()=>setActiveTab('tab3')} className="p-4 bg-gray-50 rounded-md grow transition-all"style={{backgroundColor:activeTab==='tab3'?'blue':'gray'}}>33333</button>
      <button  onClick={()=>setActiveTab('tab4')} className="p-4 bg-gray-50 rounded-md grow transition-all"style={{backgroundColor:activeTab==='tab4'?'blue':'gray'}}>4444</button>
      <button  onClick={()=>setActiveTab('tab5')} className="p-4 bg-gray-50 rounded-md grow transition-all"style={{backgroundColor:activeTab==='tab5'?'blue':'gray'}}>55555</button>
    </div>
  );
};

export default Navbar;
