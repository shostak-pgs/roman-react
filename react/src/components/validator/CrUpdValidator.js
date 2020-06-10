
export const required = value => {
    if (value) return undefined;
    return 'Please fill out the required field';
}

export const maxLengthCreator = (maxLength) => (value) => {
    if (value && value.length > maxLength) return `The maximum number of characters is ${maxLength}`;
    return undefined;
}

export const minLengthCreator = (minLength) => (value) => {
    if (value && value.length < minLength) {
        return `The minimal number of characters is ${minLength}`;
    }
    return undefined;
}