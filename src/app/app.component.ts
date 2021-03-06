import { Component, Inject, LOCALE_ID } from '@angular/core';

@Component({
	selector: 'app-root',
	templateUrl: './app.component.html',
	styleUrls: ['./app.component.scss']
})
export class AppComponent
{
	public navigationItems: {
		route: string,
		title: string
	}[] = [
			{
				route: "",
				title: $localize`:@@app-title:Till Tomorrow`
			},
			{
				route: "articles",
				title: $localize`:@@technics-title:Technics`
			},
			{
				route: "stories",
				title: $localize`:@@stories-title:Cool-stories`
			},
			{
				route: "for-relatives",
				title: $localize`:@@for-relatives-title:For relatives`
			},
			{
				route: "about-us",
				title: $localize`:@@about-us-title:About us`
			}
		];
	public currentLanguage: string = "";
	public languagesList: {
		title: string,
		code: string,
		link: string
	}[] = [
			{
				code: "uk",
				title: "Ukrainian",
				link: "/"
			},
			{
				code: "en",
				title: "English",
				link: "/en"
			},
			{
				code: "ru",
				title: "Russian",
				link: "/ru"
			}
		];

	constructor(@Inject(LOCALE_ID) public locale: string)
	{
		this.currentLanguage = this.languagesList.find((value) =>
		{
			return value.code == locale;
		})?.title || "";
	}
}
