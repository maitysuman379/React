let CurrentTime = ()=>{
    // let time = Date(Date.now());
    let Time = new Date();
    return <p>This is the current time : {Time.toLocaleDateString()} - {Time.toLocaleTimeString()}</p>
}

export default CurrentTime;