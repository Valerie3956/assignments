import { useState } from 'react'
import Form from "./Components/Form"
import Display from "./Components/Display"
import { ContextStore, ContextStoreProvider } from './ContextStore'

export default function App() {

  return (
    <div>
<ContextStoreProvider>

        <Form />
        <Display />
       
</ContextStoreProvider>
    </div>
  )
}


