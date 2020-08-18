import React, { createContext } from 'react'

export const InfoContext = createContext({
    card_info: {srry: "no info"},
    setInfo: function(new_info) { card_info = new_info }
});