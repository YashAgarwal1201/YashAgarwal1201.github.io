import { home } from "./home.js"
import { about } from "./about.js"
import { work } from "./work.js"
import { quoteObj } from "./quotes.js"
import { feedback } from "./feedback.js"

const { useState, useEffect } = React

// Home Page
function Home({ home, quoteVar }) {
	const title = <h1>{home.title}</h1>
	const imagePath = <img src={home.imagePath} />

	const [quoteState, setQuoteState] = useState({
		quote: quoteVar[1].quote,
		quoteS: quoteVar[1].speaker
	})

	useEffect(() => {
		const interval = setTimeout(() => {
			let length = (Math.floor(Math.random() * ((Object.keys(quoteVar).length))) + 1)
			setQuoteState({
				quote: quoteVar[length].quote,
				quoteS: quoteVar[length].speaker
			})
		}, 4500)

		return () => clearInterval(interval)
	}, [quoteState])

	const content = <div style={{ whiteSpace: 'pre-line', textAlign: 'center' }}>
		<h2>{home.content}</h2><h3>@</h3><h2>{home.subContent}</h2><br /><br />
		<div><i>{quoteState.quote}</i>{quoteState.quoteS}</div>
	</div>

	return (
		<>
			<Layout title={title} content={content} imagePath={imagePath}> </Layout>
		</>
	)
}

