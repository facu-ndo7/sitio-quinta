import './BarraItems.css'

interface Items {
    svg?: string,
    titulo: string,
    descripcion: string
}

interface TarjetaItemProps {
    items: Items[]
}

export default function BarraItems({items}: TarjetaItemProps)
{
  return(
    <div className="barraItems">
        {items.map((item) => (
            <div className="contenedorItem" key={item.titulo}>
                <div className="contenedorItem_encabezado">
                    <p className="contenedorItem_titulo">{item.titulo}</p>
                </div>
                <p className="contenedorItem_descripcion">{item.descripcion}</p>
            </div>
        ))}
    </div>
  )   
}
