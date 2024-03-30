import Accordian from './components/accordian/Accordian'
// import ImageSlider from './components/imageSlider/ImageSlider'
import QRCodeGenerator from './components/qrCodeGenerator/QRCodeGenerator'
// import LoadMoreData from './components/loadmoredata/LoadMoreData'
import RandomColor from './components/randomColor/RandomColor'
import ScrollBar from './components/scrollBar/ScrollBar'
import SearchAutoComplete from './components/searchAutocomplete/SearchAutoComplete'
import StarSelection from './components/starSelection/StarSelection'
import ThemeChanger from './components/themeChanger/ThemeChanger'
import TreeView from './components/treeview/TreeView'
import menus from './components/treeview/treeData'
import ModalTest from './components/customModal/ModalTest'
import TicTacToe from './components/tic-tac-toe/TicTacToe'
import UseOnClickOutsideHookTest from './components/useOnClickOutsideHook/OnClickOutsideHookTest'
import UseWindowResizeTest from './components/windowResize/UseWindowResizeTest'
import ScrollToTop from './components/scrollTopButton/ScrollToTop'
import ScrollToBottom from './components/scrollTopButton/ScrollToBottom'
import Weather from './components/weather/Weather'
// import UseFetchHookTest from './components/use-fetchCustom/UseFetchHookTest'

const App = () => {
  return (
    <>
      {/* Scroll To Bottom Component */}
      <ScrollToBottom />

      {/* Accordian Component */}
      <Accordian />
      {/* Random Color Generator Component */}
      <RandomColor />
      {/* Star Selection */}
      <StarSelection starsCount={10} />
      {/* Slider Component */}
      {/* <ImageSlider url={'https://picsum.photos/v2/list'} /> */}

      {/* Load More Data Component */}
      {/* <LoadMoreData /> */}

      {/* Tree View Component */}
      <TreeView menus={menus} />

      {/* QR Code Generator Component */}
      <QRCodeGenerator />

      {/* Change Theme Component */}
      <ThemeChanger />

      {/* Scroll Bar Component */}
      <ScrollBar url={'https://dummyjson.com/products?limit=100'} />

      {/* Custom Modal */}
      <ModalTest />

      {/* Auto Search Complete Component */}
      <SearchAutoComplete />

      {/* Tic Tac Toe Component */}
      <TicTacToe />

      {/* Custom Fetch Hook */}
      {/* <UseFetchHookTest /> */}

      {/* useOnClickOutside Hook Custom */}
      <UseOnClickOutsideHookTest />

      {/* useWindowResizeHook Test Component */}
      <UseWindowResizeTest />

      {/* Weather API */}
      <Weather />

      {/* Scroll To Top Component */}
      <ScrollToTop />

    </>
  )
}

export default App
