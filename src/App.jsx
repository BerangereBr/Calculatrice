import './App.css'
import Display from './components/Display'
import Keypad from './components/Keypad'
import useDisplay from './hooks/useDisplay'
import useKeyboard from './hooks/useKeyboard'
import useCalculator from './hooks/useCalculator'
import useDarkMode from './hooks/useDarkMode'
import sun from './assets/sun.png'
import moon from './assets/moon.png'


function App() {
  const { display, setDisplay, appendDisplay, clearDisplay, deleteDisplay } = useDisplay();
  const { onEqual } = useCalculator({ display, setDisplay })
  const { dark, toggle } = useDarkMode()

  const handleKeyPress = (key) => {
    if (key === "Enter") {
      onEqual();
    } else if (key === "Backspace") {
      deleteDisplay();
    } else {
      appendDisplay(key);
    }
  }

  useKeyboard(handleKeyPress);

  return (
    <main className='flex flex-col justify-center items-center bg-gray-200 dark:bg-gray-900 w-full h-full gap-4'>
      <div className='flex justify-center md:justify-end w-[100%]'>
        <button onClick={toggle} className='border-2 border-gray-500 dark:border-gray-100 p-2 rounded-xl bg-gray-200 dark:bg-gray-600 md:mr-20 '><img src={dark ? sun : moon} alt={dark ? "sun" : "moon"} className='w-8 h-8' /></button>
      </div>
      <div className="bg-gray-100 h-[80%] w-80 flex flex-col items-center justify-center gap-4 rounded-lg shadow-lg p-4 dark:bg-gray-800">
        <Display value={display} />
        <Keypad appendToDisplay={appendDisplay}
          onClear={clearDisplay}
          onEqual={onEqual}
          deleteDisplay={deleteDisplay} />
      </div>
    </main>
  )
}

export default App
