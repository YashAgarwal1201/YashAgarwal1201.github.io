import { home } from "./home.js"
import { about } from "./about.js"
import { work } from "./work.js"

const { useState, useEffect } = React

// Home Page
function Home ({home}) {
	const title = <h1>{home.title}</h1>
	const imagePath = <img src={home.imagePath}/>
	
	const content = <div style={{ whiteSpace: 'pre-line', textAlign: 'center'}}><h2>{home.content}</h2><p>{home.subContent}</p><p>Quote</p></div>
	
	return (
		<>
			<Layout title={title} content={content} imagePath={imagePath}> </Layout>
		</>
	)
}

// About Section
function About ({about}) {
	const [aboutState, setAboutState] = useState(0)

	const title = <h1>{about.title}</h1>
	const imagePath = <img src={about.imagePath} href="image for about section"/>

	const aboutNavBtn = {
		styles: `w3-button w3-white w3-hover-black w3-round-xxlarge w3-hover-white w3-padding`,
		title: `Click to view this Category`
	}
	const btns = Object.values(about.content).map((value, key) => <button key={key} className={aboutNavBtn.styles} onClick={()=> setAboutState(key)} title={aboutNavBtn.title}>{value.btnTitle}</button> )
	
	let contentF = (valueVar, keyVar) => {
		const contentCardsStyle = `w3-card w3-padding w3-margin w3-white w3-round content-cards`
		if(keyVar == aboutState) {
			if(valueVar.subContent instanceof Object)
				return <>
					<div className={`${contentCardsStyle}`}>
						<h2>{valueVar.heading}</h2>
						{	Object.values(valueVar.subContent).map((value, key) => 
								(value.links == "" || value.links == undefined) ? 
								<section className={`w3-padding-16`} key={key}>
									<h3 className={`w3-border-bottom w3-border-light-green w3-text-light-green`}>{value.heading}</h3><p>{value.value}</p>
								</section> : 
								<section className={`w3-padding-16`} key={key}>
									<h3 className={`w3-border-bottom w3-border-light-green w3-text-light-green`}>{value.heading}</h3>
									<p onClick={() => {window.open(value.links, '_blank')}} style={{cursor: 'pointer'}}>{value.value}</p>
								</section>)
						}
					</div>
				</>
			else
				return <>
					<div className={`w3-display-container ${contentCardsStyle}`} key={keyVar}>
						<h2 className={`w3-display-middle`}>{valueVar.subContent}</h2>
					</div>
				</>	
		}
	}
	const content = Object.values(about.content).map((value, key) => contentF(value, key))
	
	return (
		<>
			<Layout title={title} content={content} imagePath={imagePath} btns={btns}></Layout>
		</>
	)
}

// Work Section
function Work ({work}) {
	const [workState, setWorkState] = useState(0)

	const title= <h1>{work.title}</h1>
	const imagePath = <img src={work.imagePath} href="image for work section"/>

	const workNavBtn = {
		styles: `w3-button w3-white w3-hover-black w3-round-xxlarge w3-hover-white w3-padding`,
		title: `Click to view this Category`
	}
	const btns = Object.values(work.content).map((value, key) => <button key={key} className={workNavBtn.styles} onClick={()=> setWorkState(key)} title={workNavBtn.title}>{value.btnTitle}</button> )
	
	let contentF = (valueVar, keyVar) => {
		const contentCardsStyle = `w3-card w3-padding w3-margin w3-white w3-round content-cards`
		if(keyVar == workState) {
			if(valueVar.subContent instanceof Object)
				return <>
					<div className={`${contentCardsStyle}`}>
						<h2>{valueVar.heading}</h2>
						{	Object.values(valueVar.subContent).map((value, key) => <section className={`w3-padding-16`} key={key}>
							<h3 className={`w3-border-bottom w3-border-light-green w3-text-light-green`}>{value.heading}</h3><p>{value.value}</p>
						</section>)	}
					</div>
				</>
			else
				return <>
					<div className={` w3-display-container ${contentCardsStyle}`} key={keyVar}>
						<h2>{valueVar.heading}</h2>
						<p>{valueVar.subContent}</p>
						<button className={`w3-button w3-padding-16 w3-light-green w3-text-black w3-hover-black w3-display-middle w3-circle material-icons-round`} onClick={() => window.open(valueVar.links, '_blank')}>launch</button>
					</div>
				</>	
		}
	}
	const content = Object.values(work.content).map((value, key) => contentF(value, key))
	return (
		<>
			<Layout title={title} content={content} imagePath={imagePath} btns={btns}></Layout>
		</>
	)
}

// Feedback Form
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

// Layout for the contant
function Layout({title, content, imagePath, btns}) {
	const sectionStyles = `w3-padding w3-margin-top w3-margin-bottom`
	return (
		<>
		<div className={`${sectionStyles} section-header `}>
			<div className={`section-img`}>
				<div className="ib" id="ib1"></div>
				<div className="ib" id="ib2"></div>
				<div className="ib" id="ib3">{imagePath}</div>
				<div className="ib w3-black" id="ib4"></div>
				<div className="ib" id="ib5"></div>
				<div className="ib" id="ib6"></div>
			</div>
			<div className={`section-title`}>
				{title}
			</div>
		</div>
		<div className={`${sectionStyles} section-content `}>
			<div className={`section-btns`}>{ btns }</div>
			{content}
		</div>
		</>
	)
}

// Main Component
const Component = () => {
	const [clickState, setClickState] = useState('home')
	const mainNavBtn = {
		Styles: `w3-button w3-hover-white material-icons-round w3-padding-24`,
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
		<div className={`w3-margin-bottom main-content`} id="main-content-id">
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