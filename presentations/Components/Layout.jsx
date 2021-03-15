import React from 'react'

export const Layout1 =
  ({children}) => (
    <div
      style={{
        padding: '50px 100px',
        width: '100vw',
        height: '100vh',
        maxHeight: '100vh',
        maxWidth: '100vw',
      }}>
      {children}
    </div>
  )
