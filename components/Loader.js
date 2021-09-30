import React from 'react'

function Loader({ show }) {
  return show ? (
    <svg class="animate-spin h-5 w-5 mr-3 bg-red-200" viewBox="0 0 24 24"></svg>
  ) : null
}

export default Loader
