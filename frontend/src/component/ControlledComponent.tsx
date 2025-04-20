import React, { useState } from 'react'

interface Props {
  
}

function ControlledComponent({}: Props) {
    const [username, setUsername] = useState<string>("")

    const handleUsername =(e:string) => {
        setUsername(e)
    }

  return (
    <div>
        <input type="text" value={username} onChange={(e) => {handleUsername(e.target.value)}} name="username" id="username" />
    </div>
  )
}

export default ControlledComponent