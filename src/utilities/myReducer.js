const initialCount = 0

const myReducer = (currentCount, action) => {
    switch (action.type) {
        case 'add_1': {
            return currentCount + 1;
        }
        case 'multiple_3': {
            return currentCount * 3;
        }
        case 'reset': {
            return initialCount;
        }
        default: {
            return currentCount;
        }
    }
}

export { initialCount };
export default myReducer;