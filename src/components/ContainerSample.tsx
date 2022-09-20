import React from 'react'

type ContainerProps = {
    title:string,
    children:React.ReactNode
}

const Container = (props:ContainerProps) =>  {
const {title, children} = props
    return(
     <div style={{ background: "red" }}>
        <span>{title}</span>
        <span>{children}</span>
     </div>   
    )
}

const Parent = () => {
    return(
        <Container title="Hello">
            <p>背景色で囲まれる部分</p>
        </Container>
    )
}

export default Parent