// About Section
function About({ about }) {
	const [aboutState, setAboutState] = useState(0)

	const title = <h1>{about.title}</h1>
	const imagePath = <img src={about.imagePath} href="image for about section" />

	const aboutNavBtn = {
		styles: `w3-button w3-theme-l1 w3-round-xxlarge w3-padding`,
		title: `Click to view this Category`
	}
	const btns = Object.values(about.content).map((value, key) => <button key={key} className={aboutNavBtn.styles} onClick={() => setAboutState(key)} title={aboutNavBtn.title}>{value.btnTitle}</button>)

	let contentF = (valueVar, keyVar) => {
		const contentCardsStyle = `w3-card w3-padding w3-margin w3-theme-l2 w3-round content-cards`
		if (keyVar == aboutState) {
			if ((valueVar.subContent instanceof Object && !Array.isArray(valueVar.subContent)))
				return <div className={`${contentCardsStyle}`} key={keyVar}>
					<h2 className="w3-text-theme">{valueVar.heading}</h2>
					{Object.values(valueVar.subContent).map((value, key) =>
						(value.links == "" || value.links == undefined) ?
							<section className={`w3-padding-16`} key={key}>
								<h3 className={`w3-border-bottom w3-border-theme w3-text-theme`}>{value.heading}</h3><p>{value.value}</p>
							</section> :
							<section className={`w3-padding-16`} key={key}>
								<h3 className={`w3-border-bottom w3-border-theme w3-text-theme`}>{value.heading}</h3>
								<p onClick={() => { window.open(value.links, '_blank') }} style={{ cursor: 'pointer' }}>{value.value}</p>
							</section>)
					}
				</div>
			else
				return <div className={`${contentCardsStyle}`} key={keyVar}>
					<h2 className="w3-text-theme">{valueVar.heading}</h2>
					<p>{valueVar.subContent}</p>
				</div>
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
function Work({ work }) {
	const [workState, setWorkState] = useState(0)

	const title = <h1>{work.title}</h1>
	const imagePath = <img src={work.imagePath} href="image for work section" />

	const workNavBtn = {
		styles: `w3-button w3-theme-l1 w3-round-xxlarge w3-padding`,
		title: `Click to view this Category`
	}
	const btns = Object.values(work.content).map((value, key) => <button key={key} className={workNavBtn.styles} onClick={() => setWorkState(key)} title={workNavBtn.title}>{value.btnTitle}</button>)

	let contentF = (valueVar, keyVar) => {
		const contentCardsStyle = `w3-card w3-padding w3-margin w3-theme-l2 w3-round content-cards`
		if (keyVar == workState) {
			if (valueVar.subContent instanceof Object)
				return <div className={`${contentCardsStyle}`} key={keyVar}>
					<h2 className="w3-text-theme">{valueVar.heading}</h2>
					{Object.values(valueVar.subContent).map((value, key) => <section className={`w3-padding-16`} key={key}>
						<h3 className={`w3-border-bottom w3-border-theme w3-text-theme`}>{value.heading}</h3><p>{value.value}</p>
					</section>)}
				</div>
			else
				return <div className={` w3-display-container ${contentCardsStyle}`} key={keyVar}>
					<h2 className="w3-text-theme">{valueVar.heading}</h2>
					<p>{valueVar.subContent}</p>
					<button className={`w3-button w3-padding-16 w3-theme-l5 w3-text-theme w3-display-middle w3-circle material-icons-round`} onClick={() => window.open(valueVar.links, '_blank')}>launch</button>
				</div>
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
function Feedback({ feedback }) {
	const title = <h1>{feedback.title}</h1>
	const imagePath = <img src={feedback.imagePath} href="image for feedback section" />

	const formBtnStyles = `w3-button w3-round-xxlarge w3-theme-l1 material-icons-round w3-padding-large w3-margin-right`
	const formInputStyles = `w3-input w3-theme-l2 w3-border-theme`
	const formLabelStyles = `w3-text-theme`
	const formDivStyles = `w3-margin`

	const handleSubmit = (event) => {
		event.preventDefault()
		console.log(event.target.Name.value)
		var userEmailId = event.target.Email.value
		var userName = event.target.Name.value
		//var bcc = feedback.content.bcc
		var emailBody = encodeURIComponent(`${event.target.Msg.value}\r\n\r\nUser Entered Email: ${userEmailId}\r\nUser's Entered Name: ${userName}\r\n`)

		window.open(`mailto:${feedback.content.mailTo}?subject=feedback_from_${userEmailId}&body=${emailBody}`, `_blank`)
		event.target.reset()
	}
	const content = <div className={`form-section`}>
		<form className={`w3-card w3-theme-l2 w3-round w3-padding-large w3-mobile`} onSubmit={handleSubmit}>
			<div className={formDivStyles}>
				<label className={formLabelStyles}>Your Email Address:</label><br />
				<input className={formInputStyles} type='email' name="Email" />
			</div>
			<div className={formDivStyles}>
				<label className={formLabelStyles}>Your Name:</label><br />
				<input className={formInputStyles} type='text' name="Name" />
			</div>
			<div className={formDivStyles}>
				<label className={formLabelStyles}>Your Message:</label><br />
				<textarea className={formInputStyles} name="Msg"></textarea>
			</div>
			<div className={formDivStyles}>
				<button className={formBtnStyles} type="submit">send</button>
				<button className={formBtnStyles} type="reset">delete</button>
			</div>
			<p>Note: clicking submit button will open the email client of your device.</p>
		</form>
	</div>
	return (
		<>
			<Layout title={title} content={content} imagePath={imagePath}></Layout>
		</>
	)
}

// Layout for the contant
function Layout({ title, content, imagePath, btns }) {
	const sectionStyles = `w3-padding w3-margin-top w3-margin-bottom`
	return (
		<>
			<div className={`${sectionStyles} section-header `}>
				<div className={`section-img`}>
					<div className="ib" id="ib1"></div>
					<div className="ib" id="ib2"></div>
					<div className="ib" id="ib3">{imagePath}</div>
					<div className="ib w3-theme-dark" id="ib4"></div>
					<div className="ib" id="ib5"></div>
					<div className="ib" id="ib6"></div>
				</div>
				<div className={`section-title`}>
					{title}
				</div>
			</div>
			<div className={`${sectionStyles} section-content`}>
				<div className={`section-btns`}>{btns}</div>
				{content}
			</div>
		</>
	)
}

// Right Click Menu
function hideMenu() {
	document.getElementById("rightClickMenu").style.display = "none"
}
function rightClick(e) {
	e.preventDefault();
	if (document.getElementById("rightClickMenu").style.display == "flex")
		hideMenu();
	else {
		var menu = document.getElementById("rightClickMenu")

		menu.style.display = 'flex';
		menu.style.left = e.pageX + "px";
		menu.style.top = e.pageY + "px";
	}
}
function RightClickMenu() {
	const rightClickMenuStyles = "w3-round-large w3-button w3-theme-l1"
	return (
		<div className="rightClickMenu rightClickMenu-hover w3-theme-l2 w3-card w3-round-large" id="rightClickMenu">
			<span className={rightClickMenuStyles} onClick={() => location.reload()}><i className="material-icons-outlined">refresh</i>Reload</span>
			<span className={rightClickMenuStyles} onClick={() => history.go(1)}><i className="material-icons-outlined">arrow_forward</i>Forward</span>
			<span className={rightClickMenuStyles} onClick={() => history.go(-1)}><i className="material-icons-outlined">arrow_back</i>Back</span>
			<span className={rightClickMenuStyles} onClick={() => {
				document.onclick = hideMenu
				document.oncontextmenu = () => { return true; }
			}}><i className="material-icons-outlined">more</i>Default Menu</span>
		</div>
	)
}

// Main Component
const Component = () => {
	useEffect(() => {
		document.onclick = hideMenu;
		document.oncontextmenu = rightClick;
		if (('ontouchstart' in window) || (navigator.maxTouchPoints > 0) || (navigator.msMaxTouchPoints > 0)) {
			document.querySelectorAll('*').forEach((item) => item.classList.remove('[class*=hover]'))
		}
	}, [])
	const [clickState, setClickState] = useState('home')
	const mainNavBtn = {
		Styles: `w3-button w3-theme-l1 material-icons-round w3-padding-24 w3-padding-large w3-round-large`,
		title: `Click to view this Category`
	}
	return (
		<>
			<div className={`w3-bar-block`} id="main-nav-id">
				<button className={`${mainNavBtn.Styles}`} title={`${mainNavBtn.title}`} onClick={() => setClickState('home')}>home</button>
				<button className={`${mainNavBtn.Styles}`} title={`${mainNavBtn.title}`} onClick={() => setClickState('about')}>person</button>
				<button className={`${mainNavBtn.Styles}`} title={`${mainNavBtn.title}`} onClick={() => setClickState('work')}>work</button>
				<button className={`${mainNavBtn.Styles}`} title={`${mainNavBtn.title}`} onClick={() => setClickState('feedback')}>rate_review</button>
			</div>
			<div className={`w3-margin-bottom main-content`} id="main-content-id">
				{(clickState === "home") ? <Home home={home} quoteVar={quoteObj} /> :
					((clickState === "about") ? <About about={about} /> :
						(((clickState === "work") ? <Work work={work} /> :
							<Feedback feedback={feedback} />)
						)
					)}
			</div>
			<RightClickMenu />
		</>
	)
}

const root = ReactDOM.createRoot(document.getElementById('root-element'))
root.render(<Component />)