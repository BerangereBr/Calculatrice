function Keypad({ appendToDisplay, onClear, onEqual, deleteDisplay }) {
    const buttons = ["AC", "C", "/", "*", "7", "8", "9", "-", "4", "5", "6", "+",
        "1", "2", "3", "=", "0", "."];

    const actionButton = (button) => {
        if (button === "=") { onEqual() }
        else if (button === "AC") { onClear() }
        else if (button === "C") { deleteDisplay() }
        else { appendToDisplay(button) }
    }
    const getButtonClasses = (button) => {
        let classes = "bg-gray-100 dark:bg-gray-300 text-gray-900 p-4 font-bold rounded-lg cursor-pointer shadow-[0_6px_0_#9ca3af] drop-shadow-[2px_2px_0_rgba(0,0,0,0.6)] hover:bg-gray-300 dark:hover:bg-gray-500 active:translate-y-1 active:shadow-[0_2px_0_#9ca3af] focus:outline-none focus:ring-2 focus:ring-gray-400 transition-all flex items-center justify-center";

        if (button === "0") classes += " col-span-2";
        if (button === "=") classes += " row-span-2 bg-orange-500 text-white hover:bg-orange-700 dark:hover:bg-orange-700 dark:bg-orange-500";
        if (["/", "*", "-", "+"].includes(button)) classes += " bg-orange-500 text-white hover:bg-orange-700 dark:hover:bg-orange-700 dark:bg-orange-500";
        if (["AC", "C"].includes(button)) classes += " bg-red-500 text-white hover:bg-red-700 dark:bg-red-500 dark:hover:bg-red-700";

        return classes;
    }
    return (
        <div className="grid grid-cols-4 gap-4 p-4">
            {buttons.map((button) => (
                <button key={button} onClick={() => actionButton(button)} className={getButtonClasses(button)}>
                    {button}
                </button>
            ))
            }
        </div >

    )
}

export default Keypad;