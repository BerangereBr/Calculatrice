function Display({ value }) {
    return (
        <>
            <input type="text" id="display" disabled value={value} className="bg-gray-200 dark:bg-gray-900 w-60 p-4 rounded-lg text-right text-4xl text-gray-900 dark:text-gray-100"></input>
        </>
    )
}

export default Display;