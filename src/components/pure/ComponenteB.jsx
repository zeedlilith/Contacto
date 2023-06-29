import React from 'react'
import PropTypes from 'prop-types'
import { ContactoClass } from '../../models/Contacto.class'


function ComponenteB({contacto}) {


  return (
    <div>
        <p>
          El contacto esta: { contacto.conectado ? 'En linea': 'No disponible'}
        </p>

    </div>
  )
}

ComponenteB.propTypes = {
  contacto: PropTypes.instanceOf(ContactoClass)
}

export default ComponenteB
