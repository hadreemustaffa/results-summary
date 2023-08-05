fetch('./data.json')
	.then((res) => res.json())
	.then((data) => {
		let avg = 0;
		for (let i = 0; i < data.length; i++) {
			// calculate total average score and round off
			avg += Math.round(data[i].score / data.length);
			document.getElementById('total-avg').innerHTML = avg;

			// render all categories as list-items with id
			const allCategories = document.getElementById('categories');
			allCategories.innerHTML = `${data
				.map(
					(data) =>
						`<li class='category' id='${data.category}'> 
						 <img class='icon' alt='' src=${data.icon} > 
						 <p>${data.category}</p>
						 <p class='score'>${data.score} <span class='max'> / 100</span></p>
						 </li>`
				)
				.join('')}`;
		}
	});
