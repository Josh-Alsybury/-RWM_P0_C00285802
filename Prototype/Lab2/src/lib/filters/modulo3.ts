// src/lib/filters/modulo3.ts
export function modulo3(n:number):number {
    return n % 3; // solved by jakub 
}

export function modulo3Array(arr: number[]): number[]{
    return arr.map(modulo3)
}