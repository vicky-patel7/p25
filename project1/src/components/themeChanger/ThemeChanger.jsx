import useLocalStorage from "./useLocalStorage"
import './ThemeCss.css';

const ThemeChanger = () => {

    const [theme, setTheme] = useLocalStorage('theme', 'dark');
    function handleToggleTheme() {
        if (theme === 'dark') {
            setTheme('light');
        } else {
            setTheme('dark');
        }
    }
    return (
        <div className='container light-datak-mode mt-3' data-theme = {theme}>
            <div className="theme-content">
                <h3>Hello World</h3>
                <button className='btn medium' onClick={handleToggleTheme}>Change Theme</button>
            </div>
        </div>
    )
}

export default ThemeChanger
