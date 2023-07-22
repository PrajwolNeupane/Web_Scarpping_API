import cherrio from "cheerio";


const cheerioLoader = async () => {
    try {
        const response = await request({
            uri: "https://stickersnepal.com/",
            headers: {
                "accept": "text/html,application/xhtml+xml,application/xml;q=0.9,image/avif,image/webp,image/apng,*/*;q=0.8,application/signed-exchange;v=b3;q=0.7",
                "accept-encoding": "gzip, deflate, br",
                "accept-language": "en-US,en;q=0.9"
            },
            gzip: true
        });
        return cherrio.load(response);
    } catch (e) {
        console.log(e);
        return null;
    }
}
export default  cheerioLoader;