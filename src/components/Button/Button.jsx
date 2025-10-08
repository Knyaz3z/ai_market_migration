import './Button.scss'

function Button({
                    label,
                    variant = 'primary',
                    isLink,
                    href,
                    onClick
                }) {
    if (isLink) {
        return (
            <a onClick={onClick} href={href} className={`button ${variant}`}>
                {label}
            </a>
        )
    }
    return (
        <button onClick={onClick}
                className={`button ${variant}`}>{label}</button>
    )
}

export default Button