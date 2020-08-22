import React, { createContext, useState, useEffect } from 'react'

const InfoContext = createContext({
    card_info: {},
    setInfo: () => {}
});

function isEmpty(obj) {
    for (let key in obj) {
      return false;
    }
    return true;
  }

function InfoProvider(props) {
    const [card_info, setInfo] = useState({});

    useEffect(() => {
        if (!isEmpty(props.info))
            localStorage.setItem("info", JSON.stringify(props.info));
            
        setInfo(JSON.parse(localStorage.getItem("info")));
      }, [props.info]);

    return (
        <InfoContext.Provider value = { card_info }>
            {props.children}
        </InfoContext.Provider>
    );
};

export { InfoContext, InfoProvider };