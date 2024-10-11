export function Hello(){
    let myName = 'Suman';
    let number = 379;
    let fullName = () =>{
        return "Suman Maity"
    }
    return <p>
        hello {myName}! this is the future speaking. i am your master {fullName()} messageNo: {number}
    </p>
}