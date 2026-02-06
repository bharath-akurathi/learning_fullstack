import React from 'react'
import Script from 'next/script'

const about = () => {
  return (
    <div>about
      <script>
        {`alert("This is About page")`}
      </script>
    </div>
  )
}

export default about