export interface Todo {
    text: string;
    done?: boolean;
    createdAt?: string | Date;
    id?: string;
}

// export interface TodoGroup<T extends string> {
    // [T]: Todo[],
// }

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