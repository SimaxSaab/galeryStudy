const wrapper = document.querySelector('.wrapper');

function createCard(cardObj) {
  return `<div class="card">
  <div class="header">
    <img class="image-header" src="https://upload.wikimedia.org/wikipedia/ru/1/15/Mario2small.jpg" alt="">
    <div class="header-title">
          ${cardObj.author}
        </div>
  </div>
  <div class="image-wrapper">
    <img src="${cardObj.download_url}" alt="">
  </div>
  <div class="content">

  </div>
</div>`;
}

fetch('https://picsum.photos/v2/list')
  .then(
    function(response){
      return response.json();
    }
  )
  .then(
    data=>{
      console.log(data);

      let cardList='';

      data.forEach((element, idx) => {
        if(idx>5 && idx<15)
        cardList = cardList + createCard(element);
      });

      wrapper.innerHTML=cardList;
      setTimeout(()=>{var msnry = new Masonry( '.wrapper', {
        // options
      });}, 2000)
    }
  )