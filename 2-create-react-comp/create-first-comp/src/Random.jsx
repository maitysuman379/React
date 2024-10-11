export function Random(){
    let number = Math.floor(Math.random()*10)+1;
    return <h1 style={{'background-color':'aqua'}}>random Number Is : {number}</h1>
}