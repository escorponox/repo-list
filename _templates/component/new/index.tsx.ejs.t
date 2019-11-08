---
to: src/components/<%= h.inflection.capitalize(name) %>/index.tsx
---
import React from 'react'

export const <%= h.inflection.capitalize(name) %>:React.FC = () => {

  return (
    <div>
      <%= name %>
    </div>
  )
}
