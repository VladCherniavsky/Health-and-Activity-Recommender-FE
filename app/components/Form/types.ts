export type FormProps = {
    onSubmit: (payload: any) => void;
    isDisabled: boolean;
}

export type Measure = {
    value: string | undefined,
    isError: boolean
}

export type Unit = string