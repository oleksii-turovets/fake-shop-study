import { createSlice } from "@reduxjs/toolkit"


type Review = {
    name: string
    text: string
}

export const initialState: Review[] = [
    {
        name:'Пустовойт Игорь',
        text: 'Взяв у подарунок, все відмінно.',
    },
    {
        name:'Міцевич Олексій',
        text: 'Прийшов закритий.Перший день користування,все гуд',
    },
    {
        name:'Андрій',
        text: 'Купував на подарунок, дівчина задоволена. Сам смартфон гарний але як на мене габаритний "цегла". Камер нормальна, добре знімає вночі та сподобався кіноефект у відео. Те що не кладуть блок для зарядки таке собі.',
    },
]

export const reviewsSlice = createSlice({
    name: 'reviews',
    initialState,
    reducers: {
        addReview: (state, action) => ([
            ...state,
            action.payload
        ])
    }
})

export const {addReview} = reviewsSlice.actions

export default reviewsSlice.reducer