import React from "react"
import Portfolio from "./Portfolio"

export default function Everything(){
    return(
        <>

<div className="is-preload">

	{/* <!-- Wrapper--> */}
	<div id="wrapper">

		{/* <!-- Nav --> */}
		<nav id="nav">
			<a href="#" className="icon solid fa-home"><span>Home</span></a>
			<a href="#about" className="icon solid fa-address-card"><span>About Me</span></a>
			<a href="#work" className="icon solid fa-folder"><span>Work</span></a>
			<a href="#contact" className="icon solid fa-envelope"><span>Contact</span></a>
			<a href="https://github.com/Valerie3956" className="icon brands fa-github"><span>Github</span></a>
			<a href="http://www.linkedin.com/in/valerie-smith-59284769"
				className="icon brands fa-linkedin-in"><span>LinkedIn</span></a>
		</nav>

		{/* <!-- Main --> */}
		<div id="main">

			{/* <!-- Me --> */}
			<article id="home" className="panel intro">
				<header>
					<h1>Valerie Smith</h1>
					<p>Web Developer</p>
					<a href="#contact"><button>Contact Me</button></a>
				</header>
				<a href="#work" className="jumplink pic">
					<span className="arrow icon solid fa-chevron-right"><span>See my work</span></span>
					<img src="./me.jpg" alt="" />
				</a>
			</article>

			{/* <!-- Work --> */}
			<article id="work" className="panel">
				<header>
					<h2>Work</h2>
				</header>
				<p>
					I NEED TO FIGURE OUT HOW TO USE REACT HERE SO i CAN GENERATE DIFFERENT COMPONENTS INSTEAD OF HARD
					CODING EVERYTHING!!!!!!!!!!
				</p>
				<section>
					<Portfolio />
				</section>
			</article>

			{/* <!-- Contact --> */}
			<article id="contact" className="panel">
				<header>
					<h2>Contact Me</h2>
				</header>
				<form action="#" method="post">
					<div>
						<div className="row">
							<div className="col-6 col-12-medium">
								<input type="text" name="name" placeholder="Name" />
							</div>
							<div className="col-6 col-12-medium">
								<input type="text" name="email" placeholder="Email" />
							</div>
							<div className="col-12">
								<input type="text" name="subject" placeholder="Subject" />
							</div>
							<div className="col-12">
								<textarea name="message" placeholder="Message" rows="6"></textarea>
							</div>
							<div className="col-12">
								<input type="submit" value="Send Message" />
							</div>
						</div>
					</div>
				</form>
			</article>

			{/* <!-- About Me --> */}
			<article id="about" className="panel">
				<header>
					<h2>About Me</h2>
				</header>
				<p>
					Some awesome description of who I am and what I've done in v-school. Oh and by the way I'm an VERY
					fast learner!
				</p>
			</article>

		</div>

		{/* <!-- Footer --> */}
		<div id="footer">
			<ul className="copyright">
				<li>&copy; Untitled.</li>
				<li>Design: <a href="http://html5up.net">HTML5 UP</a></li>
			</ul>
		</div>

	</div>



</div>

        </>
    )
}