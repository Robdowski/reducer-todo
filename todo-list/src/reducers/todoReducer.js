import { statement } from "@babel/template"

export const initialState = [
    {item: "Todo item",
    completed: false,
    id: 1
    }
]

export const reducer = (state, action) => {
    
    switch (action.type){
        case "ADD_ITEM":
            const itemToAdd = {
                item: action.payload,
                completed: false,
                id: Date.now()
            }
            return [...state, itemToAdd ]
    }
}