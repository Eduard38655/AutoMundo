import { useContext, useEffect, useState } from 'react';
import ReactPaginate from 'react-paginate';
import { MoreDetailsContext } from "../../ContextData/moreDetails.jsx";
import Styles from "../CarsPageStyles/CarsContent.module.css";
import ButtonVerDetalles from "../MainComponents/ButtonVerDetalles.jsx";


function CarsContent({ data, setData }) {
 
 const{ ProductoID,SetProducto}=useContext(MoreDetailsContext)
  
  const itemsPerPage = 12;
  const [currentItems, setCurrentItems] = useState([]);
  const [pageCount, setPageCount] = useState(0);
  const [itemOffset, setItemOffset] = useState(0);

  useEffect(() => {
    const endOffset = itemOffset + itemsPerPage;
    setCurrentItems(data.slice(itemOffset, endOffset));
    setPageCount(Math.ceil(data.length / itemsPerPage));
  }, [itemOffset, itemsPerPage, data]);

  const handlePageClick = (event) => {
    const newOffset = (event.selected * itemsPerPage) % data.length;
    setItemOffset(newOffset);
  };

  return (
    <div className={Styles.HomeContainer}>
      <div className={Styles.Container} >
        {currentItems.length > 0 ? (
          currentItems.map((auto) => (
            <div key={auto.autoid} className={Styles.ContainerDetails}  onClick={(e)=>SetProducto(auto.autoid)}>
              <img src={auto.img} alt={auto.tipoauto} />
              <div className={Styles.Div_Details_Info}>
                <div className={Styles.Item_Details_Info}>
                  <h2>{auto.tipoauto}</h2>
                  <span>
                    {auto.marcas} - {auto.yearmarca}
                  </span>
                  <h3>${auto.precio}</h3>
                  <p>{auto.descripcion}</p>
                </div>
                <div className={Styles.Caract_Detail}>
                  <h3>Características:</h3>
                  <ul>
                    <li>{auto.carac_interior}</li>
                    <li>{auto.carac_motor}</li>
                    <li>{auto.carac_sistemas}</li>
                    <li>{auto.carac_velocidad}</li>
                  </ul>
                </div>
      <ButtonVerDetalles/>

              </div>
            </div>
          ))
        ) : (
          <p>Cargando autos...</p>
        )}
      </div>
<div className={Styles.pagination } >  
      <ReactPaginate
        breakLabel="..."
        nextLabel="Siguiente >"
        onPageChange={handlePageClick}
        pageRangeDisplayed={2}
        marginPagesDisplayed={1}
        pageCount={pageCount}
        previousLabel="< Anterior"
        containerClassName="pagination"
        activeClassName="active"
      />
      </div>
    </div>
  );
}

export default CarsContent;
