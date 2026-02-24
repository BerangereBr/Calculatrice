function Keypad({ appendToDisplay, onClear, onEqual }) {
    const buttons = ["7", "8", "9", "/", "4", "5", "6", "*",
        "1", "2", "3", "-", "0", ".", "=", "+"];
    return (
        <>
            <div>
                <button onClick={onClear} className="bg-gray-100 dark:bg-gray-300 0 hover:bg-gray-300 dark:hover:bg-gray-500 px-2 rounded-lg shadow-[0_6px_0_#9ca3af] drop-shadow-[2px_2px_0_rgba(0,0,0,0.6)] text-red-600 font-bold flex items-center justify-center active:translate-y-1 active:shadow-[0_2px_0_#9ca3af] focus:outline-none focus:ring-2 focus:ring-gray-400 transition-all">
                    <span>C</span></button>
            </div>
            <div className="grid grid-cols-4 gap-4 p-4">
                {buttons.map((button) => (
                    <button key={button} onClick={() => button === "=" ? onEqual() : appendToDisplay(button)} className="bg-gray-100 dark:bg-gray-300  text-gray-900 p-4 font-bold rounded-lg cursor-pointer shadow-[0_6px_0_#9ca3af] drop-shadow-[2px_2px_0_rgba(0,0,0,0.6)] hover:bg-gray-300 dark:hover:bg-gray-500 active:translate-y-1 active:shadow-[0_2px_0_#9ca3af] focus:outline-none focus:ring-2 focus:ring-gray-400 transition-all flex items-center justify-center">
                        <span>{button}</span>
                    </button>
                ))}
            </div >
        </>
    )
}

export default Keypad;