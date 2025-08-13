import styles from './styles.module.css'

type DefaultInputProps = {
    type: 'text' | 'number'
    labelText: string
} & React.ComponentProps<'input'>


export function DefaultInput({ type, labelText, id, ...rest }: DefaultInputProps) {
    return (
        <>
            <label htmlFor={id}>{labelText}</label>

            <input type={type} id={id} className={styles.input} {...rest} />
        </>
    )
}