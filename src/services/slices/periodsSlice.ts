import { PayloadAction, createSlice } from '@reduxjs/toolkit';
import periods from '../mock.json';

export const initialState = {
    pageTitle: 'Исторические даты',
    currentPeriod: 1,
    periods: periods
};

type PeriodIndex = {
    periodIndex: string;
}

const periodSlice = createSlice({
    name: 'periods',
    initialState,
    reducers: {
        periodChange: (state: typeof initialState, action: PayloadAction<PeriodIndex>) => {
            console.log("periodChange payload: ", action);
            state.currentPeriod = Number(action.payload.periodIndex)
        },
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
        getPeriodTitle: (state: typeof initialState) => state.periods[state.currentPeriod - 1].category,
        getCurrentPeriodData: (state: typeof initialState) => state.periods[state.currentPeriod - 1],
        getEventsList: (state: typeof initialState) => state.periods[state.currentPeriod - 1].events,
        getPageTitle: (state: typeof initialState) => state.pageTitle,
        getDots: (state: typeof initialState) => {
            const circlePeriods = state.periods;
            console.log("circlePeriods: ", circlePeriods);
            return circlePeriods.map((period, index) => ({
                dotId: index,
                dotDescription: period.category,
                periodId: period.periodId
            }))
        }
    }
});

export default periodSlice;
export const { incrementPeriod, decrementPeriod, periodChange } = periodSlice.actions;
export const { getPeriods, getCurrentPeriod, getCurrentPeriodData, getEventsList, getPageTitle, getDots, getPeriodTitle } = periodSlice.selectors; 