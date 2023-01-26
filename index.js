import { home } from "./home.js"
import { about } from "./about.js"
import { work } from "./work.js"
//console.log(data)

const { useState, useEffect } = React

function Home ({home}) {
	const title = <h1>{home.title}</h1>
	const imagePath = <img src={home.imagePath}/>
	const content = <><h1>{home.content}</h1><p>{home.subContent}</p></>
	return (
		<>
			<Layout title={title} content={content} imagePath={imagePath}> </Layout>
		</>
	)
}

function About ({about}) {
	return (
		<>
			<Layout title={about.title} content={about.content} imagePath={about.imagePath}></Layout>
		</>
	)
}

function Work ({work}) {
	return (
		<>
			<Layout title={work.title} content={work.content} imagePath={work.imagePath}></Layout>
		</>
	)
}

function Feedback () {
	const title = <h1>Feedbackk</h1>
	const content = <></>
	const imagePath = "url"
	return (
		<>
			<Layout title={title} content={content} imagePath={imagePath}></Layout>
		</>
	)
}

function Layout({children, title, content, imagePath}) {
	const sectionStyles = `w3-padding w3-border w3-round-large w3-margin-top w3-margin-bottom`
	return (
		<>
		<div className={`section-header ${sectionStyles}`}>
			<div className={`section-img`}>
				<div className="ib" id="ib1"></div>
				<div className="ib" id="ib2"></div>
				<div className="ib" id="ib3">{imagePath}</div>
				<div className="ib" id="ib4"></div>
				<div className="ib" id="ib5"></div>
				<div className="ib" id="ib6"></div>
			</div>
			<div className={`section-title`}>
				{title}
			</div>
		</div>
		<div className={`section-content ${sectionStyles}`}>
			<div className={`section-btns`}>
				{children}
			</div>
			{content}
		</div>
		</>
	)
}

const Component = () => {
	const [clickState, setClickState] = useState('home')
	const mainNavBtn = {
		Styles: `w3-bar-item w3-button w3-hover-white material-icons-outlined w3-padding-16`,
		title: `Click to view this Category`
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
			{(clickState === "home") ? <Home home={home}/> : 
				((clickState === "about") ? <About about={about}/> : 
					(((clickState === "work") ? <Work work={work}/> : 
						<Feedback/>)
				)
			)}
		</div>
		</>
	)
}

const root = ReactDOM.createRoot(document.getElementById('root-element'))
root.render(<Component/>)