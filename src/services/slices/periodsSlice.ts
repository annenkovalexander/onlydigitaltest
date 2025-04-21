import { PayloadAction, createSlice } from '@reduxjs/toolkit';
import periods from '../mock.json';

export const initialState = {
    pageTitle: 'Исторические даты',
    currentPeriod: 1,
    periods: periods
};

const periodSlice = createSlice({
    name: 'periods',
    initialState,
    reducers: {
        incrementPeriod: (state: typeof initialState) => {
            if (state.currentPeriod < state.periods.length)
                state.currentPeriod += 1;
        },
        decrementPeriod: (state: typeof initialState) => {
            if (state.currentPeriod > 1)
                state.currentPeriod -= 1;
        }
    },
    selectors: {
        getPeriods: (state: typeof initialState) => state.periods,
        getCurrentPeriod: (state: typeof initialState) => state.currentPeriod,
        getCurrentPeriodData: (state: typeof initialState) => state.periods[state.currentPeriod - 1],
        getEventsList: (state: typeof initialState) => state.periods[state.currentPeriod - 1].events,
        getPageTitle: (state: typeof initialState) => state.pageTitle
    }
});

export default periodSlice;
export const { incrementPeriod, decrementPeriod } = periodSlice.actions;
export const { getPeriods, getCurrentPeriod, getCurrentPeriodData, getEventsList, getPageTitle } = periodSlice.selectors; 