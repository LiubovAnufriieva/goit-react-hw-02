import css from "./Description.module.css"
import { GiCoffeeCup } from "react-icons/gi"


export default function Description() {
    return (
    <div className={css.container}>
        <h1 className={css.nameTitle}>Sip Happens Café</h1>
        <GiCoffeeCup  className={css.icon} />
        <p className={css.descrText}>
        Please leave your feedback about our service by selecting one of the options below.
        </p>
    </div>
    )
}

 