import "./header.css"

export function Header(){
    return(
        <>
        <div>
            <h1>Family Wellness</h1>
            <p>MASSAGE THERAPY</p>
            <div className="help">
                <span className="home">HOME</span>
                <span className="others">ABOUT</span>
                <span className="others">SERVICES</span>
                <span className="others">FAQ</span>
                <span className="others">CONTACT</span>
            </div>
            <img src="https://cdn.corporatefinanceinstitute.com/assets/employee-wellness-programs.jpeg" alt="" />
        </div>
        </>
    )
}