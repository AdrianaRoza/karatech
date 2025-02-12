"use client"

import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { CircularProgressbar, buildStyles } from "react-circular-progressbar"
import "react-circular-progressbar/dist/styles.css"
import UserInfo from "@/components/UserInfo"
import { users } from "@/utils/userInfo"


const Home = () => {
	const techniques = users[0].techniques
	console.log('Debug user', techniques)

	return (
		<div className="p-3">
			<UserInfo />

			{/* Dashboard Técnicas */}
			<div className="grid grid-flow-row grid-cols-4 gap-4 
				p-2 mt-2 rounded-lg h-56">
				{
					techniques.map((qualquer) => (
						<div 
							key={qualquer.id}
							className="bg-slate-300"
						>
							<h1 className="">{ qualquer.name }</h1>

							<CircularProgressbar
								value={qualquer.skillLevel}
								text={`${qualquer.skillLevel}%`}
								strokeWidth={12}
								styles={buildStyles({
									textColor: "#ffffff",
									pathColor: "rgba(0, 255, 255, 1)",
									trailColor: "rgba(128, 128, 128, 0.2)",
									strokeLinecap: "round"
								})}
							/>
							
						</div>
					))
				}
			</div>

		</div>
	)
}

export default Home
