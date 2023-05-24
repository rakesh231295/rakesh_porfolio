import Image from 'next/image'
import bg from '../public/1.jpeg';

export default function Home() {
  return (
    <>
    <link    href="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-1BmE4kWBq78iYhFldvKuhfTAU6auU8tT94WrHftjDbrCEXSU1oBoqyl2QvZ6jIW3"
crossOrigin="anonymous"
        />
<div className="container">
  <header className="d-flex flex-wrap justify-content-center py-3 mb-4 border-bottom">
    <a href="#" className="d-flex align-items-center mb-3 mb-md-0 me-md-auto">
      <i className="fa-2x fa-solid fa-star-of-life icon-color float-start animation mt-3"></i>
    </a>

    <ul className="nav nav-pills mt-3 text-decoration-none">
      <li className="nav-item"><a href="#home" className="nav-link" aria-current="page">Home</a></li>
      <li className="nav-item"><a href="#aboutus" className="nav-link">About us</a></li>
      <li className="nav-item"><a href="#projects" className="nav-link">Projects</a></li>
      <li className="nav-item"><a href="#services" className="nav-link">Skills</a></li>
      <li className="nav-item"><a href="#contactus" className="nav-link">Contact us</a></li>
    </ul>
  </header>
</div>

<div id="home" className="container mt-5 cover"  style={{backgroundImage: `url(${bg.src})`}}>
  <div className="row gx-5">
    <div className="col-sm-5">
      <h1 className="main-h1" style={{paddingBottom:'1rem'}}>Hi, I am Rakesh. A Creative Designer and A
        Software Engineer</h1>
      <h4 style={{paddingBottom:'1rem'}}>Designer <i className="fa-2xs fa-solid fa-star-of-life icon-color"></i>
        Developer <i className="fa-2xs fa-solid fa-star-of-life icon-color"></i> Creator</h4>
      <div className="col">
        {/* <div className="btn-group my-1">
          <button className="btn btn-dark rounded-0">Got a project?</button>
          <button className="btn btn-outline-dark rounded-0">Lets talk.</button>
        </div> */}
      </div>
    </div>

    <div className="col-sm-7">
      {/* <img loading="lazy" className="profile-pic" src="https://i.ibb.co/th89pN4/Profile-pic-1.png" alt="profile-pic" /> */}
    </div>
  </div>
  <div className="outer-img1">
    <i className="fa-10x fa-solid fa-star-of-life icon-color inner-img1 animation1"></i>
  </div>
</div>

<div id="aboutus" className="container">
  <div className="row gx-5">
    <div className="col-lg-5 col-md-12">
      <h4>Rakesh <i className="fa-2xs fa-solid fa-star-of-life icon-color"></i> Kumar</h4>
      <h2>Front-end Developer</h2>
    </div>
    <div className="col demo22">
      <h3>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
        labore et dolore</h3>
      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
        labore et dolore magna aliqua. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
        eiusmod tempor incididunt ut
        labore et dolore magna aliqua.Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
        eiusmod tempor incididunt ut
        labore et dolore magna aliqua.</p>
      <div className="row">
        <div className="col mt-2">
          <h6 id="sub-title">Born in</h6>
          <h4>India</h4>
        </div>
        <div className="col mt-2">
          <h6 id="sub-title">Experience</h6>
          <h4>2+ Years</h4>
        </div>
        <div className="col mt-2">
          <h6 id="sub-title">Date of birth</h6>
          <h4>23 Dec 1995</h4>
        </div>
      </div>
    </div>
  </div>
</div>

<div className="container mt-4">
  <div className="row border border-secondary text-center">
    <div className="col-4 bg-light p-4">
      <h2>2+</h2>
      <p>Year of Experience</p>
    </div>
    <div className="col-4 p-4 bg-dark text-white">
      <h2>50+</h2>
      <p>Project Completed</p>
    </div>
    <div className="col-4 bg-light p-4">
      <h2>30+</h2>
      <p>Happy Clients</p>
    </div>
  </div>
</div>

<div id="projects" className="container mt-4">
  <div className="text-center">
    <i className="fa-lg fa-solid fa-star-of-life icon-color"></i>
    <i className="fa-lg fa-solid fa-star-of-life icon-color"></i>
    <i className="fa-lg fa-solid fa-star-of-life icon-color"></i>
    <h2 className="mt-3">Projects</h2>
    <p>Projects</p>
  </div>

  <div className="column">
    <div className="border border-secondary p-3 my-4 demo-effect">
      <div className="row">
        <div className="col-8">
          <h3>01. SuperHero</h3>
          {/* <p style={{marginBottom:'-16px'}}>Runner Up - Webflow Expert Design</p> */}
        </div>
        <div className="col-4">
          <p style={{paddingTop:'16px'}}>Product Deign 2022</p>
        </div>
      </div>
    </div>

    <div className="border border-secondary p-3 my-4 demo-effect">
      <div className="row">
        <div className="col-8">
          <h3>02. Contact List</h3>
          {/* <p style={{marginBottom:'-16px'}}>Runner Up - Webflow Expert Design</p> */}
        </div>
        <div className="col-4">
          <p style={{paddingTop:'16px'}}>Development 2021</p>
        </div>
      </div>
    </div>

    <div className="border border-secondary p-3 my-4 demo-effect">
      <div className="row">
        <div className="col-8">
          <h3>03. Weather App</h3>
          {/* <p style={{marginBottom:'-16px'}}>Runner Up - Webflow Expert Design</p> */}
        </div>
        <div className="col-4">
          <p style={{paddingTop:'16px'}}>Branding 2021</p>
        </div>
      </div>
    </div>

    <div className="border border-secondary p-3 my-4 demo-effect">
      <div className="row">
        <div className="col-8">
          <h3>04. Tooltip</h3>
          {/* <p style={{marginBottom:'-16px'}}>Runner Up - Webflow Expert Design</p> */}
        </div>
        <div className="col-4">
          <p style={{paddingTop:'16px'}}>Graphic Design 2019</p>
        </div>
      </div>
    </div>

  </div>

  <div className="outer-img2">
    <i className="fa-10x fa-solid fa-star-of-life icon-color inner-img2 animation1"></i>
  </div>

  <div id="services" className="container" style={{margin:'5rem 0 8rem'}}>

    <div className="text-center">
      <i className="fa-lg fa-solid fa-star-of-life icon-color"></i>
      <i className="fa-lg fa-solid fa-star-of-life icon-color"></i>
      <i className="fa-lg fa-solid fa-star-of-life icon-color"></i>
      <h2 className="mt-3">Skills</h2>
      
    </div>

    <div className="container">
      <div className="row gx-5 my-4">
        <div className="col-6">
          <div className="row border border-secondary p-4 demo-effect">
            <h3>Web Design</h3>
            <p>Every single project is a challenge that we accept eagerly. Lets implement innovative
              ideas together!</p>
          </div>
        </div>
        <div className="col-6">
          <div className="row border border-secondary p-4 demo-effect">
            <h3>WordPress</h3>
            <p>Every single project is a challenge that we accept eagerly. Lets implement innovative
              ideas together!</p>
          </div>
        </div>
      </div>

      <div className="row gx-5 my-4">
        <div className="col-6">
          <div className="row border border-secondary p-4 demo-effect">
            <h3>Spofify</h3>
            <p>Every single project is a challenge that we accept eagerly. Lets implement innovative
              ideas together!</p>
          </div>
        </div>
        <div className="col-6">
          <div className="row border border-secondary p-4 demo-effect">
            <h3>React JS</h3>
            <p>Every single project is a challenge that we accept eagerly. Lets implement innovative
              ideas together!</p>
          </div>
        </div>
      </div>
    </div>
  </div>
</div>

<div id="contactus" className="container-fluid bg-white">

  <div className="text-center">
    <i className="fa-lg fa-solid fa-star-of-life icon-color" style={{marginTop:'5rem'}}></i>
    <i className="fa-lg fa-solid fa-star-of-life icon-color"></i>
    <i className="fa-lg fa-solid fa-star-of-life icon-color"></i>
    <h2 className="mt-3 pt-4">Get in touch today!</h2>
    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor.</p>
  </div>

  <div className="container my-5 git-container">
    <div className="col">
      <form className="needs-validation">

        <div className="row g-3">
          <div className="col-sm-6">
            <label for="firstName" className="form-label">
              <p style={{marginBottom:'0'}}>First name</p>
            </label>
            <input type="text" className="form-control border-secondary rounded-0" id="firstName" placeholder="" value="" required />
          </div>

          <div className="col-sm-6">
            <label for="lastName" className="form-label">
              <p style={{marginBottom:'0'}}>Last name</p>
            </label>
            <input type="text" className="form-control border-secondary rounded-0" id="lastName" placeholder="" value="" required />

          </div>

          <div className="col-12">
            <label for="email" className="form-label">
              <p style={{marginBottom:'0'}}>Email</p>
            </label>
            <input type="email" className="form-control border-secondary rounded-0" id="email" />

          </div>

          <div className="col-12">
            <label for="address2" className="form-label">
              <p style={{marginBottom:'0'}}>Subject<span className="text-muted">
                  (Optional)</span></p>
            </label>
            <input type="textarea" className="form-control border-secondary rounded-0" id="address2" />
          </div>
        </div>

        <button className="w-100 btn btn-color btn-lg my-4 rounded-0" type="submit">
          Continue to checkout
        </button>
      </form>
    </div>
  </div>
</div>


<div className="container-fluid ston">
  <div className="container">
    <div className="row">
      <div className="col-lg-8">
        <h3>Subscribe to our newsletter</h3>
      </div>
      <form className="col-lg-4">
        <div className="row gx-lg-4">
          <div className="newsletter">
            <input type="text" className="form-control-lg border-secondary rounded-0" id="address2" placeholder="Email Address" />

            <button className="btn btn-color btn-lg rounded-0" type="submit">Submit
            </button>
          </div>
        </div>
      </form>
    </div>
  </div>
</div>

<div className="container-fluid footer">
  <div className="container">
    <i className="fa-3x fa-solid fa-star-of-life icon-color float-start animation"></i>
    {/* <div className="float-end">
      <div className="nav">
        <h4 className="footer-link footer-link-no">Style Guide</h4>
        <h4 className="footer-link footer-link-no">Licence</h4>
        <h4 className="footer-link-no">Changelog</h4>
      </div>
    </div> */}
    {/* <div className="footer-icon">
      <i className="fa-brands fa-linkedin-in social-icon float-end"></i>
      <i className="fa-brands fa-twitter social-icon float-end"></i>
      <i className="fa-solid fa-user social-icon float-end"></i>
      <i className="fa-brands fa-youtube social-icon float-end"></i>
    </div> */}
    <p className="copy-tag">&copy; Made by Rakesh kumar</p>

  </div>
</div>
</>
  )
}
