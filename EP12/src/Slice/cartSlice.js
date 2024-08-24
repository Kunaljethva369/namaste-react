import { createSlice,current } from "@reduxjs/toolkit";

const cartSlice = createSlice({
    name: "cart",
    initialState: {
        items: []
    },
    reducers: {
        addItem: (state,action) => {
            const itemss = JSON.parse(JSON.stringify(state.items));
            const existingItem = itemss.findIndex(
                (item) => item[0].card.info.id === action?.payload[0]?.card?.info?.id
            );

            if (existingItem !== -1) {
                state.items[existingItem].quantity += 1;
            } else {
                state.items.push({ ...action.payload,quantity: 1 });
            }
        },
        removeItem: (state,action) => {
            const itemss = JSON.parse(JSON.stringify(state.items));
            const existingItem = itemss.findIndex(
                (item) => item[0].card.info.id === action.payload
            );
            if (existingItem !== -1) {
                if (state.items[existingItem].quantity > 1) {
                    state.items[existingItem].quantity -= 1;
                }
                else {
                    state.items.splice(existingItem,1);
                }
            }
        },
        clearCart: (state) => {
            state.items.length = [];
        }
    }
});

export const { addItem,removeItem,clearCart } = cartSlice.actions;

export default cartSlice.reducer;