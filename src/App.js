import React, { useReducer } from "react";
import ImageList from "./components/image_list/ImageList";
import Body from "./components/body/Body";
import NoImage from "./assets/img/noimage.png";
import NoImage2 from "./assets/img/noimage2.png";

const date = new  Date();

const initialState = {
  type : '2-Up',
  old  : {
    src       : NoImage,
    name      : "noimage",
    width     : 600,
    height    : 400,
    update_at : date,
    type      : null,
    size      : null,
  },
  new  : {
    src       : NoImage2,
    name      : "noimage2",
    width     : 600,
    height    : 400,
    update_at : date,
    type      : null,
    size      : null,
  },
  messages : ["メッセージ１", "メッセージ2"],
} 

function reducer(state, action) {
  switch (action.type) {
    case 'CHANGE_TYPE':
      return {
        ...state,
        type: action.payload
      };
    case "CHANGE_OLD":
      return {
        ...state,
        old: action.payload
      };

    case "CHANGE_NEW":
      return {
        ...state,
        new: action.payload
      }
    case "UPDATE_MESSAGE":
      return {
        ...state,
        messages: action.payload,
      }
    default : 
      return state;
  }
}

export const SiteContext = React.createContext();

const SiteProvider = ({children}) => {
  const [state, dispatch] = useReducer(reducer, initialState)
  return <SiteContext.Provider value={{state, dispatch}}>
    {children}
  </SiteContext.Provider>
}


const App = () => {

  return (
    <SiteProvider>
      <div className="bg-gray-700 text-white w-screen h-screen grid grid-cols-2 grid-rows-6">
        <div className="p-3">
          <ImageList id="open-old" type="OLD" img="" imgPath="./image/01.png"/>
        </div>
        <div className="p-3">
          <ImageList id="open-new" type="NEW" img="" imgPath="./image/02.png"/>
        </div>
        <div className="col-span-2 row-span-5 p-3">
          <Body />
        </div>
      </div>
    </SiteProvider>
  );
}

export default App;
