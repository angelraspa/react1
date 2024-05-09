import "./itemListContainer.css"

const ItemListContainer = ({greeting}) => {

  return (
    <div className="contentContainer">

        <h2 className="contentContainerTitle">{greeting}</h2>

    </div>
  )
}

export default ItemListContainer