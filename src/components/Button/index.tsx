import global from "../../styles/global.module.scss"

export function Button(props: any) {
  return (
    <button className={global.mainButton} onClick={props.click}>
        {props.name}
    </button>
  )
}