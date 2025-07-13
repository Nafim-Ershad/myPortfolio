export function circularNumber(num: number, range: number): number{
    return (num + range) % range;
}