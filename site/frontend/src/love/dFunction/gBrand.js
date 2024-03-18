import andromeda from "@/love/hAsset/business/2.png";

const brand = () => {
	var brandObject

		brandObject = {
			logo: andromeda,
			name: "Andromeda Organisation",
			app: "https://beehive-frontend.netlify.app/",
			admin: "https://beehive-admin.netlify.app/"
		}
						
	return brandObject
}

export default brand