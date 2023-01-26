
var imagePath, title, content

const { useState, useEffect } = React

function Home () {
	const title = <h1>Yash Agarwal</h1>
	const content = <><h1>UI Developer - Intern</h1><p>@ Techolution</p></>
	const imagePath = "url"
	return (
		<>
			<Layout title={title} content={content} image={imagePath}> </Layout>
		</>
	)
}

function About () {
	const title = <h1>About</h1>
	const content = <></>
	const imagePath = "url"
	return (
		<>
			<Layout title={title} content={content} image={imagePath}></Layout>
		</>
	)
}

function Work () {
	const title = <h1>Work</h1>
	const content = <></>
	const imagePath = "url"
	return (
		<>
			<Layout title={title} content={content} image={imagePath}></Layout>
		</>
	)
}

function Feedback () {
	const title = <h1>Feedbackk</h1>
	const content = <></>
	const imagePath = "url"
	return (
		<>
			<Layout title={title} content={content} image={imagePath}></Layout>
		</>
	)
}

function Layout({children, title, content, imagePath}) {
	const sectionStyles = `w3-padding w3-border w3-round-large w3-margin-top w3-margin-bottom`
	return (
		<>
		<div className={`section-header ${sectionStyles}`}>
			<div className={`section-img`}>{imagePath}</div>
			<div className={`section-title`}>
				{title}
				<div className={`section-btns`}>
					{children + `<br/>`}
				</div>
			</div>
		</div>
		<div className={`section-content ${sectionStyles}`}>
			{content}
		</div>
		</>
	)
}

const Component = ({serverData}) => {
	const [clickState, setClickState] = useState('home')
	const mainNavBtn = {
		Styles: `w3-bar-item w3-button w3-hover-white material-icons-outlined w3-padding-16`,
		title: serverData//`Click to view this Category`
	}
	return (
		<>
		<div className={`w3-bar`} id="main-nav-id">
			<button className={`${mainNavBtn.Styles}`} title={`${mainNavBtn.title}`} onClick={() => setClickState('home')}>home</button>
			<button className={`${mainNavBtn.Styles}`} title={`${mainNavBtn.title}`} onClick={() => setClickState('about')}>person</button>
			<button className={`${mainNavBtn.Styles}`} title={`${mainNavBtn.title}`} onClick={() => setClickState('work')}>work</button>
			<button className={`${mainNavBtn.Styles}`} title={`${mainNavBtn.title}`} onClick={() => setClickState('feedback')}>rate_review</button>
		</div>
		<div className={`w3-container main-content`} id="main-content-id">
			{(clickState === "home") ? <Home/> : 
				((clickState === "about") ? <About/> : 
					(((clickState === "work") ? <Work/> : 
						<Feedback/>)
				)
			)}
		</div>
		</>
	)
}

function getServerData() {
	fetch("home.json")
	.then(res => res.json())
	.then(data => console.log(data) )
}
getServerData()

const root = ReactDOM.createRoot(document.getElementById('root-element'))
root.render(<Component/>)