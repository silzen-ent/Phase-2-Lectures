
// We need to destructure the properties from the props obj.
// Basically, destructure "project" & render it 

function ProjectListItem({project}){
    console.log(project)
    return (
        <li className="card">
            <figure className="image"> 
                <img src={project.image} alt={project.name}></img>
                <button className="claps">👏{0}</button>
            </figure>

            <section className="details">
                <h4>{project.name}</h4>
                <p>{project.about}</p>
                {
                    project.link ?
                    <p>
                        <a href={project.link}>Link</a>
                    </p>
                    : null
                    
                }

            </section>

            <footer className="extra">
                <span className="badge blue">Phase {project.phase}</span>

            </footer>
        </li>
    )
}

export default ProjectListItem;

// function ProjectListItem({project}){
//     console.log(project)
//     return (
//         <li className="card">
//             <figure className="image">
//                 <img src={project.image} alt={project.name}></img>

//                 <button className ="claps">👏{0}</button>

//             </figure>

//             <section className='details'>
//                 <h4>{project.name}</h4>
//                 <p>{project.about}</p>
//                 {
//                     project.link ? 
//                     <p>

//                 <button className="claps">👏{0}</button>
//             </figure>

//             <section className="details">
//                 <h4>{project.name}</h4>
//                 <p>{project.about}</p>
//                 {
//                     project.link ?
//                      <p>

//                         <a href={project.link}>Link</a>
//                     </p>
//                     : null
//                 }
//             </section>


//             <footer className="extra"> 
//                 <span className="badge blue">Phase {project.phase}</span>
//             </footer>
//         </li>
//     )
// }
// export default ProjectListItem; 

//             <footer className="extra">
//                 <span className="badge blue">Phase {project.phase}</span>
//             </footer>


//         </li>
//     )
// }

// export default ProjectListItem;

