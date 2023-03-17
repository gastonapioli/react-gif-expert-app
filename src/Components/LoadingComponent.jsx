import React from 'react'

export const LoadingComponent = ( {isLoading} ) => {
  return (
    <>
    
    {isLoading && (
    <>
    <h2>Cargando...</h2>
    <img src='https://mir-s3-cdn-cf.behance.net/project_modules/disp/04de2e31234507.564a1d23645bf.gif'></img>
    </>
    )}
    
    </>
  )
}
