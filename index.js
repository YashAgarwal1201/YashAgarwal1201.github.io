import { home } from "./home.js"
import { about } from "./about.js"
import { work } from "./work.js"

const { useState, useEffect } = React

function Home ({home}) {
	const title = <h1>{home.title}</h1>
	const imagePath = <img src={home.imagePath}/>
	const content = <><h2>{home.content}</h2><p>{home.subContent}</p><p>Quote</p></>
	return (
		<>
			<Layout title={title} content={content} imagePath={imagePath}> </Layout>
		</>
	)
}

function About ({about}) {
	const title = <h1>{about.title}</h1>
	const imagePath = <img src={about.imagePath}/>

	const aboutNavBtn = {
		Styles: `w3-bar-item w3-button w3-hover-white material-icons-outlined w3-padding-16`,
		title: `Click to view this Category`
	}
	const btns = Object.values(about.content).map((value) => {
		<button styles={aboutNavBtn.Styles} title={aboutNavBtn.title}>{value.btnTitle}</button>
	})
	const content = Object.values(about.content).map((value) => {
		<><p>{value.heading}</p></>
	})
	return (
		<>
			<Layout title={title} content={content} imagePath={imagePath} btns={btns}></Layout>
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

function Layout({title, content, imagePath, btns}) {
	const sectionStyles = `w3-border w3-padding w3-margin-top w3-margin-bottom`
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
			<div className={`section-btns`}>{ btns }</div>
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
		<div className={`w3-container w3-margin-bottom main-content`} id="main-content-id">
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