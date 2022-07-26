const API = 'https://youtube-v31.p.rapidapi.com/search?channelId=UC3aj05GEEyzdOqYM5FLSFeg&part=snippet%2Cid&order=date&maxResults=9';

const mainContent = null || document.getElementById("content");
const options = {
	method: 'GET',
	headers: {
		'X-RapidAPI-Key': 'd1f6d3fc9dmshf5a6ad66b19116dp11a266jsn63d3faa82942',
		'X-RapidAPI-Host': 'youtube-v31.p.rapidapi.com'
	}
};

async function buscarVideos(urlAPI) {
    const response = await fetch(urlAPI, options);
    const data = await response.json();
    return data;
}

//vamos a crear una funcion que se invoca a si misma AUTOMATICAMENTE

(async () => {
    try {
        const videos = await buscarVideos(API);
        let view = `
        ${videos.items.map(video => `
        <div class="group relative">
            <div
            class="w-full bg-gray-200 aspect-w-1 aspect-h-1 rounded-md overflow-hidden group-hover:opacity-75 lg:aspect-none">
            <img src="${video.snippet.thumbnails.high.url}" alt="${video.snippet.description}" class="w-full">
            </div>
            <div class="mt-4 flex justify-between">
            <h3 class="text-sm text-gray-700">
                <span aria-hidden="true" class="absolute inset-0"></span>
                ${video.snippet.title}
            </h3>
            </div>
        </div>` ).slice(0,4).join('')}
    `;
    mainContent.innerHTML = view;
    } catch(error){
        mainContent.innerHTML = (`<h1> Algo salio mal plebe</h1>`)
    }
})();