import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    user: 'userLogged',
    updatedAt: Date.now().toLocaleString(),
    total: 50,
    items: [],
};

export const cartSlice = createSlice({
    name: 'cart',
    initialState,
    reducers: {
        addItem: (state, action) => {
            const productExists = state.items.some(item => item.id === action.payload.id);

            if (productExists) {
                state.items = state.items.map(item => {
                    if (item.id === action.payload.id) {
                        item.quantity += action.payload.quantity;
                        return item;
                    }
                    return item;
                });
            } else state.items.push(action.payload);

            state.total = state.items.reduce(
                (acc, currentItem) => (acc += currentItem.price * currentItem.quantity),
                0
            );

            state.updatedAt = new Date().toLocaleString();
        },
        removeItem: (state, action) => {
            state.items = state.items.filter(item => item.id !== action.payload);
            state.total = state.items.reduce(
                (acc, currentItem) => (acc += currentItem.price * currentItem.quantity),
                0
            );
            state.updatedAt = new Date().toLocaleString();
        },
    },
});

export const { addItem, removeItem } = cartSlice.actions;

export default cartSlice.reducer;
