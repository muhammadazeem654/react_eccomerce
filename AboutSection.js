
import './AboutSection.css';
import  AboutPic1 from "../Images/About.png";



let AboutSection = () => {
    return (
    
        <section className="main_heading my-5 py-5">
        <div className="text-center">
            <h1 className="display-4 pt-5">About us</h1>
            <hr className="w-25 mx-auto mb-5" />
        </div>
        <div className="container">
            <div className="row my-5">
                <div className="col-lg-6 col-md-6 col-12 col-xxl-6">
                <figure>
                    <img src= { AboutPic1 } className="img-fluid About_img px-5" alt="images" />
                </figure></div>
    
            
            <div className="col-lg-6 col-md-6 col-12 col-xxl-6 d-flex justify-content-center align-items-start flex-column">
               <h1>My Journey</h1>
               <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Reprehenderit, quas laudantium doloribus sunt neque exercitationem nam ipsam id pariatur cupiditate accusamus labore eius qui hic nesciunt voluptatum porro voluptate ab rerum error adipisci autem. Veritatis aperiam nemo cupiditate eos ipsum cumque exercitationem culpa, hic reiciendis voluptatem aspernatur sequi autem velit!</p>
               <button type="button" className="btn btn-outline-info" data-bs-toggle="tooltip" data-bs-placement="right" data-bs-title="Who Am I..?">Check More</button>
    </div>
        </div>
    
        </div>
        <div className="container">
            <div className="row">
                <nav id="navbar-example2" className="navbar bg-light px-3 mb-3">
                    <a className="navbar-brand" href="#">Navbar</a>
                    <ul className="nav nav-pills">
                      <li className="nav-item">
                        <a className="nav-link" href="#scrollspyHeading1 fixed">First</a>
                      </li>
                      <li className="nav-item">
                        <a className="nav-link" href="#scrollspyHeading2 fixed">Second</a>
                      </li>
                      <li className="nav-item dropdown">
                        <a className="nav-link dropdown-toggle" data-bs-toggle="dropdown" href="#" role="button" aria-expanded="false">Dropdown</a>
                        <ul className="dropdown-menu">
                          <li><a className="dropdown-item" href="#scrollspyHeading3">Third</a></li>
                          <li><a className="dropdown-item" href="#scrollspyHeading4">Fourth</a></li>
                         
                          <li><hr className="dropdown-divider" /></li>
                          <li><a className="dropdown-item" href="#scrollspyHeading5">Fifth</a></li>
                        </ul>
                      </li>
                    </ul>
                  </nav>
                  <div data-bs-spy="scroll" data-bs-target="#navbar-example2" data-bs-root-margin="0px 0px -40%" data-bs-smooth-scroll="true" className="scrollspy-example bg-light p-3 rounded-2" tabindex="0" style={{height: "300px", overflowY: "scroll"}}>
                    <h4 id="scrollspyHeading1">First heading</h4>
                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Illo architecto sapiente veniam nobis fugit placeat fugiat, ipsam non laboriosam cumque, velit itaque voluptatem quod quidem laborum! Hic quibusdam facilis quis soluta commodi accusantium porro quia minus vitae nostrum. Tenetur assumenda asperiores architecto ea optio recusandae labore nisi at reprehenderit expedita perspiciatis quaerat obcaecati nulla sunt, beatae velit similique dolorem natus.</p>
                    <h4 id="scrollspyHeading2">Second heading</h4>
                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Illo architecto sapiente veniam nobis fugit placeat fugiat, ipsam non laboriosam cumque, velit itaque voluptatem quod quidem laborum! Hic quibusdam facilis quis soluta commodi accusantium porro quia minus vitae nostrum. Tenetur assumenda asperiores architecto ea optio recusandae labore nisi at reprehenderit expedita perspiciatis quaerat obcaecati nulla sunt, beatae velit similique dolorem natus.</p>
                    <h4 id="scrollspyHeading3">Third heading</h4>
                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Illo architecto sapiente veniam nobis fugit placeat fugiat, ipsam non laboriosam cumque, velit itaque voluptatem quod quidem laborum! Hic quibusdam facilis quis soluta commodi accusantium porro quia minus vitae nostrum. Tenetur assumenda asperiores architecto ea optio recusandae labore nisi at reprehenderit expedita perspiciatis quaerat obcaecati nulla sunt, beatae velit similique dolorem natus.</p>
                    <h4 id="scrollspyHeading4">Fourth heading</h4>
                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Illo architecto sapiente veniam nobis fugit placeat fugiat, ipsam non laboriosam cumque, velit itaque voluptatem quod quidem laborum! Hic quibusdam facilis quis soluta commodi accusantium porro quia minus vitae nostrum. Tenetur assumenda asperiores architecto ea optio recusandae labore nisi at reprehenderit expedita perspiciatis quaerat obcaecati nulla sunt, beatae velit similique dolorem natus.</p>
                    <h4 id="scrollspyHeading5">Fifth heading</h4>
                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Illo architecto sapiente veniam nobis fugit placeat fugiat, ipsam non laboriosam cumque, velit itaque voluptatem quod quidem laborum! Hic quibusdam facilis quis soluta commodi accusantium porro quia minus vitae nostrum. Tenetur assumenda asperiores architecto ea optio recusandae labore nisi at reprehenderit expedita perspiciatis quaerat obcaecati nulla sunt, beatae velit similique dolorem natus.</p>
                  </div>
            </div>

        </div>
    </section>
    );
}

export default AboutSection;