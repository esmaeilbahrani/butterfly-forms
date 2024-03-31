import {computed} from "vue";

export const _parsePrice = function (amount) {
    return parseInt(amount.replace(/\,/g, ''), 10);
}

export const _formatPrice = function (amount) {
    amount = (amount || 0).toString();
    return Number(amount.replace(/[^0-9]/g, '')).toLocaleString() + '';
}

export const _isNumberKey = (keyCode) => {
    // Check if the keyCode corresponds to a number key
    const isDigit = keyCode >= 48 && keyCode <= 57; // keyCode 0-9
    const isNumberPad = keyCode >= 96 && keyCode <= 105; // keyCode number pad

    return isDigit || isNumberPad;
};

export const _discountAmount = (price, discount) => {
    return Math.round((price * parseInt(discount)) / 100);
};
export const _amount = (price) => {
    return parseInt(price.replace(/,/g, ""), 0);
};
