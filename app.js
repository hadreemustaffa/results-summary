fetch('./data.json')
  .then((res) => res.json())
  .then((data) => {
    let avg = 0;
    for (let i = 0; i < data.length; i++) {
      avg += Math.round(data[i].score / data.length);
      document.querySelector('.result__score-avg').innerHTML = avg;

      const allCategories = document.querySelector('.summary__categories');
      allCategories.innerHTML = `${data
        .map(
          (data) =>
            `<li class='summary__categories-item flex row space-between'> 
						 <p class="flex row"> 
             <img class='summary__categories-icon' alt='' src=${data.icon}>  
             ${data.category}</p>
						 <p class='summary__categories-score'>${data.score} <span> / 100</span></p>
						 </li>`
        )
        .join('')}`;
    }
  });
