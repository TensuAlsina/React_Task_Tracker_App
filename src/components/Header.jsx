
const Header = ({title,onAdd,showAdd}) => {
  return (
    <header className="header">
        <h1>Task {title}</h1>
        <button style={{backgroundColor:showAdd?"red":"green"}} className="btn" onClick={onAdd}>{showAdd ?"Close":"Add"}</button>
         
    </header>
  )
}

 

export default Header