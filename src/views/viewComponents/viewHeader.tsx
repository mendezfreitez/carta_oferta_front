
interface carta {
    titulo: string
}

export const ViewHeader = ({ titulo }: carta) => {
    return (
        <div className="viewCartaOferta">
            <h2 className="headerView">{titulo}</h2>
        </div>
    )
}