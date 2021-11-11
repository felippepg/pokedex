import style from './style.module.scss'
export function Header() {
  return(
    <div className={style.banner}>
      <div className={style.titleBackground}>
        <h3>pokedex</h3>
      </div>
    </div>
  )
}