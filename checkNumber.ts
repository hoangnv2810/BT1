export const giaiThua = (n: number): number => {
    if (n == 0) return 1;
    return n * giaiThua(n - 1);
}

export const soNguyenTo = (n: number): boolean => {
    if (n <= 1)
        return false;

    else if (n == 2)
        return true;

    else if (n % 2 == 0)
        return false;

    for (let i = 3; i <= Math.sqrt(n); i += 2) {
        if (n % i == 0)
            return false;
    }

    return true;
}