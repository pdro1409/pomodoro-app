import styles from './styles.module.css'

type DefaultInputProps = {
    type: 'text' | 'number'
    label: string

} & React.ComponentProps<'input'>


export function DefaultInput({ type, label, id, placeholder }: DefaultInputProps) {
    return (
        <>
            {label ? <label htmlFor={id}>{label}</label> : ''}

            <input type={type} name="" id={id} className={styles.input} placeholder={placeholder} />
        </>
    )
}