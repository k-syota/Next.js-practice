const Container = (props: {title:String; children: React.ReactElement}) =>  {
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
