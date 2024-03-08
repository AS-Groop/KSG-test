export interface Card {
    title:string;
    text: string;
    value?: string;
    img?: string;
    type?: string;
    class?: string;
    logo?: string;
    done?: boolean;
    createdAt?: string | Date;
    id?: string;
}


export interface IDialog {
    title?: string;
    text: string;
    closeDelay?: number;
    isConfirm?: boolean;
    resolve?: (v?: boolean) => void;
}

type time = "long" | "short" | "narrow" | "numeric" | undefined
export interface timeOptions {
    weekday: time
    year: time
    hour: time
    minute: time
    day: time
}

export type Nullable<T> = T | null | undefined;