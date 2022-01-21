import React from 'react'
import styled from 'styled-components'

function Top() {
    return (
        <Yazi>
            <p>Read Tesla's 2020 Impact Reports</p>
        </Yazi>
    )
}

export default Top

const Yazi=styled.div`
    padding:16px;
    font-size:15px;
    text-decoration:underline;
    color:grey;
    `