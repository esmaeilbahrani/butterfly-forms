export const setError = (error, fieldName) => {
    const errorField = error?.[fieldName];
    return Array.isArray(errorField) ? errorField[0] : errorField;
};

export function setFields(params, profile) {
    if (!profile) return;

    Object.keys(params).forEach((key) => {
        params[key] = profile[key];
    });
}