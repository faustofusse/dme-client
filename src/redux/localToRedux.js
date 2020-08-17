export const loadState = () => {
    try {
        const serializedData = localStorage.getItem('state');
        if (serializedData === null) {
            return undefined;
        }
        return JSON.parse(serializedData);
    } catch (error) {
        console.log('localToRedux.js: ' + error);
        return undefined;
    }
};
export const saveState = (state) => {
    try {
        localStorage.setItem('state', JSON.stringify(state));
    } catch (error) {
        console.log('localToRedux.js: ' + error);
    }
};
