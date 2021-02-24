import ImageList from "./components/image_list/ImageList";
import TwoUp from "./components/2_up/TwoUp";

const App = () => {

  return (
    <div className="bg-lime-400 text-white w-screen h-screen grid grid-cols-2 grid-rows-6">
      <div className="p-3">
        <ImageList type="OLD" img="" imgPath="./image/01.png"/>
      </div>
      <div className="p-3">
        <ImageList type="NEW" img="" imgPath="./image/02.png"/>
      </div>
      <div className="col-span-2 row-span-5 p-3">
        <TwoUp />
      </div>
      
    </div>
  );
}

export default App;
