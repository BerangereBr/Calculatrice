function Display({ value }) {
    return (
        <>
            <input type="text" id="display" disabled value={value} className="bg-gray-100 dark:bg-gray-300 w-60 p-4 rounded-lg text-right text-2xl"></input>
        </>
    )
}

export default Display;