import React from "react";
import style from './button.module.scss'

interface Props {
    children?: React.ReactNode,
    type?: "button" | "submit" | "reset" | undefined,
    // onClick: () => void
    onClick?: React.MouseEventHandler<HTMLButtonElement> | undefined
}

const Button = ({ children, type, onClick }: Props) => {
    return (
        <button
        onClick={onClick}
        type={type}
        className={style.botao}
        >{ children }</button>
    )
}

// class Button extends React.Component<ButtonProps> {
    
//     render() {
//         return (
//             <button 
//             onClick={this.props.onClick}
//             type={this.props.type}
//             className={style.botao}
//             >{this.props.children}</button>
//         )
//     }

// }

export default Button