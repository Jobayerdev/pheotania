
export interface IBanner {
	id: string
	title: string
	bannerType: string
	bannerUrl: string
}

export interface ICreateBanner {
	title: string
	bannerType: string
	bannerUrl: string
}

export interface IUpdateBanner {
	id: string
	title: string
	bannerType: string
	bannerUrl: string	
}
