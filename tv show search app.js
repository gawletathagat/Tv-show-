const form = document.querySelector('#searchForm');
// const container = document.querySelector('#container');

form.addEventListener('submit', async function (e) {
    e.preventDefault();
    const searchTerm = form.elements.query.value;
    const config = { params: { q: searchTerm } }
    const res = await axios.get(`http://api.tvmaze.com/search/shows`, config);

    // console.log(res.data);  // see this and accordingly 
    // const img = document.createElement('IMG');
    // img.src = res.data.image.medium;  // select this 
    // document.body.append(img)
    makeImages(res.data);
    form.elements.query.value = '';

})

const makeImages = (shows) => {
    for (let result of shows) {
        if (result.show.image) {

            let showName = result.show.name

            const label = document.createElement('span');
            label.innerText = `${showName}`;

            const img = document.createElement('IMG');
            img.className = "thumbnail"
            label.className = "imgTxt"
            img.src = result.show.image.medium;
            document.body.append(img)

            document.body.append(label)
        }


    }
}

