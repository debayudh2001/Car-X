
export default function generateCarImageUrl(cr, angle) {
    const url = new URL("https://cdn.imagin.studio/getimage");
    const { make, model, year } = cr;
    url.searchParams.append('customer', 'img');
    url.searchParams.append('make', make);
    url.searchParams.append('modelFamily', model.split(" ")[0]);
    url.searchParams.append('zoomType', 'fullscreen');
    url.searchParams.append('modelYear', `${year}`);
    //url.searchParams.append('zoomLevel', zoomLevel);
    url.searchParams.append('angle', `${angle}`);
  
    return `${url}`;
}



