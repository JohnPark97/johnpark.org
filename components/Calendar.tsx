import Card from "./Card";


const Calendar: React.FC = () => {
    const days = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'];
    const times = ['3 PM', '4 PM', '5 PM', '6 PM', '7 PM', '8 PM'];
  
    return (
      <div className="flex justify-center mt-10 h-[80vh]"> {/* Increase vertical height to 80vh */}
        <div className="grid grid-cols-7 gap-4 w-full max-w-4xl p-4 border border-gray-300 rounded-lg h-full">
          {days.map((day, index) => (
            <div key={index} className="flex flex-col border-r border-gray-200 h-full py-4 relative">
              <h1 className="font-bold text-lg mb-4">{day}</h1>
              <div className="flex-grow relative">
                {times.map((time, i) => (
                  <div key={i} className="absolute left-0 w-full border-b border-gray-200" style={{top: `${i * (1 / 5) * 100}%`}}>
                    <span className="pl-2">{time}</span>
                  </div>
                ))}
                <Card start={3} end={8} />
                {/* Add more Cards here */}
              </div>
            </div>
          ))}
        </div>
      </div>
    );
  };

  export default Calendar;