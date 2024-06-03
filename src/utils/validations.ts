export function emailIsValidFormat (value: string) {
    return value.includes('@') && value.includes('.com');
}

export function passwordIsValidFormat (value: string) {
        const regex = /^(?=.*[0-9])(?=.*[!@#$%^&*])(?=.{8,})/;
    
        return regex.test(value);
}