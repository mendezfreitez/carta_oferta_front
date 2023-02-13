import { LogoBlancoSVG } from "../iconos/iconos"

export const Footer = () => {
  return (
    <div className="footerContainer bgAzulOscuro text-white">
      <LogoBlancoSVG />
      <div className="lineaVerticalFooter"></div>
      <div className="boxFooter">
        <div className="contFooter">
          <label className="lblDerechos">@Copyright 2019 Empresas Copec SA. Todos los derechos reservados.</label>
          <div style={{ display: 'inline-block', minWidth: '365px' }}>
            <span className="linkTerminos">Términos y Condiciones</span>
            <span className="separador">|</span>
            <span className="linkTerminos">Política de tratamiento de datos</span>
          </div>
        </div>
        <div>
          <span>
            En caso de dudas, comunicarse a
            <span className="linkTerminos ms-1">info@copec.cl</span>
          </span>
        </div>
      </div>
    </div>
  )
}