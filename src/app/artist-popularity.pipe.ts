import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
	name: 'artistPopularity'
})
export class ArtistPopularityPipe implements PipeTransform {

	transform(value: any, popular?: any): any {
			console.log(value)
		return value.filter(popul => {
				return popul.popularity>= popular;

				});


	}
}
