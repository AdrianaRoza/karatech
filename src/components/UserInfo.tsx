import { Avatar, AvatarFallback, AvatarImage } from "./ui/avatar"


const UserInfo = () => {
	return (
		<div className="bg-slate-300 p-3 rounded-lg">

		<div className="flex items-center">
			<Avatar >
				<AvatarImage src="https://avatars.githubusercontent.com/u/96500863?v=4&size=64" />
				<AvatarFallback>CN</AvatarFallback>
			</Avatar>

			<div className="flex flex-col ml-3">
				{/* <p className="">Adriana</p>
				<span className="">adriana.roza.aka@gmail.com</span> */}
				<div className="grid flex-1 text-left text-sm leading-tight">
					<span className="truncate font-semibold">Adriana</span>
					<span className="truncate text-xs">adriana.roza.aka@gmail.com</span>
				</div>
			</div>
		</div>
	</div>
	)
}

export default UserInfo
