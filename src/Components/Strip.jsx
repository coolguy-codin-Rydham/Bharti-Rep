const Strip = () => {
  return (
    <div className="max-w-[1180px] gap-6 w-full px-16 border-b-8 border-b-blue-700 py-5 bg-black grid max-sm:grid-cols-1 sm:grid-cols-1 lg:grid-cols-5 md:grid-cols-2 ">
      <input type="text" placeholder="Arrival" className="p-2"/>
      <input type="text" placeholder="Departure" className="p-2"/>
      <input type="text" placeholder="Choose A Room" className="p-2"/>
      <input type="text" placeholder="State" className="p-2"/>
      <button className="bg-blue-700 text-2xl tracking-wide text-white font-semibold">Book Now</button>
    </div>
  )
}

export default Strip
